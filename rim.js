const fs = require('fs');

class Secret {
    constructor(n, k) {
        this.n = n;
        this.k = k;
        this.points = [];
    }

    addPoint(x, y) {
        this.points.push({ x: BigInt(x), y });
    }
}

function convertBase(value, base) {
    return BigInt(parseInt(value, base));
}

function lagrangeInterpolation(secret) {
    let result = 0n;
    for (let i = 0; i < secret.k; i++) {
        let term = secret.points[i].y;
        for (let j = 0; j < secret.k; j++) {
            if (i !== j) {
                term *= -secret.points[j].x;
                term /= (secret.points[i].x - secret.points[j].x);
            }
        }
        result += term;
    }
    return result;
}

function readSecret(filename) {
    const data = JSON.parse(fs.readFileSync(filename, 'utf8'));
    const secret = new Secret(data.keys.n, data.keys.k);

    for (let i = 1; i <= data.keys.n; i++) {
        if (data[i]) {
            const x = i;
            const base = parseInt(data[i].base);
            const y = convertBase(data[i].value, base);
            secret.addPoint(x, y);
        }
    }

    return secret;
}

function main() {
    const secret1 = readSecret('testcase1.json');
    const secret2 = readSecret('testcase2.json');

    const c1 = lagrangeInterpolation(secret1);
    const c2 = lagrangeInterpolation(secret2);

    console.log(`Secret for testcase 1: ${c1}`);
    console.log(`Secret for testcase 2: ${c2}`);
}

main();
