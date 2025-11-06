# Step Definitions - Formulaires

[← Retour à l'index](../../STEP_DEFINITIONS.md)

Documentation complète des step definitions pour les formulaires.

## Remplissage de Champs

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je remplis le champ {string} avec {string}` | 1. Nom du champ<br>2. Valeur | Remplit un champ texte, select ou autre |
| `Quand je coche le champ {string}` | Nom du champ | Coche un checkbox ou active un switch |
| `Quand je décoche le champ {string}` | Nom du champ | Décoche un checkbox ou désactive un switch |
| `Quand je sélectionne l'option radio {int} du champ {string}` | 1. Index (0-based)<br>2. Nom du champ | Sélectionne une option radio |
| `Quand je vide le champ {string}` | Nom du champ | Vide le contenu d'un champ |
| `Quand j'attache le fichier {string} au champ {string}` | 1. Chemin fichier<br>2. Nom du champ | Attache un fichier à un input file |

## Vérification de Valeurs

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors le champ {string} devrait avoir la valeur {string}` | 1. Nom<br>2. Valeur | Vérifie la valeur d'un champ |
| `Alors le champ {string} ne devrait pas être coché` | Nom du champ | Vérifie qu'un checkbox n'est pas coché |
| `Alors le champ {string} devrait être vide` | Nom du champ | Vérifie qu'un champ est vide |

## État des Champs

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors le champ {string} devrait être désactivé` | Nom du champ | Vérifie qu'un champ est désactivé |
| `Alors le champ {string} devrait être activé` | Nom du champ | Vérifie qu'un champ est activé |
| `Alors le champ {string} ne devrait pas exister` | Nom du champ | Vérifie qu'un champ n'existe pas |

## Messages d'Erreur

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors le formulaire devrait avoir {int} erreur(s)` | Nombre d'erreurs | Vérifie le nombre total d'erreurs |
| `Alors le champ {string} devrait afficher l'erreur {string}` | 1. Nom<br>2. Message | Vérifie le message d'erreur d'un champ |
| `Alors le champ {string} ne devrait pas avoir d'erreur` | Nom du champ | Vérifie l'absence d'erreur |
| `Quand je déclenche l'erreur de validation sur le champ {string}` | Nom du champ | Force la validation (focus + blur) |

## Actions

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je sauvegarde le formulaire` | Aucun | Clique sur le bouton sauvegarder |
| `Quand je valide le formulaire` | Aucun | Clique sur le bouton valider |
| `Quand je clique sur le bouton ajouter` | Aucun | Clique sur le bouton ajouter |
| `Quand je clique sur le bouton supprimer` | Aucun | Clique sur le bouton supprimer |

## Options

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors le champ {string} devrait avoir les options {string}` | 1. Nom<br>2. Options (CSV) | Vérifie les options d'un select |
| `Alors le champ {string} devrait avoir les options radio {string}` | 1. Nom<br>2. Options (CSV) | Vérifie les options radio |

## Fonctionnalités Avancées

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je sélectionne le tag à l'index {int} et vérifie la valeur {string}` | 1. Index<br>2. Valeur | Sélectionne et vérifie un tag |
| `Quand je sélectionne la couleur à l'index {int}` | Index | Sélectionne une couleur |
| `Alors le champ couleur devrait avoir la valeur {string}` | Valeur CSS | Vérifie la couleur sélectionnée |
| `Alors je devrais voir le message {string} avec le contenu {string} de type {string}` | 1. Titre<br>2. Contenu<br>3. Type | Vérifie un message toast |
| `Quand je change vers l'étape {int}` | Index | Change d'étape dans un formulaire multi-étapes |
| `Quand je clique sur le bouton rafraîchir du champ {string}` | Nom du champ | Clique sur le bouton refresh d'un champ |

**Total:** ~30 step definitions

[← Retour à l'index](../../STEP_DEFINITIONS.md)
