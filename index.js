import chalk from "chalk";
import gradient from "gradient-string";

const startColor = "#0099F7";
const endColor = "#F11712";
const turboGradient = gradient(startColor, endColor);

console.log(chalk.bold(turboGradient(`\n>>> TURBOREPO\n`)));
