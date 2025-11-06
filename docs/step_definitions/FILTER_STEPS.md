# Step Definitions - Filtres

[← Retour à l'index](../../STEP_DEFINITIONS.md)

Documentation des step definitions pour les filtres dynamiques.

## Sélection et Remplissage

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je sélectionne les filtres {string}` | Filtres (CSV) | Sélectionne plusieurs filtres |
| `Quand je remplis le filtre {int} avec {string}` | 1. Index<br>2. Valeur | Remplit un filtre |
| `Quand je clique sur le bouton appliquer les filtres` | Aucun | Applique les filtres |

## Vérification

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors les filtres devraient être {string}` | Filtres (CSV) | Vérifie les filtres sélectionnés |
| `Alors le filtre {int} devrait être {string} avec la valeur {string}` | 1. Index<br>2. Nom<br>3. Valeur | Vérifie filtre et valeur |
| `Alors le nombre de filtres disponibles devrait être {int}` | Nombre | Vérifie nombre disponible |
| `Alors le nombre de filtres actifs devrait être {int}` | Nombre | Vérifie nombre actif |
| `Alors les options du filtre devraient être {string}` | Options (CSV) | Vérifie les options |

## Suppression

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je supprime tous les filtres` | Aucun | Supprime tous les filtres |
| `Quand je supprime le filtre {int}` | Index | Supprime un filtre |

**Total:** ~10 step definitions

[← Retour à l'index](../../STEP_DEFINITIONS.md)
