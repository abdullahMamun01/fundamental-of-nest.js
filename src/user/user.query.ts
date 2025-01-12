export class GtQueryDto {
  page?: number;
  limit?: number;
  age?: number;
  name?: string;
  email?: string;

  constructor(data: Partial<GtQueryDto>) {
    this.page = data.page ? parseInt(data.page as any, 10) : undefined;
    this.limit = data.limit ? parseInt(data.limit as any, 10) : undefined;
    this.age = data.age ? parseInt(data.age as any, 10) : undefined;
    this.name = data.name;
    this.email = data.email;
  }

  toValidate(): void {
    if (this.page !== undefined && (!Number.isInteger(this.page) || this.page < 1)) {
      throw new Error('Invalid page value');
    }
    if (this.limit !== undefined && (!Number.isInteger(this.limit) || this.limit < 1)) {
      throw new Error('Invalid limit value');
    }
    if (this.age !== undefined && (!Number.isInteger(this.age) || this.age < 0)) {
      throw new Error('Invalid age value');
    }
    if (this.email !== undefined && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      throw new Error('Invalid email format');
    }
  }
}

