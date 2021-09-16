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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

