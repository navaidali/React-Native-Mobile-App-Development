const l1 = [2, 3, 6, 1, 7];
let k = 4;
let ln = l1.length;
let fl = 1;
for (let i = ln; i > 0; i--) {
    if (fl === k) {
        console.log(l1[i - 1]);
    }
    fl = fl + 1;
}