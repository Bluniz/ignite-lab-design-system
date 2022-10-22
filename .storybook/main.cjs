module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  //! CONFIGURAÇÃO PARA GARANTIR QUE O STORYBOOK NÃO SE PERCA ACHANDO QUE TA ABRINDO PASTAS.
  viteFinal: (config, { configType }) => {
    if (configType === "production") {
      config.base = "/ignite-lab-design-system/";
    }

    return config;
  },
};