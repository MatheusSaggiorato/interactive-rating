const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");
const thankImage = document.getElementById("thankImage");
const selectedNote = document.getElementById("selectedNote");
const notes = document.querySelectorAll(".notes");
const circles = document.querySelectorAll(".circles");
const circle4 = document.getElementById("note4")
const circle5 = document.getElementById("note5")
const buttonSubmit = document.getElementById("buttonSubmit");
let userNote = undefined;

buttonSubmit.disabled = true;

notes.forEach((notes)=>{
    notes.addEventListener('click', ()=>{
        userNote = notes.innerText
        circle4.style.backgroundColor = "hsl(216, 12%, 54%)";
        circle5.style.backgroundColor = "hsl(216, 12%, 54%)";
        buttonSubmit.classList.add("buttonSubmitActive");
        buttonSubmit.disabled = false;
    })
})

buttonSubmit.addEventListener('click', ()=>{

    selectedNote.style.display = "block";
    selectedNote.innerText = `You selected ${userNote} out of 5`;

    thankImage.style.display = "block";

    title.innerText = "Thank you!";
    title.style.textAlign = "center";

    paragraph.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
    paragraph.style.textAlign = "center";

    buttonSubmit.style.display = "none";

    circles.forEach((circles) => {
        circles.style.display = "none";
  })
})