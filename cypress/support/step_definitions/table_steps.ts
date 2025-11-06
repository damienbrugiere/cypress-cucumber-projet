import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Vérification du nombre de lignes
Then("le tableau devrait avoir {int} ligne(s)", (lineNumber: number) => {
  if (lineNumber !== 0) {
    cy.get('.datatable-body-row', { timeout: 50000 }).should('have.length', lineNumber);
  } else {
    cy.get('.datatable-body .empty-row').should('contain', 'Pas de données');
  }
});

Then("le tableau ne devrait pas avoir {int} ligne(s)", (lineNumber: number) => {
  cy.get('.datatable-body-row').should('not.have.length', lineNumber);
});

// Vérification des en-têtes
Then("les en-têtes du tableau devraient être {string}", (headersString: string) => {
  const headers = headersString.split(',').map(h => h.trim());
  headers.forEach((value, index) => 
    cy.get('.datatable-header-cell-label').eq(index).should('contain', value)
  );
});

// Vérification d'une ligne
Then("la ligne {int} devrait être désactivée", (rowNumber: number) => {
  cy.get('.datatable-body-row').eq(rowNumber).should('have.class', 'disabled');
});

Then("la ligne {int} devrait être en erreur", (rowNumber: number) => {
  cy.get('.datatable-body-row').eq(rowNumber).should('have.class', 'inError');
});

Then("la ligne {int} devrait avoir le statut {string}", (rowNumber: number, status: string) => {
  cy.get('.datatable-body-row').eq(rowNumber).get('.fugu-status').should('contain', status);
});

// Tri
When("je trie le tableau par la colonne {string}", (columnName: string) => {
  cy.get('.datatable-header').find('.datatable-header-cell').contains(columnName).should('exist').trigger('click');
  cy.wait(1000);
});

// Remplissage de ligne
When("je remplis la ligne {int} colonne {int} avec {string}", (rowNumber: number, index: number, value: string) => {
  cy.get('.datatable-body-row').eq(rowNumber).should('exist')
    .find('.fugu-list,.input-value,.fugu-radio-button,.fugu-country-radio-button,.fugu-checkbox, .textarea-value, .fugu-switch, .fugu-file-handler')
    .eq(index).as('selector');
  
  cy.get('@selector').should('exist').then($el => {
    $el[0].scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'center' });
  }).then($element => {
    const element = cy.wrap($element);
    
    if ($element.hasClass('fugu-list')) {
      // Dropdown
      element.click()
        .then(() => cy.get('.select-option').should('be.visible'))
        .then(() => {
          const selector = value !== '$' ? new RegExp('^' + value + '$') : value;
          return cy.get('.select-option').contains(selector).click();
        })
        .wait(1000);
    } else if (typeof value === 'boolean') {
      // Checkbox
      const checkbox = element.find('[type="checkbox"]');
      value ? checkbox.check({ force: true }) : checkbox.uncheck({ force: true });
      cy.wait(1000);
    } else {
      // Input
      value != null ? element.clear({ force: true }).type(String(value), { force: true }) : element.clear({ force: true });
    }
  });
});

When("je coche la ligne {int} colonne {int}", (rowNumber: number, index: number) => {
  cy.get('.datatable-body-row').eq(rowNumber)
    .find('.fugu-checkbox, .fugu-switch')
    .eq(index)
    .find('[type="checkbox"]')
    .check({ force: true });
  cy.wait(1000);
});

When("je décoche la ligne {int} colonne {int}", (rowNumber: number, index: number) => {
  cy.get('.datatable-body-row').eq(rowNumber)
    .find('.fugu-checkbox, .fugu-switch')
    .eq(index)
    .find('[type="checkbox"]')
    .uncheck({ force: true });
  cy.wait(1000);
});

// État des champs de ligne
Then("la ligne {int} colonne {int} devrait être désactivée", (rowNumber: number, index: number) => {
  cy.get('.datatable-body-row').eq(rowNumber)
    .find('.fugu-list,.input-value,.fugu-radio-button,.fugu-country-radio-button,.fugu-checkbox, .textarea-value, .fugu-switch, .fugu-file-handler')
    .eq(index)
    .then($formElement => {
      if ($formElement.hasClass('fugu-list')) {
        cy.wrap($formElement).should('have.class', 'fugu-list-disabled');
      } else if ($formElement.hasClass('fugu-checkbox') || $formElement.hasClass('fugu-switch')) {
        cy.wrap($formElement).find('[type="checkbox"]').should('be.disabled');
      } else {
        cy.wrap($formElement).should('be.disabled');
      }
    });
});

Then("la ligne {int} colonne {int} devrait être activée", (rowNumber: number, index: number) => {
  cy.get('.datatable-body-row').eq(rowNumber)
    .find('.fugu-list,.input-value,.fugu-radio-button,.fugu-country-radio-button,.fugu-checkbox, .textarea-value, .fugu-switch, .fugu-file-handler')
    .eq(index)
    .then($formElement => {
      if ($formElement.hasClass('fugu-list')) {
        cy.wrap($formElement).should('not.have.class', 'fugu-list-disabled');
      } else if ($formElement.hasClass('fugu-checkbox') || $formElement.hasClass('fugu-switch')) {
        cy.wrap($formElement).find('[type="checkbox"]').should('not.be.disabled');
      } else {
        cy.wrap($formElement).should('not.be.disabled');
      }
    });
});

// Message d'erreur sur ligne
Then("la ligne {int} colonne {int} devrait afficher l'erreur {string}", (rowNumber: number, index: number, errorMessage: string) => {
  const input = cy.get('.datatable-body-row').eq(rowNumber).find('.input-value, .fugu-checkbox, .fugu-switch').eq(index).parent();
  input.within(() => {
    cy.get('.status-icon').trigger('mouseenter', { force: true });
  });
  cy.document().its('body').find('.popper').should('be.visible');
  cy.document().its('body').find('.popper').should('contain', errorMessage);
  input.within(() => {
    cy.get('.status-icon').trigger('mouseleave', { force: true });
  });
});

// Menu de ligne
When("j'ouvre le menu de la ligne {int}", (rowNumber: number) => {
  cy.get('.datatable-body-row').eq(rowNumber).find('.menu-icon').first().click();
});

Then("le menu de la ligne {int} ne devrait pas exister", (rowNumber: number) => {
  cy.get(`.datatable-body-row:nth(${rowNumber}) .menu-icon`).should('not.exist');
});

Then("le menu de la ligne {int} devrait avoir {int} option(s)", (rowIndex: number, number: number) => {
  cy.get('.datatable-body-row').eq(rowIndex).within(() => {
    if (number === 0) {
      cy.get('.menu-icon').should('not.exist');
      return;
    }
    cy.get('.menu-icon').click();
  });
  cy.get('.menu-actions .menu-item').should('have.length', number);
});

Then("le menu devrait contenir les options {string}", (optionsString: string) => {
  const options = optionsString.split(',').map(opt => opt.trim());
  cy.get('.menu-actions').within(() => {
    options.forEach(opt => {
      cy.get('.menu-item').should('contain', opt);
    });
  });
});

When("je clique sur l'option de menu {string}", (actionName: string) => {
  cy.get('.menu-actions .menu-item')
    .filter(':contains("' + actionName + '")')
    .should('contain', actionName)
    .trigger('click');
});

// Actions sur les lignes
When("je modifie la ligne {int}", (rowNumber: number) => {
  cy.get('.datatable-body-row').eq(rowNumber).find('.menu-icon').first().click();
  cy.get('.menu-actions .menu-item')
    .filter(':contains("Editer")')
    .trigger('click');
});

When("je clique sur la ligne {int}", (rowNumber: number) => {
  cy.get('.datatable-body-row').eq(rowNumber).click();
});

When("je clique sur la ligne {int} colonne {int}", (rowIndex: number, cellIndex: number) => {
  cy.get(`.datatable-body-row:nth(${rowIndex}) .datatable-body-cell:nth(${cellIndex})`).click({ force: true });
});

When("je supprime la ligne {int}", (rowNumber: number) => {
  cy.get('.datatable-body-row').eq(rowNumber).find('.menu-icon').first().click();
  cy.get('.menu-actions .menu-item')
    .filter(':contains("Supprimer")')
    .trigger('click');
});

When("je confirme la suppression", () => {
  cy.get('.confirm-button').should('exist').click();
});

When("j'annule la suppression", () => {
  cy.get('.cancel-button').should('exist').click();
  cy.get('.popup-header .title').should('not.exist');
});

// Checkbox
When("je coche la checkbox d'en-tête", () => {
  cy.get('.datatable-header .fugu-checkbox:nth(0)').click();
});

When("je sélectionne la checkbox de la ligne {int}", (rowNumber: number) => {
  cy.get('.datatable-body-row').eq(rowNumber).find('.fugu-checkbox').first().click();
});

// Scroll
When("je scroll le tableau vers {string}", (direction: string) => {
  cy.get('datatable-body').scrollTo(direction);
});

When("je scroll le tableau à la position {string} {string} {string} {string}", (pos1: string, pos2: string, pos3: string, pos4: string) => {
  cy.get('datatable-body').scrollTo(pos1, pos2, pos3, pos4);
});

// Switch et autres actions
When("je clique sur le switch contenant {string}", (searchedValue: string) => {
  cy.contains('.datatable-body-row', searchedValue).within(() => {
    cy.get('.fugu-switch').click();
  });
});

When("je clique sur le stylo {int} contenant {string}", (index: number, searchedValue: string) => {
  cy.contains('.datatable-body-row', searchedValue).within(() => {
    cy.get('.fa-pen').eq(index).click({ force: true });
  });
});

When("je clique sur le lien de la ligne {int} colonne {int}", (lineIdx: number, cellIdx: number) => {
  const cell = `.datatable-row-wrapper:nth-child(${lineIdx + 1}) .datatable-body-cell:nth-child(${cellIdx + 1}) .link-text`;
  cy.get(cell).trigger('click');
});

// Popper / Tooltip
Then("le popper de la ligne {int} colonne {int} devrait afficher {int} éléments {string}", (lineIdx: number, cellIdx: number, count: number, valuesString: string) => {
  const values = valuesString.split(',').map(v => v.trim());
  const uiCounterSelector = `.datatable-row-wrapper:nth-child(${lineIdx + 1}) .datatable-body-cell:nth-child(${cellIdx + 1}) ui-counter`;
  
  cy.get('datatable-body').scrollTo('right');
  cy.get('.popper').should('not.exist');
  
  if (values.length === 0) {
    cy.get(uiCounterSelector).should('not.exist');
    return;
  }
  
  cy.get(uiCounterSelector)
    .contains(new RegExp(`^${count}$`))
    .scrollIntoView()
    .trigger('mouseenter');
  
  cy.get('.popper', { timeout: 1000 }).should('be.visible');
  
  values.forEach(value => {
    cy.get('.popper').invoke('text').should('include', value);
  });
  
  cy.get(uiCounterSelector)
    .contains(new RegExp(`^${count}$`))
    .trigger('mouseleave');
});

Then("l'info bulle de la ligne {int} colonne {int} devrait afficher {string}", (lineIdx: number, cellIdx: number, value: string) => {
  const uiTooltipSelector = `.datatable-row-wrapper:nth-child(${lineIdx + 1}) .datatable-body-cell:nth-child(${cellIdx + 1}) .tooltip`;
  
  cy.get(uiTooltipSelector).trigger('mouseenter');
  cy.get('.popper').contains(value).should('exist');
  cy.get(uiTooltipSelector).trigger('mouseleave');
});

// Bouton prorata
When("je clique sur le bouton prorata {int} de la ligne {int}", (buttonIndex: number, rowIndex: number) => {
  cy.get('.datatable-body-row').eq(rowIndex).find('.input-uom ui-button').eq(buttonIndex).click({ force: true });
});
