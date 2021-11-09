/*const add = require('./utils.js')
const sum = add(4, -2)
console.log(sum)*/


/*######################## Example 2 #######################*/
const validator = require('validator');
const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');
/*const msg = getNotes();
console.log(msg);
console.log(validator.isEmail('@yahoo.in'))
console.log(validator.isURL('https://www@yahoo.in'))
const success = chalk.bold.red('Error!!');
console.log(success)
console.log(chalk.red.inverse('Error!!'))*/
const command = process.argv[2];
/*if (command === 'add') {
  console.log('Adding Note')
} else if (command === 'remove') {
  console.log('Remove Note');
}*/

//console.log(process.argv);
yargs.version('1.1.1')

//add read remove list Notes

//Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new Note',
  builder: {
      title: {
        describe: 'Note Title',
        demandOption: true,
        type: 'string'
      },
      body: {
        describe: 'Note Body',
        demandOption: true,
        type: 'string'
      }
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body)
  }
})

//Remove
yargs.command({
  command: 'remove',
  describe: 'Remove a new Note',
  builder: {
      title: {
        describe: 'Note Title',
        demandOption: true,
        type: 'string'
      }
  },
  handler: (argv) => {
    notes.removeNote(argv.title)
  }
})

//read
yargs.command({
  command: 'read',
  describe: 'Read a new Note',
  builder: {
      title: {
        describe: 'Note Title',
        demandOption: true,
        type: 'string'
      }
  },
  handler: (argv) => {
    notes.readNote(argv.title)
  }
})

//list
yargs.command({
  command: 'list',
  describe: 'List a new Note',
  handler: () => {
    notes.listNotes();
  }
})
//console.log(yargs.argv)
yargs.parse()
