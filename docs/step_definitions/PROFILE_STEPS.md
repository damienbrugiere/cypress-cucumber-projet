# Step Definitions - Gestion de Profil

[← Retour à l'index](../../STEP_DEFINITIONS.md)

Documentation des step definitions pour la gestion du profil utilisateur.

## Navigation

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je visite la page de gestion de profil` | Aucun | Navigue vers /profile-management |

**Exemple:**
```gherkin
Quand je visite la page de gestion de profil
```

---

## Vérification des Titres

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors le titre de la page devrait être {string}` | Titre | Vérifie le titre principal (ui-title) |
| `Alors le sous-titre du thème devrait être {string}` | Sous-titre | Vérifie le sous-titre de la section thème |
| `Alors le sous-titre du mot de passe devrait être {string}` | Sous-titre | Vérifie le sous-titre de la section mot de passe |
| `Alors le sous-titre de la langue devrait être {string}` | Sous-titre | Vérifie le sous-titre de la section langue |

**Exemples:**
```gherkin
Alors le titre de la page devrait être "Gérer mon profil"
Alors le sous-titre du thème devrait être "Changer de thème"
Alors le sous-titre du mot de passe devrait être "Changer de mot de passe"
Alors le sous-titre de la langue devrait être "Changer les préférences linguistiques"
```

---

## Gestion du Thème

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je clique sur le bouton thème {string}` | Thème (light/dark/clair/sombre) | Sélectionne un thème |
| `Alors le thème de l'application devrait être {string}` | Classe CSS | Vérifie la classe sur le body |

**Exemples:**
```gherkin
Quand je clique sur le bouton thème "dark"
Alors le thème de l'application devrait être "dark-theme"

Quand je clique sur le bouton thème "clair"
Alors le thème de l'application devrait être "light-theme"
```

---

## Gestion de la Langue

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je sélectionne la langue à l'index {int}` | Index (0-based) | Sélectionne une option radio de langue |
| `Alors la langue sélectionnée devrait être à l'index {int}` | Index | Vérifie quelle langue est cochée |
| `Quand je clique sur le bouton sauvegarder la langue` | Aucun | Sauvegarde les préférences linguistiques |
| `Alors le label de langue devrait être {string}` | Label | Vérifie le label du champ langue |

**Exemples:**
```gherkin
Quand je sélectionne la langue à l'index 1
Alors la langue sélectionnée devrait être à l'index 1
Quand je clique sur le bouton sauvegarder la langue

Alors le label de langue devrait être "Langue"
```

---

## Format de Date

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors le format de date sélectionné devrait être {string}` | Format | Vérifie le format affiché |
| `Quand je sélectionne le format de date à l'index {int}` | Index | Sélectionne un format dans la liste |
| `Alors la liste de format de date devrait avoir {int} option(s)` | Nombre | Vérifie l'attribut option-length |
| `Alors le label de format de date devrait être {string}` | Label | Vérifie le label du champ |

**Exemples:**
```gherkin
Alors le format de date sélectionné devrait être "DD/MM/YYYY"
Quand je sélectionne le format de date à l'index 1
Alors la liste de format de date devrait avoir 2 option(s)
Alors le label de format de date devrait être "Format date/heure*"
```

---

## Gestion du Mot de Passe

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je remplis le champ mot de passe actuel avec {string}` | Mot de passe | Remplit le champ mot de passe actuel |
| `Quand je remplis le champ nouveau mot de passe avec {string}` | Mot de passe | Remplit le champ nouveau mot de passe |
| `Quand je remplis le champ confirmation mot de passe avec {string}` | Mot de passe | Remplit le champ de confirmation |
| `Alors les champs de mot de passe devraient être vides` | Aucun | Vérifie que tous les champs sont vides |
| `Quand je vide le champ mot de passe {string}` | Classe CSS | Vide un champ spécifique |
| `Quand je vide et blur le champ mot de passe {string}` | Classe CSS | Vide et déclenche blur |
| `Quand je blur le champ mot de passe {string}` | Classe CSS | Déclenche blur sur un champ |
| `Quand je clique sur le bouton sauvegarder le mot de passe` | Aucun | Sauvegarde le mot de passe |
| `Quand je remplis le champ de mot de passe {int} avec {string}` | 1. Index<br>2. Valeur | Remplit par index |

**Exemples:**
```gherkin
Quand je remplis le champ mot de passe actuel avec "oldPass123"
Quand je remplis le champ nouveau mot de passe avec "newPass456"
Quand je remplis le champ confirmation mot de passe avec "newPass456"
Quand je clique sur le bouton sauvegarder le mot de passe

Alors les champs de mot de passe devraient être vides

Quand je vide et blur le champ mot de passe ".current-password"
Quand je remplis le champ de mot de passe 0 avec "test123"
```

---

## Messages d'Erreur

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors je devrais voir {int} message(s) d'erreur` | Nombre | Vérifie le nombre de messages d'erreur |
| `Alors le premier message d'erreur devrait contenir {string}` | Message | Vérifie le contenu du 1er message |

**Exemples:**
```gherkin
Alors je devrais voir 2 message(s) d'erreur
Alors le premier message d'erreur devrait contenir "Le mot de passe est requis"
```

---

## Messages Toast

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors je devrais voir un message toast de type {string}` | Type (success/error/warning) | Vérifie le type de toast |
| `Quand je ferme le message toast` | Aucun | Clique sur l'icône de fermeture |
| `Alors le message toast devrait avoir le titre {string} et le contenu {string}` | 1. Titre<br>2. Contenu | Vérifie titre et contenu |

**Exemples:**
```gherkin
Alors je devrais voir un message toast de type "success"
Alors le message toast devrait avoir le titre "Succès" et le contenu "Profil mis à jour"
Quand je ferme le message toast
```

---

## Actions Diverses

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je clique sur le titre de la page de profil` | Aucun | Clique sur ui-title |
| `Alors le bouton de changement de mot de passe devrait être visible` | Aucun | Vérifie visibilité du bouton |
| `Alors le bouton de changement de langue devrait être visible` | Aucun | Vérifie visibilité du bouton |

**Exemples:**
```gherkin
Quand je clique sur le titre de la page de profil
Alors le bouton de changement de mot de passe devrait être visible
```

---

## Vérification d'Attributs HTML

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors l'élément {string} devrait avoir l'attribut {string} avec la valeur {string}` | 1. Sélecteur<br>2. Attribut<br>3. Valeur | Vérifie un attribut HTML |

**Exemple:**
```gherkin
Alors l'élément ".date-format .fugu-list" devrait avoir l'attribut "option-length" avec la valeur "2"
```

---

## Résumé

**Total:** ~30 step definitions

**Catégories:**
- Navigation : 1 step
- Titres : 4 steps
- Thème : 2 steps
- Langue : 4 steps
- Format de date : 4 steps
- Mot de passe : 9 steps
- Messages d'erreur : 2 steps
- Messages toast : 3 steps
- Actions diverses : 3 steps
- Attributs HTML : 1 step

[← Retour à l'index](../../STEP_DEFINITIONS.md)
