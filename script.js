let circles = document.querySelectorAll(".circles");
let title = document.getElementById("title");
let paragraph = document.getElementById("paragraph");
let thankImage = document.getElementById("thankImage");
let selectedNote = document.getElementById("selectedNote");
let myButtons = document.querySelectorAll(".buttons-group > button");
let buttonSubmit = document.getElementById("buttonSubmit");
let circle4 = document.querySelector(".circle4");
let circle5 = document.querySelector(".circle5");
let userNote = undefined;

buttonSubmit.disabled = true;

myButtons.forEach(function (event) {
    event.addEventListener("click", function () {
        buttonSubmit.classList.add("buttonSubmitActive");
        buttonSubmit.disabled = false;
    });
})


function changeAfterSubmit() {

    function changeSelectedNote() {
        selectedNote.style.display = "block";
        selectedNote.innerText = `You selected ${userNote} out of 5`;
    }
    changeSelectedNote();

    function showThankImage() {
        thankImage.style.display = "block";
    }
    showThankImage();

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

    removeCircles();

    function removeButtonSubmit() {
        buttonSubmit.style.display = "none";
    }
    removeButtonSubmit();
}


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


function changeBackgroundCircles() {

    myButtons.forEach(function (event) {
        event.addEventListener("click", function () {
            removeStyles();
            this.classList.add("buttonClicked");
            circle4.style.backgroundColor = "hsl(217, 12%, 63%)";
            circle5.style.backgroundColor = "hsl(217, 12%, 63%)";
        });
    })

    function removeStyles() {
        for (let i = 0; i < myButtons.length; i++) {
            myButtons[i].classList.remove("buttonClicked");
        }
    }
}

changeBackgroundCircles();