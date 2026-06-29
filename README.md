# Calculator App

A simple calculator I built during Week 3 of my internship. It handles basic math operations and has a clean, dark-themed interface.

## What It Does

- Add, subtract, multiply, divide
- Percentage calculations
- Clear everything with AC
- Delete last digit with DEL
- Prevents typing things like "5++3" by mistake

## Tech Stack

- HTML for the structure
- CSS for styling (used grid layout for the buttons)
- JavaScript for the logic

## Files

| File | What It's For |
|------|---------------|
| index.html | The calculator layout |
| style.css | Colors, button shapes, shadows |
| script.js | Making the buttons actually work |

## How I Built It

**Day 1** — Planned out what buttons I needed and wrote the HTML. Kept it simple: a display screen and a grid of buttons.

**Day 2** — Styled everything. Went with a dark blue theme because it looks cleaner. Used CSS grid to line up the buttons in 4 columns. Added shadows so buttons look pressable.

**Day 3** — Connected JavaScript. Got the buttons to show numbers on the screen when clicked.

**Day 4** — Added the actual math. Used `eval()` to calculate results. Added AC to clear and DEL to backspace. Also added a check so you can't enter two operators in a row (like `++` or `--`).

**Day 5** — Tested everything on my phone. Fixed a few bugs. Deployed to GitHub Pages.

## Problems I Ran Into

- **Buttons were stacking vertically** — My CSS grid wasn't loading because I was opening the file wrong. Switched to Spck Editor and it worked.
- **JavaScript wasn't running** — Same issue, wrong preview method. Spck Editor's preview fixed it.
- **Double operators** — Added a simple check: if the last character is an operator and you click another operator, it replaces the old one instead of adding it.

## Live Link

https://inkphantom-coder.github.io/calculator-project1/

## Source Code

https://github.com/inkphantom-coder/calculator-project1
