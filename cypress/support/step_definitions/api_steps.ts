import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Restauration de la base de données
Given("que la base de données est restaurée", () => {
  cy.restoreDatabase();
});

// Création de données de test via API
Given("qu'une marque avec des collections existe", () => {
  // Cette step definition nécessite l'implémentation de Mocker et mockBrand1
  // Pour l'instant, on laisse un placeholder
  cy.log("Création de la marque avec collections via API");
  // cy.callApi("/api/brand", "POST", brand1);
});

// Rechargement de la page
When("je recharge la page", () => {
  cy.reload();
});

// Vérification de contenu de cellule
Then("la ligne {int} colonne {int} devrait contenir {string}", (row: number, col: number, value: string) => {
  cy.get('.fugu-table tbody tr').eq(row).find('td').eq(col).should('contain', value);
});
