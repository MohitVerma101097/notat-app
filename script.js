const noteText = document.querySelector("#noteText")
const notesList = document.querySelector("#notesList")
const saveBtn = document.querySelector("#saveButton")


const saveNote = async() =>{
 if(!noteText.value) return;

 try {
    const exsistingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    exsistingNotes.push(noteText.value)
    localStorage.setItem("notes", JSON.stringify(exsistingNotes))
    await displayNotes()
 } catch (error){
    console.error("her skjedde noe feil", error)
 }
}

const displayNotes = async () => {
    const exsistingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    notesList.innerHTML = "";
    for (let i = 0; i < exsistingNotes.length; i++) {
        const noteElement = document.createElement("div");
        noteElement.innerHTML = `
            <p><strong>Notat #${i + 1}</strong></p>
            <p>${exsistingNotes[i]}</p>
            <button class="deleteNote">Slett Notat</button>`;
        if (i % 2 === 0) {
            noteElement.classList.add("green-note");
        } else {
            noteElement.classList.add("orange-note");
        }
        const deleteBtn = noteElement.querySelector(".deleteNote");
        const index = i;
        deleteBtn.addEventListener("click", () => {
            deleteNote(index);
        });
        notesList.appendChild(noteElement);
    }
};


const deleteNote = async(index) =>{
    try {
        const exsistingNotes = JSON.parse(localStorage.getItem("notes")) || []
        exsistingNotes.splice(index,1)

        localStorage.setItem("notes", JSON.stringify(exsistingNotes))

        await displayNotes()
    } catch (error) {
        console.error("feil ved sletting av notat", error)
    }
}

saveBtn.addEventListener("click", saveNote)