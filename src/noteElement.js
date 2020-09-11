const getNoteElement = (id, title, noteText) => {
  const dom = document.createElement("div");
  dom.id = id;
  dom.classList.add("note");

  dom.innerHTML = `<div class="note-header">
  <img src="icon-copy.svg" onclick="copyToClipBoard(event)" alt="" />
        
  <img
    src="icon-trash.svg"
    alt=""
    onclick="deleteNote(event)"
  />
    </div>
    <div class="note-title">
      <input type="text" onkeyup="saveNote(event)" placeholder="Title" value="${title}" />
    </div>
    <div class="note-body">
      <textarea onkeyup="saveNote(event)" placeholder="Type here.....">${noteText}</textarea>
    </div>`;

  return dom;
};

export default getNoteElement;
