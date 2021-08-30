import Color from 'color';
import interpolateRGB from 'interpolate-rgb';

const OFF = '#216e39';
const ON = '#ebedf0';
const columns = Array.from(
    document.querySelectorAll('.js-calendar-graph-svg > g > g')
).map((e) => Array.from(e.querySelectorAll('rect')));

const interpolator = interpolateRGB(Color(ON).color, Color(OFF).color);

columns.forEach((col, x) => {
    col.forEach((rect, y) => {
        rect.style.fill = Color(interpolator((x + y) / 60)).hex();
    });
});
