import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Navigation dans le menu
When("je clique sur l'élément de menu {int}", (index: number) => {
  cy.get(`ui-menu-v2-group:nth(${index})`).click();
});

When("je clique sur le sous-élément de menu {int} {int}", (menuIndex: number, itemIndex: number) => {
  cy.get(`ui-menu-v2-group:nth(${menuIndex}) div.menu-item:nth(${itemIndex})`).click();
  cy.get(`ui-menu-v2-group:nth(${menuIndex}) div.menu-item:nth(${itemIndex})`).should('have.class', 'menu-item-selected');
});

When("je clique sur gérer mon profil", () => {
  cy.get(`ui-menu-v2-group:nth(8) div.menu-item:nth(0)`).click();
});

// Vérification du menu
Then("le menu devrait être affiché correctement", () => {
  cy.get(`ui-menu-v2-group:nth(0) div.menu-item:nth(0) div.menu-item-title`).should('contain', "Accueil");
  cy.get(`ui-menu-v2 .menu-groups`).children(`ui-menu-v2-group`).should('have.length', 8);
  cy.get(`ui-menu-v2-group:nth(1) div.group-items`).children('div').should('have.length', 3);
  cy.get(`ui-menu-v2-group:nth(2) div.group-items`).children('div').should('have.length', 3);
  cy.get(`ui-menu-v2-group:nth(3) div.group-items`).children('div').should('have.length', 4);
  cy.get(`ui-menu-v2-group:nth(4) div.group-items`).children('div').should('have.length', 5);
  cy.get(`ui-menu-v2-group:nth(5) div.group-items`).children('div').should('have.length', 2);
});

// État du menu
Then("le menu des paramètres devrait être {string}", (state: string) => {
  const collapsed = state === 'réduit' || state === 'collapsed';
  cy.get(`ui-menu-v2-group:nth(6) div.group-items`).should(collapsed ? 'have.css' : 'not.have.css', 'height', '0px');
});

When("je {string} le menu", (action: string) => {
  const collapse = action === 'réduis' || action === 'collapse';
  cy.get(collapse ? 'div.menu-trigger' : 'div.menu-header-secondary').click();
  cy.get('ui-menu-v2 aside').should('have.css', 'width', collapse ? '64px' : '260px');
});

Then("le menu devrait être {string}", (state: string) => {
  const collapsed = state === 'réduit' || state === 'collapsed';
  cy.get('ui-menu-v2 aside').should('have.css', 'width', collapsed ? '64px' : '260px');
});

// Sélection
Then("le sous-élément {int} {int} devrait être sélectionné", (menuIndex: number, itemIndex: number) => {
  cy.get(`ui-menu-v2-group:nth(${menuIndex}) div.menu-item:nth(${itemIndex})`).should('have.class', 'menu-item-selected');
});

Then("le sous-élément {int} {int} ne devrait pas être sélectionné", (menuIndex: number, itemIndex: number) => {
  cy.get(`ui-menu-v2-group:nth(${menuIndex}) div.menu-item:nth(${itemIndex})`).should('not.have.class', 'menu-item-selected');
});

// Bouton Freshdesk
When("je clique sur le bouton Freshdesk", () => {
  cy.get('.fugu-button').click();
});
