import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Navigation vers la page de profil
When("je visite la page de gestion de profil", () => {
  cy.visit('/profile-management');
});

// Vérification des titres
Then("le titre de la page devrait être {string}", (title: string) => {
  cy.get('ui-title').should('contain', title);
});

Then("le sous-titre du thème devrait être {string}", (subtitle: string) => {
  cy.get('.theme-content .item-title').should('contain', subtitle);
});

Then("le sous-titre du mot de passe devrait être {string}", (subtitle: string) => {
  cy.get('.password-content .item-title').should('contain', subtitle);
});

Then("le sous-titre de la langue devrait être {string}", (subtitle: string) => {
  cy.get('.language-content .item-title').should('contain', subtitle);
});

// Gestion du thème
When("je clique sur le bouton thème {string}", (theme: string) => {
  if (theme === "light" || theme === "clair") {
    cy.get('.theme-content .theme-buttons ui-button').eq(0).click();
  } else if (theme === "dark" || theme === "sombre") {
    cy.get('.theme-content .theme-buttons ui-button').eq(1).click();
  }
});

Then("le thème de l'application devrait être {string}", (themeClass: string) => {
  cy.get('body').should('have.class', themeClass);
});

// Gestion de la langue
When("je sélectionne la langue à l'index {int}", (index: number) => {
  cy.get(`.code-language .fugu-country-radio-button:nth(0) .radio-options:nth(${index}) input:nth(0)`).check();
});

Then("la langue sélectionnée devrait être à l'index {int}", (index: number) => {
  cy.get(`.code-language .fugu-country-radio-button:nth(0) .radio-options:nth(${index}) input:nth(0)`).should('be.checked');
});

When("je clique sur le bouton sauvegarder la langue", () => {
  cy.intercept('/api/user/*').as('fetchUser');
  cy.get('.language-content .language-validate-button ui-button').eq(0).click();
  cy.wait('@fetchUser');
});

// Format de date
Then("le format de date sélectionné devrait être {string}", (format: string) => {
  cy.get('.date-format ui-list .selector-container .span-label').should('contain', format);
});

When("je sélectionne le format de date à l'index {int}", (index: number) => {
  cy.get('.fugu-list').eq(0).find('.selector').click();
  cy.get(`.select-option-solo`).eq(index).click();
});

Then("la liste de format de date devrait avoir {int} option(s)", (count: number) => {
  cy.get('.date-format .fugu-list').eq(0).should('have.attr', 'option-length', count.toString());
});

// Gestion du mot de passe
When("je remplis le champ mot de passe actuel avec {string}", (password: string) => {
  cy.get('.password-management-content .current-password .input-value').clear().type(password);
});

When("je remplis le champ nouveau mot de passe avec {string}", (password: string) => {
  cy.get('.password-management-content .new-password .input-value').clear().type(password);
});

When("je remplis le champ confirmation mot de passe avec {string}", (password: string) => {
  cy.get('.password-management-content .new-password-to-confirm .input-value').clear().type(password);
});

Then("les champs de mot de passe devraient être vides", () => {
  cy.get('.password-management-content .current-password .input-value').should('have.value', '');
  cy.get('.password-management-content .new-password .input-value').should('have.value', '');
  cy.get('.password-management-content .new-password-to-confirm .input-value').should('have.value', '');
});

When("je vide le champ mot de passe {string}", (fieldClass: string) => {
  cy.get(`.password-management-content ${fieldClass} input`).clear();
});

When("je vide et blur le champ mot de passe {string}", (fieldClass: string) => {
  cy.get(`.password-management-content ${fieldClass} input`).clear().blur();
});

When("je blur le champ mot de passe {string}", (fieldClass: string) => {
  cy.get(`.password-management-content ${fieldClass} input`).blur();
});

When("je clique sur le bouton sauvegarder le mot de passe", () => {
  cy.get('.password-management-content .validate-button ui-button').click();
});

// Messages d'erreur
Then("je devrais voir {int} message(s) d'erreur", (count: number) => {
  cy.get('.fugu-error-message').should('have.length', count);
});

Then("le premier message d'erreur devrait contenir {string}", (message: string) => {
  cy.get('.fugu-error-message').eq(0).should('contain', message);
});

// Messages toast
Then("je devrais voir un message toast de type {string}", (type: string) => {
  cy.get('ui-message').should('have.length', 1);
  cy.get('ui-message div.toast').should('have.class', type);
});

When("je ferme le message toast", () => {
  cy.get('ui-message fa-icon.close-icon').click();
  cy.get('ui-message').should('have.length', 0);
});

Then("le message toast devrait avoir le titre {string} et le contenu {string}", (title: string, content: string) => {
  cy.get('ui-message p').eq(0).should('contain', title);
  cy.get('ui-message p').eq(1).should('contain', content);
});

// Clic sur le titre
When("je clique sur le titre de la page de profil", () => {
  cy.get('ui-title').click();
});

// Labels
Then("le label de langue devrait être {string}", (label: string) => {
  cy.get('.code-language .fugu-country-radio-button:nth(0) label:nth(0)').should('contain', label);
});

Then("le label de format de date devrait être {string}", (label: string) => {
  cy.get('.date-format ui-list label').should('contain', label);
});

// Vérification des boutons
Then("le bouton de changement de mot de passe devrait être visible", () => {
  cy.get('.password-management-content .validate-button ui-button').should('be.visible');
});

Then("le bouton de changement de langue devrait être visible", () => {
  cy.get('.language-content .language-validate-button ui-button').eq(0).should('be.visible');
});

// Remplissage de champ de mot de passe par index
When("je remplis le champ de mot de passe {int} avec {string}", (index: number, value: string) => {
  cy.get('.password-management-content input').eq(index).clear().type(value);
});

// Vérification attributs HTML
Then("l'élément {string} devrait avoir l'attribut {string} avec la valeur {string}", (selector: string, attribute: string, value: string) => {
  cy.get(selector).should('have.attr', attribute, value);
});
