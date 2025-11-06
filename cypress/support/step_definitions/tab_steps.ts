import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Navigation entre onglets
When("je change vers l'onglet {int} nommé {string}", (index: number, name: string) => {
  cy.get('nav span').eq(index).should('contain', name).click();
});

When("je clique sur l'onglet {int}", (index: number) => {
  cy.get('nav span').eq(index).click();
});

// Vérification des onglets
Then("le nombre d'onglets devrait être {int}", (number: number) => {
  cy.get('ui-tab-handler ui-tab').should('have.length', number);
});

Then("l'onglet {int} devrait être {string}", (index: number, name: string) => {
  cy.get('nav span').eq(index).should('contain', name);
});

// Suppression d'onglet
When("je supprime l'onglet {int}", (index: number) => {
  cy.get(`ui-tab-handler nav li:nth(${index}) fa-icon`).click({ force: true });
});

// Vérification des champs info dans un onglet
Then("le champ info de l'onglet {int} devrait avoir le label {string} et la valeur {string}", (index: number, label: string, value: string) => {
  cy.get(`.fugu-info-field:nth(${index}) .label-container .label`).should('contain', label);
  cy.get(`.fugu-info-field:nth(${index}) .value-container .value`).should('contain', value);
});
