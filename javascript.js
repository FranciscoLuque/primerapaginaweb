function resizeIframe(obj) {
    $("#mainframe").height($("#mainframe").contents().find("body").height()+50);
    }
function myFunction(x) {x.classList.toggle("change")} 
function submenu() {
    var x = document.getElementById("submenu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    }
