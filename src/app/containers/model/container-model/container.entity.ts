export class Container {
  id: string;
  name: string;
  description: string;
  status: string;
  temperature: string;
  humidity:string;
  lastSync:string;
  maxTemp: string;
  minTemp: string;
  maxHumidity: string;
  minHumidity: string;
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


  constructor(id: string, name: string, description: string, status: string, capacity: string,humidity:string,lastSync:string, maxTemp: string,
              minTemp: string,
              maxHumidity: string,
              minHumidity: string,
              oxygenMin: number,
              oxygenMax: number,
              dioxideMin: number,
              dioxideMax: number,
              ethyleneMin: number,
              ethyleneMax: number,
              ammoniaMin: number,
              ammoniaMax: number,
              sulfurDioxideMin: number,
              sulfurDioxideMax: number){
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.temperature = capacity;
    this.humidity = humidity;
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
  }
}
