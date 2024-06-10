# Starlight Plugin for GitHub Issue

<picture>
  <source media="(prefers-color-scheme: light)" srcset="/images/light.svg">
  <img alt="example" src="/images/dark.svg" width="50%" height="50%">
</picture>

## Installation

```bash
npm i starlight-plugin-github-issue@1.0.5
```

```js
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// import this plugin
import githubIssuePlugin from "starlight-plugin-github-issue";

export default defineConfig({
  integrations: [
    starlight({
      plugins: [githubIssuePlugin()],
      // REQUIRED: https://starlight.astro.build/reference/configuration/#editlink
      editLink: {
        baseUrl: "https://github.com/fastrepl/starlight-plugin-github-issue",
      },
    }),
  ],
});
```
