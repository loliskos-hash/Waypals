# Google Play Veröffentlichung – Waypals (Stand 19.10.2026)

Bereit (von mir erledigt): Texte, Grafiken, Formular-Antworten, Datenschutz- und Löschseite, Manifest, Icons, assetlinks-Vorlage.
Von dir zu klicken (kann ich nicht: kein Zugang zu deinem Play-Konto, kein Android-Build hier): Schritte A–F.

## Vorab: Namensentscheidung
Siehe Markenprüfung: „Waypals“ kann mit bestehenden Marken kollidieren. Entscheide vor dem Anlegen der App – der Name lässt sich später nur eingeschränkt ändern. Der Paketname (z. B. de.ludeldoo.waypals) ist dauerhaft.

## A. Konto
1. https://play.google.com/console → Entwicklerkonto (einmalig 25 US-$), Typ „Privatperson“ oder „Organisation“ (Ludeldoo). Identitätsprüfung (Ausweis, ggf. D-U-N-S bei Organisation).
2. Bei neuen privaten Konten gilt: 12 Tester, 14 Tage geschlossener Test, bevor Produktion freigeschaltet wird.

## B. Paket bauen (PWABuilder, kostenlos)
1. https://www.pwabuilder.com → https://loliskos-hash.github.io/Waypals/ eingeben → Package for stores → Android (Google Play).
2. Paketname: de.ludeldoo.waypals · App-Name: Waypals · Start-URL / Version 1 · „Signing key: New“ wählen.
3. Download: .aab-Datei + Signing-Key (.keystore) + Passwort. Alles sicher sichern (verlorener Key = keine Updates).
4. SHA-256-Fingerabdruck aus der Zip-Datei (signing-key-info.txt) notieren.

## C. assetlinks (damit die App ohne Browserleiste läuft)
Schick mir Paketname + SHA-256 (und den Fingerabdruck der Play-App-Signatur aus Play Console → Einrichtung → App-Integrität, sobald vorhanden). Ich trage beides in .well-known/assetlinks.json ein und pushe. Aktuell stehen dort Platzhalter.

## D. App anlegen
1. Play Console → App erstellen: Name, Sprache Deutsch, App, kostenlos.
2. Store-Eintrag: Texte aus store-listing.md; Icon app-icon-512.png; Feature-Grafik feature-graphic-1024x500.png; Handy-Screenshots store/promo/ (8 Stück, 1080×1920 mit Rahmen) oder screenshot-1..4; Tablet-Screenshots store/promo-tablet/ (7"/10").
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
