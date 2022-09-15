const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");
const thankImage = document.getElementById("thankImage");
const selectedNote = document.getElementById("selectedNote");
const notes = document.querySelectorAll(".notes");
const circles = document.querySelectorAll(".circles");
const circle4 = document.getElementById("rating4")
const circle5 = document.getElementById("rating5")
const buttonSubmit = document.getElementById("buttonSubmit");
let userNote = undefined;

buttonSubmit.disabled = true;

notes.forEach(function (event) {
    event.addEventListener("click", function () {
        buttonSubmit.classList.add("buttonSubmitActive");
        buttonSubmit.disabled = false;
    });
})

function changesAfterSubmit() {
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
}

notes.forEach((notes) => {
    notes.addEventListener("click", function (event) {
        switch (event.target.id) {
            case "rating1":
                userNote = 1;
                break;
            case "rating2":
                userNote = 2;
                break;
            case "rating3":
                userNote = 3;
                break;
            case "rating4":
                userNote = 4;
                break;
            case "rating5":
                userNote = 5;
                break;
            default:
                userNote = undefined;
        }
    })
})

notes.forEach(function (event) {
    event.addEventListener("click", function () {

        for (let i = 0; i < notes.length; i++) {
            notes[i].classList.remove("buttonClicked");
        }

        this.classList.add("buttonClicked");
        
        circle4.style.backgroundColor = "hsl(216, 12%, 54%)";
        circle5.style.backgroundColor = "hsl(216, 12%, 54%)";
    });
})