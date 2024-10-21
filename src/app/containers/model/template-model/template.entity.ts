export class Template {
  id: string;
  nameTemplate:string;
  descriptionTemplate:string;
  maxTemp: string;
  minTemp: string;
  maxHumidity: string;
  minHumidity: string;
  detectOxygen: boolean;
  detectDioxide: boolean;
  detectEthylene: boolean;
  detectAmmonia: boolean;
  detectSulfurDioxide: boolean;


  constructor(
      id: string,
      nameTemplate:string,
      descriptionTemplate:string,
      maxTemp: string,
      minTemp: string,
      maxHumidity: string,
      minHumidity: string,
      detectOxygen: boolean,
      detectDioxide: boolean,
      detectEthylene: boolean,
      detectAmmonia: boolean,
      detectSulfurDioxide: boolean
  ) {
    this.id = id;
    this.nameTemplate= nameTemplate;
    this.descriptionTemplate= descriptionTemplate;
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
