# String Calculator

## Project Setup

```bash
npm install
npm test



- **Handles empty input**  
  Returns `0` when the input is an empty string.

- **Adds comma-separated numbers**  
  Example: `"1,2"` returns `3`.

- **Supports newline (`\n`) as a delimiter**  
  Example: `"1\n2,3"` returns `6`.

- **Allows custom delimiters**  
  Syntax: `"//;\n1;2"` → returns `3` (delimiter is `;`).

- **Throws an error on negative numbers**  
  Example: `"-1,-2"` throws  
  `Error: negative numbers not allowed -1,-2`.
