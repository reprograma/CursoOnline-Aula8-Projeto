
// ON CLICK NA IMAGEM


function changeimage() 
{
document.getElementById("image").src= "./imgs/mamilos-logo-2.png";
}
// Menu Responsivo

(function(){

    var menuResponsivo = document.getElementById("menuResponsivo");
    var btnResponsivo = document.getElementById("btnResponsivo");
    
    btnResponsivo.addEventListener('click', function(e){
        e.preventDefault();
        document.body.scrollTop += 0;
        if (menuResponsivo.className === "navegacao__itens") {
            menuResponsivo.className += " ativo";
        } else {
            menuResponsivo.className = "navegacao__itens";
        }
    });

})();

window.addEventListener("scroll", function(){
   
    if(pageYOffset >= 250) {
       document.querySelector('.navegacao').style.backgroundColor = '#BF7311';
       document.querySelector('.navegacao__itens').style.backgroundColor = '#BF7311';
    } else {
       document.querySelector('.navegacao').style.backgroundColor = 'transparent';
       document.querySelector('.navegacao__itens').style.backgroundColor = 'transparent';
    }

})
