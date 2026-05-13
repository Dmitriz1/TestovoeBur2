/*
Задача 2. Работа с матрицами: сложение, вычитание,  умножение на число, деление на число.

Задача 2.0. создать из матрицу разной размерности из чисел.

Задача 2.1. преобразовать матрицу в треугольную ( нижняя часть нули )
 */
import {MatrixValidator} from "./MatrixValidator";

type Matrix = number[][];

export function createMatrix(rows: number, cols: number, data: number[]): Matrix {
    MatrixValidator.validateDataLength(rows, cols, data);
    const matrix: Matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push(data.slice(i * cols, (i + 1) * cols));
    }
    return matrix;
}

// Сложение двух матриц
export function summ(A: Matrix, B: Matrix): Matrix {
    MatrixValidator.validateDimensions(A, B);
    return A.map((row, i) => row.map((val, j) => val + B[i][j]));
}

// Вычитание двух матриц
export function subtract(A: Matrix, B: Matrix): Matrix {
    MatrixValidator.validateDimensions(A, B);
    return A.map((row, i) => row.map((val, j) => val - B[i][j]));
}

// Умножение матрицы на число (скаляр)
export function multiplyScalar(A: Matrix, scalar: number): Matrix {
    return A.map(row => row.map(val => val * scalar));
}

// Деление матрицы на число (скаляр)
export function divideScalar(A: Matrix, scalar: number): Matrix {
    MatrixValidator.validateNonZeroScalar(scalar);
    return A.map(row => row.map(val => val / scalar));
}


//Преобразование в треугольную матрицу (с нулями внизу)
export function toUpperTriangular(A: Matrix): Matrix {
    // Здесь нет отдельной строки копирования, создание новой матрицы — часть процесса
    return A.map((row, i) =>
        row.map((val, j) => (i > j ? 0 : val))
    );
}