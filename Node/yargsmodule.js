// Install yargs first:
// npm install yargs

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
// We need use yargs(hideBin(process.argv)) to properly parse CLI arguments in ES6 module.
// hideBin(process.argv) removes the first two elements (node and the script path) so yargs sees only the actual arguments (add, --title, etc.).

yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "Add a new item with a title and description",
    builder: {
      title: {
        describe: "Title of the item",
        demandOption: true, // require
        type: "string",
      },
      description: {
        describe: "Description of the item",
        demandOption: false, // optional
        type: "string",
      },
    },
    handler(argv) {
      console.log("Adding item:");
      console.log(`Title: ${argv.title}`);
      console.log(`Description: ${argv.description || "No description provided."}`);
    },
  })
  .parse();


// Call : 
// node yargsmodule.js add --title="My Task" --description="Do something" 

  