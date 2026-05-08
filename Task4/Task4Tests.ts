import {Task4testData} from "./Task4testData";
import {zOpred} from "./Task4Zodiak";

describe('Проверка определения знака зодиака', () => {
    const data = new Task4testData();

    describe('Валидные даты', () => {
        data.validDates.forEach(({ day, month, expected }) => {
            it(`должен вернуть "${expected}" для ${day}/${month}`, () => {
                expect(zOpred(day, month)).toBe(expected);
            });
        });
    });

    describe('Граничные случаи', () => {
        data.edgeCases.forEach(({ day, month, expected }) => {
            it(`должен вернуть "${expected}" для ${day}/${month}`, () => {
                expect(zOpred(day, month)).toBe(expected);
            });
        });
    });

    describe('Невалидные даты', () => {
        data.invalidDates.forEach(({ day, month, expected }) => {
            it(`должен вернуть "${expected}" для ${day}/${month}`, () => {
                expect(zOpred(day, month)).toBe(expected);
            });
        });
    });
});
