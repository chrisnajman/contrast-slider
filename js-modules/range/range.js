import { stylesArray } from "./array-styles.js"
import { wcagColourContrastArray } from "./array-wcag-colour-contrast.js"

export default function range() {
  // Contrast only in <main> region
  const main = document.querySelector("main")

  /* Input */
  const range = document.getElementById("range")

  /* Output */
  const val = document.getElementById("val")

  // Wcag colour contrast output containers
  const ratio = document.getElementById("ratio")
  const aa = document.getElementById("aa")
  const aaLarge = document.getElementById("aa-large")
  const aaa = document.getElementById("aaa")
  const aaaLarge = document.getElementById("aaa-large")

  range.addEventListener("input", (e) => {
    const value = Number(e.target.value)

    // Apply style only if the value is within the defined range (else "")
    const style = stylesArray[value] || ""
    main.style = style
    val.innerText = style

    // Populate WCAG data list
    const contrast = wcagColourContrastArray[value] || {} // Fallback to empty object if undefined
    ratio.textContent = contrast.ratio || ""
    aa.textContent = contrast.AA || ""
    aaLarge.textContent = contrast.AALarge || ""
    aaa.textContent = contrast.AAA || ""
    aaaLarge.textContent = contrast.AAALarge || ""

    // Set style for range bg colour
    value > 3
      ? (range.style = "background-color: white;")
      : (range.style = "background-color: black;")
  })
}
