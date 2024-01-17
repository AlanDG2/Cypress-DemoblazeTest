const cucumber = require  ('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
    baseUrl: "https://www.demoblaze.com/",
  },
  env:{
    // datos de inicio de sesion
    login:{
      username: "alandg2",
      password: "notelavoyadecir"
        },
        // endpoints de las url
    endpoint:{
      home: "index.html",
      asusMonitor: "prod.html?idp_=14",
      car: "cart.html#",
      
    },
     // Datos para la página del carrito de compras
    cartPage:{
      testmsg: "Product added.",
      completeName:"alan david gonzalez guzman",
      country: "colombia",
      city:"cartagena",
      card: "visa",
      month: "07",
      year: "2027"
    },
    // productos
    products:{
      product: "ASUS Full HD"
    }
  }

});

