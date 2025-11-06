import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Sélection de filtres
When("je sélectionne les filtres {string}", (filtersString: string) => {
  const filters = filtersString.split(',').map(f => f.trim());
  cy.get('ui-dynamic-filters .selector:nth(0)').click({force: true});
  filters.forEach(name => {
    cy.get('.select-option').contains(new RegExp(name)).click();
  });
  cy.get('.fugu-filters .list-label:nth(0)').click({force: true});
});

// Remplissage de filtres
When("je remplis le filtre {int} avec {string}", (index: number, value: string) => {
  const el = cy.get('.filter-container').find('.selector-container,.input-value,.slider').eq(index);
  el.then(($el) => {
    if ($el.hasClass('selector-container')) {
      cy.wrap($el).click();
      cy.get('.select-option').should('exist');
      cy.get('.select-option').should('contain', value).contains(new RegExp("^" + value + "$")).click();
      cy.wrap($el).click();
    } else if ($el.hasClass('slider')) {
      cy.wrap($el).click();
      cy.wait(500);
    } else if (value) {
      el.clear().type(value, {force: true});
    } else {
      el.clear();
    }
  });
});

// Application des filtres
When("je clique sur le bouton appliquer les filtres", () => {
  cy.get('.fugu-filters .fugu-button').click();
  cy.wait(500);
});

// Vérification des filtres
Then("les filtres devraient être {string}", (filtersString: string) => {
  const filters = filtersString.split(',').map(f => f.trim());
  filters.forEach((n, index) => 
    cy.get('.filter-container .daddy .input-label, .filter-container .daddy .list-label, .filter-container .daddy .label')
      .eq(index)
      .should('contain', n)
  );
});

Then("le filtre {int} devrait être {string} avec la valeur {string}", (indexOfFilter: number, filterName: string, value: string) => {
  cy.get('.filter-container .daddy .input-label, .filter-container .daddy .list-label, .filter-container .daddy .label')
    .eq(indexOfFilter)
    .should('contain', filterName);
  
  const elements = cy.get('.filter-container').eq(indexOfFilter).find('.selector-container,.input-value,.slider');
  elements.then($el => {
    if ($el[0]?.children[0]?.children[1]?.classList.contains('search-input')) {
      cy.wrap($el[0].children[0]).find('.search-input').should('have.attr', 'placeholder', value);
    } else if ($el.hasClass('selector-container')) {
      cy.wrap($el).find('.span-label').should('contain', value);
    } else {
      cy.wrap($el).should('have.value', value);
    }
  });
});

Then("le nombre de filtres disponibles devrait être {int}", (number: number) => {
  cy.get('.fugu-list:nth(0)').should('have.attr', 'option-length', number.toString());
});

Then("le nombre de filtres actifs devrait être {int}", (number: number) => {
  if (number === 0) {
    cy.get('.filter-container').should('not.exist');
  } else {
    cy.get('.filter-container').find('label').should('have.length', number);
  }
});

// Suppression de filtres
When("je supprime tous les filtres", () => {
  cy.get('ui-dynamic-filters .filter-container span.delete').each(() => {
    cy.get('ui-dynamic-filters .filter-container span.delete:nth(0)').click({force: true});
    cy.wait(100);
  });
});

When("je supprime le filtre {int}", (index: number) => {
  cy.get(`ui-dynamic-filters .filter-container span.delete:nth(${index})`).click({force: true});
  cy.wait(100);
});

// Vérification des options du dropdown
Then("les options du filtre devraient être {string}", (optionsString: string) => {
  const options = optionsString.split(',').map(opt => opt.trim());
  options.forEach(n => cy.get('.select-option').should('contain', n));
});
