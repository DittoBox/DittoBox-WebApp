export class Facility {
  id: string;
  name: string;
  location: string;
  rol:string;

  constructor(id: string, name: string, location: string, rol:string) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.rol = rol;
  }
}
