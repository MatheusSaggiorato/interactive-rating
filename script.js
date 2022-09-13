let circles = document.querySelectorAll(".circles");
let title = document.getElementById("title");
let paragraph = document.getElementById("paragraph");
let thankImage = document.getElementById("thankImage");
let selectedNote = document.getElementById("selectedNote");
let notes = document.querySelectorAll(".notes");
let buttonSubmit = document.getElementById("buttonSubmit");
let userNote = undefined;

function changeOnSubmit() {

    function changeSelectedNote() {
        selectedNote.style.display = "block";
        selectedNote.innerText = `You selected ${userNote} out of 5`;
    }
    changeSelectedNote();

    function showThankImage() {
        thankImage.style.display = "block";
    }
    showThankImage();

    removeCircles();

    function changeTitle() {
        title.innerText = "Thank you!";
        title.style.textAlign = "center";
    }
    changeTitle();

    function changeParagraph() {
        paragraph.innerText = "Thank you for taking the time to give us a rating. If you need further support, please don't hesitate to contact us!"
        paragraph.style.textAlign = "center";
    }
    changeParagraph();

    function removeCircles() {
        circles.forEach((circles) => {
            circles.style.display = "none";
        })
    }

    function removeButton() {
        buttonSubmit.style.display = "none";
    }
    removeButton();

}


function changeBackgroundNote() {

    notes.forEach((notes) => {
        notes.addEventListener("click", function (event) {
            event.target.style.backgroundColor = "hsl(25, 97%, 53%)";
        })
    })
}
changeBackgroundNote();

function changeUserNote() {

    notes.forEach((notes) => {
        notes.addEventListener("click", function (event) {
            if (event.target.id == "rating1") {
                userNote = 1;
            } else if (event.target.id == "rating2") {
                userNote = 2;
            } else if (event.target.id == "rating3") {
                userNote = 3;
            } else if (event.target.id == "rating4") {
                userNote = 4;
            } else if (event.target.id == "rating5") {
                userNote = 5;
            }

            console.log(userNote);
        })
    })
}
changeUserNote();