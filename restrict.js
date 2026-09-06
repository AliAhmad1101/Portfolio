
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    alert("Designed by Ali Ahmad Khan ^_^.");
}, false);


document.addEventListener("keydown", function(e) {
    // F12
    if (e.key === "F12") {
        e.preventDefault();
        alert("Designed by Ali Ahmad Khan ^_^.");
    }


    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
        e.preventDefault();
        alert("Designed by Ali Ahmad Khan ^_^.");
    }

    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") {
        e.preventDefault();
        alert("Designed by Ali Ahmad Khan ^_^.");
    }

    if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
        alert("Designed by Ali Ahmad Khan ^_^.");
    }
}, false);


document.addEventListener("selectstart", e => e.preventDefault());
document.addEventListener("dragstart", e => e.preventDefault());