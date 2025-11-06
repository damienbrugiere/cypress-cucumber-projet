# Step Definitions - Tableaux

[← Retour à l'index](../../STEP_DEFINITIONS.md)

Documentation des step definitions pour les tableaux de données.

## Lignes

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors le tableau devrait avoir {int} ligne(s)` | Nombre | Vérifie le nombre de lignes |
| `Alors le tableau ne devrait pas avoir {int} ligne(s)` | Nombre | Vérifie que le nombre est différent |
| `Alors la ligne {int} devrait être désactivée` | Index ligne | Vérifie qu'une ligne est désactivée |
| `Alors la ligne {int} devrait être en erreur` | Index ligne | Vérifie qu'une ligne est en erreur |
| `Alors la ligne {int} devrait avoir le statut {string}` | 1. Index<br>2. Statut | Vérifie le statut d'une ligne |

## En-têtes et Tri

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors les en-têtes du tableau devraient être {string}` | En-têtes (CSV) | Vérifie les en-têtes du tableau |
| `Quand je trie le tableau par la colonne {string}` | Nom colonne | Trie le tableau |

## Remplissage et Modification

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je remplis la ligne {int} colonne {int} avec {string}` | 1. Ligne<br>2. Colonne<br>3. Valeur | Remplit une cellule |
| `Quand je coche la ligne {int} colonne {int}` | 1. Ligne<br>2. Colonne | Coche un checkbox |
| `Quand je décoche la ligne {int} colonne {int}` | 1. Ligne<br>2. Colonne | Décoche un checkbox |

## État des Cellules

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors la ligne {int} colonne {int} devrait être désactivée` | 1. Ligne<br>2. Colonne | Vérifie désactivation |
| `Alors la ligne {int} colonne {int} devrait être activée` | 1. Ligne<br>2. Colonne | Vérifie activation |
| `Alors la ligne {int} colonne {int} devrait afficher l'erreur {string}` | 1. Ligne<br>2. Colonne<br>3. Message | Vérifie erreur cellule |

## Menu de Ligne

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand j'ouvre le menu de la ligne {int}` | Index | Ouvre le menu contextuel |
| `Alors le menu de la ligne {int} ne devrait pas exister` | Index | Vérifie absence de menu |
| `Alors le menu de la ligne {int} devrait avoir {int} option(s)` | 1. Ligne<br>2. Nombre | Vérifie nombre d'options |
| `Alors le menu devrait contenir les options {string}` | Options (CSV) | Vérifie les options du menu |
| `Quand je clique sur l'option de menu {string}` | Nom option | Clique sur une option |

## Actions

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je modifie la ligne {int}` | Index | Ouvre l'édition |
| `Quand je clique sur la ligne {int}` | Index | Clique sur une ligne |
| `Quand je clique sur la ligne {int} colonne {int}` | 1. Ligne<br>2. Colonne | Clique sur une cellule |
| `Quand je supprime la ligne {int}` | Index | Supprime une ligne |
| `Quand je confirme la suppression` | Aucun | Confirme la suppression |
| `Quand j'annule la suppression` | Aucun | Annule la suppression |

## Checkbox et Scroll

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je coche la checkbox d'en-tête` | Aucun | Sélectionne toutes les lignes |
| `Quand je sélectionne la checkbox de la ligne {int}` | Index | Sélectionne une ligne |
| `Quand je scroll le tableau vers {string}` | Direction | Scroll (top/bottom/left/right) |
| `Quand je scroll le tableau à la position {string} {string} {string} {string}` | 4 positions CSS | Scroll précis |

## Actions Spéciales

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je clique sur le switch contenant {string}` | Texte | Clique sur switch d'une ligne |
| `Quand je clique sur le stylo {int} contenant {string}` | 1. Index<br>2. Texte | Clique sur icône édition |
| `Quand je clique sur le lien de la ligne {int} colonne {int}` | 1. Ligne<br>2. Colonne | Clique sur un lien |
| `Alors le popper de la ligne {int} colonne {int} devrait afficher {int} éléments {string}` | 1. Ligne<br>2. Colonne<br>3. Nombre<br>4. Valeurs (CSV) | Vérifie contenu popper |
| `Alors l'info bulle de la ligne {int} colonne {int} devrait afficher {string}` | 1. Ligne<br>2. Colonne<br>3. Texte | Vérifie tooltip |
| `Quand je clique sur le bouton prorata {int} de la ligne {int}` | 1. Type (0/1)<br>2. Ligne | Clique bouton prorata |

**Total:** ~40 step definitions

[← Retour à l'index](../../STEP_DEFINITIONS.md)
