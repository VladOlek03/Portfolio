document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll(".object").forEach(function(move){
        let moving = move.getAttribute("data-value");
        let x = (e.clientX + 20) / 100;
        let y = (e.clientY + 20) / 100;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    })
}