# Spec: Per-Language `llms.txt` for brainCloud Docs

## Purpose

Publish machine-readable, per-language markdown bundles of the brainCloud
docs so AI assistants (starting with **brainBot**, but available to any
consumer) can ingest the API reference without scraping HTML or running a
custom Markdown pipeline.

Generated as part of the existing Docusaurus build in **braincloud-docs**, so
the bundles always reflect what was just published to
[docs.getbraincloud.com](https://docs.getbraincloud.com).

## Background

The docs are authored as `.md` / `.mdx` files under `braincloud-docs/docs/`.
API method docs use a `<Tabs>` pattern with one `<TabItem>` per client
language. Today there is no clean way to consume a language-filtered, plain
markdown view of the reference — the published site renders all tabs at once
in HTML, and Docusaurus does not serve the raw markdown source.

## Goals

1. Serve a small set of plain-markdown bundles at stable URLs on the docs site.
2. Produce one bundle per supported client language, with that language's
   code samples preserved and the others removed.
3. Produce a `cloudcode.md` bundle that covers the *entire* `docs/` tree
   (api + learn + overview), so brainBot has full context.
4. Keep the bundles in sync with the live site automatically — no separate
   pipeline, no manual step, no server-side rebuild required.
5. Provide a top-level `llms.txt` index following the
   [llmstxt.org](https://llmstxt.org) convention so any LLM client can
   discover what's available.

## Non-goals

- Versioned bundles. Only the "current" (latest) version is generated.
  `version-5.7.0` and `version-5.8.0` in `versioned_docs/` are skipped.
- Localized bundles. The site is `en`-only today; revisit if/when other
  locales are added.
- A general-purpose docs API. This is a static-file delivery, not a query
  endpoint.

## Output contract

Generated on every build, served at the root of the docs site:

```
docs.getbraincloud.com/
├── llms.txt                  # index, llmstxt.org-style
└── llms/
    ├── cloudcode.md          # full docs tree, Cloud Code samples
    ├── csharp.md             # docs/api only, C# / Unity samples
    ├── cpp.md                # docs/api only, C++ samples
    ├── objectivec.md         # docs/api only, Objective-C samples
    ├── java.md               # docs/api only, Java / Android samples
    ├── javascript.md         # docs/api only, client JS samples
    ├── dart.md               # docs/api only, Dart / Flutter samples
    └── raw.md                # docs/api only, REST API samples
```

### Scope rules

| Bundle           | Sources included                                          |
| ---------------- | --------------------------------------------------------- |
| `cloudcode.md`   | All of `docs/` — `api/`, `learn/`, `overview/`            |
| All other `.md`  | `docs/api/` only                                          |

Rationale: An AI assistant working in a client language will pull
**both** `cloudcode.md` and its language file. Putting `learn/` and
`overview/` only in `cloudcode.md` avoids ~50% redundant content across
the bundles.

### Language tab mapping

These are the `value=` attributes seen on `<TabItem>` in the source today.
Future tabs added with new `value`s require a one-line addition to the map
in the plugin.

| `<TabItem value=…>` | Output file       |
| ------------------- | ----------------- |
| `cfs`               | `cloudcode.md`    |
| `csharp`            | `csharp.md`       |
| `cpp`               | `cpp.md`          |
| `objectivec`        | `objectivec.md`   |
| `java`              | `java.md`         |
| `js`                | `javascript.md`   |
| `dart`              | `dart.md`         |
| `r`                 | `raw.md`          |

### `llms.txt` (index) format

Plain markdown, [llmstxt.org](https://llmstxt.org) convention.

```markdown
# brainCloud Docs

> Reference docs for brainCloud, a backend-as-a-service for games and apps.
> Each bundle below is a single concatenated markdown file representing the
> brainCloud documentation filtered for one client language.

## Bundles

- [Cloud Code (full)](/llms/cloudcode.md): all docs (api, learn, overview),
  Cloud Code (cfscript) examples
- [C# / Unity](/llms/csharp.md): API reference with C# examples
- [C++](/llms/cpp.md): API reference with C++ examples
- [Objective-C](/llms/objectivec.md): API reference with Objective-C examples
- [Java / Android](/llms/java.md): API reference with Java examples
- [JavaScript (client)](/llms/javascript.md): API reference with client-side
  JavaScript examples — distinct from Cloud Code
- [Dart / Flutter](/llms/dart.md): API reference with Dart examples
- [Raw (REST)](/llms/raw.md): API reference with raw REST examples
```

### Per-bundle file format

Each bundle is one concatenated markdown file. Source files are emitted in
the same order they appear in `sidebars.js`, with a small header per source
file so consumers can locate the live page:

```markdown
<!-- source: docs/api/2_capi/authentication/authenticateemailpassword.md -->
<!-- url: https://docs.getbraincloud.com/api/capi/authentication/authenticateemailpassword -->

# AuthenticateEmailPassword

Authenticate the user with a custom Email and Password.

...
```

The HTML comment lines are invisible in most rendered views but easy to
parse by an LLM and useful for citing sources.

## Transform rules

The transform reads source `.md` / `.mdx` files (not the compiled HTML)
and emits plain markdown. Each rule below applies to every output bundle
unless noted.

### 1. Branding token interpolation

Source files contain templated tokens like:

```markdown
<%= data.branding.codePrefix %>.AuthenticationService.Authenticate...
```

These are defined in `docusaurus.config.js` under `options.replacements`
(see `findreplace` remark plugin). The transform **must** import that same
replacement map and substitute tokens before emitting, otherwise the output
contains raw `<%= ... %>` placeholders.

**Implementation note:** The simplest approach is to extract the
`options.replacements` object from `docusaurus.config.js` into a shared
module (`src/data/branding.js`) that both the existing `findreplace` plugin
and the new llms-txt plugin import. No behaviour change for the site build.

### 2. Tab extraction

Source pattern (verbatim from existing docs):

````markdown
```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
…code…
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
…code…
```

```mdx-code-block
…
</TabItem>
</Tabs>
</BrowserWindow>
```
````

For a given target language `L`:

1. Locate each `<Tabs>` / `</Tabs>` block (recognized by the surrounding
   `mdx-code-block` fences).
2. Within it, keep only the `<TabItem value="L" …>` block.
3. Drop all `mdx-code-block` fences, `<Tabs>`, `<TabItem>`, `<BrowserWindow>`
   tags. Keep the code fence(s) inside the matched tab unchanged.
4. If no `<TabItem value="L">` exists in a given `<Tabs>` group, emit
   nothing for that group (do not fall back to another language).

**Preserve placeholder content.** When a tab's content is just
`// Cloud Code only. To view example, switch to the Cloud Code tab` or
`// N/A`, keep it as-is. That signal — "this API is not available in
language L" — is useful for the AI consumer.

### 3. MDX component handling

Globally registered MDX components (per `src/theme/MDXComponents/index.js`):

| Component          | Transform                                                  |
| ------------------ | ---------------------------------------------------------- |
| `<Tabs>` / `<TabItem>` | Handled by rule #2.                                    |
| `<BrowserWindow>`  | Strip the wrapper tags; keep inner content.                |
| `<DocCardList />`  | Drop (auto-generated child-page listing; no static value). |
| `<PartialServop service_name="X" operation_name="Y" />` | Replace with: <br/> `\| Service \| Operation \|`<br/>`\| ------- \| --------- \|`<br/>`\| X \| Y \|` |
| `<LiteYouTubeEmbed id="X" />` | Replace with: `*[Video: https://youtu.be/X]*` |
| `<details><summary>X</summary>…</details>` | Keep as-is (renders fine as raw HTML in markdown). |

Unknown components encountered in the source should be **dropped silently**
in the emitted output, and **logged as warnings** at build time so the team
can decide whether to add a handler.

### 4. Admonitions

Source admonitions (`:::caution`, `:::info`, `:::note`, `:::success`,
`:::tip`, `:::warning`) convert to GitHub-style markdown callouts using a
blockquote prefix:

```markdown
> **Note:** Make sure you've initialized the brainCloud library
> before authenticating.
```

Map:

| Source       | Output prefix |
| ------------ | ------------- |
| `:::note`    | `> **Note:**` |
| `:::tip`     | `> **Tip:**`  |
| `:::info`    | `> **Info:**` |
| `:::caution` | `> **Caution:**` |
| `:::warning` | `> **Warning:**` |
| `:::success` | `> **Note:**` |

Multi-line admonition bodies become multi-line blockquotes.

### 5. Frontmatter

Strip YAML frontmatter from the emitted output. The slug/title info is
already captured in the source/url header comments (see "Per-bundle file
format").

### 6. Code fence languages

Preserve the `cfscript` / `csharp` / `cpp` / etc. info string on fenced
code blocks — these aid LLM tokenization and syntax-aware retrieval.

### 7. File ordering

Concatenate files in the order they appear in `sidebars.js`. For the
`cloudcode.md` bundle this means `learn/` → `overview/` → `api/` (or
whatever the sidebar dictates). For language bundles, only the `api/`
slice of that order is used.

## Implementation

### Plugin location

`braincloud-docs/src/plugins/llms-txt/index.js` — a standard Docusaurus
lifecycle plugin. Register it in `docusaurus.config.js` alongside
`./src/plugins/intercom.js`.

### Lifecycle hook

Use `postBuild({outDir})`:

1. Read the resolved sidebar from `@docusaurus/plugin-content-docs` to
   determine the in-order list of source files for the current version.
2. For each target language (`cfs`, `csharp`, `cpp`, `objectivec`, `java`,
   `js`, `dart`, `r`):
   - For each source file in scope (per "Scope rules"):
     - Read raw file content.
     - Apply transforms 1-7.
     - Emit into a single buffer.
   - Write `outDir/llms/{file}.md`.
3. Emit `outDir/llms.txt` with the index.

`postBuild` runs after Docusaurus has produced the static site, so the
written files end up alongside the rest of the deploy output (e.g. on
S3 / Netlify / wherever the docs ship to).

### Live URL derivation

The header comment URL is built by:

1. Stripping the leading numeric prefix from each path segment
   (`docs/api/2_capi/authentication/...` → `api/capi/authentication/...`).
2. Stripping the `.md` extension.
3. Stripping a trailing `/index` if present.
4. Prepending `https://docs.getbraincloud.com/`.

This matches Docusaurus's default routing for this project (verify against
a sample URL during implementation).

### Dependencies

Avoid new heavy dependencies. The transform is a series of regex / string
operations on raw markdown — no MDX parser required, no remark pipeline
required. The existing `unist-util-visit` and `escape-string-regexp` are
already available if AST-based handling is wanted later.

### Build integration

No changes to `Jenkinsfile` / `Jenkinsfile-production` should be needed —
the plugin runs inside `docusaurus build`. Confirm during implementation
that the Jenkins job's deploy step picks up `outDir` recursively (i.e.
the new `llms/` subdirectory and `llms.txt` ship to the live bucket).

## Testing

1. **Unit-style snapshot tests** for the transform: given a small fixture
   `.md` file with a known `<Tabs>` block, assert the per-language
   output matches a checked-in fixture file. One fixture covers each
   rule (#1 - #7).
2. **Build smoke test**: run `npm run build` locally, verify
   `build/llms.txt` and `build/llms/cloudcode.md` exist and contain
   sensible content (size > 100 KB, no `<%= ... %>` survivors, no
   `<TabItem>` tags).
3. **Sanity check via brainBot dev environment**: point a local brainBot
   instance at the generated files and confirm queries land sensible
   answers.

## Rollout

1. Land plugin + tests on a feature branch in `braincloud-docs`.
2. Verify the build artifacts manually.
3. Merge to main; let the normal docs deploy publish to
   `docs.getbraincloud.com`.
4. Update `braincloud-server`'s brainBot config to fetch the bundles
   from the live URL (with ETag caching).
5. Announce the new endpoints in internal channels; advertise externally
   only after the format has been stable for a release cycle.

## Open questions / future work

- **Caching / freshness on the brainBot side.** Out of scope for this
  spec — brainBot's fetch strategy lives in `braincloud-server`.
- **Bundle size.** ~1,500 source files × ~8 languages → expect several MB
  per bundle. Acceptable today (Anthropic publishes `llms-full.txt` at
  similar size); if it becomes a problem, split per top-level section.
- **Old versions.** If we later need `version-5.7.0` / `version-5.8.0`,
  the plugin can be parameterised with a list of versions to emit, and
  each version gets a versioned URL (`/llms/v5.8.0/cloudcode.md`).
- **Sidebar order vs filesystem order.** If reading the resolved sidebar
  proves awkward, fall back to filesystem walk order, which (given the
  numeric prefixes on directories and files) approximates sidebar order.
