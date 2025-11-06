import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Navigation et URL
Given("je visite l'URL {string}", (url: string) => {
  cy.visit(url);
});

Given("je visite la page d'accueil", () => {
  cy.visit('/');
});

Then("l'URL devrait être {string}", (url: string) => {
  cy.location('pathname').should('eq', url);
});

Then("l'URL devrait être {string} avec les paramètres {string}", (url: string, params: string) => {
  cy.location('pathname').should('eq', url);
  cy.location('search').should('eq', params);
});

// Titre et sous-titre
Then("le titre devrait être {string}", (title: string) => {
  cy.get('ui-title').should('have.text', title);
});

Then("le titre devrait contenir {string}", (title: string) => {
  cy.get('ui-title').should('contain', title);
});

When("je clique sur le titre", () => {
  cy.get('ui-title').click();
});

Then("le sous-titre devrait être {string}", (subtitle: string) => {
  cy.get('ui-title .subtitle').should('have.text', subtitle);
});

Then("le sous-titre devrait contenir {string}", (subtitle: string) => {
  cy.get('ui-title .subtitle').should('contain', subtitle);
});

// Navigation
When("je clique sur le bouton retour", () => {
  cy.get('.return-link .link-text').click({force: true});
});

Then("l'URL et le titre devraient être {string} et {string}", (url: string, title: string) => {
  cy.location('pathname').should('eq', url);
  cy.get('ui-title').should('have.text', title);
});

// Périmètre magasin
When("je change le périmètre magasin vers {string}", (storeName: string) => {
  cy.get('.menu-store').click();
  cy.get('.popup-container .card').contains(storeName).click();
});

// Loader
Then("le loader de l'application ne devrait pas être visible", () => {
  cy.get('app-loader').should('not.be.visible');
});

// Info fields
Then("le champ info {string} devrait contenir la valeur {string}", (selector: string, value: string) => {
  cy.get(`ui-info-field[name="${selector}"] .value`).should('contain', value);
});

Then("le champ info {string} devrait avoir le label {string} et la valeur {string}", (selector: string, label: string, value: string) => {
  cy.get(`ui-info-field[name="${selector}"] .label`).should('contain', label);
  cy.get(`ui-info-field[name="${selector}"] .value`).should('contain', value);
});

Then("le champ info {string} devrait contenir {string} et {string}", (selector: string, value: string, currency: string) => {
  cy.get(`ui-info-field[name="${selector}"]`).should($elem => {
    let text = $elem.text();
    text = text.trim().replaceAll(' ', ' ');
    text = text.trim().replaceAll(' ', '');
    text = text.trim().replaceAll(',', '.');
    expect(text.trim()).to.contain(value);
    expect(text.trim()).to.contain(currency);
  });
});
