/*
Задача 5. Угадать число пользователя.
 */

export function guess(responses: string[]): string[] {
    let low = 1;
    let high = 100;
    let attempts = 0;
    const output: string[] = [];

    output.push("Загадайте число от 1 до 100. Я попробую угадать его!");

    let responseIndex = 0;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        attempts++;

        const response = responses[responseIndex++];

        if (response === "равно") {
            if (attempts == 1) {
                output.push(`Ура! Я угадал число за ${attempts} попытку: ${mid}`);
                return output;
            }
            else {
                output.push(`Ура! Я угадал число за ${attempts} попыток: ${mid}`);
                return output;
            }
        } else if (response === "больше") {
            low = mid + 1;
        } else if (response === "меньше") {
            high = mid - 1;
        } else {
            output.push("Пожалуйста, введите корректный ответ: 'больше', 'меньше' или 'равно'");
        }
    }

    output.push("Число вне диапазона 1-100. Попробуйте снова.");
    return output;
}