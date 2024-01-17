export const visitUrl = () => {
    return cy.visit("https://www.demoblaze.com/");
};

export const clickLoginButton = () => {
    return cy.get('#login2').click();
};

export const logModal = () => {
    return cy.get('#logInModal').should('be.visible');
};


export const userName= (user) =>{
return cy.get('#loginusername').type(user,{ force: true }).should('have.value',user)
}

export const password = (pass) => {
    return  cy.get('#loginpassword').type(pass).should('have.value', pass) 
}

export const sendUser = () => {
    return cy.get('button[type="button"]').contains('Log in').should('be.visible').click()
}

export const verifyUser = (user) => {
    return cy.get('#nameofuser').should('be.visible').should('have.text', 'Welcome '+ user)
}

export const logOut = () => {
    return  cy.get('#logout2').should('be.visible');
}


