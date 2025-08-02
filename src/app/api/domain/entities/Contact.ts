export default class Contact {
  constructor(
    public readonly name: string,
    public readonly company: string,
    public readonly email: string,
    public readonly message: string
  ) {
    this.company = company.trim();
    this.email = email.trim();
    this.message = message.trim();
    this.name = name.trim();
  }
}
