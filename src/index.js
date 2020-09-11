import { v4 as uuidv4 } from "uuid";
import getNoteElement from "./noteElement";
import saveNote from "./saveNote";
import "./scss/main.scss";

const createNoteBtn = document.getElementById("createNoteBtn");
const noteList = document.querySelector(".notes");
const notesContainer = document.querySelector(".notes");

const fetchNotes = () => {
  const notes = JSON.parse(localStorage.getItem("notes"));
  noteList.innerHTML = "";

  notes.forEach((note) => {
    noteList.append(getNoteElement(note.id, note.title, note.noteText));
  });
};

const createNote = () => {
  notesContainer.append(getNoteElement(uuidv4(), "", ""));
  console.log("Clicked");
};

const deleteNote = (e) => {
  const notes = JSON.parse(localStorage.getItem("notes"));
  const id = e.target.parentElement.parentElement.id;

  const newNotes = notes.filter((note) => note.id !== id);
  localStorage.setItem("notes", JSON.stringify(newNotes));
  fetchNotes();
};

const copyToClipBoard = (e) => {
  const parent = e.target.parentElement.parentElement;
  const noteText = parent.querySelector(".note-body textarea");

  noteText.select();
  document.execCommand("copy");
};

window.saveNote = saveNote;
window.deleteNote = deleteNote;
window.copyToClipBoard = copyToClipBoard;

createNoteBtn.addEventListener("click", createNote);
document.addEventListener("DOMContentLoaded", fetchNotes);
