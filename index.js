/** @type {() => import('@astrojs/starlight').StarlightExtension} */
const plugin = () => {
  return {
    name: "github_issue",
    hooks: {
      setup({ config, updateConfig }) {
        updateConfig({
          components: {
            ...(config.components ?? {}),
            TableOfContents: "starlight-plugin-github-issue/toc.astro",
          },
        });
      },
    },
  };
};

export default plugin;
