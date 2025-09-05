export class Location {
  constructor(
    public id: number,
    public street: string,
    public houseNumber: string,
    public city: string,
    public postalCode: string,
    public province: string,
  ) {
  }

  showFullAddress(): string {
    return `${this.street}, ${this.houseNumber}, ${this.city}, ${this.postalCode}, ${this.province}`;
  }

  showCityAndProvince(): string {
    return `${this.city}, ${this.province}`;
  }
}
