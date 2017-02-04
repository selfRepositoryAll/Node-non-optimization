// try.js
function
myFunc(nb) {
    try {
        return nb + nb;
    } catch (err) {
        return err;
    }
}
for (let i = 0; i < 2000; ++i) {
    myFunc(i);
}