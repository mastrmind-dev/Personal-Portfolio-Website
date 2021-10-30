import { CountUp } from './countUp.min.js';

let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links => {

    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

var progressBar = document.querySelectorAll(".progress-bar");

var observer = new IntersectionObserver(function (entries) {
   
    if (entries[0].isIntersecting === true) {
        let countUp = new CountUp('experience', 5, { duration: 3 });
        countUp.start();
        countUp = new CountUp('clients', 100, { duration: 3 });
        countUp.start();
        countUp = new CountUp('projects', 100, { duration: 3 });
        countUp.start();
        countUp = new CountUp('awards', 8, { duration: 3 });
        countUp.start();

        for (let i = 0; i < 4; i++) {
            let percentage = progressBar[i].getAttribute("aria-valuenow");
            progressBar[i].style.width = percentage + "%";
        }
    } else {
        for (let i = 0; i < 4; i++) {
            progressBar[i].style.width = "0%";;
        }
    }
}, { threshold: [0] });

observer.observe(document.querySelector(".row-2"));
