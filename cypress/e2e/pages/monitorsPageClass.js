class Monitors {

    get = {
        
        monitorButton: () => cy.get('a.list-group-item').contains('Monitors'),
        asusMonitor: () => cy.get('.hrefch').contains('ASUS Full HD'),
        addToCarButton: () => cy.get('#tbodyid > div.row > div > a').contains('Add to cart'),
    }
    clickMonitorButton() {
        this.get.monitorButton().click();
    };

    clickAsusMonitor(){
        this.get.asusMonitor().click();
    }
    clickAddToCarButton() {
        this.get.addToCarButton().click();
    };
    
}

export const monitor = new Monitors;
