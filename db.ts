export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

export const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 24 },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', age: 25 },
  { id: 3, name: 'Bob Smith', email: 'bob@example.com', age: 30 },
  { id: 4, name: 'Alice Johnson', email: 'alice@example.com', age: 28 },
  { id: 5, name: 'Mike Brown', email: 'mike@example.com', age: 32 },
];

