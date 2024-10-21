export class Container {
  id: string;
  status: string;
  temperature: string;
  humidity:string;
  lastSync:string;
  maxTemp: string;
  minTemp: string;
  maxHumidity: string;
  minHumidity: string;
  detectOxygen: boolean;
  detectDioxide: boolean;
  detectEthylene: boolean;
  detectAmmonia: boolean;
  detectSulfurDioxide: boolean;


  constructor(id: string, name: string, capacity: string,humidity:string,lastSync:string, maxTemp: string,
              minTemp: string,
              maxHumidity: string,
              minHumidity: string,
              detectOxygen: boolean,
              detectDioxide: boolean,
              detectEthylene: boolean,
              detectAmmonia: boolean,
              detectSulfurDioxide: boolean) {
    this.id = id;
    this.status = name;
    this.temperature = capacity;
    this.humidity = humidity;
    this.lastSync = lastSync;
    this.maxTemp = maxTemp;
    this.minTemp = minTemp;
    this.maxHumidity = maxHumidity;
    this.minHumidity = minHumidity;
    this.detectOxygen = detectOxygen;
    this.detectDioxide = detectDioxide;
    this.detectEthylene = detectEthylene;
    this.detectAmmonia = detectAmmonia;
    this.detectSulfurDioxide = detectSulfurDioxide;

  }
}
