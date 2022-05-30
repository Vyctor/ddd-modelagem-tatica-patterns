class Customer {
  id: string;

  name: string;

  address: string;

  active: boolean;

  constructor(id: string, name: string, address: string) {
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

  validate(): void {
    if (!this.name || this.name.length === 0) {
      throw new Error('Name is required');
    }
    if (!this.address || this.address.length === 0) {
      throw new Error('Address is required');
    }
  }
}

export default Customer;
