# JavaScript Essentials

A structured collection of JavaScript exercises and interactive browser-based projects, organized into 7 weekly modules. Each module builds on the previous, progressing from basic scripting through DOM manipulation to animated HTML5 Canvas applications.

## Modules

### [Week 01 — JavaScript Beginnings](week-01-JavaScript-beginnings/)

Foundational exercises covering variables, loops, conditionals, and user interaction via `prompt` and `alert`.

| Exercise | Description |
|---|---|
| `HelloDisplay.html` | Reads a number and displays "Hello" that many times |
| `NumberCalculations.html` | Performs arithmetic on two user-input numbers |
| `EvenOrOddNumber.html` | Labels numbers 1–20 as odd or even |
| `LargerAndSmallerNumbers.html` | Compares two numbers and identifies the larger/smaller |
| `TemperatureConverter.html` | Converts Fahrenheit to Celsius |
| `InvestmentCalculator.html` | Calculates years until an investment reaches a target value |
| `SquaresAndCubesNumberTable.html` | Generates a table of squares and cubes for 1–10 |

---

### [Week 02 — Functions](week-02-functions/)

Refactors Week 01 logic into reusable functions, introduces parameters, return values, and array methods.

| Exercise | Description |
|---|---|
| `HelloDisplay.html` | Wraps the display loop in a function |
| `CircleCalculator.html` | Computes area and circumference with separate functions |
| `RandomNumbersAndSum.html` | Generates 10 random numbers and sums them with `reduce()` |
| `InvestmentCalculator.html` | Refactored with helper functions for input and interest calculation |

---

### [Week 03 — Built-in Objects](week-03-built-in-objects/)

Uses JavaScript's built-in `Date` and `Math` objects.

| Exercise | Description |
|---|---|
| `CurrentDate.html` | Displays the current date in "Day, DD Month YYYY" format |
| `RandomNumbersAndSum.html` | Uses `Math.random()` for number generation |

---

### [Week 04 — Arrays](week-04-arrays/)

In-depth array work including searching, visual representation, `Math` rounding methods, and 2D grid operations.

| Exercise | Description |
|---|---|
| `RandomNumberAndIndexPosition.html` | Finds indices of values greater than 10 in a random array |
| `StarsDisplayForRandomFloatNumbers.html` | Represents float values visually with star characters |
| `FloatingPointNumbersAndMathMethods.html` | Compares `floor()`, `round()`, and `ceil()` on random floats |
| `Random1Or0In2DArray.html` | Builds and displays a 5×5 binary grid as an HTML table |
| `CountTheNumber1sAnd0sIn2DArray.html` | Counts 1s and 0s in a 5×5 binary grid |
| `Adds2ToFourRandomLocationsIn2DArray.html` | Mutates four random cells in a 5×5 grid; shows before/after |
| `ThreeAdjoining...1stored.html` | Detects three adjacent 1s horizontally or vertically in a 5×5 grid |
| `Replace2DArrayWithCountOf1s.html` | Replaces each 1 with the count of 1s in its row |

---

### [Week 05 — Elements and Events](week-05-Elements%20and%20events/)

DOM manipulation and event-driven programming. Exercises use `createElement`, `appendChild`, and CSS class toggling.

| Exercise | Description |
|---|---|
| `HelloAndGoodbyeButton.html` | Buttons append "Hello" or "Goodbye" text nodes to the page |
| `ChangeTextColour.html` | Buttons toggle text color between red and blue via CSS classes |

---

### [Week 06 — Canvas Drawing](week-06-canvas%20drawing/)

Introduction to the HTML5 Canvas API — drawing shapes and rendering images.

| Exercise | Description |
|---|---|
| `ACrossInASquare.html` | Draws a blue square with diagonal lines forming an X |
| `DisplayImageSubparts.html` | Loads an image and renders it in thirds using `drawImage()` |
| `DisplayMultipleImagesOnCanvas.html` | Draws multiple images side-by-side on a single canvas |

---

### [Week 07 — Canvas and Interaction](week-07-canvas-and-interaction/)

Combines the Canvas API with user input, click detection, and `requestAnimationFrame` animation.

| Exercise | Description |
|---|---|
| `TextDrawingOnCanvas.html` | Renders user-typed text at a chosen font size on canvas |
| `HelloGoodbyeTextAnimation.html` | Bouncing text animation; click toggles between "Hello" and "Goodbye" |
| `RandomLineDrawingsOnCanvas.html` | Color buttons draw random lines; clear button resets the canvas |
| `CircleClickDetection.html` | Click a circle to display its canvas coordinates |
| `CircleClickDetectionWithGrid.html` | Click cells in a 4×4 grid to fill them with circles |
| `AnimatedCircleMovementClick.html` | Circle smoothly animates to wherever you click |

---

## Getting Started

No build tools or dependencies required. Every exercise is a self-contained HTML file.

```bash
# Clone the repo
git clone https://github.com/paulezennolim/JavaScript-Essentials.git
cd JavaScript-Essentials

# Open any exercise in your browser
open week-01-JavaScript-beginnings/EvenOrOddNumber.html
```

Or simply open any `.html` file by double-clicking it in your file explorer.

---

## License

MIT — see [LICENSE](LICENSE) for details.
