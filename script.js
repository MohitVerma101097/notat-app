const noteText = document.querySelector("noteText")

const saveNote = async() =>{
 if(!noteText.value) return;

 try {
    const exsistingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    exsistingNotes.push(noteText)
    localStorage.setItem("notes", JSON.stringify(exsistingNotes))
 } catch (error){
    console.error("her skjedde noe feil", error)
 }
}

