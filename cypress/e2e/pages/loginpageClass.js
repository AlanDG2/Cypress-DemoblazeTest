

class Login {

    get = {
        loginButton: () => cy.get('#login2'),
        loginPanel: () => cy.get('#logInModal'),
        usernameInput: () => cy.get('#loginusername'),
        passwordInput: () => cy.get('#loginpassword'),
        sumbitButton: () => cy.get('button[type="button"]'),
        loginMsg: () => cy.get('#nameofuser'),
        logoutButton: () => cy.get('#logout2'),
        
    }
    clickLoginButton() {
        this.get.loginButton().click();
    };

    logModal() {
        this.get.loginPanel();
    };
    userName(user) {
        this.get.usernameInput().type(user, { force: true })
    }

    password(pass) {
        this.get.passwordInput().type(pass, { force: true })
    }

    sendUser() {
        this.get.sumbitButton().contains('Log in').click()
    }


    verifyUser(user) {
        this.get.loginMsg()
        }

    logOut ()  {
       this.get.logoutButton();
    }
    
}

export const login = new Login;

