const curtain = document.getElementById('curtain');
const switcher = document.getElementById('switch');
const lamp = document.getElementById('lamp');
const light = document.getElementById('light');
const ball = document.getElementById('ball');

curtain.addEventListener('click', function() {
    curtain.style.transition = 'transform 1s ease';
    curtain.style.transform = 'translateY(-100%)';
});

lamp.addEventListener('mousedown', () => {
    ball.classList.toggle('pulled');
});

lamp.addEventListener('mouseup', () => {
    ball.classList.toggle('pulled');
});

lamp.addEventListener('click', function() {
    console.log(switcher.length);
    switcher.classList.toggle('on');
    light.style.transition = 'opacity 0,5s ease';
    light.style.opacity = (light.style.opacity == 0) ? 0.5 : 0;
});

const rabbit = document.getElementById('rabbit');
const pigeon = document.getElementById('pigeon');

function someMagic() {
    rabbit.classList.toggle('disappeared');
    rabbit.classList.toggle('appeared');
    pigeon.classList.toggle('disappeared');
    pigeon.classList.toggle('appeared');
}

rabbit.addEventListener('click', someMagic);
pigeon.addEventListener('click', someMagic);