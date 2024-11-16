export class Container {
  id: number;
  name: string;
  description: string;
  groupId: number;
  status: string;
  temperature: number;
  humidity:number;
  oxygen: number;
  dioxide: number;
  ethylene: number;
  ammonia: number;
  sulfurDioxide: number;
  lastSync:string;
  maxTemp: number;
  minTemp: number;
  maxHumidity: number;
  minHumidity: number;
  oxygenMin: number;
  oxygenMax: number;
  dioxideMin: number;
  dioxideMax: number;
  ethyleneMin: number;
  ethyleneMax: number;
  ammoniaMin: number;
  ammoniaMax: number;
  sulfurDioxideMin: number;
  sulfurDioxideMax: number;
  lastKnownHealthStatus: string;
  lastKnownContainerStatus: string;

  constructor(id: number,
              name: string,
              description: string,
              groupId: number,
              status: string,
              temperature: number,
              humidity:number,
              oxygen: number,
              dioxide: number,
              ethylene: number,
              ammonia: number,
              sulfurDioxide: number,
              lastSync:string,
              maxTemp: number,
              minTemp: number,
              maxHumidity: number,
              minHumidity: number,
              oxygenMin: number,
              oxygenMax: number,
              dioxideMin: number,
              dioxideMax: number,
              ethyleneMin: number,
              ethyleneMax: number,
              ammoniaMin: number,
              ammoniaMax: number,
              sulfurDioxideMin: number,
              sulfurDioxideMax: number,
              lastKnownHealthStatus: string,
              lastKnownContainerStatus: string){
    this.id = id;
    this.name = name;
    this.description = description;
    this.groupId = groupId;
    this.status = status;
    this.temperature = temperature;
    this.humidity = humidity;
    this.oxygen = oxygen;
    this.dioxide = dioxide;
    this.ethylene = ethylene;
    this.ammonia = ammonia;
    this.sulfurDioxide = sulfurDioxide;
    this.lastSync = lastSync;
    this.minTemp = minTemp;
    this.maxTemp = maxTemp;
    this.minHumidity = minHumidity;
    this.maxHumidity = maxHumidity;
    this.oxygenMin = oxygenMin;
    this.oxygenMax = oxygenMax;
    this.dioxideMin = dioxideMin;
    this.dioxideMax = dioxideMax;
    this.ethyleneMin = ethyleneMin;
    this.ethyleneMax = ethyleneMax;
    this.ammoniaMin = ammoniaMin;
    this.ammoniaMax = ammoniaMax;
    this.sulfurDioxideMin = sulfurDioxideMin;
    this.sulfurDioxideMax = sulfurDioxideMax;
    this.lastKnownHealthStatus = lastKnownHealthStatus;
    this.lastKnownContainerStatus = lastKnownContainerStatus;
  }

}
