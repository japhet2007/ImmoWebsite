$(document).ready(function () {
    // Verification email
    $("#email").keyup(function () {
        let email = $(this).val();
        if (isInvalid(email) == 1) {
            $("#email").addClass("border-danger border-3");
        } else {
            $("#email").removeClass("border-danger border-3");
            $("#email").addClass("border-success border-3");
        }
    })

    // Verification mot de passe
    $("#psw").keyup(function () {

        let psw = $(this).val();
        if (psw.length < 8 || psw.length > 12) {
            $("#psw").addClass("border-danger border-3");
        } else {
            $("#psw").removeClass("border-danger border-3");
            $("#psw").addClass("border-success border-3");
        }

    });

    // Verification au click
    $("form").submit(function (e) {
        let email = $("#email").val();
        let psw = $("#psw").val();
        let goodEmail = "okl@yahoo.fr";
        let goodPassword = "12345678";

        if (isInvalid(email) == 1) {

            $("#error").html("Veuillez renseigner une adresse <br> email valide !!!")
                .addClass("p-0 m-0 alert alert-danger text-center text-wrap");
            e.preventDefault();
            $("#email").focus();

        } else
            if (psw.length < 8 || psw.length > 12) {
                //Annulation de l'envoie du formulaire
                e.preventDefault();
                $("#error").html("Le mot de passe doit avoir une taille <br> comprise entre 8 et 12 caracteres!!!")
                    .addClass("p-0 m-0 alert alert-danger text-center text-wrap");

                $("#psw").focus();
            } else
                if (email != goodEmail || psw != '12345678') {
                    e.preventDefault();
                    
                    //Affichage du message d'erreur
                    $("#error").html("Cet utilisateur n'existe pas dans notre systeme !!!")
                        .addClass("p-0 m-0 alert alert-danger text-center text-wrap");
                    $('#email').focus();
                } else {
                    $("form").submit();
                }

    })

})

function isInvalid(elt) {
    let regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

    if (!regex.test(elt)) {
        return 1;
    } else {
        return 0;
    }

}

function errorCode(error, field) {
    if (error == "empty" && field == "email") {
        alert(`Veuillez renseigner le champ ${field}`);
    }
    // if (error == "notMatching" && field == "email") {

    //     alert(`Veuillez renseigner une adresse email valide`);
    // }
    if (error == "empty" && field == "psw") {
        alert(`Veuillez renseigner le mot de pase`);
    } else
        if (error = "notMatching" && field == "psw") {
            alert(`Le mot de passe doit contenir au moins 8 caractères`);
        }
}