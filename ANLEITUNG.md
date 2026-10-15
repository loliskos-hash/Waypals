# Waypals veröffentlichen – Schritt für Schritt

Alles Nötige liegt in diesem Ordner. Reihenfolge: 1 Firebase → 2 GitHub Pages → 3 iPhone → 4 Play Store.
Ohne Schritt 1 läuft die App trotzdem, speichert aber nur auf dem jeweiligen Gerät (dann kein Kreis/Challenges).

## 1. Firebase (Konto + Speicher, kostenlos im Spark-Tarif)
1. https://console.firebase.google.com → „Projekt hinzufügen“ (Analytics ausschalten).
2. Build → Authentication → „Get started“ → Anmeldemethode **Google** aktivieren (Support-Mail wählen).
3. Build → Firestore Database → „Datenbank erstellen“ → Standort **eur3 (Europa)** → Produktionsmodus.
4. Firestore → Regeln: Inhalt von `firestore.rules` einfügen → Veröffentlichen.
5. Projekteinstellungen → „Meine Apps“ → Web-App (</>) hinzufügen → die angezeigten Werte in `firebase-config.js` eintragen.
6. Authentication → Einstellungen → Autorisierte Domains: `DEIN-NAME.github.io` hinzufügen.
7. In `firebase-config.js` auch Name, Adresse, E-Mail unter `provider` eintragen und dieselben Daten in `impressum.html` und `datenschutz.html` (gelb markiert).

## 2. Hosting auf GitHub Pages
1. Neues **öffentliches** Repository anlegen (z. B. `waypals`). Alle Dateien dieses Ordners hochladen (inkl. `.nojekyll` und dem Ordner `.well-known`).
2. Settings → Pages → Branch `main`, Ordner `/ (root)`. Nach ~1 Minute: `https://DEIN-NAME.github.io/waypals/`.
   Tipp: Sag mir den Repo-Namen, dann lade ich die Dateien für dich hoch.

## 3. iPhone (ohne Apple-Entwicklerkonto)
Seite in **Safari** öffnen → Teilen-Symbol → „Zum Home-Bildschirm“. Sie startet dann wie eine App. (Im App Store erscheint sie so nicht.)

## 4. Google Play
1. Entwicklerkonto: https://play.google.com/console (einmalig 25 US-$, Identitätsprüfung). Neue private Konten müssen vor der Veröffentlichung einen **geschlossenen Test mit 12 Testern über 14 Tage** durchführen.
2. App als Android-Paket erzeugen (kostenlos, ohne Programmieren): https://www.pwabuilder.com → URL eingeben → „Package for stores“ → Android. Paketname z. B. `de.deinname.waypals`. PWABuilder liefert eine `.aab`-Datei und zeigt den **SHA-256-Fingerabdruck** des Signaturschlüssels. (Signatur-Schlüssel und Passwort sichern!)
3. Fingerabdruck und Paketname in `.well-known/assetlinks.json` eintragen, hochladen (sonst zeigt die App eine Browserleiste). Bei „Play App Signing“ den Fingerabdruck aus der Play Console (Einrichtung → App-Signatur) zusätzlich eintragen.
4. Play Console → App erstellen → `.aab` hochladen. Texte/Grafiken: Ordner `store/` (`store-listing.md`, `feature-graphic-1024x500.png`, `screenshot-*.png`, App-Icon `icons/icon-512.png`).
5. Pflichtangaben: Datenschutzerklärung-URL, Datensicherheit, Inhaltseinstufung, Zielgruppe (16+), Konto-Löschung (in der App unter Einstellungen → Konto; URL = Datenschutzseite).

## Rechtliches (wichtig, ich bin kein Anwalt)
- **Name „Waypals“:** Ich habe keine identische Marke gefunden, aber ähnliche Namen existieren. Prüfe vor dem Start kostenlos bei DPMA (register.dpma.de), EUIPO (euipo.europa.eu → TMview) und Google Play (Namenssuche). Im Zweifel anderen Namen wählen oder kurz anwaltlich prüfen lassen.
- Impressum und Datenschutz sind **Vorlagen**: echte Daten eintragen, ggf. prüfen lassen.
- Karten-/Städtedaten: Natural Earth (gemeinfrei) – bitte kurz gegenprüfen. Schriften: SIL OFL (Lizenzen in `fonts/`). Icon/Figuren sind eigene Gestaltungen. Marken Dritter (Instagram, WhatsApp, QR Code) werden nur genannt, nicht genutzt.
- Fremde Personen: Nur mit Einverständnis eintragen (steht in der Einführung der App).
- Firebase-SDK wird von gstatic.com geladen (IP geht an Google) – steht in der Datenschutzerklärung.


## Sprachen
Standard ist Englisch. Verfügbar: Deutsch, English, Español, Français, Italiano, Português (europäisch). Die Übersetzungen sind maschinell erstellt; bitte von Muttersprachlern gegenlesen lassen (besonders Datenschutz/Impressum). Städtenamen bleiben deutsch. Für den Play-Store-Eintrag die Texte in `store/` pro Sprache anlegen.
