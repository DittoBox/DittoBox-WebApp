export class Template {
  id: number;
  name:string;
  category: number;
  maxTemperatureThreshold: number;
  minTemperatureThreshold: number;
  maxHumidityThreshold: number;
  minHumidityThreshold: number;
  minOxygenThreshold: number;
  maxOxygenThreshold: number;
  minCarbonDioxideThreshold: number;
  maxCarbonDioxideThreshold: number;
  minEthyleneThreshold: number;
  maxEthyleneThreshold: number;
  minAmmoniaThreshold: number;
  maxAmmoniaThreshold: number;
  minSulfurDioxideThreshold: number;
  maxSulfurDioxideThreshold: number;


  constructor(
      id: number,
      name:string,
      category: number,
      maxTemperatureThreshold: number,
      minTemperatureThreshold: number,
      maxHumidityThreshold: number,
      minHumidityThreshold: number,
      minOxygenThreshold: number,
      maxOxygenThreshold: number,
      minCarbonDioxideThreshold: number,
      maxCarbonDioxideThreshold: number,
      minEthyleneThreshold: number,
      maxEthyleneThreshold: number,
      minAmmoniaThreshold: number,
      maxAmmoniaThreshold: number,
      minSulfurDioxideThreshold: number,
      maxSulfurDioxideThreshold: number
  ) {
    this.id = id;
    this.name= name;
    this.category = category;
    this.maxTemperatureThreshold = maxTemperatureThreshold;
    this.minTemperatureThreshold = minTemperatureThreshold;
    this.maxHumidityThreshold = maxHumidityThreshold;
    this.minHumidityThreshold = minHumidityThreshold;
    this.minOxygenThreshold = minOxygenThreshold;
    this.maxOxygenThreshold = maxOxygenThreshold;
    this.minCarbonDioxideThreshold = minCarbonDioxideThreshold;
    this.maxCarbonDioxideThreshold = maxCarbonDioxideThreshold;
    this.minEthyleneThreshold = minEthyleneThreshold;
    this.maxEthyleneThreshold = maxEthyleneThreshold;
    this.minAmmoniaThreshold = minAmmoniaThreshold;
    this.maxAmmoniaThreshold = maxAmmoniaThreshold;
    this.minSulfurDioxideThreshold = minSulfurDioxideThreshold;
    this.maxSulfurDioxideThreshold = maxSulfurDioxideThreshold;
  }

}
