const selectedNote = document.querySelector(".selectedNote");
const notes = document.querySelectorAll(".notes");
const circle4 = document.getElementById("note4")
const circle5 = document.getElementById("note5")
const firstCard = document.querySelector(".firstCard");
const secondCard = document.querySelector(".secondCard");
const buttonSubmit = document.getElementById("buttonSubmit");

buttonSubmit.disabled = true;

notes.forEach((note) => {
    note.addEventListener('click', () => {
      selectedNote.innerText = `You selected ${note.innerText} out of 5`;
        circle4.style.backgroundColor = "hsl(216, 12%, 54%)";
        circle5.style.backgroundColor = "hsl(216, 12%, 54%)";
        buttonSubmit.classList.add("buttonSubmitActive");
        buttonSubmit.disabled = false;
    })
})

buttonSubmit.addEventListener('click', () => {
    firstCard.style.display = "none"
    secondCard.style.display = "block"
})