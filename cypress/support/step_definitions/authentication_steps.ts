import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Connexion
When("je me connecte avec l'identifiant {string} et le mot de passe {string}", (id: string, password: string) => {
  cy.intercept("/api/user/auth").as("auth");
  cy.get('input').eq(0).clear().type(id);
  cy.get('input').eq(1).clear().type(password);
  cy.get('button').click();
  cy.wait("@auth");
});

Given("je suis connecté avec l'identifiant {string} et le mot de passe {string}", (id: string, password: string) => {
  cy.intercept("/api/user/auth").as("auth");
  cy.visit('/login');
  cy.url().should('include', '/login');
  cy.get('input').eq(0).clear().type(id);
  cy.get('input').eq(1).clear().type(password);
  cy.get('button').click();
  cy.wait("@auth");
});

// Déconnexion
When("je me déconnecte", () => {
  cy.visit('/logout');
  cy.url().should('include', '/login');
});

// Vérification du nombre de champs
Then("le formulaire de connexion devrait avoir {int} champs", (number: number) => {
  cy.get('gen-login-form .forms-content div').children().should('have.length', number);
});

// Sélection de magasin
When("je sélectionne le magasin {string}", (storeName: string) => {
  cy.get('.card .name').contains(storeName.toUpperCase()).click();
});

Then("je devrais être sur la page d'accueil avec le magasin {string}", (storeName: string) => {
  cy.url().should('eq', Cypress.config("baseUrl") + '/');
  cy.get('.menu-store .user-name').should('contain', storeName);
});

// Vérification des magasins disponibles
Then("je devrais voir {int} magasin(s) disponible(s)", (number: number) => {
  cy.get('.card').should('have.length', number);
});

Then("les magasins disponibles devraient être {string}", (storeNames: string) => {
  const names = storeNames.split(',').map(n => n.trim());
  names.forEach((name, index) => {
    cy.get('.card').eq(index).should('contain', name.toUpperCase());
  });
});

// Recherche de magasin
When("je recherche le magasin {string}", (searchTerm: string) => {
  cy.get('.fugu-input-text-search input').clear().type(searchTerm);
});

// Ouverture popup sélection magasin
When("j'ouvre la popup de sélection de magasin", () => {
  cy.get('.menu-store .user-name').click();
});

Then("la popup de sélection devrait afficher le magasin sélectionné {string}", (storeName: string) => {
  cy.get('.selected > .name').should('contain', storeName.toUpperCase());
});

// Vérification redirection login
Then("je devrais être redirigé vers la page de connexion", () => {
  cy.url().should('include', '/login');
});

When("je visite l'URL {string} sans être connecté", (url: string) => {
  cy.visit(url);
  cy.url().should('include', '/login');
});

// Mot de passe oublié
When("je clique sur le lien mot de passe oublié", () => {
  cy.get('.fugu-link .link-text').click();
});

When("je clique sur le bouton récupérer le mot de passe", () => {
  cy.get('.fugu-popup .fugu-button-classic').click();
});

// Validateurs de mot de passe
Then("les validateurs de mot de passe devraient avoir les états {string}", (states: string) => {
  const stateArray = states.split(',').map(s => s.trim());
  stateArray.forEach((state, index) => {
    cy.get('.popper > span > div').eq(index).should('have.class', state);
  });
});

// Vérification du menu selon le magasin
Then("le menu devrait avoir {int} groupe(s) d'en-tête", (number: number) => {
  cy.get(".group-header").should('have.length', number);
});

Then("le menu devrait contenir le groupe {string}", (groupName: string) => {
  cy.get(".group-header").contains(groupName).should("exist");
});

Then("le menu ne devrait pas contenir le groupe {string}", (groupName: string) => {
  cy.get(".group-header").contains(groupName).should("not.exist");
});

// Vérification du magasin dans le menu
Then("le magasin affiché dans le menu devrait être {string}", (storeName: string) => {
  cy.get('.menu-store .user-name').should('contain', storeName);
});

// Bouton de connexion
When("je clique sur le bouton de connexion", () => {
  cy.get('button').click();
});
