export class Task4testData {
    // === Валидные даты ===
    readonly validDates = [
        { day: 21, month: 3, expected: 'Овен' },
        { day: 21, month: 4, expected: 'Телец' },
        { day: 21, month: 5, expected: 'Близнецы' },
        { day: 22, month: 6, expected: 'Рак' },
        { day: 23, month: 7, expected: 'Лев' },
        { day: 24, month: 8, expected: 'Дева' },
        { day: 24, month: 9, expected: 'Весы' },
        { day: 24, month: 10, expected: 'Скорпион' },
        { day: 23, month: 11, expected: 'Стрелец' },
        { day: 22, month: 12, expected: 'Козерог' },
        { day: 20, month: 1, expected: 'Водолей' },
        { day: 20, month: 2, expected: 'Рыбы' },
    ];

    // === Граничные случаи ===
    readonly edgeCases = [
        { day: 20, month: 3, expected: 'Рыбы' }, // Конец Рыб
        { day: 20, month: 4, expected: 'Овен' }, // Конец Овна
        { day: 21, month: 4, expected: 'Телец' }, // Начало Тельца
        { day: 20, month: 12, expected: 'Стрелец' }, // Конец Стрельца
        { day: 20, month: 2, expected: 'Рыбы' }, // Начало Рыб
        { day: 20, month: 3, expected: 'Рыбы' }, // Конец Рыб
    ];

    // === Невалидные даты ===
    readonly invalidDates = [
        { day: 31, month: 4, expected: 'Ошибка: неверный день' }, // Невалидный день
        { day: 15, month: 13, expected: 'Ошибка: неверный месяц' }, // Невалидный месяц
        { day: 0, month: 1, expected: 'Ошибка: неверный день' }, // Нулевой день
        { day: 32, month: 1, expected: 'Ошибка: неверный день' }, // День больше 31
        { day: 31, month: 4, expected: 'Ошибка: неверный день' }, // Апрель не имеет 31 дня
    ];
}