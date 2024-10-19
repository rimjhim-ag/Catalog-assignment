# Catalog-assignment

Here’s a `README.md` file for your project:

---

# Polynomial Secret Finder

This project is a simplified version of Shamir's Secret Sharing algorithm where the task is to find the constant term (`c`) of a polynomial given roots encoded in various bases. The program reads JSON files containing the roots, decodes the values, and then applies interpolation to find the constant term.

## Files in the Project

- **testcase1.json**: Contains the first set of encoded polynomial roots.
- **testcase2.json**: Contains the second set of encoded polynomial roots.
- **rim.js**: JavaScript file that reads the test cases, decodes the base values, and calculates the constant term (`c`) of the polynomial.

## How It Works

1. **Input**: The program reads the test cases from the JSON files (`testcase1.json` and `testcase2.json`). Each test case provides a number of roots with `x` and `y` values, where `y` is encoded in a given base.
   
2. **Decoding**: The program decodes the `y` values based on the provided base for each root.

3. **Interpolation**: The decoded roots are used to calculate the constant term (`c`) of the polynomial using Lagrange interpolation.

4. **Output**: The constant term is printed for both test cases.

## Prerequisites

- You need to have **Node.js** installed to run this project.

## How to Run the Program

1. Clone the repository or download the project files.
2. Place the `testcase1.json`, `testcase2.json`, and `rim.js` files in the same directory.
3. Open a terminal in that directory.
4. Run the following command:

   ```bash
   node rim.js
   ```

   This will run the program and output the constant term (`c`) for both test cases.

## Sample Test Cases

### Test Case 1 (`testcase1.json`):
```json
{
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    "3": {
        "base": "10",
        "value": "12"
    },
    "6": {
        "base": "4",
        "value": "213"
    }
}
```

### Test Case 2 (`testcase2.json`):
```json
{
    "keys": {
        "n": 10,
        "k": 7
    },
    "1": {
        "base": "6",
        "value": "13444211440455345511"
    },
    "2": {
        "base": "15",
        "value": "aed7015a346d63"
    },
    "3": {
        "base": "15",
        "value": "6aeeb69631c227c"
    },
    "4": {
        "base": "16",
        "value": "e1b5e05623d881f"
    },
    "5": {
        "base": "8",
        "value": "316034514573652620673"
    },
    "6": {
        "base": "3",
        "value": "2122212201122002221120200210011020220200"
    },
    "7": {
        "base": "3",
        "value": "20120221122211000100210021102001201112121"
    },
    "8": {
        "base": "6",
        "value": "20220554335330240002224253"
    },
    "9": {
        "base": "12",
        "value": "45153788322a1255483"
    },
    "10": {
        "base": "7",
        "value": "1101613130313526312514143"
    }
}
```

## Output

After running the `node rim.js` command, you will see output similar to:

```bash
Test Case 1: The constant term c is: 4
Test Case 2: The constant term c is: 1048571
```

---

Feel free to adjust the content as per your needs!
