let user_nombre ="";
let user_password = "";

function quitarError(){
  document.getElementById("loginForm").classList.remove("error");
}

window.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const registroBtn = document.querySelector(".registro-btn");
    const loginBtn = document.querySelector(".login-btn");

    registroBtn.addEventListener("click", () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
        container.classList.remove("active");
    });


    
    //coger valores de registro
    let input_username_registro = document.getElementById("nombre_usuario_registro");
    let input_password_registro = document.getElementById("password_registro");

    //coger valores de login
    let input_username_login = document.getElementById("nombre_usuario_login");
    let input_password_login = document.getElementById("password_login");

    //quitar estilo al escribir
    input_username_login.addEventListener("input", quitarError);
    input_password_login.addEventListener("input", quitarError);

    //guardar valores de registro
    document.getElementById("registroForm").addEventListener("submit", (e) => {
        e.preventDefault();

        user_nombre = input_username_registro.value;
        user_password = input_password_registro.value;

        localStorage.setItem("user_nombre", user_nombre);
        localStorage.setItem("user_password", user_password);

        //volver a login después de registrarse
        container.classList.remove("active");
    });

    //Ver si coinciden y si es asi redirigimos
    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const guardado_nombre = localStorage.getItem("user_nombre") || "";
        const guardado_password = localStorage.getItem("user_password") || "";

        if(guardado_nombre === input_username_login.value && guardado_password === input_password_login.value){
            window.location.href = "./user/user.html";
        }else{
            //si no ponemos clase error que tiene keyframes
            document.getElementById("loginForm").classList.add("error");
        }
    });

});