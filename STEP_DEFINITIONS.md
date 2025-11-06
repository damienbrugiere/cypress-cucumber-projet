# Référence des Step Definitions

Documentation complète de tous les step definitions disponibles dans le projet.

## 📚 Documentation par Catégorie

La documentation est organisée en fichiers séparés pour faciliter la navigation :

### 1. [Navigation et Pages](./docs/step_definitions/PAGE_STEPS.md)
- Visiter des URLs
- Vérification d'URL et paramètres
- Gestion des titres et sous-titres
- Navigation (bouton retour, périmètre magasin)
- Loader et champs info

**~15 step definitions**

---

### 2. [Formulaires](./docs/step_definitions/FORM_STEPS.md)
- Remplissage de champs (texte, select, checkbox, radio, fichiers)
- Vérification des valeurs
- État des champs (activé/désactivé)
- Messages d'erreur et validation
- Actions (sauvegarder, valider, ajouter, supprimer)
- Options de liste et radio
- Tags, couleurs, messages toast
- Stages et input rafraîchissable

**~30 step definitions**

---

### 3. [Tableaux](./docs/step_definitions/TABLE_STEPS.md)
- Nombre de lignes et en-têtes
- État des lignes (désactivée, erreur, statut)
- Tri et remplissage de cellules
- État des champs de ligne
- Messages d'erreur sur ligne
- Menu de ligne et actions
- Checkbox et scroll
- Actions spéciales (switch, stylo, lien)
- Popper/Tooltip
- Bouton prorata

**~40 step definitions**

---

### 4. [Menu](./docs/step_definitions/MENU_STEPS.md)
- Navigation dans le menu
- Vérification du menu
- État du menu (réduit/étendu)
- Sélection d'éléments
- Bouton Freshdesk

**~10 step definitions**

---

### 5. [Popups](./docs/step_definitions/POPUP_STEPS.md)
- Actions (fermer, sauvegarder, valider, annuler, ajouter)
- Vérifications (titre, état)
- État des boutons

**~15 step definitions**

---

### 6. [Filtres](./docs/step_definitions/FILTER_STEPS.md)
- Sélection de filtres
- Remplissage de filtres
- Application des filtres
- Vérification des filtres
- Suppression de filtres
- Vérification des options

**~10 step definitions**

---

### 7. [Onglets](./docs/step_definitions/TAB_STEPS.md)
- Navigation entre onglets
- Vérification des onglets
- Suppression d'onglet
- Vérification des champs info dans un onglet

**~6 step definitions**

---

### 8. [Export/Import](./docs/step_definitions/EXPORT_IMPORT_STEPS.md)
- Export (liste, PDF)
- Import de fichiers
- Vérification du statut d'import
- Téléchargement de templates
- Détail des erreurs d'import
- Drag and Drop

**~12 step definitions**

---

## 📊 Statistiques Globales

- **Total** : ~138 step definitions
- **Fichiers** : 8 catégories
- **Langage** : 100% français
- **Format** : Gherkin/Cucumber

## 🚀 Utilisation Rapide

### Exemple de Scénario Complet

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
    Et je devrais voir le message "Succès" avec le contenu "Produit créé" de type "success"
```

## 🔍 Recherche Rapide

### Par Type d'Action

- **Navigation** : Voir [PAGE_STEPS.md](./docs/step_definitions/PAGE_STEPS.md)
- **Saisie de données** : Voir [FORM_STEPS.md](./docs/step_definitions/FORM_STEPS.md)
- **Vérification de données** : Voir [TABLE_STEPS.md](./docs/step_definitions/TABLE_STEPS.md)
- **Interactions UI** : Voir [POPUP_STEPS.md](./docs/step_definitions/POPUP_STEPS.md), [MENU_STEPS.md](./docs/step_definitions/MENU_STEPS.md)
- **Filtrage** : Voir [FILTER_STEPS.md](./docs/step_definitions/FILTER_STEPS.md)
- **Import/Export** : Voir [EXPORT_IMPORT_STEPS.md](./docs/step_definitions/EXPORT_IMPORT_STEPS.md)

### Par Mots-Clés

| Mot-clé | Catégorie | Fichier |
|---------|-----------|---------|
| `je visite`, `URL` | Navigation | PAGE_STEPS.md |
| `je remplis`, `je coche` | Formulaire | FORM_STEPS.md |
| `tableau`, `ligne`, `colonne` | Tableau | TABLE_STEPS.md |
| `menu`, `sous-élément` | Menu | MENU_STEPS.md |
| `popup`, `je ferme`, `je valide` | Popup | POPUP_STEPS.md |
| `filtre`, `j'applique` | Filtre | FILTER_STEPS.md |
| `onglet`, `je change` | Onglet | TAB_STEPS.md |
| `j'exporte`, `j'importe` | Export/Import | EXPORT_IMPORT_STEPS.md |

## 📝 Convention de Nommage

Tous les step definitions suivent ces conventions :

- **Given/Étant donné** : État initial, préconditions
- **When/Quand** : Actions de l'utilisateur
- **Then/Alors** : Vérifications, assertions

### Format des Arguments

- `{string}` : Chaîne de caractères
- `{int}` : Nombre entier
- CSV : Valeurs séparées par des virgules dans un `{string}`

## 🛠️ Maintenance

Pour ajouter de nouveaux step definitions :

1. Identifier la catégorie appropriée
2. Ajouter le step dans le fichier TypeScript correspondant (`cypress/support/step_definitions/`)
3. Documenter dans le fichier Markdown de la catégorie (`docs/step_definitions/`)
4. Mettre à jour ce fichier index si nécessaire

## 📖 Ressources Complémentaires

- [README des Step Definitions](./cypress/support/step_definitions/README.md) - Vue d'ensemble technique
- [SETUP.md](./SETUP.md) - Configuration et installation
- [Commandes Cypress Personnalisées](./cypress/support/commands.ts) - Commandes sous-jacentes
