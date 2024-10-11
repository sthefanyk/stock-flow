export class Address {
    public readonly zipCode: string
    public readonly street: string
    public readonly city: string
    public readonly state: string
    public readonly country: string

    constructor(
        street: string,
        city: string,
        state: string,
        zipCode: string,
        country: string,
    ) {
        if (!street || street.trim().length === 0) {
            throw new Error('Street cannot be empty')
        }
        if (!city || city.trim().length === 0) {
            throw new Error('City cannot be empty')
        }
        if (!state || state.trim().length === 0) {
            throw new Error('State cannot be empty')
        }
        if (!this.isValidZipCode(zipCode)) {
            throw new Error('Invalid zip code format')
        }
        if (!country || country.trim().length === 0) {
            throw new Error('Country cannot be empty')
        }

        this.street = street
        this.city = city
        this.state = state
        this.zipCode = zipCode
        this.country = country
    }

    /**
     * Checks if the provided postal code (CEP) is in a valid Brazilian format.
     * The accepted format consists of 5 digits, optionally followed by a hyphen and 3 more digits
     * (e.g., '12345-678' or '12345678').
     * @param zipCode  - The postal code to be validated.
     * @returns `true` if the postal code is in a valid format, otherwise `false`.
     */
    private isValidZipCode(zipCode: string): boolean {
        const zipCodeRegex = /^\d{5}-?\d{3}$/ // Format: 12345678 or 12345-678
        return zipCodeRegex.test(zipCode)
    }

    public equals(other: Address): boolean {
        return (
            this.street === other.street &&
            this.city === other.city &&
            this.state === other.state &&
            this.zipCode === other.zipCode &&
            this.country === other.country
        )
    }

    public toString(): string {
        return `${this.street}, ${this.city}, ${this.state} ${this.zipCode}, ${this.country}`
    }
}
