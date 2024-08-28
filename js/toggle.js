$(document).ready(function (e) {
    //Lorsque l'on clique sur le toggle

    $("#toggle").click(function () {

        //On cache ou on affiche le texte
        $(".texte").toggle();

        //On reduit la taille de la sidebar
        $(".sidebar").toggleClass("col-md-2");
        $(".sidebar").toggleClass("col-md-1");

        //On modifie la taille du texte
        $(".block div a").toggleClass("ms-lg-4 ms-md-3 fs-4");
        //On modifie  la taille du contenu
        $(".content").toggleClass("col-md-11");

    })

    // Gestion du sens des fleches des accordions

    $(".divElt").click(function () {

        $(".divElt").not(this).find("span i").addClass("fa-angle-right");

            if ($(this).find("div").hasClass("collapsed")) {

                $(this).find("div span i").addClass("fa-angle-right");

            } else {

                $(this).find("div span i").removeClass("fa-angle-right");
                $(this).find("div span i").addClass("fa-angle-down");

            }
        })

    //Gestion du focus lors du click

    $(".divElt").click(function () {
        $(".divElt div").removeClass("actif");
        $(this).find("div").toggleClass("actif");
    })

})
