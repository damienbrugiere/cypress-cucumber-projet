import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Export
When("j'exporte la liste en {string} nommée {string}", (format: string, exportName: string) => {
  cy.intercept('/api/task/*/download').as('download');
  cy.get('.fugu-button-export').should('contain', 'Exporter la liste').click();
  cy.wait('@download');
  
  const downloadsFolder = Cypress.config('downloadsFolder');
  const path = require('path');
  const downloadedFilename = path.join(downloadsFolder, `${exportName}.${format}`);
  cy.readFile(downloadedFilename, 'binary', { timeout: 10000 }).should(buffer => expect(buffer.length).to.be.gt(100));
});

When("j'imprime la liste en PDF nommée {string}", (exportName: string) => {
  cy.intercept('/api/task/*/download').as('download');
  cy.get('.button-print').should('contain', 'Imprimer la liste').click();
  cy.wait('@download');
  
  const downloadsFolder = Cypress.config('downloadsFolder');
  const path = require('path');
  const downloadedFilename = path.join(downloadsFolder, `${exportName}.pdf`);
  cy.readFile(downloadedFilename, 'binary', { timeout: 10000 }).should(buffer => expect(buffer.length).to.be.gt(100));
});

Then("le bouton d'export PDF devrait être désactivé", () => {
  cy.get('.print-button .fugu-button').should('be.disabled');
});

Then("le bouton d'export PDF devrait être activé", () => {
  cy.get('.print-button .fugu-button').should('not.be.disabled');
});

// Import
When("j'importe le fichier {string}", (fileName: string) => {
  const filePath = `imports/${fileName}`;
  cy.wait(2000);
  cy.intercept('/api/task?*').as('fetchTasks');
  cy.get('ui-input-file input').attachFile(filePath);
  cy.wait('@fetchTasks');
});

Then("l'import devrait avoir le statut {string}", (importStatus: string) => {
  cy.get('.datatable-body-row').should('not.have.length', 0);
  cy.get('.fugu-status').should('contain', importStatus);
  cy.get('.datatable-body-row').eq(0).find('.datatable-body-cell').eq(1).should('contain', importStatus);
});

Then("l'import à la ligne {int} devrait avoir le statut {string} et {string} menu", (rowNumber: number, importStatus: string, hasMenuText: string) => {
  const hasMenu = hasMenuText === 'avec' || hasMenuText === 'un';
  cy.get('.datatable-body-row').eq(rowNumber).within(() => {
    cy.get('.fugu-status').should('contain', importStatus);
    if (hasMenu) {
      cy.get('.menu-icon').should('exist');
    } else {
      cy.get('.menu-icon').should('not.exist');
    }
  });
});

When("je télécharge le template d'import pour {string}", (targetName: string) => {
  cy.get('.step-link:nth(0) ui-link .link-text').should('contain', `Template import`);
  cy.get('.step-link:nth(0) ui-link .link-text').click();
  
  const downloadsFolder = Cypress.config('downloadsFolder');
  const path = require('path');
  const downloadedFilename = path.join(downloadsFolder, `export_${targetName}.xlsx`);
  cy.readFile(downloadedFilename, 'binary', { timeout: 5000 }).should(buffer => expect(buffer.length).to.be.gt(100));
});

When("je télécharge le fichier importé {string}", (fileName: string) => {
  cy.get('.step-link:nth(1) ui-link .link-text').should('contain', fileName);
  cy.get('.step-link:nth(1) ui-link .link-text').click();
  
  const downloadsFolder = Cypress.config('downloadsFolder');
  const path = require('path');
  const downloadedFilename = path.join(downloadsFolder, fileName);
  cy.readFile(downloadedFilename, 'binary', { timeout: 5000 }).should(buffer => expect(buffer.length).to.be.gt(100));
});

When("j'ouvre le détail des erreurs de la ligne {int}", (rowNumber: number) => {
  cy.get('.datatable-body-row').eq(rowNumber).find('.menu-icon').first().click();
  cy.get('.menu-actions .menu-item')
    .filter(':contains("Voir le détail")')
    .trigger('click');
});

Then("la popup de détail devrait afficher les erreurs {string}", (errorsString: string) => {
  const errors = errorsString.split(',').map(e => e.trim());
  cy.get('.popup-header .title').should('have.text', 'Détail import');
  errors.forEach((value, index) => {
    cy.get('.popup-content .error-line').eq(index).invoke('text').should('contain', value);
  });
});

// Drag and Drop
When("je fais un glisser-déposer de l'index {int} vers l'index {int}", (sourceIndex: number, targetIndex: number) => {
  cy.dragAndDrop(sourceIndex, targetIndex, '.dropList', '.drag-handle');
});

When("je fais un glisser-déposer personnalisé de {int} vers {int} avec le sélecteur {string} et {string}", 
  (sourceIndex: number, targetIndex: number, selectorGrid: string, selectorDrag: string) => {
  cy.dragAndDrop(sourceIndex, targetIndex, selectorGrid, selectorDrag);
});
