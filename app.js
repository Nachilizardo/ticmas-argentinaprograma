 const aboutSection = document.getElementById("about-me")
 document.getElementById('about-me').style.display = "block"
    
function openSection(evt, sectionName){
    //declaramos las variables
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementById('menu').getElementsByTagName('li')
    
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // muestra el tab actual y agrega la clase active al li del menu 
    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += " active";
}
