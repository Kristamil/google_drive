function fn() {
    var element = document.getElementById("head-table");
    element.classList.toggle("head");
    var Row=document.getElementById('row');
    Row.innerText="Files";
    Row.style.textAlign="left";
    Row.style.color="grey";
    Row.style.fontWeight="bold";

    var element = document.getElementById("ro");
    element.classList.toggle("row");
    var element = document.getElementById("ro1");
    element.classList.toggle("row");
    var element = document.getElementById("ro2");
    element.classList.toggle("row");
    var element = document.getElementById("ro3");
    element.classList.toggle("row");
    
 }
 