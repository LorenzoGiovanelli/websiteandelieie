// Disabilita il clic destro sulla pagina
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Disabilita il tasto Ctrl+S
document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode == 'S'.charCodeAt(0) || e.keyCode == 's'.charCodeAt(0))) {
        e.preventDefault();
        return false;
    }
    // Disabilita tutti gli altri comandi da tastiera
    e.preventDefault();
};

// Disabilita il trascinamento delle immagini per evitare il download
var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('dragstart', function(e) {
        e.preventDefault();
    });
}
