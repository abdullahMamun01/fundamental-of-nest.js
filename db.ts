export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  password: string,
  roles:string
}


export const users: User[] = [
  { id: 1, name: 'John Doe', email: 'admin@gmail.com', age: 24, password: '123', roles: 'admin' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', age: 25, password: '123', roles: 'user' },
  { id: 3, name: 'Bob Smith', email: 'bob@example.com', age: 30, password: '123', roles: 'user' },
  { id: 4, name: 'Alice Johnson', email: 'alice@example.com', age: 28, password: '123', roles: 'admin' },
  { id: 5, name: 'Mike Brown', email: 'mike@example.com', age: 32, password: '123', roles: 'user' },
];

