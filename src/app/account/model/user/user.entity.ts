export class User {

  id?: string; // Opcional si es generado por el backend
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;

  // Constructor para inicializar las propiedades
  constructor(
    firstName: string = '',
    lastName: string = '',
    username: string = '',
    email: string = '',
    password: string = ''
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
