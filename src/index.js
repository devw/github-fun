const columns = Array.from(
    document.querySelectorAll('.js-calendar-graph-svg > g > g')
).map((e) => Array.from(e.querySelectorAll('rect')));

const onLoadImage = (img) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    let offset = 0;
    window.setInterval(() => {
        columns.forEach((col, x) => {
            col.forEach((rect, y) => {
                const pixel = ctx.getImageData(x, y + offset, 1, 1);
                rect.style.fill = `rgba(${pixel.data.join(',')})`;
            });
        });
        offset = offset > img.height ? 0 : offset + 1;
    }, 60);
};

const img = new Image();
img.src = './image/dog.jpg';
img.onload = () => onLoadImage(img);
