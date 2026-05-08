import { isPalindrome } from "./Task1Slovo";
import { Task1testData } from "./Task1testData";

describe('Проверка функционала метода определения палиндромов', () => {
    const data = new Task1testData();

    const testGroups = [
        { name: 'Валидные данные', cases: data.validPalindromes },
        { name: 'Проверка Е != Ё', cases: data.eNotEo },
        { name: 'Смешанные языки', cases: data.mixedLanguages },
        { name: 'Специальные символы', cases: data.specialSymbols },
        { name: 'Чистые числа', cases: data.pureNumbers }
    ];

    testGroups.forEach(({ name, cases }, index) => {
        describe(`Группа #${index + 1}: ${name}`, () => {
            cases.forEach(({ word, expected }, i) => {
                it(`Слово "${word}" должно быть палиндромом: ${expected}`, () => {
                    expect(isPalindrome(word)).toBe(expected);
                });
            });
        });
    });
});

// рабочий костыль который тоже тестирует, но буквальным сравнением
/*
function logTestResult(index: number, word: string, result: boolean, expected: boolean): void {

const status = result === expected ? "Пройден" : "Ошибка";



console.log(`Тест #${index + 1} для "${word}": ${status}, ${result}`);



if (result != expected) {

console.error(`Ожидалось: ${expected}, но получено: ${result}`);

}

}

console.log("--- Тестирование функции палиндрома с буквой Ё ---");

pTest.pTestYo.forEach(({ word, expected }, index) => {
    const result = isPalindrome(word);
    logTestResult(index, word, result, expected)
})

console.log("--- Тестирование функции палиндрома с англо-русскими буквами ---");
console.log("В слове 'Довод' вторая О - латинская");
pTest.pTestRuEng.forEach(({ word, expected }, index) => {
    const result = isPalindrome(word);
    logTestResult(index, word, result, expected)
})

console.log("--- Тестирование функции палиндрома со специальными символами ---");

pTest.pTestSpecSymb.forEach(({ word, expected }, index) => {
    const result = isPalindrome(word);
    logTestResult(index, word, result, expected)
})

console.log("--- Тестирование функции палиндрома с числами ---");

pTest.pTestPureNumbers.forEach(({ word, expected }, index) => {
    const result = isPalindrome(word);
    logTestResult(index, word, result, expected)
})

 */