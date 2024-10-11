export class Contact {
    public readonly phoneNumber
    public readonly email

    constructor(email: string, phoneNumber: string) {
        if (!this.isValidEmail(email)) {
            throw new Error('Invalid email format')
        }
        if (!this.isValidPhoneNumber(phoneNumber)) {
            throw new Error('Phone number must have 10 to 15 digits')
        }

        this.email = email
        this.phoneNumber = phoneNumber
    }

    /**
     * Validates if the provided email is in a valid format.
     * The email must contain a non-whitespace sequence of characters, followed by '@',
     * followed by a domain name with a valid extension (e.g., 'example@domain.com').
     *
     * @param email - The email address to be validated.
     * @returns `true` if the email format is valid, otherwise `false`.
     */
    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    /**
     * Validates if the provided Brazilian phone number is in a valid format.
     * The phone number may include the area code (DDD) in parentheses, optional spaces,
     * and an optional hyphen. The format can be one of the following:
     *
     * - (11) 98765-4321
     * - 11 98765 4321
     * - 11987654321
     * - (21) 2345-6789
     * - 21 2345 6789
     *
     * Invalid examples:
     * - (11) 987654-321 (more than 15 digits)
     * - 12345-6789 (too few digits)
     * - 98765-4321 (missing area code)
     *
     * @param phoneNumber - The phone number to be validated.
     * @returns `true` if the phone number format is valid, otherwise `false`.
     */
    private isValidPhoneNumber(phoneNumber: string): boolean {
        const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/
        return phoneRegex.test(phoneNumber)
    }

    public equals(other: Contact): boolean {
        return (
            this.email === other.email && this.phoneNumber === other.phoneNumber
        )
    }
}
