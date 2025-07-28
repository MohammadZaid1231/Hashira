const fs = require('fs');

// Convert value string from custom base to base 10
function baseToDecimal(value, base) {
    return BigInt(parseInt(value, base));
}

// Decode JSON points to [x, y] pairs
function decodePoints(data) {
    let points = [];
    for (const key in data) {
        if (key === "keys") continue;
        const x = parseInt(key);
        const base = parseInt(data[key].base);
        const y = baseToDecimal(data[key].value, base);
        points.push([x, y]);
    }
    return points.sort((a, b) => a[0] - b[0]);
}

// Lagrange interpolation at x = 0
function lagrangeAtZero(points, k) {
    let result = 0n;
    for (let i = 0; i < k; i++) {
        const [xi, yi] = points[i];
        let li = 1n;
        for (let j = 0; j < k; j++) {
            if (i !== j) {
                const [xj, _] = points[j];
                li *= BigInt(-xj);
                li /= BigInt(xi - xj);
            }
        }
        result += yi * li;
    }
    return result;
}

// Load and parse the two JSON files
const data1 = JSON.parse(fs.readFileSync('testcase1.json', 'utf-8'));
const data2 = JSON.parse(fs.readFileSync('testcase2.json', 'utf-8'));

// Process first test case
const k1 = data1.keys.k;
const points1 = decodePoints(data1);
const c1 = lagrangeAtZero(points1, k1);

// Process second test case
const k2 = data2.keys.k;
const points2 = decodePoints(data2);
const c2 = lagrangeAtZero(points2, k2);

// Output results
console.log("Secret for Test Case 1:", c1.toString());
console.log("Secret for Test Case 2:", c2.toString());
