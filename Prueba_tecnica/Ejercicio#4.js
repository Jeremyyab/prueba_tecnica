movements = 0;
torre_hanoi = function (inicio, medio, fin, n) {

    if (n <= 0) {
        return
    }

    torre_hanoi(inicio, fin, medio, n - 1)

    movements++;
    console.log(n)
    console.log(`Mover disco-${n} de ${inicio} a ${medio}`);

    torre_hanoi(fin, medio, inicio, n - 1);
}

torre_hanoi('torre 1', 'torre 2', 'torre 3', 5)
console.log(movements);
