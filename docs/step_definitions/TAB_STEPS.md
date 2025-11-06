# Step Definitions - Onglets

[← Retour à l'index](../../STEP_DEFINITIONS.md)

Documentation des step definitions pour les onglets.

## Navigation

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je change vers l'onglet {int} nommé {string}` | 1. Index<br>2. Nom | Change d'onglet avec vérification |
| `Quand je clique sur l'onglet {int}` | Index | Clique sur un onglet |

## Vérification

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors le nombre d'onglets devrait être {int}` | Nombre | Vérifie le nombre d'onglets |
| `Alors l'onglet {int} devrait être {string}` | 1. Index<br>2. Nom | Vérifie le nom d'un onglet |

## Actions

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je supprime l'onglet {int}` | Index | Supprime un onglet |

## Champs Info dans Onglet

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors le champ info de l'onglet {int} devrait avoir le label {string} et la valeur {string}` | 1. Index<br>2. Label<br>3. Valeur | Vérifie un champ info |

**Total:** ~6 step definitions

[← Retour à l'index](../../STEP_DEFINITIONS.md)
