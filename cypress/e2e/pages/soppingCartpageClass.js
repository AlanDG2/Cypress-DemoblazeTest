class ShoppingCart {

    get = {

        cartButton: () => cy.get('.nav-link').contains('Cart'),
        product: () => cy.get('tbody#tbodyid td').contains('ASUS Full HD'),
        submitOrderButton: () => cy.get('button[type="button"][class="btn btn-success"]').contains('Place Order'),
        orderPanel: () => cy.get('#orderModal').should("be.visible"),
        nameForm: () => cy.get('#name'),
        countryForm: () => cy.get('#country'),
        cityForm: () => cy.get('#city'),
        cardForm: () => cy.get('#card'),
        monthForm: () => cy.get('#month'),
        yearForm: () => cy.get('#year'),
        purchaseButton: () => cy.get('button[class="btn btn-primary"]').contains('Purchase'),
        okButton: () => cy.get('button[class="confirm btn btn-lg btn-primary"]').should('be.visible')

    }



    clickShoppingCart() {
        this.get.cartButton().click()
    }

    clickOrderButton() {
        this.get.submitOrderButton().click()
    }
    typeNameForm(name) {
        this.get.nameForm().type(name, { force: true })
    }
    typeCountryForm(country) {
        this.get.countryForm().type(country, { force: true })
    }
    typeCityForm(city) {
        this.get.cityForm().type(city, { force: true })
    }
    typeCardForm(card) {
        this.get.cardForm().type(card, { force: true })
    }
    typeMonthForm(month) {
        this.get.monthForm().type(month, { force: true })
    }
    typeYearForm(year) {
        this.get.yearForm().type(year, { force: true })
    }

    clickPurchaseButton() {
        this.get.purchaseButton().click()
    }

    clickOkButton() {
        this.get.okButton().click()
    }

}

export const shoppingCart = new ShoppingCart;