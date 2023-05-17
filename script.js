document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll(".object").forEach(function(move){
        let x = (e.clientX + 20) / 300;
        let y = (e.clientY + 20) / 300;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    })

    document.querySelectorAll(".object2").forEach(function(move){
        let x = (e.clientX + 20) / -300;
        let y = (e.clientY + 20) / -300;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    })

    document.querySelectorAll(".object3").forEach(function(move){
        let x = (e.clientX + 20) / 300;
        let y = (e.clientY + 20) / 300;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    })
}

document.addEventListener('DOMContentLoaded', function() {
    const object2 = document.querySelector('.object2');

    const letters = object2.textContent.trim().split('');

    object2.textContent = ''; // Clear the original text content

    letters.forEach(function(letter) {
        const span = document.createElement('span');
        span.textContent = letter;
        object2.appendChild(span);

        span.addEventListener('mouseover', function() {
            if (this.style.color == '') {
                this.style.color = 'white';
            } else {
                this.style.color = '';
            }
        });
    });
});