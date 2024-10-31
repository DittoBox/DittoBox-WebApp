export class Worker {
  id: string;
  name: string;
  facility: string;
  location: string;
  rol:string;
  image: string;

  constructor(id: string, name: string, facility: string, location: string, rol:string, image: string) {
    this.id = id;
    this.name = name;
    this.facility = facility;
    this.location = location;
    this.rol = rol;
    this.image = image;
  }
}
