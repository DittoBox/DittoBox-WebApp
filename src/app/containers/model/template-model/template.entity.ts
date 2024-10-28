export class Template {
  id: string;
  nameTemplate:string;
  category: string;
  descriptionTemplate:string;
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


  constructor(
      id: string,
      nameTemplate:string,
      category: string,
      descriptionTemplate:string,
      maxTemp: string,
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
      sulfurDioxideMax: number
  ) {
    this.id = id;
    this.nameTemplate= nameTemplate;
    this.category = category;
    this.descriptionTemplate= descriptionTemplate;
    this.maxTemp = maxTemp;
    this.minTemp = minTemp;
    this.maxHumidity = maxHumidity;
    this.minHumidity = minHumidity;
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
