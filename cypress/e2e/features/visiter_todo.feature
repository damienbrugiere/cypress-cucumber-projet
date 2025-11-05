# language: fr

Fonctionnalité: Tester le site google.com
  En tant qu'utilisateur
  Je veux naviguer sur google.com
  Afin de vérifier que le site fonctionne correctement

  Contexte:
    Soit l'utilisateur sur la page d'accueil
  @slow
  Scénario: Vérifier que la page se chargement
    Quand l'utilisateur clique sur le lien "Active"

  @screenshot
  Scénario: Cliquer avec screenshots
    Quand l'utilisateur clique sur le lien "Active"