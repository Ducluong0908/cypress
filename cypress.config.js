const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Incline Reporter',
    embeddedScreenshots: true,
    inlineAssets: true,
  },

  projectId: "mmmck7",

  e2e: {
    chromeWebSecurity: false,
    noUncheckedIndexedAccess: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    baseUrl: 'https://rahulshettyacademy.com'
  },
});
