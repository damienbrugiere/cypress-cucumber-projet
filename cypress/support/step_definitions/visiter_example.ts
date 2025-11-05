// cypress/support/step_definitions/example.steps.ts
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('l\'utilisateur sur la page d\'accueil', () => {
  cy.visit('https://example.cypress.io/todo');

});

When('l\'utilisateur attend le chargement de la page', () => {
  cy.get('h1', { timeout: 10000 }).should('be.visible');
});

Then('le titre de la page doit contenir {string}', (title: string) => {
  cy.title().should('include', title);
});

Then('l\'en-tête doit afficher {string}', (text: string) => {
  cy.get('h1').should('contain', text);
});

When('l\'utilisateur scroll vers le bas', () => {
  cy.scrollTo('bottom');
});

Then('le texte {string} doit être visible', (text: string) => {
  cy.contains(text).should('be.visible');
});

Then('le lien {string} doit être présent', (linkText: string) => {
  cy.contains('a', linkText).should('exist');
});

Then('l\'URL doit contenir {string}', (urlPart: string) => {
  cy.url().should('include', urlPart);
});

Then('la page ne doit pas être vide', () => {
  cy.get('body').should('not.be.empty');
});

When("l\'utilisateur clique sur le lien {string}",  (name: string) => {
    cy.contains(name).as("selector");
    cy.clickWithScreenshot(`@selector`, name);
});
Then('l\'élément {string} doit être encadré', (selector: string) => {
  cy.highlightAndScreenshot(selector, selector);
});