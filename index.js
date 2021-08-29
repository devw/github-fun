const columns = Array.from(
    document.querySelectorAll('.js-calendar-graph-svg > g > g')
).map((e) => Array.from(e.querySelectorAll('rect')));

console.log('columns:', columns);
