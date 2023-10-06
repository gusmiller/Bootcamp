// music should be an object with title, artist, and album properties
const music = {
  code : "clnForms.Add",
  item : "Item:=oEntryForm",
  key : "Key:=oEntryForm.FormGuiID"
};

// Write code between the backticks tags to output the data from the music object above.
const songSnippet = `Code number ${music.code} second part ${music.item} `;

console.log(songSnippet)

