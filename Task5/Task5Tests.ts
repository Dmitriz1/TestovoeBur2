import { guess } from './Task5Guess';
import { Task5testData } from './Task5testData';

describe('Функция guess', () => {
    const data = new Task5testData();

    data.validGuess.forEach((test, index) => {
        it(`должен корректно обработать сценарий ${index + 1}`, () => {
            const result = guess(test.input);
            expect(result).toEqual(test.expected);
        });
    });
});
