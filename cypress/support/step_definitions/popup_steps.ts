import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Actions sur la popup
When("je ferme la popup", () => {
  cy.get('.popup-header fa-icon').click();
});

When("je ferme la popup deux fois", () => {
  cy.get('.popup-header fa-icon').click();
  cy.get('.popup-header fa-icon').click();
});

When("je sauvegarde la popup", () => {
  cy.get('.fugu-popup .fugu-button-save').click();
  cy.wait(200);
});

When("je valide la popup", () => {
  cy.get('.fugu-popup .fugu-button-validate').should("be.visible").click({force: true});
  cy.wait(300);
});

When("je sauvegarde et effectue l'action de la popup", () => {
  cy.get('.fugu-popup .fugu-button-save-and-action').should("be.visible").click({force: true});
  cy.wait(300);
});

When("j'annule la popup", () => {
  cy.get('.fugu-popup .fugu-button-cancel').click();
  cy.wait(200);
});

When("j'ajoute depuis la popup", () => {
  cy.get('.fugu-popup .fugu-button-add').click();
});

// Vérifications
Then("la popup devrait être ouverte avec le titre {string}", (title: string) => {
  cy.get('.popup-header .title').should('contain', title);
  cy.wait(200);
});

Then("la popup devrait être fermée", () => {
  cy.get('.popup-container ui-popup').should('not.exist');
});

Then("le titre de la popup devrait être {string}", (value: string) => {
  cy.get('.popup-header .title').should('contain', value);
});

When("je clique sur le titre de la popup", () => {
  cy.get('.popup-header .title').click();
});

// Boutons
Then("le bouton de validation devrait avoir le nom {string}", (name: string) => {
  cy.get('.fugu-popup .fugu-button-validate').should("contain", name);
});

Then("le bouton sauvegarder et action devrait avoir le nom {string}", (name: string) => {
  cy.get('.fugu-popup .fugu-button-save-and-action').should("contain", name);
});

Then("le bouton de validation devrait être désactivé", () => {
  cy.get('.fugu-popup .fugu-button-validate').should("be.disabled");
});

Then("le bouton de validation devrait être activé", () => {
  cy.get('.fugu-popup .fugu-button-validate').should("not.be.disabled");
});
