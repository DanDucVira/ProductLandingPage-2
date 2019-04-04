//Sticky Menu background
window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        document.querySelector('#nav-bar').style.backgroundColor = "#41aaa8";
        document.querySelector('.btn-green').style.backgroundColor = "#b5525c";
        document.querySelector('.btn-green').style.color = "black";
    } else {
        document.querySelector('#nav-bar').style.backgroundColor = "transparent";
        document.querySelector('.btn-green').style.backgroundColor = "#41aaa8";
        document.querySelector('.btn-green').style.color = "white";
    }
});