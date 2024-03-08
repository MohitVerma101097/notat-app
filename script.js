const noteText = document.querySelector("#noteText")
const notesList = document.querySelector("notesList")




const saveNote = async() =>{
 if(!noteText.value) return;

 try {
    const exsistingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    exsistingNotes.push(noteText)
    localStorage.setItem("notes", JSON.stringify(exsistingNotes))
    await displayNotes()
 } catch (error){
    console.error("her skjedde noe feil", error)
 }
}

const displayNotes = async() => {
    const exsistingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    notesList.innerHTML = "";
    for(let i = 0; i < exsistingNotes.length; i++){
        const noteElement = document.createElement("div");
        noteElement.innerHTML = `
        <p><strong>Notat #${i + 1}</strong></p>
        <p>${exsistingNotes[i]}</p>
        <button id="deleteNote">Slett Notat</button>`
    notesList.appendChild(noteElement)
    }
}

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