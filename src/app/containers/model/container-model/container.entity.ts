export class Container {
  id: string;
  status: string;
  temperature: string;
  humidity:string;
  lastSync:string;
  idTemplates: string;

  constructor(id: string, name: string, capacity: string,humidity:string,lastSync:string,idTemplates:string) {
    this.id = id;
    this.status = name;
    this.temperature = capacity;
    this.humidity = humidity;
    this.lastSync = lastSync;
    this.idTemplates = idTemplates;

  }
}
