function move() {
    let ele = document.getElementById('my-bar');
    console.log(ele.style);
    let text = document.getElementById('my-label');

    let width = 1;
    let intervalId = setInterval(frame, 10);

    function frame() {
        if (width >= 100) clearInterval(intervalId);
        else {
            width++;
            ele.style.width = width + '%';
            text.textContent = width + '%';
        }
    }
}

move();