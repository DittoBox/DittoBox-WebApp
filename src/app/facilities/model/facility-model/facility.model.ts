export class Facility {
  id: string;
  name: string;
  location: string;
  containers:string;
  alerts:string;
  workers: string;
  status: string;
  type: string;
  idTemplates: string;


  constructor(id: string, name: string, location: string, containers:string, alerts:string, workers: string, status: string, type: string, idTemplates: string) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.containers = containers;
    this.alerts = alerts;
    this.workers = workers;
    this.status = status;
    this.type = type;
    this.idTemplates = idTemplates;
  }
}
