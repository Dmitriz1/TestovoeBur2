/*
Задача 2. Работа с матрицами: сложение, вычитание,  умножение на число, деление на число.

Задача 2.0. создать из матрицу разной размерности из чисел.

Задача 2.1. преобразовать матрицу в треугольную ( нижняя часть нули )
 */

type Matrix = number[][];

// Создание матрицы
export function createMatrix(rows: number, cols: number, data: number[]): Matrix {
    if (data.length !== rows * cols) {
        throw new Error("Количество элементов не соответствует размерности матрицы");
    }
    const matrix: Matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push(data.slice(i * cols, (i + 1) * cols));
    }
    return matrix;
}

// Сложение двух матриц
export function Summ(A: Matrix, B: Matrix): Matrix {
    if (A.length !== B.length || A[0].length !== B[0].length) {
        throw new Error("Матрицы должны иметь одинаковый размер");
    }
    return A.map((row, i) => row.map((val, j) => val + B[i][j]));
}

//Вычитание двух матриц
export function subtract(A: Matrix, B: Matrix): Matrix {
    if (A.length !== B.length || A[0].length !== B[0].length) {
        throw new Error("Матрицы должны иметь одинаковый размер");
    }
    return A.map((row, i) => row.map((val, j) => val - B[i][j]));
}


//Умножение матрицы на число (скаляр)
export function multiplyScalar(A: Matrix, scalar: number): Matrix {
    return A.map(row => row.map(val => val * scalar));
}

//Деление матрицы на число (скаляр)
export function divideScalar(A: Matrix, scalar: number): Matrix {
    if (scalar === 0) throw new Error("Деление на ноль невозможно");
    return A.map(row => row.map(val => val / scalar));
}

//Преобразование в треугольную матрицу (с нулями внизу)
export function toUpperTriangular(A: Matrix): Matrix {
    const matrix = A.map(row => [...row]);
    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let i = 0; i < Math.min(rows, cols); i++) {
        let maxRow = i;
        for (let k = i + 1; k < rows; k++) {
            if (Math.abs(matrix[k][i]) > Math.abs(matrix[maxRow][i])) {
                maxRow = k;
            }
        }

        [matrix[i], matrix[maxRow]] = [matrix[maxRow], matrix[i]];

        for (let k = i + 1; k < rows; k++) {
            if (matrix[i][i] === 0) continue;

            const factor = matrix[k][i] / matrix[i][i];
            for (let j = i; j < cols; j++) {
                matrix[k][j] -= factor * matrix[i][j];
            }
        }
    }

    return matrix;
}