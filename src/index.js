import Color from 'color';

const ON = '#216e39';
const OFF = 'ebedf0';
const columns = Array.from(
    document.querySelectorAll('.js-calendar-graph-svg > g > g')
).map((e) => Array.from(e.querySelectorAll('rect')));

columns.forEach((col) => {
    col.forEach((row) => (row.style.fill = ON));
});
console.log('columns:', columns);
