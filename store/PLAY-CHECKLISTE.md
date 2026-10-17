# Play-Store-Checkliste Waypals (Stand 17.10.2026)

Ich kann hier kein Android-Paket bauen und mich nicht in dein Play-Konto einloggen; diese Schritte musst du selbst klicken (je ca. 5 Minuten):

1. Play-Entwicklerkonto anlegen (25 US-$, Identitätsprüfung) – https://play.google.com/console
2. Paket bauen: https://www.pwabuilder.com → URL https://loliskos-hash.github.io/Waypals/ → Package for stores → Android. Paketname z. B. de.ludeldoo.waypals. Die .aab-Datei und den SHA-256-Fingerabdruck sichern (Schlüssel + Passwort gut aufheben!).
3. Fingerabdruck und Paketname in .well-known/assetlinks.json eintragen (aktuell noch Platzhalter) – schick mir beides, dann trage ich es ein und pushe. Bei Play App Signing zusätzlich den Fingerabdruck aus der Play Console (Einrichtung → App-Signatur) ergänzen.
4. App erstellen, .aab in den Test-Track „Geschlossener Test“ hochladen.
5. 12 Tester per E-Mail eintragen; sie müssen 14 Tage lang angemeldet bleiben, erst dann „Produktion beantragen“.
6. Texte: store/store-listing.md (jetzt inkl. Taubendex). Grafiken: store/ bzw. Ordner store-upload.
7. Pflichtformulare: Datenschutz-URL, Datensicherheit, Inhaltseinstufung, Zielgruppe 16+, Konto-Löschung (URL steht in store-listing.md).
8. Namens-Check: siehe Markenprüfung – vor dem Start entscheiden.
