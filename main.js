
var toggleIcon = true;

 function displayContent(){
    let getulLink = document.querySelector("ul.nav-links");
    if (toggleIcon) {
        getulLink.style.visibility = "visible";
        toggleIcon = false; 
    }
    
    else{
        getulLink.style.visibility = "hidden";
        toggleIcon = true;    
    }   
};
