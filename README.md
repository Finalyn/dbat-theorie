# DBAT Théorie · Correcteur d'examens

Correcteur interactif pour les examens **CFC Dessinateur · Orientation Architecture** du Canton de Vaud.

Toutes les sessions précédentes (2018-2023) en Matériaux et Construction, avec corrections sourcées sur les cours **LM-A** (Lehrmittel Architecture).

## Utilisation

Ouvre [l'app](#) (lien GitHub Pages une fois activé).

- **Examens** : sélectionne une session, réponds aux questions, vérifie la correction et marque ce que tu sais / ne sais pas.
- **Statistiques** : moyenne globale, liste des questions ratées, analyse par chapitre, possibilité de **refaire uniquement les ratées**.
- **PWA** : installable comme une app (Chrome/Edge → "Installer", Safari iOS → "Ajouter à l'écran d'accueil"). Marche hors-ligne.

## Données

Tout est stocké **localement** dans le navigateur (`localStorage`). Aucun login, aucun serveur, aucune télémétrie.

## Structure

```
index.html       Page d'accueil (liste des examens)
exam.html        Template générique d'examen (charge data/*.json)
stats.html       Tableau de bord statistiques
data/*.json      Questions et corrections par examen
manifest.json    Manifest PWA
sw.js            Service worker (cache offline)
```

## Stack

100 % statique : HTML + CSS + JS vanilla. Aucune dépendance. Aucun build.

## Lancer en local

```bash
python -m http.server 8765
```

Puis ouvrir `http://localhost:8765/`.

## Sources

Réponses formulées à partir des cours **LM-A** (Lehrmittel Architecture) :

- *Matériaux* — fascicules 01 à 10
- *Construction* — fascicules 01 à 26

Plus normes SIA (102, 118, 180, 262, 271, 380, 416, 500), normes AEAI (protection incendie), CFC (Code des Frais de Construction), RLATC Vaud.

## Licence

Code : libre d'usage.
Contenu pédagogique : référence aux cours LM-A (matériel sous licence pour les texts originaux, formulations originales).
