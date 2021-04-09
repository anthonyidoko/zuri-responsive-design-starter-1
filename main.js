
var toggleIcon = true;

 function displayContent(){
    let getulLink = document.querySelector("ul.nav-links"); //target the section holding nav links and store in the variable
    if (toggleIcon) {
        getulLink.style.visibility = "visible"; // Set property to visible from hidden
        toggleIcon = false; 
    }
    
    else{
        getulLink.style.visibility = "hidden";
        toggleIcon = true;    
    }   
};
