/// <reference types="cypress" />
import 'cypress-file-upload';

// ***********************************************
// Commandes personnalisées Cypress
// Adaptées depuis cara-cypress pour cypress-cucumber-projet
// ***********************************************

// Drag and Drop
Cypress.Commands.add('dragAndDrop', (oldIndex: number, newIndex: number, selectorGrid: string = '.dropList', selectorDrag: string = '.drag-handle') => {
    cy.wait(1000);
    cy.get(selectorGrid).should('be.visible').within(() => {   
        const pos7Coords = Cypress.$(selectorDrag).eq(newIndex)[0].getBoundingClientRect();
        cy.get(`${selectorDrag}:nth(${oldIndex})`, { scrollBehavior: false }).should('be.visible')
            .trigger('mousedown', 5, 10, {button: 0, scrollBehavior: false})
            .trigger('mousemove', 10, 25,  { force: true, scrollBehavior: false })
            .trigger('mousemove', { pageY: pos7Coords.y + 100, force: true, scrollBehavior: false })
            .wait(200)
            .trigger('mouseup', { button: 0, force: true, scrollBehavior: false });
        cy.wait(500);
    });
});

// Click Switch
Cypress.Commands.add('clickSwitch', (selector: string) => {
    cy.get(selector + ' input').should('exist').click({force: true});
    cy.wait(600);
});

// Check Price
Cypress.Commands.add('checkPrice', (selector: string, value: string, currency: string) => {
    cy.get(selector).should(($elem) => {
        let text = $elem.text();
        text = text.trim().replace(/ /g, ' ');
        text = text.trim().replace(/ /g, '');
        text = text.trim().replace(/,/g, '.');
        expect(text.trim()).to.contain(value);
        expect(text.trim()).to.contain(currency);
    });
});

// Check Message (Toast)
Cypress.Commands.add('checkMessage', (title: string, message: string, type: string) => {
    cy.get('ui-message').should('have.length', 1);
    cy.get('ui-message p:nth(0)').should('contain', title);
    cy.get('ui-message p:nth(1)').should('contain', message);
    cy.get('ui-message div.toast').should('have.class', type);
    cy.get('ui-message fa-icon.close-icon').click();
    cy.get('ui-message').should('have.length', 0);
});

// Check No Message
Cypress.Commands.add('checkNoMessage', () => {
    cy.get('ui-message', {timeout: 1000}).should('have.length', 0);
});

// Check Tooltip Error Message
Cypress.Commands.add('checkTooltipErrorMessage', (selector: string, errorMessage: string) => {
    cy.get(`${selector} .status-icon`).trigger('mouseenter', {force: true});
    cy.document().its('body').find('.popper').should('be.visible');
    cy.document().its('body').find('.popper').should('contain', errorMessage);
    cy.get(`${selector} .status-icon`).trigger('mouseleave', {force: true});
});

// Click Popup Button
Cypress.Commands.add('clickPopupBtn', (selector: string) => {
    cy.get(`.popup-footer ${selector}`).click();
});

// Gestion des erreurs ResizeObserver
const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
Cypress.on('uncaught:exception', (err) => {
    if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
    }
});

// Déclarations TypeScript
declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Effectue un glisser-déposer d'un élément vers une nouvelle position
             * @param oldIndex - Index de l'élément source
             * @param newIndex - Index de la position cible
             * @param selectorGrid - Sélecteur du conteneur (défaut: '.dropList')
             * @param selectorDrag - Sélecteur de l'élément draggable (défaut: '.drag-handle')
             * @example cy.dragAndDrop(0, 2)
             */
            dragAndDrop(oldIndex: number, newIndex: number, selectorGrid?: string, selectorDrag?: string): Chainable<void>;
            
            /**
             * Clique sur un switch
             * @param selector - Sélecteur du switch
             * @example cy.clickSwitch('.fugu-switch')
             */
            clickSwitch(selector: string): Chainable<void>;
            
            /**
             * Vérifie qu'un prix contient une valeur et une devise
             * @param selector - Sélecteur de l'élément contenant le prix
             * @param value - Valeur attendue
             * @param currency - Devise attendue
             * @example cy.checkPrice('.price', '99.99', '€')
             */
            checkPrice(selector: string, value: string, currency: string): Chainable<void>;
            
            /**
             * Vérifie l'affichage d'un message toast
             * @param title - Titre du message
             * @param message - Contenu du message
             * @param type - Type de message (success, error, warning, info)
             * @example cy.checkMessage('Succès', 'Enregistrement réussi', 'success')
             */
            checkMessage(title: string, message: string, type: string): Chainable<void>;
            
            /**
             * Vérifie qu'aucun message toast n'est affiché
             * @example cy.checkNoMessage()
             */
            checkNoMessage(): Chainable<void>;
            
            /**
             * Vérifie le message d'erreur dans un tooltip
             * @param selector - Sélecteur de l'élément
             * @param errorMessage - Message d'erreur attendu
             * @example cy.checkTooltipErrorMessage('.input-field', 'Champ requis')
             */
            checkTooltipErrorMessage(selector: string, errorMessage: string): Chainable<void>;
            
            /**
             * Clique sur un bouton dans une popup
             * @param selector - Sélecteur du bouton
             * @example cy.clickPopupBtn('.confirm-button')
             */
            clickPopupBtn(selector: string): Chainable<void>;
        }
    }
}

export {};