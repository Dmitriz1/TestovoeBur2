import * as m from "./Task2Matrix";
import {Task2TestData} from "./Task2testData";

describe('Операции с матрицами', () => {
    const data = new Task2TestData();

    describe('Создание матрицы', () => {
        it('должен правильно создавать матрицу', () => {
            const { rows, cols, data: values, expected } = data.validCreation;
            expect(m.createMatrix(rows, cols, values)).toEqual(expected);
        });

        it('должен выбрасывать ошибку при неверном количестве данных', () => {
            const { rows, cols, data: values } = data.invalidCreation;
            expect(() => m.createMatrix(rows, cols, values)).toThrow();
        });
    });

    describe('Арифметические операции', () => {
        it('должен складывать две матрицы', () => {
            expect(m.Summ(data.m1, data.m2)).toEqual(data.sumExpected);
        });

        it('должен вычитать одну матрицу из другой', () => {
            expect(m.subtract(data.m2, data.m1)).toEqual(data.diffExpected);
        });

        it('должен умножать на скаляр', () => {
            expect(m.multiplyScalar(data.m1, 10)).toEqual([[10, 20], [30, 40]]);
        });

        it('должен делить на скаляр', () => {
            expect(m.divideScalar([[10, 20]], 10)).toEqual([[1, 2]]);
        });
    });

    describe('Операции с треугольной матрицей', () => {
        it('должен приводить квадратную матрицу к верхнетреугольному виду', () => {
            const result = m.toUpperTriangular(data.triangularInput);
            expect(result[1][0]).toBeCloseTo(0);
            expect(result[2][0]).toBeCloseTo(0);
            expect(result[2][1]).toBeCloseTo(0);
        });

        it('не должен изменять оригинальную матрицу (immutability)', () => {
            const original = [[1, 2], [3, 4]];
            const copy = JSON.parse(JSON.stringify(original));
            m.toUpperTriangular(original);
            expect(original).toEqual(copy);
        });

        it('должен корректно обрабатывать матрицы с перестановкой строк', () => {
            const result = m.toUpperTriangular(data.swapMatrix);
            expect(result[0][0]).not.toBe(0);
            expect(result[1][0]).toBeCloseTo(0);
        });
    });
});