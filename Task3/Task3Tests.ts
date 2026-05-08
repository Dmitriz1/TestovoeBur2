import { getDigits } from "./Task3Numbers";
import {Task3TestData} from "./Task3testData";

describe('Разбиение чисел на цифры', () => {
    const data = new Task3TestData();

    describe('Валидные числа', () => {
        data.validNumbers.forEach(({ number, expected, result }) => {
            it(`Число ${number} должно быть разбито на ${expected.join(', ')}`, () => {
                expect(getDigits(number)).toEqual(expected);
            });
        });
    });

    describe('Числа с десятичной точкой', () => {
        data.decimalNumbers.forEach(({ number, expected, result }) => {
            it(`Число ${number} должно быть разбито на ${expected.join(', ')}`, () => {
                expect(getDigits(number)).toEqual(expected);
            });
        });
    });

    describe('Нулевые значения', () => {
        data.zeroValues.forEach(({ number, expected, result }) => {
            it(`Число ${number} должно быть разбито на ${expected.join(', ')}`, () => {
                expect(getDigits(number)).toEqual(expected);
            });
        });
    });

    describe('Невалидные значения', () => {
        data.invalidValues.forEach(({ number, string, expected, result }) => {
            if (number !== undefined) {
                it(`Число ${number} должно быть разбито на ${expected.join(', ')}`, () => {
                    expect(getDigits(number)).toEqual(expected);
                });
            } else if (string !== undefined) {
                it(`Строка "${string}" должна выбросить ошибку`, () => {
                    expect(() => getDigits(string)).toThrow();
                });
            }
        });
    });
});