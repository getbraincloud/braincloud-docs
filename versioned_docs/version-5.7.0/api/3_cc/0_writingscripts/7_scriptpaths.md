# Script paths

<%= data.branding.productName %> now supports script folders, allowing developers to better organize their cloud code scripts.

:::success
Pro-tip: Script paths provided to the <em>bridge.include()</em> and <em>bridge.callScript()</em> should be relative to the location of the calling script. This is <em>different</em> than the ScriptService APIs - where script paths are <em>relative to the root folder</em>.
:::