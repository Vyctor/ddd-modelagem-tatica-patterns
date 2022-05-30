export default class Address {
  private street: string;

  private city: string;

  private state: string;

  private zip: string;

  private number: number;

  constructor(street: string, city: string, state: string, zip: string, number: number) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.number = number;

    this.validate();
  }

  private validate(): void {
    if (!this.street || this.street.length === 0) {
      throw new Error('Street is required');
    }
    if (!this.city && this.city.length === 0) {
      throw new Error('City is required');
    }
    if (!this.state || this.state.length === 0) {
      throw new Error('State is required');
    }
    if (!this.zip || this.zip.length === 0) {
      throw new Error('Zip is required');
    }
  }

  toString() {
    return `${this.street} ${this.number},  ${this.city}, ${this.state} ${this.zip}`;
  }
}
