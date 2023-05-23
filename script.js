
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
            entry.target.style.opacity = '1';
            entry.target.style.marginTop = '0px';
            entry.target.style.filter = 'blur(0)';
         } //else {
        //     entry.target.classList.remove('show');
        // }
    })
})

let boxElements = document.querySelectorAll('.text');
let portfolioImages = document.querySelectorAll('.portfolio-image');

boxElements.forEach((element) => observe.observe(element));
portfolioImages.forEach((element) => observe.observe(element));

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

let portfolioImage1 = document.querySelector('.information img');
let socialInfo = document.querySelector('.social-info');
let informationBox = document.querySelector('.control1:first-of-type');

portfolioImage1.addEventListener('mouseover', function() {
    hideInformation();
    socialInfo.style.transform = 'translateX(80%)';
    socialInfo.style.filter = 'blur(0)';
    portfolioImage1.style.width = '520px';
    portfolioImage1.style.transition = 'all 1s';
})

informationBox.addEventListener('mouseleave', function() {
    showInformation();
    socialInfo.style.transform = 'translateX(-1000%)';
    portfolioImage1.style.width = '500px';
    portfolioImage1.style.transition = 'all 1s';
})

let infoText = document.querySelector('.information h2');

function hideInformation() {
    infoText.style.transition = 'all 1s';
    infoText.style.opacity = '0';
}

function showInformation() {
    infoText.style.transition = 'all 4s';
    infoText.style.opacity = '1';
}