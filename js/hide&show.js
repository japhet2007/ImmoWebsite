$(document).ready(function(){
    //Fermerture complete de la fenetre
    $("#btnClose").click(function(){
        $(".all").hide(100)
    })
    // Fermeture d'une partie de la fenetre
    $("#btnHide").click(function(){
        $(".fadeUp").toggle(300);
        $("#btnHide i").toggleClass("fa-angle-down fa-angle-up")
        
    })

    //Affichage et masquage du champ motif
    
    $(".hidden").hide();

   $("select").change(function(){

        let val=$(this).val();

        if(val=="niceChoice"){
            $(".hidden").show();
        }else{
            $(".hidden").hide();
        }
   })
   
})