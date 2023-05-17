

document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll(".object").forEach(function(move){
        let x = (e.clientX + 20) / -50;
        let y = (e.clientY + 20) / -50;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    })

    // document.querySelectorAll(".object2").forEach(function(move){
    //     let x = (e.clientX + 20) / -50;
    //     let y = (e.clientY + 20) / -50;
    //
    //     move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    // })

    document.querySelectorAll(".object3").forEach(function(move){
        let x = (e.clientX + 20) / 50;
        let y = (e.clientY + 20) / 50;

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
                this.style.fontSize = '450px';
                this.style.transitionTimingFunction = 'ease';
                this.style.transition = '2s';
            } else {
                this.style.color = '';
                this.style.fontSize = '400px';
            }
        });
    });
});

let observe = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } //else {
        //     entry.target.classList.remove('show');
        // }
    })
})

let boxElements = document.querySelectorAll('.text');
boxElements.forEach((element) => observe.observe(element));

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}