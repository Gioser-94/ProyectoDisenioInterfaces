onload = () => {
    const container = document.querySelector(".container");
    const registroBtn = document.querySelector(".registro-btn");
    const loginBtn = document.querySelector(".login-btn");

    registroBtn.addEventListener("click", () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
        container.classList.remove("active");
    })
}
