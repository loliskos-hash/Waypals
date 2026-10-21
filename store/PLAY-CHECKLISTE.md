# Google Play Veröffentlichung – Waypals (Stand 21.10.2026)

Bereit (von mir erledigt): Texte (store-listing.md), neue Screenshots (Handy + Tablet, mit 3D-Figuren und Quest-Werkstatt), Feature-Grafik, Datenschutz- und Löschseite, Manifest, Icons, Bubblewrap-Konfiguration (store/twa/twa-manifest.json), Vorlage für die Haupt-Domain (store/root-site/).
Von dir zu klicken (kein Zugang zu deinem Play-Konto, kein Android-Build hier): Schritte A–F.

## WICHTIG vorab (zwei Punkte)
1. **Name:** „Waypals“ kann mit einer bestehenden Marke kollidieren (Klasse 42, Delhi). Entscheide vor dem Anlegen der App. Der Paketname (Vorschlag: de.ludeldoo.waypals) ist danach dauerhaft; der Anzeigename lässt sich ändern.
2. **assetlinks.json muss auf der Haupt-Domain liegen:** Google prüft https://loliskos-hash.github.io/.well-known/assetlinks.json (nicht /Waypals/…). Dafür brauchst du bei GitHub ein zweites Repository mit dem Namen **loliskos-hash.github.io** (öffentlich), in das der Inhalt von `store/root-site/` kommt (inkl. `.well-known` und `.nojekyll`). Ohne das läuft die App im Test trotzdem, zeigt aber oben eine Browserleiste. Mit eigener Domain entfällt das Problem.

## A. Konto
1. https://play.google.com/console → Entwicklerkonto (einmalig 25 US-$), Typ „Privatperson“ oder „Organisation“ (Ludeldoo). Identitätsprüfung (Ausweis, ggf. D-U-N-S bei Organisation).
2. Bei neuen privaten Konten gilt: 12 Tester, 14 Tage geschlossener Test, bevor Produktion freigeschaltet wird.

## B. Paket bauen (PWABuilder, kostenlos)
1. https://www.pwabuilder.com → https://loliskos-hash.github.io/Waypals/ eingeben → Package for stores → Android (Google Play).
2. Paketname: de.ludeldoo.waypals · App-Name: Waypals · Start-URL / Version 1 · „Signing key: New“ wählen.
3. Download: .aab-Datei + Signing-Key (.keystore) + Passwort. Alles sicher sichern (verlorener Key = keine Updates).
4. SHA-256-Fingerabdruck aus der Zip-Datei (signing-key-info.txt) notieren.

## C. assetlinks (damit die App ohne Browserleiste läuft)
Schick mir Paketname + SHA-256 (ich trage sie in store/root-site/.well-known/assetlinks.json und in .well-known/assetlinks.json ein) (und den Fingerabdruck der Play-App-Signatur aus Play Console → Einrichtung → App-Integrität, sobald vorhanden). Ich trage beides in .well-known/assetlinks.json ein und pushe. Aktuell stehen dort Platzhalter.

## D. App anlegen
1. Play Console → App erstellen: Name, Sprache Deutsch, App, kostenlos.
2. Store-Eintrag: Texte aus store-listing.md; Icon icons/icon-512.png; Feature-Grafik feature-graphic-1024x500.png; Handy-Screenshots store/promo/ (8 Stück, 1080×1920 mit Rahmen); Tablet-Screenshots store/promo-tablet/ (7"/10").
3. Kategorie: Soziales Netzwerk oder Lifestyle. Kontakt-E-Mail: laura.kaesenheimer@gmail.com (oder Firmenadresse).
4. Datenschutz-URL: https://loliskos-hash.github.io/Waypals/datenschutz.html

## E. Pflichtformulare (Antworten siehe store-listing.md)
- Datensicherheit: Name, E-Mail, Fotos, Nutzer-ID, App-Aktivität werden erhoben; zur App-Funktion/Kontoverwaltung; kein Verkauf, keine Werbung; verschlüsselt übertragen; Löschung auf Anfrage möglich. Lösch-URL: https://loliskos-hash.github.io/Waypals/loeschen.html
- Inhaltseinstufung (IARC): Kategorie „Soziale Netzwerke/Kommunikation“; Nutzerinteraktion: ja; Standort teilen: nur wenn so implementiert (Heimatorte sind Texteingaben); keine Gewalt, Glücksspiel, Drogen. Ergebnis voraussichtlich ab 12.
- Zielgruppe: 16+ (nicht an Kinder gerichtet). Anzeigen: Nein. Finanz-/Gesundheits-Funktionen: Nein. Nachrichten-/Regierungs-App: Nein.
- Berechtigungen: Kamera/Fotos nur über Datei-Auswahl; Benachrichtigungen aktuell nicht erforderlich.

## F. Tests und Veröffentlichung
1. Test → Geschlossener Test → Release erstellen → .aab hochladen → 12 Tester per E-Mail (Google-Konten) eintragen, Test-Link an sie schicken; sie müssen 14 Tage angemeldet bleiben.
2. Nach 14 Tagen: „Produktionszugriff beantragen“ → Fragebogen → Prüfung (meist wenige Tage).
3. Produktion → Release erstellen, Länder wählen → Zur Prüfung senden.

## Technisch bekannt
- Die 3D-Tauben nutzen WebGL; auf sehr alten Geräten ohne WebGL fallen sie automatisch auf die 2D-Grafik zurück.
- Google-Anmeldung: In Firebase die autorisierten Domains prüfen (loliskos-hash.github.io). Bei der Android-App ggf. die Play-Signatur-SHA-1 in Firebase eintragen, falls die Anmeldung dort scheitert.

## Alternative zu PWABuilder: Bubblewrap
`npm i -g @bubblewrap/cli`, dann `bubblewrap init --manifest=https://loliskos-hash.github.io/Waypals/manifest.webmanifest` bzw. mit store/twa/twa-manifest.json, `bubblewrap build` erzeugt app-release-bundle.aab und den Fingerabdruck (`bubblewrap fingerprint`).

## Vor dem Upload prüfen
- App im Chrome auf dem Handy öffnen: https://loliskos-hash.github.io/Waypals/ → „Zur Startseite hinzufügen“ funktioniert, 3D-Figuren erscheinen. Bei Rucklern: Einstellungen → 3D-Figuren aus.
- Sprache wechseln (7 Sprachen) und einmal durch alle Tabs gehen.
- Google-Anmeldung testen (Firebase: autorisierte Domain loliskos-hash.github.io).
