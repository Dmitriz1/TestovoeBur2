import { isPalindrome } from "./Task1Palindrome";
import * as fs from 'fs';

interface testCase {
    word: string;
    expected: boolean;
}

interface testGroup {
    name: string;
    cases: testCase[];
}

interface testData {
    testGroups: testGroup[];
}

describe('Проверка функционала метода определения палиндромов', () => {
    const data: testData = JSON.parse(fs.readFileSync('Task1/Task1testData.json', 'utf-8'));

    data.testGroups.forEach(({ name, cases }, index) => {
        describe(`Группа #${index + 1}: ${name}`, () => {
            cases.forEach(({ word, expected }, i) => {
                it(`Слово "${word}" должно быть палиндромом: ${expected}`, () => {
                    expect(isPalindrome(word)).toBe(expected);
                });
            });
        });
    });
});