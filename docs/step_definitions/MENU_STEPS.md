# Step Definitions - Menu

[← Retour à l'index](../../STEP_DEFINITIONS.md)

Documentation des step definitions pour le menu de navigation.

## Navigation

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je clique sur l'élément de menu {int}` | Index | Clique sur un élément principal |
| `Quand je clique sur le sous-élément de menu {int} {int}` | 1. Menu parent<br>2. Sous-élément | Clique sur un sous-menu |
| `Quand je clique sur gérer mon profil` | Aucun | Accède au profil utilisateur |

## Vérification

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors le menu devrait être affiché correctement` | Aucun | Vérifie la structure complète |

## État du Menu

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors le menu des paramètres devrait être {string}` | État (réduit/étendu) | Vérifie l'état du menu |
| `Quand je {string} le menu` | Action (réduis/étends) | Change l'état du menu |
| `Alors le menu devrait être {string}` | État | Vérifie l'état |

## Sélection

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors le sous-élément {int} {int} devrait être sélectionné` | 1. Menu<br>2. Sous-élément | Vérifie sélection |
| `Alors le sous-élément {int} {int} ne devrait pas être sélectionné` | 1. Menu<br>2. Sous-élément | Vérifie non-sélection |

## Autres

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je clique sur le bouton Freshdesk` | Aucun | Ouvre le support Freshdesk |

**Total:** ~10 step definitions

[← Retour à l'index](../../STEP_DEFINITIONS.md)
