let nameForm = document.querySelector("#name-form");
let welcomeContainer = document.querySelector("#welcome");
let logoutBtn = document.querySelector("#logout");

function checkUser() {
    let userName = localStorage.getItem("name");
    let password = localStorage.getItem("senha")

    if(userName, password) {
        nameForm.style.display = "none";
        welcomeContainer.style.display = "block";

        let userNameElement = document.querySelector("#username");
        userNameElement.textContent = userName;
    }else{
        nameForm.style.display = "block";
        welcomeContainer.style.display = "none";
    }
}

nameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let passwordInput = document.querySelector("#senha");

    let nameInput = document.querySelector("#name");

    localStorage.setItem("senha", passwordInput.value);

    localStorage.setItem("name", nameInput.value);

    nameInput.value = "";
    passwordInput.value = "";

    checkUser();
})

logoutBtn.addEventListener("click", () => {
    localStorage.clear();
    
    checkUser();
})

    checkUser();

