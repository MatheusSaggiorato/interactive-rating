let circles = document.querySelectorAll(".circles");
let title = document.getElementById("title");
let paragraph = document.getElementById("paragraph");
let thankImage = document.getElementById("thankImage");
let selectedNote = document.getElementById("selectedNote");
let userNote = null;
let notes = document.querySelectorAll(".notes")

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

            console.log(userNote)
        })
    })
}
changeUserNote()

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

    function removeCircles() {
        circles.forEach((circles) => {
            circles.style.display = "none";
        })
    }
    removeCircles();

    function changeTitle() {
        title.innerText = "Thank you!";
        title.style.textAlign = "center";
    }
    changeTitle();

    function changeParagraph() {
        paragraph.innerText = "We appreciate you taking the thime to give a rating. If you ever need more support, don't hesitate to get in touch!";
        paragraph.style.textAlign = "center";
    }
    changeParagraph();
}


function changeBackgroundNote() {

    notes.forEach((notes) => {
        notes.addEventListener("click", function (event) {
            event.target.style.backgroundColor = "#fff";
        })
    })
}
changeBackgroundNote()
