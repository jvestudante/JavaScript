window.addEventListener("DOMContentLoaded", function() {
    const usuario = document.getElementById("usuario");
    const senha = document.getElementById("senha");
    const btnLogin = document.getElementById("btnLogin");
    const linkUser = document.getElementById("linkUser");

    let usuarios = localStorage.getItem("users");
    usuarios = JSON.parse(usuarios);

    btnLogin.addEventListener("click", function() {
        if (usuario.value.length === 0 || senha.value.length === 0) {
            alert("Informe o Usuário ou Senha");
        } else {
            let loginValido = false;
            for (let i = 0; i < usuarios.length; i++) {
                if (usuarios !== null){
                    if (usuarios[i].username === usuario.value && usuarios[i].password === senha.value) {
                        loginValido = true;
                        break;
                    }
                }else{
                    alert("Senha inválida ou Usuário não cadastrado");
                }
            }

            if (loginValido) {
                alert("Bem Vindo de volta");
                window.location.href = "/JavaScript/jogo_final/jogo.html";
            } else {
                alert("Senha inválida ou Usuário não cadastrado");
            }
        }
    });

    linkUser.addEventListener("click", function() {
        window.location.href = "/cadastro.html";
    });
});
