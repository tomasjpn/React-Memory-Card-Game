# React Memory Card Game

Solution for TheOdinProject: Memory Card: https://www.theodinproject.com/lessons/node-path-react-new-memory-card

## Live-preview:

---

## Inhaltsverzeichnis

1. [Projektübersicht](#projektübersicht)
2. [Funktionen](#funktionen)
3. [Projektstruktur](#Projektstruktur)
4. [Fazit](#fazit)

## Projektübersicht

Das **React Memory Card Game** ist ein Gedächtnisspiel, das mit React entwickelt wurde. Ziel des Spiels ist es, Karten auszuwählen, ohne eine Karte zu wählen, die bereits ausgewählt wurde. Die Karten werden nach jeder Auswahl neu gemischt, und der Schwierigkeitsgrad steigt, da sich der Spieler merken muss, welche Karten bereits ausgewählt wurden.

## Anleitung zur Spielnutzung und Funktionen

Hier ist eine Schritt-für-Schritt-Anleitung, wie man das Spiel spielen kann:

1. **Schwierigkeitsgrad auswählen**:

   - Beim Start des Spiels können Sie den Schwierigkeitsgrad auswählen. Die Optionen sind "Einfach", "Mittel" und "Schwer".
   - Der Schwierigkeitsgrad beeinflusst die Anzahl der Karten, die im Spiel verwendet werden. Wählen Sie eine Option, um die Spielschwierigkeit anzupassen.

2. **Karten auswählen**:

   - Klicken Sie auf eine Karte, um sie umzudrehen. Ziel des Spiels ist es, Paare von Karten mit denselben Bildern zu finden.
   - Die Karten werden nach jeder Auswahl neu gemischt. Merken Sie sich die Positionen der Karten, um Paare effizient zu finden.

3. **Neumischen der Karten**:

   - Nach jeder Auswahl werden die Karten neu gemischt. Dies erhöht die Schwierigkeit, da Sie sich an neue Positionen der Karten erinnern müssen.

4. **Verlustbedingung**:

   - Das Spiel endet, wenn Sie eine Karte auswählen, die bereits zuvor aufgedeckt wurde und nicht zu einem Paar gehört. In diesem Fall haben Sie das Spiel verloren.

5. **Score-Anzeige**:
   - Der aktuelle Punktestand oder die bisherige Streak wird kontinuierlich angezeigt. Diese Anzeige hilft Ihnen, Ihre Leistung während des Spiels zu verfolgen.

### Projektstruktur

- **`public/`**

  - (Optional) Dieser Ordner kann für statische Dateien verwendet werden, die direkt vom Server bereitgestellt werden. In Ihrem Fall scheint dieser Ordner nicht verwendet zu werden.

- **`src/assets/`**

  - `Background.css`: Beinhaltet die Stile für den Hintergrund des Spiels.
  - `Card.css`: Beinhaltet die Stile für die Kartenkomponente.

- **`src/components/`**

  - `Card.jsx`: Definiert das Layout und Verhalten für eine einzelne Karte im Spiel.
  - `Scoreboard.jsx`: Verwalten und Anzeigen des aktuellen Punktestands oder der Streak des Spiels.

- **`src/utils/`**

  - `pokemonAPI.jsx`: Zuständig für die API-Kommunikation zur Abrufung von Pokemon-Daten.
  - `ShuffleCards.jsx`: Implementiert die Logik zum Mischen der Karten.

- **`src/`**

  - `App.css`: Beinhaltet die Stile für die App-Komponente.
  - `App.jsx`: Die zentrale Komponente, die den Zustand des Spiels und die Logik verwaltet.
  - `index.css`: Globale Stile für die gesamte Anwendung.
  - `main.jsx`: Der Einstiegspunkt für die Anwendung, der die `App`-Komponente rendert.

- **Wurzelverzeichnis**
  - `index.html`: Die Haupt-HTML-Datei, die als Container für die React-Anwendung dient.
  - `.gitignore`: Definiert die Dateien und Ordner, die von Git ignoriert werden sollen.
  - `eslint.config.js`: Konfiguriert ESLint für die Code-Qualitätsprüfung.
  - `vite.config.js`: Konfiguriert Vite als Build-Tool für die schnelle Entwicklung.
  - `package.json`: Verwaltet die Projektabhängigkeiten und Skripte.

---

### Verwendete Sprachen/Tools

- **React**: Bibliothek zur Erstellung der Benutzeroberfläche.
- **Vite**: Modernes Build-Tool, das für schnelle Entwicklungs- und Build-Prozesse sorgt und optimierte Bundles erstellt.
- **JavaScript**: Programmiersprache zur Implementierung der Logik.
- **CSS**: Styling für die Benutzeroberfläche und das Layout.

## Fazit

Das React Memory Card Game bietet eine interessante Herausforderung für das Gedächtnis und ist eine ausgezeichnete Übung für die Entwicklung von React-Anwendungen. Es zeigt, wie Zustandshandhabung und Komponenteninteraktion in React effektiv umgesetzt werden können und bietet eine gute Grundlage für weitere Entwicklungen und Anpassungen.

---
