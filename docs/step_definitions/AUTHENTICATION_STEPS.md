# Step Definitions - Authentification

[← Retour à l'index](../../STEP_DEFINITIONS.md)

Documentation des step definitions pour l'authentification et la gestion de session.

## Connexion

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je me connecte avec l'identifiant {string} et le mot de passe {string}` | 1. Identifiant<br>2. Mot de passe | Se connecte sans navigation préalable |
| `Étant donné que je suis connecté avec l'identifiant {string} et le mot de passe {string}` | 1. Identifiant<br>2. Mot de passe | Précondition : visite /login et se connecte |
| `Quand je clique sur le bouton de connexion` | Aucun | Clique sur le bouton de connexion |

**Exemples:**
```gherkin
Étant donné que je suis connecté avec l'identifiant "admin@test.com" et le mot de passe "password123"
Quand je me connecte avec l'identifiant "user@test.com" et le mot de passe "pass456"
```

---

## Déconnexion

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je me déconnecte` | Aucun | Visite /logout et vérifie redirection vers /login |

**Exemple:**
```gherkin
Quand je me déconnecte
Alors je devrais être redirigé vers la page de connexion
```

---

## Formulaire de Connexion

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors le formulaire de connexion devrait avoir {int} champs` | Nombre | Vérifie le nombre d'éléments du formulaire |

**Exemple:**
```gherkin
Alors le formulaire de connexion devrait avoir 15 champs
```

---

## Sélection de Magasin

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je sélectionne le magasin {string}` | Nom du magasin | Sélectionne un magasin dans la liste |
| `Alors je devrais être sur la page d'accueil avec le magasin {string}` | Nom du magasin | Vérifie URL et magasin affiché |
| `Quand j'ouvre la popup de sélection de magasin` | Aucun | Clique sur le nom du magasin dans le menu |
| `Alors la popup de sélection devrait afficher le magasin sélectionné {string}` | Nom du magasin | Vérifie le magasin actuellement sélectionné |

**Exemples:**
```gherkin
Quand je sélectionne le magasin "Paris Centre"
Alors je devrais être sur la page d'accueil avec le magasin "Paris Centre"

Quand j'ouvre la popup de sélection de magasin
Alors la popup de sélection devrait afficher le magasin sélectionné "Paris Centre"
```

---

## Vérification des Magasins

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors je devrais voir {int} magasin(s) disponible(s)` | Nombre | Vérifie le nombre de cartes de magasins |
| `Alors les magasins disponibles devraient être {string}` | Noms (CSV) | Vérifie les noms des magasins affichés |

**Exemples:**
```gherkin
Alors je devrais voir 3 magasin(s) disponible(s)
Alors les magasins disponibles devraient être "Paris, Lyon, Marseille"
```

---

## Recherche de Magasin

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je recherche le magasin {string}` | Terme de recherche | Tape dans le champ de recherche |

**Exemple:**
```gherkin
Quand je recherche le magasin "Paris"
Alors je devrais voir 2 magasin(s) disponible(s)
```

---

## Redirection et Sécurité

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors je devrais être redirigé vers la page de connexion` | Aucun | Vérifie que l'URL contient /login |
| `Quand je visite l'URL {string} sans être connecté` | URL | Visite une URL et vérifie redirection vers login |

**Exemples:**
```gherkin
Quand je visite l'URL "/products" sans être connecté
Alors je devrais être redirigé vers la page de connexion
```

---

## Mot de Passe Oublié

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Quand je clique sur le lien mot de passe oublié` | Aucun | Ouvre la popup de récupération |
| `Quand je clique sur le bouton récupérer le mot de passe` | Aucun | Soumet la demande de récupération |
| `Alors les validateurs de mot de passe devraient avoir les états {string}` | États (CSV) | Vérifie les classes CSS des validateurs |

**Exemples:**
```gherkin
Quand je clique sur le lien mot de passe oublié
Alors la popup devrait être ouverte avec le titre "Mot de passe oublié ?"

Alors les validateurs de mot de passe devraient avoir les états "valid, invalid, valid"
```

---

## Menu et Navigation

| Step Definition | Arguments | Description |
|----------------|-----------|-------------|
| `Alors le menu devrait avoir {int} groupe(s) d'en-tête` | Nombre | Vérifie le nombre de groupes dans le menu |
| `Alors le menu devrait contenir le groupe {string}` | Nom du groupe | Vérifie la présence d'un groupe |
| `Alors le menu ne devrait pas contenir le groupe {string}` | Nom du groupe | Vérifie l'absence d'un groupe |
| `Alors le magasin affiché dans le menu devrait être {string}` | Nom du magasin | Vérifie le nom du magasin dans le menu |

**Exemples:**
```gherkin
Alors le menu devrait avoir 8 groupe(s) d'en-tête
Alors le menu devrait contenir le groupe "Paramètres"
Alors le menu ne devrait pas contenir le groupe "Administration"
Alors le magasin affiché dans le menu devrait être "Centrale"
```

---

## Résumé

**Total:** ~20 step definitions

**Catégories:**
- Connexion/Déconnexion : 4 steps
- Sélection de magasin : 4 steps
- Vérification des magasins : 2 steps
- Recherche : 1 step
- Redirection : 2 steps
- Mot de passe oublié : 3 steps
- Menu : 4 steps

[← Retour à l'index](../../STEP_DEFINITIONS.md)
