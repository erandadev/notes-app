const saveNote = (e) => {
  const parent = e.target.parentElement.parentElement;
  const title = parent.querySelector(".note-title input").value;
  const noteText = parent.querySelector(".note-body textarea").value;

  const note = {
    id: parent.id,
    title: title,
    noteText: noteText,
  };

  if (
    localStorage.getItem("notes") == "" ||
    localStorage.getItem("notes") == null
  ) {
    const notes = [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
  } else {
    const notes = JSON.parse(localStorage.getItem("notes"));
    const preiviousNote = notes.filter((previous) => previous.id == note.id);

    if (preiviousNote.length > 0) {
      const newNotes = notes.map((previous) => {
        if (previous.id == note.id) {
          previous.title = note.title;
          previous.noteText = note.noteText;
        }
        return previous;
      });
      localStorage.setItem("notes", JSON.stringify(newNotes));
    } else {
      notes.push(note);
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }
};

export default saveNote;
