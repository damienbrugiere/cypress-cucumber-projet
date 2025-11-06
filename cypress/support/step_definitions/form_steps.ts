import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Remplissage de formulaire
When("je remplis le champ {string} avec {string}", (fieldName: string, value: string) => {
  const formValue = cy.get(`[formcontrolname="${fieldName}"], [name="${fieldName}"]`).find('.selector-container,.input-value,.fugu-radio-button,.fugu-country-radio-button,.fugu-checkbox, .textarea-value, .fugu-switch, .fugu-file-handler');
  
  formValue.then($formValue => {
    if ($formValue.hasClass('selector-container')) {
      cy.get($formValue).click();
      cy.get('.select-option').should('exist');
      const contains = value !== '$' ? new RegExp('^' + value + '$') : value;
      cy.get('.select-option').contains(contains).click();
      cy.wait(1000);
      cy.get(`[formcontrolname="${fieldName}"], [name="${fieldName}"]`).click({ force: true });
    } else if ($formValue.hasClass('fugu-checkbox') || $formValue.hasClass('fugu-switch')) {
      formValue.find('[type="checkbox"]').check({ force: true });
      cy.wait(1000);
    } else if (value) {
      formValue.clear({ force: true }).type(value, { force: true });
      cy.get(`[formcontrolname="${fieldName}"], [name="${fieldName}"]`).find('label').click({ force: true });
    }
  });
});

When("je coche le champ {string}", (fieldName: string) => {
  cy.get(`[formcontrolname="${fieldName}"], [name="${fieldName}"]`)
    .find('.fugu-checkbox, .fugu-switch')
    .find('[type="checkbox"]')
    .check({ force: true });
  cy.wait(1000);
});

When("je décoche le champ {string}", (fieldName: string) => {
  cy.get(`[formcontrolname="${fieldName}"], [name="${fieldName}"]`)
    .find('.fugu-checkbox, .fugu-switch')
    .find('[type="checkbox"]')
    .uncheck({ force: true });
  cy.wait(1000);
});

When("je sélectionne l'option radio {int} du champ {string}", (index: number, fieldName: string) => {
  cy.get(`[formcontrolname="${fieldName}"], [name="${fieldName}"]`)
    .find('.fugu-radio-button')
    .find(`[type="radio"]:nth(${index})`)
    .click({ force: true });
  cy.wait(1000);
});

When("je vide le champ {string}", (fieldName: string) => {
  cy.get(`[formcontrolname="${fieldName}"], [name="${fieldName}"]`)
    .find('.input-value, .textarea-value')
    .clear({ force: true });
});

When("j'attache le fichier {string} au champ {string}", (fileName: string, fieldName: string) => {
  cy.get(`[formcontrolname="${fieldName}"], [name="${fieldName}"]`)
    .find('.fugu-file-handler')
    .find('input')
    .attachFile(fileName);
  cy.wait(1000);
});

// Vérification de valeurs
Then("le champ {string} devrait avoir la valeur {string}", (fieldName: string, value: string) => {
  const formValue = cy.get(`[formcontrolname="${fieldName}"], [name="${fieldName}"]`).find('.selector-container,.input-value,.fugu-radio-button,.fugu-country-radio-button,.fugu-checkbox, .textarea-value, .fugu-switch, .fugu-file-handler');
  
  formValue.then($formValue => {
    if ($formValue.hasClass('fugu-radio-button') || $formValue.hasClass('fugu-country-radio-button')) {
      cy.get($formValue).find('[type="radio"]').eq(parseInt(value)).should('be.checked');
    } else if ($formValue.hasClass('fugu-checkbox') || $formValue.hasClass('fugu-switch')) {
      cy.get($formValue).find('[type="checkbox"]').should('be.checked');
    } else if ($formValue.hasClass('selector-container')) {
      if ($formValue.find('.span-label')?.hasClass('span-label')) {
        cy.get($formValue).find('.span-label')?.should('contain', value);
      } else if ($formValue.find('.search-input')?.hasClass('search-input')) {
        cy.get($formValue).find('.search-input')?.should('have.attr', 'placeholder', value);
      }
    } else if ($formValue.hasClass('fugu-file-handler')) {
      cy.get($formValue).find('img').should('have.attr', 'src').should('include', value);
    } else if (!value) {
      cy.get($formValue).should('be.empty');
    } else {
      cy.get($formValue).should('have.value', value);
    }
  });
});

Then("le champ {string} ne devrait pas être coché", (fieldName: string) => {
  cy.get(`[formcontrolname="${fieldName}"], [name="${fieldName}"]`)
    .find('.fugu-checkbox, .fugu-switch')
    .find('[type="checkbox"]')
    .should('not.be.checked');
});

Then("le champ {string} devrait être vide", (fieldName: string) => {
  cy.get(`[formcontrolname="${fieldName}"], [name="${fieldName}"]`)
    .find('.input-value, .textarea-value')
    .should('be.empty');
});

// État des champs
Then("le champ {string} devrait être désactivé", (fieldName: string) => {
  cy.get(`[formcontrolname="${fieldName}"], [name="${fieldName}"]`).then($formElement => {
    if ($formElement.prop('tagName') === 'UI-LIST') {
      cy.get($formElement).find('.fugu-list').should('have.class', 'fugu-list-disabled');
    } else {
      cy.get($formElement).find('input').should('be.disabled');
    }
  });
});

Then("le champ {string} devrait être activé", (fieldName: string) => {
  cy.get(`[formcontrolname="${fieldName}"], [name="${fieldName}"]`).then($formElement => {
    if ($formElement.prop('tagName') === 'UI-LIST') {
      cy.get($formElement).find('.fugu-list').should('not.have.class', 'fugu-list-disabled');
    } else {
      cy.get($formElement).find('input').should('not.be.disabled');
    }
  });
});

Then("le champ {string} ne devrait pas exister", (fieldName: string) => {
  cy.get(`ui-input [formcontrolname="${fieldName}"], ui-input [name="${fieldName}"]`).should('not.exist');
});

// Messages d'erreur
Then("le formulaire devrait avoir {int} erreur(s)", (errorsNumber: number) => {
  if (errorsNumber === 0) {
    cy.get('.form-content').find('.fugu-error-message').should('not.exist');
  } else {
    cy.get('.form-content').find('.fugu-error-message').should('have.length', errorsNumber);
  }
});

Then("le champ {string} devrait afficher l'erreur {string}", (fieldName: string, errorMessage: string) => {
  cy.get(`[formcontrolname="${fieldName}"], [name="${fieldName}"]`)
    .find('.fugu-error-message')
    .should('contain', errorMessage);
});

Then("le champ {string} ne devrait pas avoir d'erreur", (fieldName: string) => {
  cy.get(`[formcontrolname="${fieldName}"], [name="${fieldName}"]`)
    .find('.fugu-error-message')
    .should('not.exist');
});

When("je déclenche l'erreur de validation sur le champ {string}", (fieldName: string) => {
  const formValue = cy.get(`[formcontrolname="${fieldName}"], [name="${fieldName}"]`).find('.selector-container,.input-value,.fugu-radio-button,.fugu-country-radio-button,.fugu-checkbox, .textarea-value, .fugu-switch, .fugu-file-handler');
  formValue.then($formValue => {
    if ($formValue.find('.fugu-date-picker')) {
      formValue.click();
      cy.get(`[formcontrolname="${fieldName}"], [name="${fieldName}"]`).find('label').click();
    } else {
      formValue.focus().blur();
    }
  });
});

// Actions sur le formulaire
When("je sauvegarde le formulaire", () => {
  cy.get('.fugu-button-save').click();
  cy.wait(1000);
});

When("je valide le formulaire", () => {
  cy.get('.fugu-button-validate').click();
});

When("je clique sur le bouton ajouter", () => {
  cy.get('.button-add button').click();
});

When("je clique sur le bouton supprimer", () => {
  cy.get('.button-change:nth(0)').click();
});

// Options de liste
Then("le champ {string} devrait avoir les options {string}", (fieldName: string, optionsString: string) => {
  const options = optionsString.split(',').map(opt => opt.trim());
  const formValue = cy.get(`[formcontrolname="${fieldName}"], [name="${fieldName}"]`).find('.selector-container');
  
  formValue.then($formValue => {
    cy.get($formValue).click();
    cy.get('.select-option').should('have.length', options.length);
    options.forEach((value, index) => {
      cy.get('.select-option').eq(index).contains(value);
    });
  });
});

// Options radio
Then("le champ {string} devrait avoir les options radio {string}", (fieldName: string, optionsString: string) => {
  const options = optionsString.split(',').map(opt => opt.trim());
  cy.get(`[formcontrolname="${fieldName}"], [name="${fieldName}"]`)
    .find('.radio-options label')
    .each((label, index) => {
      cy.get(label).should('contain', options[index]);
    });
});

// Tags
When("je sélectionne le tag à l'index {int} et vérifie la valeur {string}", (index: number, value: string) => {
  cy.get('.fugu-tag-handler .fugu-list').click();
  cy.get(`.select-option:nth(${index})`).click();
  cy.get('.fugu-tag').should('contain', value);
});

// Couleurs
When("je sélectionne la couleur à l'index {int}", (nth: number) => {
  cy.get('ui-color-picker .fugu-color-sticker').click();
  cy.get(`.color-picker-container .fugu-color-circle:nth(${nth})`).click();
  cy.get('ui-color-picker .fugu-color-sticker').click();
});

Then("le champ couleur devrait avoir la valeur {string}", (value: string) => {
  cy.get('.popup-container .fugu-color-sticker').should('have.css', 'background-color', value);
});

// Messages toast
Then("je devrais voir le message {string} avec le contenu {string} de type {string}", (title: string, message: string, type: string) => {
  cy.get('ui-message').should('have.length', 1);
  cy.get('ui-message p:nth(0)').should('contain', title);
  cy.get('ui-message p:nth(1)').should('contain', message);
  cy.get('ui-message div.toast').should('have.class', type);
  cy.get('ui-message fa-icon.close-icon').click();
  cy.get('ui-message').should('have.length', 0);
});

// Stages
When("je change vers l'étape {int}", (index: number) => {
  cy.get(`.align-stages div.stage:nth(${index})`).click({ force: true });
  cy.wait(1000);
});

// Input rafraîchissable
When("je clique sur le bouton rafraîchir du champ {string}", (fieldName: string) => {
  cy.get(`[formcontrolname="${fieldName}"], [name="${fieldName}"]`)
    .find('ui-button')
    .click({ force: true });
});
