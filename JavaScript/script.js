const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
  notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage(){
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
  let inputBox = document.createElement("p");
  let img = document.createElement("img")
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", true);
  img.src = "/images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateStorage();
  }
  else if (e.target.tagName === "P"){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function(){
        updateStorage();
      }
    })
  }
})


//sets up an event listener that waits for any key press ('keydown' event) that occur anywhere on the document
document.addEventListener("keydown" ,event =>{
  //checks if the key pressed is the "Enter" key 
  if(event.key == "Enter"){
    //if the pressed key is the "Enter" key then this line of code inserts a line break at the current cursor position,moves cursor to the next line
    document.execCommand("insertLinebreak");
    //by default , when Enter key is pressed it creates a new line or submit a form, so this line of code prevents such behaviour and only insert a line break without submitting forms or creating extra lines.
    event.preventDefault();
  }
})
