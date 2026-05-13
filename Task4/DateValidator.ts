export class DateValidator {
    /**
     * Проверяет, является ли объект Date валидной датой.
     */
    static isValid(date: Date): boolean {
        return date instanceof Date && !isNaN(date.getTime());
    }
}