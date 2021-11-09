const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
  return 'Your notes.....';
}

const addNote = (title, body) => {
  const notes = loadNotes();

  var duplicateNotes = notes.filter( (note) => note.title === title);
  var duplicateNote = notes.find((note) => note.title === title);

  debugger;

if (!duplicateNote) {
  console.log(title);
  console.log(body);
    notes.push ({
      title: title,
      body: body
    });
    saveNotes(notes);

    console.log('New Note added')
  } else {
    console.log('Notes Title Taken');
  }
}

const removeNote = (title) => {
  const notes = loadNotes();
  console.log('Title to be removed ' + title);

  const resultSet = notes.filter((note) => note.title !== title);

  if (notes.length == resultSet.length) {
    console.log(chalk.green.inverse("Note was not removed"));
  } else {
    console.log(chalk.red.inverse("Note was removed"));
    saveNotes(resultSet);
  }
}

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green.inverse('Your Notes'));

  notes.forEach((note) => {
    console.log(note.title);
  });
}

const readNote = (title) => {
  const notes = loadNotes();

  const result = notes.find((note) => note.title === title);

  if (!result) {
    console.log(chalk.inverse.red('No Note Found!!'));
  } else {
    console.log(chalk.inverse(result.title));
    console.log(result.body);
  }
}

const saveNotes = (notes) => {
  const stringData = JSON.stringify(notes);
  fs.writeFileSync('notes.json', stringdata);
}

const loadNotes = () => {

  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch(e) {
    return [];
  }

}
//getNotes();

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}
