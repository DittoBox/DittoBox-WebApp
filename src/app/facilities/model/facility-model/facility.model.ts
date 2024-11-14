export class Location {
  id: number;
  latitude: number;
  longitude: number;
  plusCode: string;
  country: string;
  state: string;
  city: string;
  address: string;

  constructor(id: number, latitude: number, longitude: number, plusCode: string, country: string, state: string, city: string, address: string) {
    this.id = id;
    this.latitude = latitude;
    this.longitude = longitude;
    this.plusCode = plusCode;
    this.country = country;
    this.state = state;
    this.city = city;
    this.address = address;
  }
}

export class Facility {
  id: number;
  name: string;
  location: Location;
  accountId: number;
  facilityType: number;
  containers: string;
  alerts: string;
  workers: string;
  status: string;
  type: string;
  idTemplates: string;
  containerCount: number; // Nueva propiedad
  profileCount: number;   // Nueva propiedad

  constructor(
    id: number,
    name: string,
    location: Location,
    accountId: number,
    facilityType: number,
    containers: string,
    alerts: string,
    workers: string,
    status: string,
    type: string,
    idTemplates: string,
    containerCount: number,  // Nueva propiedad
    profileCount: number     // Nueva propiedad
  ) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.accountId = accountId;
    this.facilityType = facilityType;
    this.containers = containers;
    this.alerts = alerts;
    this.workers = workers;
    this.status = status;
    this.type = type;
    this.idTemplates = idTemplates;
    this.containerCount = containerCount; // Asignación de nueva propiedad
    this.profileCount = profileCount;     // Asignación de nueva propiedad
  }
}
