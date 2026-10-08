const quantidade = 0;

console.log(quantidade || 10);
console.log(quantidade ?? 10);

// Os valores são diferentes pois o ?? serve para quando o valor é null ou undefined e o || é para quando o valor é falso .