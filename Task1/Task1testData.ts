export class Task1testData {
    // === Валидные данные ===
    readonly validPalindromes = [
        { word: 'Довод', expected: true },
        { word: 'Шалаш', expected: true },
        { word: 'Дмитрий', expected: false }
    ];

    // === Проверка на Е != Ё ===
    readonly eNotEo = [
        { word: 'ЕоЁ', expected: false }
    ];

    // === Проверка на смешанные языки ===
    readonly mixedLanguages = [
        { word: 'Довoд', expected: false } // Вторая 'о' - латинская
    ];

    // === Проверка на специальные символы ===
    readonly specialSymbols = [
        { word: 'До-од', expected: true },
        { word: 'Д0в0д', expected: true }
    ];

    // === Проверка на числа ===
    readonly pureNumbers = [
        { word: '12321', expected: true },
        { word: '12345', expected: false }
    ];
}
