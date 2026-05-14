# Spec: Per-Service `llms.txt` for brainCloud Docs

## Purpose

Publish machine-readable, per-service markdown bundles of the brainCloud
docs so AI assistants (starting with **brainBot**, but available to any
consumer) can ingest the API reference without scraping HTML or running a
custom Markdown pipeline.

Generated as part of the existing Docusaurus build in **braincloud-docs**,
so the bundles always reflect what was just published to the docs site.

## Background

The docs are authored as `.md` / `.mdx` files under `braincloud-docs/docs/`.
API method docs use a `<Tabs>` pattern with one `<TabItem>` per client
language. Today there is no clean way to consume a service-scoped, plain
markdown view of the reference — the published site renders everything
spread across many HTML pages, and Docusaurus does not serve the raw
markdown source.

> **Note:** An earlier revision of this spec organised bundles by client
> language (one giant file per language). That structure was abandoned in
> favour of per-service bundles because individual service files are
> smaller, easier for an AI assistant to retrieve on demand, and align with
> how developers actually think about the API.

## Goals

1. Serve a small set of plain-markdown bundles at stable URLs on the docs
   site — one bundle per brainCloud service.
2. Each per-service bundle covers both the **client API** (`2_capi/<svc>/`)
   and the **server-to-server API** (`4_s2s/<svc>/`) for that service, with
   **all language tabs preserved** inline.
3. Cover non-service content (Cloud Code utilities, wrapper, appendix,
   tutorials) via additional bundles, one per section.
4. Keep the bundles in sync with the live site automatically — no separate
   pipeline, no manual step, no server-side rebuild required.
5. Provide a top-level `llms.txt` index following the
   [llmstxt.org](https://llmstxt.org) convention so any LLM client can
   discover what's available.

## Non-goals

- Versioned bundles. Only the "current" (latest) version is generated.
  `versioned_docs/` snapshots are skipped.
- Localized bundles. The site is `en`-only today; revisit if/when other
  locales are added.
- A general-purpose docs API. This is a static-file delivery, not a query
  endpoint.

## Output contract

Generated on every build, served at the root of the docs site:

```
<siteUrl>/
├── llms.txt                          # index, llmstxt.org-style
└── llms/
    ├── authentication.md             # one bundle per brainCloud service
    ├── authentication.index.md       #   method index for that service
    │                                 #   (H1 + one-line summary per method,
    │                                 #    grouped by capi/s2s, links to the
    │                                 #    per-method files below)
    ├── authentication/
    │   ├── capi/                     # one file per docs/api/2_capi/auth/*.md
    │   │   ├── authenticateemailpassword.md
    │   │   └── …
    │   └── s2s/                      # one file per docs/api/4_s2s/auth/*.md
    │       └── authenticate.md
    ├── entity.md, entity.index.md, entity/…
    ├── lobby.md,  lobby.index.md,  lobby/…
    ├── …                             #
    ├── cloud-code-bridge.md          # api/3_cc/bridge/  (all 92 files)
    ├── cloud-code-peerbridge.md      # api/3_cc/peerbridge/
    ├── writing-scripts.md            # api/3_cc/0_writingscripts/
    ├── wrapper.md                    # api/1_wrapper/
    ├── appendix.md                   # api/5_appendix/
    ├── learn.md                      # learn/
    └── overview.md                   # overview/
```

Current docs tree produces **64 bundle files (~5.3 MB total), 57 per-service
index files (~4 KB each), and ~1,200 per-method files (~3.5 KB avg,
~26 KB max)**. The bundles remain the source of truth for "give me the
whole service" callers; the index + per-method files let consumers fetch
exactly the method they need.

Non-service bundles (cloud-code-*, wrapper, appendix, learn, overview)
do not get per-method or index files — they are read end-to-end and
splitting them would not help any known consumer.

`siteUrl` is whatever Docusaurus's `siteConfig.url` resolves to (after
`__DOCSURL__` sed substitution in `Jenkinsfile`/`Jenkinsfile-production`).
For dev that's `https://docs-internal.braincloudservers.com`; for prod
it's `https://docs.braincloudservers.com`.

### Scope rules

| Bundle                       | Sources included                                       |
| ---------------------------- | ------------------------------------------------------ |
| `<service>.md`               | `docs/api/2_capi/<svc>/` + `docs/api/4_s2s/<svc>/`     |
| `<service>.index.md`         | derived from above — method list with summaries        |
| `<service>/capi/<method>.md` | one per file in `docs/api/2_capi/<svc>/`               |
| `<service>/s2s/<method>.md`  | one per file in `docs/api/4_s2s/<svc>/`                |
| `cloud-code-bridge.md`       | All of `docs/api/3_cc/bridge/` (92 files)              |
| `cloud-code-peerbridge.md`   | All of `docs/api/3_cc/peerbridge/`                     |
| `writing-scripts.md`         | `docs/api/3_cc/0_writingscripts/`                      |
| `wrapper.md`                 | `docs/api/1_wrapper/`                                  |
| `appendix.md`                | `docs/api/5_appendix/`                                 |
| `learn.md`                   | `docs/learn/`                                          |
| `overview.md`                | `docs/overview/`                                       |

Service names are discovered dynamically by unioning subdirectory names
under `docs/api/2_capi/` and `docs/api/4_s2s/`. Any new service that
appears in either tree automatically gets a bundle, index, and per-method
files on the next build.

`index.md` source files (the service-level intros that hold the
`<DocCardList />`) are included in the full bundle but are not emitted as
per-method files and not listed in the per-service index — they describe
the service, not a method. Their content is already surfaced as the
"description" line at the top of the per-service index file.

### Per-method file format

Each per-method file is a single transformed source file with the same
`<!-- source --> / <!-- url -->` header as a bundle section but without
the `---` separator (the file is one method, not a concatenation):

```markdown
<!-- source: docs/api/2_capi/authentication/authenticateemailpassword.md -->
<!-- url: https://docs.braincloudservers.com/api/capi/authentication/authenticateemailpassword -->

# AuthenticateEmailPassword

Authenticate the user with a custom Email and Password.

…
```

### Per-service index file format

A per-service index lists every method (capi + s2s) with a one-line
summary and a link to the per-method file. Consumers fetch this file
first to discover what's available before pulling individual methods:

```markdown
# Authentication — methods

> This section describes the key methods for implementing basic authentication in your app.

Full bundle: <siteUrl>/llms/authentication.md

Method names below match `<method>` in `bridge.get<Service>ServiceProxy().<method>(...)` calls in cloud code (case-insensitive). Fetch individual methods to keep payload small.

## Client API methods

- [AuthenticateEmailPassword](<siteUrl>/llms/authentication/capi/authenticateemailpassword.md) — Authenticate the user with a custom Email and Password.
- …

## S2S methods

- [Authenticate](<siteUrl>/llms/authentication/s2s/authenticate.md) — This service is used to authenticate the server request for the session based protocol.
```

The method name (`AuthenticateEmailPassword`) is extracted from the H1
of the per-method file. The summary is the first prose paragraph after
the H1, trimmed to one sentence when long. Services that lack an S2S
sibling directory simply omit the `## S2S methods` section.

### Per-bundle file format

Each bundle is one concatenated markdown file. Source files are emitted in
filesystem walk order (which the numeric prefixes make equivalent to
sidebar order). Each source contributes a section with a small header so
consumers can locate the live page:

```markdown
<!-- source: docs/api/2_capi/authentication/authenticateemailpassword.md -->
<!-- url: https://docs.braincloudservers.com/api/capi/authentication/authenticateemailpassword -->

# AuthenticateEmailPassword

Authenticate the user with a custom Email and Password.

…
```

Sections are separated by `\n\n---\n\n`.

The HTML comment lines are invisible in most rendered views but easy to
parse by an LLM and useful for citing sources.

### `llms.txt` (index) format

Plain markdown, [llmstxt.org](https://llmstxt.org) convention. Bundles are
grouped into four sections with auto-generated labels and descriptions:

```markdown
# brainCloud Docs

> Reference documentation for brainCloud, a backend-as-a-service for games
> and apps. Each file below covers one brainCloud service or general
> topic, with all client language code samples preserved inline.

## Services

- [Authentication](<siteUrl>/llms/authentication.md): This section describes
  the key methods for implementing basic authentication in your app…
- [Entity](<siteUrl>/llms/entity.md): brainCloud User Entities are full JSON
  objects (similar to Global Entities) except that are private to a
  brainCloud user.
- …

## Cloud Code

- [Bridge](<siteUrl>/llms/cloud-code-bridge.md): Cloud Code bridge API —
  invoke brainCloud services and access script context from server-side
  scripts.
- [Writing Scripts](<siteUrl>/llms/writing-scripts.md): …

## Reference

- [BrainCloudWrapper](<siteUrl>/llms/wrapper.md): …
- [Appendix](<siteUrl>/llms/appendix.md): Reason codes, ACL syntax, JSON
  queries, platform IDs, and other reference data.

## Guides

- [Learn](<siteUrl>/llms/learn.md): Tutorials, getting-started guides…
- [Overview](<siteUrl>/llms/overview.md): …
```

Labels and descriptions are extracted from each section's `index.md`:
the H1 supplies the label; the first prose paragraph (with branding
tokens resolved, markdown links flattened, JSX stripped) supplies the
description. Sensible fallbacks apply if `index.md` is missing or
contains only auto-generated content like `<DocCardList />`.

## Transform rules

The transform reads source `.md` / `.mdx` files (not the compiled HTML)
and emits plain markdown. Each rule below applies to every output bundle.

### 1. Branding token interpolation

Source files contain templated tokens like:

```
<%= data.branding.codePrefix %>.AuthenticationService.Authenticate...
```

These are defined in `docusaurus.config.js` under `options.replacements`
(see `findreplace` remark plugin). The transform reads that same
replacement map and substitutes tokens.

For tokens **not** in the replacement map (e.g. `data.example.appId`),
the transform emits a clean placeholder — the last dotted segment
converted to SNAKE_CASE and wrapped in angle brackets:

| Source                          | Output           |
| ------------------------------- | ---------------- |
| `<%= data.example.appId %>`     | `<APP_ID>`       |
| `<%= data.example.appSecret %>` | `<APP_SECRET>`   |
| `<%= data.example.appChildId %>` | `<APP_CHILD_ID>` |

### 2. Tab flattening (keep all languages)

Source pattern (verbatim from existing docs):

````
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

Implementation is two passes:

1. **Strip `mdx-code-block` fences** — these exist only to keep MDX 3
   from parsing JSX as markdown, and have no semantic meaning. Removing
   them leaves the JSX tags as bare text.
2. **Flatten tabs** — for each `<TabItem value="X" label="Y">` emit a
   bold inline label `**Y:**` on its own line, then keep the tab's
   content. Drop the structural tags (`<Tabs>`, `<TabItem>`,
   `<BrowserWindow>` and their closes).

The result for a typical API method looks like:

```markdown
## Usage

**C#:**

```csharp
…csharp code…
```

**C++:**

```cpp
…cpp code…
```

**Cloud Code:**

```cfscript
…cfscript code…
```

…
```

**Preserve placeholder content.** When a tab's content is just
`// Cloud Code only. To view example, switch to the Cloud Code tab`
or `// N/A`, keep it as-is. That signal — "this API is not available
in language X" — is useful for the AI consumer.

### 3. MDX component handling

Globally registered MDX components (per `src/theme/MDXComponents/index.js`):

| Component                              | Transform |
| -------------------------------------- | --------- |
| `Tabs` / `TabItem`                     | Handled by rule #2 (flattened with labels). |
| `BrowserWindow`                        | Strip the wrapper tags; keep inner content. |
| `DocCardList`                          | Drop (auto-generated child-page listing; no static value). |
| `PartialServop` (`service_name`, `operation_name`) | Replace with a 2-row markdown table containing the service name and operation name. |
| `LiteYouTubeEmbed` (`id`)              | Replace with `*[Video: https://youtu.be/X]*` (multi-line attributes supported). |
| HTML `details` / `summary` blocks      | Keep as-is (renders fine as raw HTML in markdown). |

Other arbitrary HTML/JSX (e.g. wrapper `<div className="video-container">`)
passes through unchanged — LLM consumers handle HTML-in-markdown without
issue.

### 4. Admonitions

Source admonitions convert to GitHub-style blockquote callouts:

| Source       | Output prefix    |
| ------------ | ---------------- |
| `:::note`    | `> **Note:**`    |
| `:::tip`     | `> **Tip:**`     |
| `:::info`    | `> **Info:**`    |
| `:::caution` | `> **Caution:**` |
| `:::warning` | `> **Warning:**` |
| `:::success` | `> **Note:**`    |

Multi-line bodies become multi-line blockquotes.

### 5. Frontmatter

Strip YAML frontmatter. Title/slug info is already captured in the
source/url header comments.

### 6. Code fence languages

Preserve the `cfscript` / `csharp` / `cpp` / etc. info string on fenced
code blocks — these aid LLM tokenization and syntax-aware retrieval.

### 7. File ordering

Concatenate files in filesystem walk order, which is equivalent to
sidebar order given the numeric prefixes on directories and files
(`0_introduction.md`, `1_wrapper/`, `2_capi/`, etc.).

## Implementation

### Plugin location

`braincloud-docs/src/plugins/llms-txt/` — a standard Docusaurus
lifecycle plugin, registered in `docusaurus.config.js` alongside
`./src/plugins/intercom.js`.

```
src/plugins/llms-txt/
├── index.js              # plugin entry + postBuild + bundle discovery
├── transform.js          # per-file markdown transform (all 7 rules)
└── test-build.js         # standalone smoke test (no npm install needed)
```

### Lifecycle hook

`postBuild({outDir})`:

1. Discover bundles: union of service subdirs from `2_capi/` and `4_s2s/`,
   plus the named sections (bridge, peerbridge, writing-scripts, wrapper,
   appendix, learn, overview).
2. For each bundle, read its `index.md` (when present) to extract label
   and description for the `llms.txt` index.
3. For each file in the bundle:
   - Read raw source.
   - Apply transforms 1-7 via `transform.js`.
   - Append to the bundle body with a `<!-- source -->` / `<!-- url -->`
     header.
4. Write `outDir/llms/<slug>.md` for each bundle.
5. Write `outDir/llms.txt` with the grouped index.

`postBuild` runs after Docusaurus has produced the static site, so the
written files end up alongside the rest of the deploy output.

### Live URL derivation

The header comment URLs (and the index URLs) use Docusaurus's
`siteConfig.url`. The plugin no longer hardcodes a host — it falls back
to `context.siteConfig.url` automatically. After the per-environment
sed in the Jenkinsfiles, this resolves to the correct internal/prod URL.

Path mapping: `docs/api/2_capi/authentication/foo.md` →
`<siteUrl>/api/capi/authentication/foo`. The numeric `N_` prefixes are
stripped from each path segment; `.md`/`.mdx` and trailing `/index` are
dropped.

### Dependencies

No new dependencies. The transform is regex/string operations on raw
markdown — no MDX parser, no remark pipeline.

### Build integration

No changes to `Jenkinsfile` / `Jenkinsfile-production`. The plugin runs
inside `docusaurus build`; the deploy step's `aws s3 sync` already picks
up the new `llms/` subdirectory and `llms.txt` recursively.

## Testing

1. **`test-build.js`** — runs the full plugin pipeline against the live
   `docs/` tree into a temp directory, then prints stats and a survivor
   scan across all generated bundles. **No `npm install` required.**
   Useful as a CI gate.
2. **Build smoke test** — run `npm run build` locally, verify
   `build/llms.txt` and `build/llms/*.md` exist and contain sensible
   content.
3. **Sanity check via brainBot dev environment** — point a local brainBot
   instance at the generated bundles and confirm queries land sensible
   answers.

## Verified output (post-refactor, May 2026)

Running `node src/plugins/llms-txt/test-build.js` produces **64 bundles,
~5.3 MB total** (down from ~21 MB in the per-language layout). Sample
sizes:

| Bundle                  | Sources | Size      |
| ----------------------- | ------- | --------- |
| `learn.md`              | 122     | ~456 KB   |
| `leaderboard.md`        | 68      | ~344 KB   |
| `identity.md`           | 85      | ~282 KB   |
| `group.md`              | 70      | ~249 KB   |
| `authentication.md`     | 36      | ~202 KB   |
| `lobby.md`              | 43      | ~194 KB   |
| `cloud-code-bridge.md`  | 92      | ~122 KB   |
| `appstore.md`           | 17      |  ~75 KB   |
| `appendix.md`           | 10      |  ~72 KB   |
| `wrapper.md`            | 54      | ~222 KB   |
| `heartbeat.md`          | 2       |   ~2 KB   |
| …                       |         |           |

All bundles pass the survivor scan (no `<TabItem>`, `<Tabs>`,
`<BrowserWindow>`, `mdx-code-block`, `<%=`, `<PartialServop>`, or
`<DocCardList>` artifacts).

## Rollout

1. Land plugin on a feature branch in `braincloud-docs`.
2. Verify build artifacts via `test-build.js` and a full
   `docusaurus build`.
3. Merge to main; let the normal docs deploy publish to the live
   bucket.
4. Update `braincloud-server`'s brainBot config to fetch per-service
   bundles from `<siteUrl>/llms/<service>.md` (with ETag caching),
   selecting bundles based on conversation intent.
5. Announce internally; advertise the `llms.txt` index externally once
   the format has been stable for a release cycle.

## Consumer model (brainBot)

The per-method + per-service-index outputs exist to support a two-tool
consumer model in brainBot:

- `lookup_service_method(service, method)` — fetches a single
  `/llms/<service>/{capi|s2s}/<method>.md`. The bot's preferred path:
  read the per-service index (or have its method list in context from a
  previous turn) and pull exactly the methods the current script needs.
- `lookup_service_all(service)` — fetches the full `/llms/<service>.md`
  bundle. Used when the bot legitimately needs to browse a service
  (e.g. "is there a method that does X?") or when the per-method gate
  would be too costly for a many-method script.

The compose-script gate enforces per-method coverage: every
`bridge.getXxxServiceProxy().methodName(...)` call in the submitted
script must have its method doc fetched in conversation, either via
`lookup_service_method` (one method) or `lookup_service_all` (the whole
service). Per-service method allowlists are loaded from each
`/llms/<service>.index.md` file.

## Open questions / future work
- **Bundle freshness on the brainBot side.** Out of scope for this
  spec — brainBot's fetch/cache strategy lives in `braincloud-server`.
- **Old versions.** If we later need version-specific bundles, the
  plugin can be parameterised with a version list and each version
  gets a versioned URL (`/llms/v5.8.0/authentication.md`).
- **Service label disambiguation.** Two services (`globalfile` and
  `globalfilev3`) currently produce the same auto-extracted label
  ("Global File"). If this matters for AI selection, hardcode an
  override map in the plugin.
