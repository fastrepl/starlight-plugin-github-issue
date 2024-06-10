# Starlight Plugin for GitHub Issue

## What is this?

This plugin adds a `Give us feedback` button in the `TOC` section.

<picture>
  <source media="(prefers-color-scheme: light)" srcset="/images/light.png">
  <img alt="example" src="/images/dark.png" width="200px">
</picture>

Clicking the button will open a GitHub issue creation page with the body containing the URL of the file of that page.

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
