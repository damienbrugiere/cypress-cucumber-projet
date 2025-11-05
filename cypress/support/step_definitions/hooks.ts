import { Before } from "@badeball/cypress-cucumber-preprocessor";
import {After } from '@badeball/cypress-cucumber-preprocessor';

Before({ tags: "@slow" }, () => {
  // Ralentir les commandes
  Cypress.on('command:start', (command) => {
    return new Promise(resolve => setTimeout(resolve, 3000)); // 500ms entre chaque commande
  });

  // Ajouter un curseur visuel
  cy.document().then((doc) => {
    const cursor = doc.createElement('div');
    cursor.id = 'cypress-mouse-cursor';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.backgroundColor = 'red';
    cursor.style.borderRadius = '50%';
    cursor.style.position = 'absolute';
    cursor.style.zIndex = '9999';
    cursor.style.pointerEvents = 'none';
    cursor.style.transition = 'transform 0.1s linear';
    doc.body.appendChild(cursor);

    // Mettre à jour la position du curseur à chaque mouvement
    doc.addEventListener('mousemove', (e) => {
      cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    });
  });
});

let takeScreenshots = false;

Before(function(scenario) {
  // Vérifier si le tag @screenshot est présent
  takeScreenshots = scenario.pickle.tags.some(tag => tag.name === '@screenshot');
  
  if (takeScreenshots) {
    console.log('📸 Screenshots activés pour ce scénario');
  }
});

After(function() {
  takeScreenshots = false;
});

// Créer une custom command avec screenshot natif
Cypress.Commands.add('clickWithScreenshot', (selector: string, name?: string) => {
  cy.get(selector).then(($el) => {
    if (takeScreenshots) {
      
      
      $el.css('box-shadow', '0 0 0 4px red');
      const fileName = `click_${name || Date.now()}`;
      const specPath = Cypress.spec.relative.replace(/\\/g, '/').split('/').slice(0, -1).join('/');
      
      // Screenshot de l'élément uniquement avec Cypress screenshot
      cy.get(selector).screenshot(`${specPath}/${fileName}`, {
        padding: 300,
        scale: true
      });
    }
    
    cy.wrap($el).click();
  });
});

// Custom command pour zoomer et encadrer sans cliquer
Cypress.Commands.add('highlightAndScreenshot', (selector: string, name?: string) => {
  cy.get(selector).then(($el) => {
    if (takeScreenshots) {
      
      cy.wrap($el).then(($element) => {
        const originalBorder = $element.css('box-shadow');
        
        // Encadrement rouge
        $element.css('box-shadow', '0 0 0 4px red');
        
        const rect = $element[0].getBoundingClientRect();
        const padding = 300;
        
        // Calculer la zone de zoom avec 300px de padding
        const clipX = Math.max(0, rect.left - padding);
        const clipY = Math.max(0, rect.top - padding);
        const maxWidth = Math.max(rect.width + padding * 2, 500);
        const maxHeight = Math.max(rect.height + padding * 2, 500);
        const clipWidth = Math.min(window.innerWidth - clipX, maxWidth);
        const clipHeight = Math.min(window.innerHeight - clipY, maxHeight);
        
        // Screenshot zoomé
        cy.screenshot(`highlight_${name || Date.now()}`);
        
        // Restaurer le style
        $element.css('box-shadow', originalBorder);
      });
    }
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      clickWithScreenshot(selector: string, name?: string): Chainable<void>;
      highlightAndScreenshot(selector: string, name?: string): Chainable<void>;
    }
  }
}

export {};