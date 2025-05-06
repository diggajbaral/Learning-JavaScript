const car = ["toyota", "hyundai", "tata"]

for (const i of car) { // of
    console.log(i);
}
// toyota
// hyundai
// tata

for (const i in car) { // in
    console.log(i);
}
// 0
// 1
// 2

for (const i of car) {
    console.log(i.length);
}
// 6 (toyota)
// 7 (hyundai)
// 4 (tata)