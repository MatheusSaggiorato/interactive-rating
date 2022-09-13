let circles = document.querySelectorAll(".circles");
let title = document.getElementById("title");
let paragraph = document.getElementById("paragraph");
let thankImage = document.getElementById("thankImage");
let selectedNote = document.getElementById("selectedNote");
let myButtons = document.querySelectorAll(".buttons-group > button");
let buttonSubmit = document.getElementById("buttonSubmit");
let userNote = undefined;


function changeOnSubmit() {

    if (userNote == undefined || null || userNote < 1 || userNote > 5) {

        alert("You need to select a grade between 1 and 5 to proceed");

    } else {

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
            paragraph.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
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
}
function changeBackgroundNote() {

    myButtons.forEach(function (event) {
        event.addEventListener("click", function () {
            removeStyles();olor = "black";
            this.classList.add("buttonClicked");
            buttonSubmit.style.backgroundColor = "#fff";
            buttonSubmit.style.color = "hsl(25, 97%, 53%)";
        });
    })

    function removeStyles() {
        for (let i = 0; i < myButtons.length; i++) {
            myButtons[i].classList.remove("buttonClicked");
        }
    }
}

changeBackgroundNote();

function changeUserNote() {

    myButtons.forEach((myButtons) => {
        myButtons.addEventListener("click", function (event) {

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
                    alert("You need to select a note to proceed.");
            }
        })
    })
}
changeUserNote();

// código original estava com 108 linhas e 2981 caracteres