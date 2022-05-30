import Address from './address';

class Customer {
  id: string;

  name: string;

  address: Address;

  active: boolean;

  constructor(id: string, name: string, address: Address) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.active = false;
    this.validate();
  }

  changeName(name: string): void {
    this.name = name;
    this.validate();
  }

  activate(): void {
    this.active = true;
  }

  deactivate(): void {
    this.active = false;
  }

  setAddress(address: Address): void {
    this.address = address;
  }

  validate(): void {
    if (!this.name || this.name.length === 0) {
      throw new Error('Name is required');
    }
    if (this.id.length === 0) {
      throw new Error('Id is required');
    }
  }
}

export default Customer;
