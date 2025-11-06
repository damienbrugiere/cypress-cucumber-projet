# Step Definitions en Français

Ce dossier contient toutes les step definitions en français pour les tests Cucumber, basées sur les pages génériques du projet cara-cypress.

## Fichiers

### 1. **page_steps.ts** - Navigation et Pages
- Navigation (visiter URL, page d'accueil)
- Vérification d'URL et paramètres
- Gestion des titres et sous-titres
- Bouton retour
- Changement de périmètre magasin
- Vérification du loader
- Champs info

**Exemples:**
```gherkin
Étant donné que je visite l'URL "/products"
Alors le titre devrait être "Liste des produits"
Quand je clique sur le bouton retour
```

### 2. **form_steps.ts** - Formulaires
- Remplissage de champs (texte, select, checkbox, radio, fichiers)
- Vérification des valeurs
- État des champs (activé/désactivé)
- Messages d'erreur
- Actions (sauvegarder, valider, ajouter, supprimer)
- Options de liste et radio
- Tags et couleurs
- Messages toast

**Exemples:**
```gherkin
Quand je remplis le champ "nom" avec "Jean Dupont"
Et je coche le champ "actif"
Et je sauvegarde le formulaire
Alors le champ "nom" devrait avoir la valeur "Jean Dupont"
Et le formulaire devrait avoir 0 erreur(s)
```

### 3. **table_steps.ts** - Tableaux
- Vérification du nombre de lignes
- Vérification des en-têtes
- État des lignes (désactivée, en erreur, statut)
- Tri
- Remplissage de cellules
- État des champs de ligne
- Messages d'erreur sur ligne
- Menu de ligne et actions
- Checkbox
- Scroll
- Switch et autres actions
- Popper/Tooltip

**Exemples:**
```gherkin
Alors le tableau devrait avoir 5 ligne(s)
Et les en-têtes du tableau devraient être "Nom, Prénom, Email, Actions"
Quand je remplis la ligne 0 colonne 1 avec "Nouveau nom"
Et je supprime la ligne 2
Et je confirme la suppression
```

### 4. **menu_steps.ts** - Menu de Navigation
- Navigation dans le menu
- Vérification du menu
- État du menu (réduit/étendu)
- Sélection d'éléments
- Bouton Freshdesk

**Exemples:**
```gherkin
Quand je clique sur le sous-élément de menu 1 2
Alors le sous-élément 1 2 devrait être sélectionné
Quand je réduis le menu
Alors le menu devrait être "réduit"
```

### 5. **popup_steps.ts** - Popups/Modales
- Actions (fermer, sauvegarder, valider, annuler, ajouter)
- Vérifications (titre, état fermé/ouvert)
- État des boutons

**Exemples:**
```gherkin
Alors la popup devrait être ouverte avec le titre "Créer un produit"
Quand je valide la popup
Alors la popup devrait être fermée
```

### 6. **filter_steps.ts** - Filtres
- Sélection de filtres
- Remplissage de filtres
- Application des filtres
- Vérification des filtres
- Suppression de filtres
- Vérification des options

**Exemples:**
```gherkin
Quand je sélectionne les filtres "Nom, Statut"
Et je remplis le filtre 0 avec "Actif"
Et je clique sur le bouton appliquer les filtres
Alors le nombre de filtres actifs devrait être 2
```

### 7. **tab_steps.ts** - Onglets
- Navigation entre onglets
- Vérification des onglets
- Suppression d'onglet
- Vérification des champs info dans un onglet

**Exemples:**
```gherkin
Quand je change vers l'onglet 0 nommé "Informations générales"
Alors le nombre d'onglets devrait être 3
```

### 8. **export_import_steps.ts** - Export/Import et Utilitaires
- Export (liste, PDF)
- Import de fichiers
- Vérification du statut d'import
- Téléchargement de templates
- Détail des erreurs d'import
- Drag and Drop

**Exemples:**
```gherkin
Quand j'exporte la liste en "xlsx" nommée "export_produits"
Quand j'importe le fichier "import_produits.xlsx"
Alors l'import devrait avoir le statut "Succès"
```

## Notes Techniques

### Erreurs TypeScript
Certaines erreurs TypeScript peuvent apparaître mais ne sont pas bloquantes:
- `replaceAll`: Disponible dans les navigateurs modernes (ES2021+)
- `attachFile`, `dragAndDrop`: Commandes personnalisées Cypress à définir
- Problèmes de typage avec `cy.get()`: Faux positifs TypeScript

### Commandes Personnalisées Requises
Les step definitions utilisent des commandes Cypress personnalisées qui doivent être définies:
- `cy.attachFile()` - Pour l'upload de fichiers
- `cy.dragAndDrop()` - Pour le glisser-déposer
- `cy.clickSwitch()` - Pour les switches

Ces commandes doivent être copiées depuis le projet cara-cypress.

## Utilisation

1. Créez vos fichiers `.feature` dans `cypress/e2e/features/`
2. Utilisez les step definitions en français
3. Exécutez avec `npm run open` ou `npm run exec-slow`

## Exemple de Feature Complète

```gherkin
# language: fr
Fonctionnalité: Gestion des produits

  Scénario: Créer un nouveau produit
    Étant donné que je visite l'URL "/products"
    Alors le titre devrait être "Liste des produits"
    Et le tableau devrait avoir 0 ligne(s)
    
    Quand je clique sur le bouton ajouter
    Alors la popup devrait être ouverte avec le titre "Créer un produit"
    
    Quand je remplis le champ "nom" avec "Produit Test"
    Et je remplis le champ "prix" avec "99.99"
    Et je coche le champ "actif"
    Et je valide la popup
    
    Alors la popup devrait être fermée
    Et le tableau devrait avoir 1 ligne(s)
```
