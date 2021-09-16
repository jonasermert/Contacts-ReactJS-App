# Aufgabenstellung

Du hast Dich entschieden in der Filmindustrie zu arbeiten und hast einen Job gefunden, bei dem Du die Kontakte einer berühmten Produzentin verwalten sollst.
Wir werden eine Kontaktmanagement-App mit React für diese Produzentin erstellen.

5 Kontakte anzeigen:
Die JSON-Datei enthält die Herstellerkontakte. Importiere diese Datei und erstellen ein Array mit den ersten 5 Kontakten, die Du als Ausgang verwenden wirst.
Gib dieses Array (mit 5 Kontakten) aus und zeige das Bild, den Namen und die Popularität jedes Kontakts an.
Zum Importieren von contacts.json verwenden wir

import contacts from './contacts.json'

# Neue zufällige Kontakte hinzufügen

Erstelle jetzt in Deiner App einen Button "Zufälligen Kontakt hinzufügen". Jedes Mal, wenn der Button geklickt wird, soll ein neuer zufälliger Kontakt hinzugefügt werden 
Wähle zunächst zufällig einen Kontakt aus dem ursprünglichen Kontakt-Array aus. Füge dann diesen Kontakt zu deinem Array hinzu, das in Deinem state vorhanden ist (das ist das zuvor erstellte Array mit 5 Kontakten). Vergiss nicht setState () zu verwenden, damit React die App erneut rendert.

# Kontakte nach Name und Beliebtheit sortieren

Die Produzentin hat Dich gebeten, zwei neue Schaltflächen hinzuzufügen, damit die Kontakte neu sortiert werden können. Wenn eine der Schaltflächen geklickt wird, sollte die Tabelle nach Namen sortiert sein (alphabetisch), und wenn auf die andere Schaltfläche geklickt wird, sollte sie nach Beliebtheit sortiert werden (höchste zuerst).

Vergiss nicht, setState () nach dem Sortieren zu setzen!

# Kontakte entfernen

Die Produzentin möchte manchmal auch Kontakte entfernen. Implementiere in jeder Zeile eine Schaltfläche zum Löschen, mit der sie den Kontakt entfernen kann, auf den sie geklickt hat.

Es muss der Index des Arrays dieses Schauspielers abgerufen und verwendet werden, um den Kontakt aus dem Array zu entfernen. Vergiss nicht, setState () zu setzen nachdem der Kontakt entfernt wurde!

# Bonus | Styling

Erstelle einen Filter mit der Bedingung, jeder Star, welches  kein Bild hat, der scheidet dann aus

Leider kann diese Kontaktliste so noch nicht live gehen. Es muss funkeln! 
Füge mit CSS etwas “Magic” hinzu.

Wenn die Sortier-Buttons mehrmals geklickt werden, wird die Liste immer umgekehrt sortiert (z.B. wird A-Z zu Z-A oder höchste-niedrigste zu niedrigste-höchste Beliebtheit)

Happy coding! ❤️


