# Configuration du Projet cypress-cucumber-projet

## Installation des Dépendances

### Packages Requis

Le projet nécessite l'installation du package `cypress-file-upload` pour gérer l'upload de fichiers dans les tests.

```bash
npm install --save-dev cypress-file-upload
```

## Commandes Personnalisées Cypress

Les commandes personnalisées suivantes ont été ajoutées dans `cypress/support/commands.ts` :

### 1. `dragAndDrop`
Effectue un glisser-déposer d'un élément vers une nouvelle position.

```typescript
cy.dragAndDrop(0, 2); // Déplace l'élément de l'index 0 vers l'index 2
cy.dragAndDrop(0, 2, '.custom-grid', '.custom-handle'); // Avec sélecteurs personnalisés
```

### 2. `clickSwitch`
Clique sur un switch (toggle).

```typescript
cy.clickSwitch('.fugu-switch');
```

### 3. `checkPrice`
Vérifie qu'un prix contient une valeur et une devise.

```typescript
cy.checkPrice('.price', '99.99', '€');
```

### 4. `checkMessage`
Vérifie l'affichage d'un message toast.

```typescript
cy.checkMessage('Succès', 'Enregistrement réussi', 'success');
```

### 5. `checkNoMessage`
Vérifie qu'aucun message toast n'est affiché.

```typescript
cy.checkNoMessage();
```

### 6. `checkTooltipErrorMessage`
Vérifie le message d'erreur dans un tooltip.

```typescript
cy.checkTooltipErrorMessage('.input-field', 'Champ requis');
```

### 7. `clickPopupBtn`
Clique sur un bouton dans une popup.

```typescript
cy.clickPopupBtn('.confirm-button');
```

## Gestion des Erreurs

Le fichier `commands.ts` inclut également la gestion automatique des erreurs `ResizeObserver loop limit exceeded` qui sont courantes dans les applications Angular/React modernes.

## Structure du Projet

```
cypress-cucumber-projet/
├── cypress/
│   ├── e2e/
│   │   └── features/          # Fichiers .feature (Gherkin)
│   ├── support/
│   │   ├── commands.ts         # Commandes personnalisées Cypress
│   │   ├── e2e.ts             # Configuration globale
│   │   └── step_definitions/   # Step definitions en français
│   │       ├── page_steps.ts
│   │       ├── form_steps.ts
│   │       ├── table_steps.ts
│   │       ├── menu_steps.ts
│   │       ├── popup_steps.ts
│   │       ├── filter_steps.ts
│   │       ├── tab_steps.ts
│   │       ├── export_import_steps.ts
│   │       ├── hooks.ts
│   │       └── README.md
│   └── fixtures/              # Données de test
├── cypress.config.ts          # Configuration Cypress
└── package.json
```

## Utilisation

### Ouvrir Cypress en mode interactif
```bash
npm run open
```

### Exécuter les tests avec le tag @slow
```bash
npm run exec-slow
```

## Notes Importantes

### Erreurs TypeScript
Les erreurs TypeScript affichées dans l'IDE ne sont pas bloquantes pour l'exécution des tests. Elles concernent principalement :
- Les types stricts de Cypress
- Les commandes personnalisées qui sont définies à l'exécution
- `replaceAll` qui nécessite ES2021+ (disponible dans les navigateurs modernes)

### Commandes Cypress Personnalisées
Toutes les commandes personnalisées sont correctement typées avec TypeScript et incluent une documentation JSDoc complète pour l'autocomplétion dans l'IDE.

## Prochaines Étapes

1. ✅ **Étape 1 Complétée** : Commandes personnalisées Cypress copiées et adaptées
2. **Étape 2** : Créer vos fichiers `.feature` dans `cypress/e2e/features/`
3. **Étape 3** : Utiliser les step definitions en français dans vos scénarios

## Support

Pour plus d'informations sur les step definitions disponibles, consultez le fichier `cypress/support/step_definitions/README.md`.
