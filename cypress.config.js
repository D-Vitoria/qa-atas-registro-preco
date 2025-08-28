const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://sistemas.efcaz.com.br/ata-registro-preco-pub/#/atas",
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
