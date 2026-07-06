# Nicole Mara – einfach sein.

Interaktive Onepage-Redesign-Skizze mit direkter Terminbuchung (mehrstufiges Overlay).

## Lokal starten
```
npm start
```
Dann http://localhost:3000 öffnen.

## Deployment (Railway)
Railway erkennt `package.json` automatisch, installiert nichts (keine Dependencies) und startet mit `npm start`. Der Port wird über die Umgebungsvariable `PORT` gesetzt.

## Dateien
- `index.html` – die komplette Skizze (Bilder & Fonts werden extern geladen)
- `server.js` – minimaler Node-Static-Server
- `package.json` – Start-Konfiguration
