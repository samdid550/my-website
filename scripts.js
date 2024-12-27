const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#1dd1a1', '#ff9ff3', '#5f27cd'];

function changeBackgroundColor() {
    const body = document.body;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.background = randomColor;
}

const dynamicText = document.getElementById('dynamicText');
setInterval(() => {
    dynamicText.style.color = colors[Math.floor(Math.random() * colors.length)];
}, 1000);
