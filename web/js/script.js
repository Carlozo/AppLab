function preco99(){
    window.alert ("inscrito!!!");
}

function preco0(){
    window.alert ("inscrito!!!");
}

function inscreverse(){
    window.alert ("inscrito!!!");
}

//MODAL VIDEO
var modal = document.getElementById("modal-video");
var btn = document.getElementById("chamar-modal");
var span = document.getElementsByClassName("fechar-modal")[0];
var vid = document.getElementById("videodemo");

btn.onclick = function() {
    modal.style.display = "flex";
}

span.onclick = function() {
    modal.style.display = "none";
    vid.pause();
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        vid.pause();
    }
}