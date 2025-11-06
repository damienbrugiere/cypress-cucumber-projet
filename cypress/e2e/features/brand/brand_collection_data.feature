# language: fr
Fonctionnalité: Gestion des collections de marque

  Contexte:
    Étant donné que je suis connecté avec l'identifiant "admin" et le mot de passe "admin"
    Et que la base de données est restaurée
    Et qu'une marque avec des collections existe

  Scénario: Vérifier les colonnes et données du tableau des collections
    Quand je visite l'URL "/brand/1"
    Alors le titre devrait être "502 - brandName1"
    Et le sous-titre devrait être "brandName1"
    Et l'onglet 0 devrait être "Informations générales"
    
    Quand je change vers l'onglet 4 nommé "Collections"
    Alors les en-têtes du tableau devraient être "Nom, Année, Actif"
    Et le tableau devrait avoir 2 ligne(s)
    Et le tableau devrait contenir
      | Nom                | Année      |
      | brandCollection1   | 01/01/2020 |
      | brandCollection2   | 02/02/2020 |

  Scénario: Vérifier le fonctionnement des filtres
    Quand je visite l'URL "/brand/1/collections"
    Alors le nombre de filtres actifs devrait être 0
    
    # Activer tous les filtres
    Quand je sélectionne les filtres "Nom, Année, Actif"
    Alors le nombre de filtres actifs devrait être 3
    
    # Valider avec des filtres vides affiche toutes les lignes actives
    Quand je clique sur le bouton appliquer les filtres
    Alors le tableau devrait avoir 1 ligne(s)
    
    # Supprimer tous les filtres
    Quand je supprime tous les filtres
    Alors le nombre de filtres actifs devrait être 0
    Et le tableau devrait avoir 2 ligne(s)
    
    # Utiliser le filtre par nom
    Quand je sélectionne les filtres "Nom"
    Et je remplis le filtre 0 avec "brandCollection2"
    Et je clique sur le bouton appliquer les filtres
    Alors le tableau devrait avoir 1 ligne(s)
    Et le tableau devrait contenir
      | Nom                | Année      |
      | brandCollection2   | 02/02/2020 |
    
    Quand je supprime tous les filtres
    
    # Utiliser le filtre Actif
    Quand je sélectionne les filtres "Actif"
    Et je clique sur le bouton appliquer les filtres
    Alors le tableau devrait avoir 1 ligne(s)
    Et le tableau devrait contenir
      | Nom                | Année      |
      | brandCollection1   | 01/01/2020 |
    
    Quand je supprime tous les filtres

  Scénario: Vérifier que les filtres sont sauvegardés
    Quand je visite l'URL "/brand/1/collections"
    Alors le nombre de filtres actifs devrait être 0
    
    # Activer tous les filtres
    Quand je sélectionne les filtres "Nom, Année, Actif"
    Alors le nombre de filtres actifs devrait être 3
    
    Quand je clique sur le bouton appliquer les filtres
    Alors le tableau devrait avoir 1 ligne(s)
    
    # Recharger la page et vérifier que les filtres sont toujours présents
    Quand je recharge la page
    Alors l'URL devrait être "/brand/1/collections"
    Et le nombre de filtres actifs devrait être 3
    Et les filtres devraient être "Nom, Année, Actif"
    Et le tableau devrait avoir 1 ligne(s)
    
    # Réinitialiser les filtres
    Quand je supprime tous les filtres
    Alors le nombre de filtres actifs devrait être 0

  Scénario: Activer une nouvelle collection et vérifier les données
    Quand je visite l'URL "/brand/1/collections"
    
    # Activer la collection à la ligne 1
    Quand je coche la ligne 1 colonne 0
    
    # Sauvegarder et vérifier le message de succès
    Quand je sauvegarde le formulaire
    Alors je devrais voir le message "Enregistrement réussi" avec le contenu "Les informations que vous avez saisies ont été enregistrées avec succès." de type "success"
    
    # Vérifier que la collection est bien activée
    Quand je change vers l'onglet 0 nommé "Informations générales"
    Et je visite l'URL "/brand/1/collections"
    
    Alors le tableau devrait contenir
      | Nom                | Année      |
      | brandCollection1   | 01/01/2020 |
      | brandCollection2   | 02/02/2020 |
    
    # Remettre l'état initial
    Quand je décoche la ligne 1 colonne 0
    Et je sauvegarde le formulaire

  Scénario: Afficher un message d'avertissement lors de modifications non sauvegardées
    Quand je visite l'URL "/brand/1/collections"
    
    # Modifier une collection
    Quand je modifie la ligne 1
    Et je remplis le champ "name" avec "Zeus"
    Et je ferme la popup
    
    # Vérifier le message d'avertissement
    Alors je devrais voir le message "Informations non sauvegardées" avec le contenu "Si vous fermez cette fenêtre, vos changements non sauvegardés seront perdus" de type "info"
    
    Quand je ferme la popup
    
    # Vérifier que les données n'ont pas changé
    Alors le tableau devrait contenir
      | Nom                | Année      |
      | brandCollection1   | 01/01/2020 |
      | brandCollection2   | 02/02/2020 |

  Scénario: Mettre à jour une collection
    Quand je visite l'URL "/brand/1/collections"
    
    # Modifier le nom de la collection
    Quand je modifie la ligne 1
    Et je remplis le champ "name" avec "Kronos"
    Et je sauvegarde la popup
    
    Alors je devrais voir le message "Enregistrement réussi" avec le contenu "Les informations que vous avez saisies ont été enregistrées avec succès." de type "success"
    Et le tableau devrait contenir
      | Nom                | Année      |
      | brandCollection1   | 01/01/2020 |
      | Kronos             | 02/02/2020 |
    
    # Remettre le nom initial
    Quand je modifie la ligne 1
    Et je remplis le champ "name" avec "brandCollection2"
    Et je sauvegarde la popup
    
    Alors je devrais voir le message "Enregistrement réussi" avec le contenu "Les informations que vous avez saisies ont été enregistrées avec succès." de type "success"
    Et le tableau devrait contenir
      | Nom                |
      | brandCollection1   |
      | brandCollection2   |

  Scénario: Ajouter une nouvelle collection
    Quand je visite l'URL "/brand/1/collections"
    
    # Ajouter une nouvelle collection
    Quand je clique sur le bouton ajouter
    Et je remplis le champ "name" avec "The Lighting Thief"
    Et je sauvegarde la popup
    
    Alors je devrais voir le message "Enregistrement réussi" avec le contenu "Les informations que vous avez saisies ont été enregistrées avec succès." de type "success"
    
    # Vérifier que la nouvelle collection apparaît dans la liste
    Quand je change vers l'onglet 0 nommé "Informations générales"
    Et je visite l'URL "/brand/1/collections"
    
    Alors le tableau devrait avoir 3 ligne(s)
    Et le tableau devrait contenir
      | Nom                | Année      |
      | brandCollection1   | 01/01/2020 |
      | The Lighting Thief |            |
      | brandCollection2   | 02/02/2020 |
