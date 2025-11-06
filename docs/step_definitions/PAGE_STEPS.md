# Step Definitions - Navigation et Pages

[← Retour à l'index](../../STEP_DEFINITIONS.md)

## Visiter une URL

### `Étant donné que je visite l'URL {string}`
Navigue vers une URL spécifique.

**Arguments:**
- `{string}` : Chemin de l'URL (ex: "/products", "/users/123")

**Exemples:**
```gherkin
Étant donné que je visite l'URL "/products"
Étant donné que je visite l'URL "/users/123/edit"
```

---

### `Étant donné que je visite la page d'accueil`
Navigue vers la page d'accueil (/).

**Arguments:** Aucun

**Exemple:**
```gherkin
Étant donné que je visite la page d'accueil
```

---

## Vérification d'URL

### `Alors l'URL devrait être {string}`
Vérifie que l'URL actuelle correspond exactement au chemin spécifié.

**Arguments:**
- `{string}` : Chemin de l'URL attendue

**Exemples:**
```gherkin
Alors l'URL devrait être "/products"
Alors l'URL devrait être "/home"
```

---

### `Alors l'URL devrait être {string} avec les paramètres {string}`
Vérifie l'URL et ses paramètres de requête.

**Arguments:**
- `{string}` (1er) : Chemin de l'URL
- `{string}` (2ème) : Paramètres de requête (ex: "?id=123&sort=name")

**Exemples:**
```gherkin
Alors l'URL devrait être "/products" avec les paramètres "?category=electronics"
Alors l'URL devrait être "/search" avec les paramètres "?q=test&page=2"
```

---

### `Alors l'URL et le titre devraient être {string} et {string}`
Vérifie simultanément l'URL et le titre de la page.

**Arguments:**
- `{string}` (1er) : URL attendue
- `{string}` (2ème) : Titre attendu

**Exemple:**
```gherkin
Alors l'URL et le titre devraient être "/home" et "Accueil"
```

---

## Titres

### `Alors le titre devrait être {string}`
Vérifie que le titre de la page correspond exactement au texte spécifié.

**Arguments:**
- `{string}` : Texte exact du titre

**Exemples:**
```gherkin
Alors le titre devrait être "Liste des produits"
Alors le titre devrait être "Gestion des utilisateurs"
```

---

### `Alors le titre devrait contenir {string}`
Vérifie que le titre contient le texte spécifié (correspondance partielle).

**Arguments:**
- `{string}` : Texte partiel à rechercher

**Exemples:**
```gherkin
Alors le titre devrait contenir "produits"
Alors le titre devrait contenir "Gestion"
```

---

### `Quand je clique sur le titre`
Clique sur l'élément titre de la page.

**Arguments:** Aucun

**Exemple:**
```gherkin
Quand je clique sur le titre
```

---

## Sous-titres

### `Alors le sous-titre devrait être {string}`
Vérifie que le sous-titre correspond exactement au texte spécifié.

**Arguments:**
- `{string}` : Texte exact du sous-titre

**Exemple:**
```gherkin
Alors le sous-titre devrait être "Gestion des stocks"
```

---

### `Alors le sous-titre devrait contenir {string}`
Vérifie que le sous-titre contient le texte spécifié.

**Arguments:**
- `{string}` : Texte partiel à rechercher

**Exemple:**
```gherkin
Alors le sous-titre devrait contenir "stocks"
```

---

## Navigation

### `Quand je clique sur le bouton retour`
Clique sur le bouton de retour/navigation arrière.

**Arguments:** Aucun

**Exemple:**
```gherkin
Quand je clique sur le bouton retour
Alors l'URL devrait être "/products"
```

---

### `Quand je change le périmètre magasin vers {string}`
Change le magasin/périmètre sélectionné dans l'application.

**Arguments:**
- `{string}` : Nom du magasin à sélectionner

**Exemples:**
```gherkin
Quand je change le périmètre magasin vers "Magasin Paris"
Quand je change le périmètre magasin vers "Entrepôt Central"
```

---

## Loader

### `Alors le loader de l'application ne devrait pas être visible`
Vérifie que le loader/spinner de chargement n'est pas affiché.

**Arguments:** Aucun

**Exemple:**
```gherkin
Alors le loader de l'application ne devrait pas être visible
```

---

## Champs Info

### `Alors le champ info {string} devrait contenir la valeur {string}`
Vérifie la valeur d'un champ d'information en lecture seule.

**Arguments:**
- `{string}` (1er) : Nom ou sélecteur du champ info
- `{string}` (2ème) : Valeur attendue

**Exemples:**
```gherkin
Alors le champ info "total" devrait contenir la valeur "1234.56"
Alors le champ info "reference" devrait contenir la valeur "REF-2024-001"
```

---

### `Alors le champ info {string} devrait avoir le label {string} et la valeur {string}`
Vérifie à la fois le label et la valeur d'un champ info.

**Arguments:**
- `{string}` (1er) : Nom du champ
- `{string}` (2ème) : Label attendu
- `{string}` (3ème) : Valeur attendue

**Exemples:**
```gherkin
Alors le champ info "price" devrait avoir le label "Prix" et la valeur "99.99"
Alors le champ info "status" devrait avoir le label "Statut" et la valeur "Actif"
```

---

### `Alors le champ info {string} devrait contenir {string} et {string}`
Vérifie qu'un champ info contient une valeur et une devise/unité.

**Arguments:**
- `{string}` (1er) : Nom du champ
- `{string}` (2ème) : Valeur attendue
- `{string}` (3ème) : Devise ou unité attendue

**Exemples:**
```gherkin
Alors le champ info "total" devrait contenir "1234.56" et "€"
Alors le champ info "weight" devrait contenir "25.5" et "kg"
```

---

## Résumé

**Total:** 15 step definitions

**Catégories:**
- Visiter une URL : 2 steps
- Vérification d'URL : 3 steps
- Titres : 3 steps
- Sous-titres : 2 steps
- Navigation : 2 steps
- Loader : 1 step
- Champs Info : 3 steps

[← Retour à l'index](../../STEP_DEFINITIONS.md)
