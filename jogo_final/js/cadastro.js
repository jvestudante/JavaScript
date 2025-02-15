window.addEventListener("DOMContentLoaded", function() {
    const usuario = document.getElementById("usuario");
    const senha = document.getElementById("senha");
    const btnCadastro = document.getElementById("btnCadastro");
    const linkUser = document.getElementById("linkUser");



    btnCadastro.addEventListener("click", function(){
        var newUser = { username: usuario.value, password: senha.value };
        var users = localStorage.getItem("users");
    
        if (!users) {
            localStorage.setItem("users", JSON.stringify([newUser]));
            alert("Usuário cadastrado com sucesso!");
    
        } else {
            users = JSON.parse(users);
            if (checkUsers(users, newUser.username)) {
                alert("Usuário já está cadastrado !!!");
            } else {
                users.push(newUser);
                localStorage.setItem("users", JSON.stringify(users));
                alert("Usuário cadastrado com sucesso.");
                window.location.href = "/login.html";
            }
        }
    });

    linkUser.addEventListener("click", function(){
        window.location.href = "/login.html";
    });
    
    function checkUsers(vetUsers, user) {
        for (var i = 0; i < vetUsers.length; i++) {
            if (vetUsers[i].username === user) return true;
        }
        return false;
    }
});
