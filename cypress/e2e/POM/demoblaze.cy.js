//import * as home from '..\\cypress\\e2e\\pages\\loginpage' // es module
//const test = require('../../fixtures/loginPage/monitor.json');


const { monitor } = require('../pages/monitorsPageClass')
const { login } = require('../pages/loginpageClass');
const { shoppingCart } = require('../pages/soppingCartpageClass')

// data  cypres.config
const { username, password, } = Cypress.env('login')
const { asusMonitor, home } = Cypress.env('endpoint')
const { product } = Cypress.env('products')
const { testmsg, completeName, country, city, card, month, year } = Cypress.env('cartPage')



describe("testing login", () => {

  before("should visit login page", () => {
    cy.visit('/')
  })


  it("validate login", () => {
    // login page
    login.clickLoginButton();
    login.logModal();
    login.userName(username);
    login.password(password);
    login.sendUser();
    login.get.loginMsg().should('be.visible').and('have.text', 'Welcome ' + username);
    login.get.logoutButton().should('be.visible')

    //  products page filter monitors
    monitor.clickMonitorButton()
    monitor.clickAsusMonitor()
    cy.url().should("contain", asusMonitor)
    monitor.clickAddToCarButton()

    //shopping cart
    cy.on('window:alert', (mensaje) => {
      expect(mensaje).to.equal(testmsg); // Check alert message
    });
    shoppingCart.clickShoppingCart()
    shoppingCart.get.product().should('contain', product)
    shoppingCart.clickOrderButton()
    shoppingCart.get.orderPanel()
    shoppingCart.typeNameForm(completeName)
    shoppingCart.typeCountryForm(country)
    shoppingCart.typeCityForm(city)
    shoppingCart.typeCardForm(card)
    shoppingCart.typeMonthForm(month)
    shoppingCart.typeYearForm(year)
    shoppingCart.clickPurchaseButton()
    // the animation did not allow clicking so I added a wait
    cy.wait(1000);
    shoppingCart.clickOkButton()
    // // verify that it returns to the initial page
    cy.url().should("contain", home)

  })
})