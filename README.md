# Contrast Slider

A contrast slider allowing users to adjust background and text color while maintaining WCAG (Web Content Accessibility Guidelines) accessibility standards.

[View on GitPage](https://chrisnajman.github.io/contrast-slider)

## JavaScript

Built with **vanilla ES6 JavaScript**, focusing on modern syntax and browser APIs.

The JavaScript has been split into separate modules, improving code modularity:

- `range.js`: Updates the page styling based on the selected contrast level, ensuring WCAG compliance.
  - `array-styles.js`: Array containing CSS style strings.
  - `array-wcag-colour-contrast`: Array containing contrast data gleaned from the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) website.
- `loader.js`: See [Loader Git repository](https://github.com/chrisnajman/loader)

---

## Accessibility

The range slider allows users to adjust contrast dynamically, with an `aria-describedby` attribute linking it to the output section. The `aria-live` attribute ensures screen readers announce changes.

The site is fully navigable using tab keys and up/down arrows.

---

## Testing and Compatibility

The application has been tested on the following platforms and browsers:

- **Operating System**: Windows 10
- **Browsers**:
  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge

### Device View Testing

The layout and functionality have been verified in both browser and device simulation views to ensure responsiveness and usability.

---

## How to Run

1. Clone or download the repository to your local machine.
2. Open the project folder and start a simple HTTP server (e.g., using `Live Server` in VS Code or Python's `http.server` module).
3. Open the project in a modern browser (e.g., Chrome, Firefox, or Edge).
