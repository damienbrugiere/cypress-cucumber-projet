# Step Definitions - Export/Import

[← Retour à l'index](../../STEP_DEFINITIONS.md)

Documentation des step definitions pour l'export, l'import et le drag & drop.

## Export

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand j'exporte la liste en {string} nommée {string}` | 1. Format (xlsx/zip)<br>2. Nom fichier | Exporte des données |
| `Quand j'imprime la liste en PDF nommée {string}` | Nom fichier | Génère un PDF |
| `Alors le bouton d'export PDF devrait être désactivé` | Aucun | Vérifie désactivation |
| `Alors le bouton d'export PDF devrait être activé` | Aucun | Vérifie activation |

## Import

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand j'importe le fichier {string}` | Nom fichier | Importe un fichier |
| `Alors l'import devrait avoir le statut {string}` | Statut | Vérifie le statut global |
| `Alors l'import à la ligne {int} devrait avoir le statut {string} et {string} menu` | 1. Ligne<br>2. Statut<br>3. avec/sans | Vérifie statut ligne |
| `Quand je télécharge le template d'import pour {string}` | Nom cible | Télécharge un template |
| `Quand je télécharge le fichier importé {string}` | Nom fichier | Télécharge fichier importé |
| `Quand j'ouvre le détail des erreurs de la ligne {int}` | Index | Ouvre détail erreurs |
| `Alors la popup de détail devrait afficher les erreurs {string}` | Erreurs (CSV) | Vérifie les erreurs |

## Drag and Drop

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je fais un glisser-déposer de l'index {int} vers l'index {int}` | 1. Source<br>2. Cible | Drag & drop simple |
| `Quand je fais un glisser-déposer personnalisé de {int} vers {int} avec le sélecteur {string} et {string}` | 1. Source<br>2. Cible<br>3. Sélecteur grille<br>4. Sélecteur drag | Drag & drop personnalisé |

**Total:** ~12 step definitions

[← Retour à l'index](../../STEP_DEFINITIONS.md)
