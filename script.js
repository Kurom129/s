document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyW') document.getElementById('keyW').classList.add('active');
    if (e.code === 'KeyA') document.getElementById('keyA').classList.add('active');
    if (e.code === 'KeyS') document.getElementById('keyS').classList.add('active');
    if (e.code === 'KeyD') document.getElementById('keyD').classList.add('active');
    if (e.code === 'Space') document.getElementById('keySpace').classList.add('active');
});

document.addEventListener('keyup', (e) => {
    if (e.code === 'KeyW') document.getElementById('keyW').classList.remove('active');
    if (e.code === 'KeyA') document.getElementById('keyA').classList.remove('active');
    if (e.code === 'KeyS') document.getElementById('keyS').classList.remove('active');
    if (e.code === 'KeyD') document.getElementById('keyD').classList.remove('active');
    if (e.code === 'Space') document.getElementById('keySpace').classList.remove('active');
});

let clicks = 0;
let cps = 0;

document.addEventListener('mousedown', () => {
    clicks++;
});

setInterval(() => {
    cps = clicks;
    clicks = 0;
    document.getElementById('cpsCounter').textContent = `CPS: ${cps}`;
}, 1000);
