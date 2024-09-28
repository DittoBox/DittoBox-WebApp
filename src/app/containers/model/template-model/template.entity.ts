export class Template {
  id: string;
  nametemplate:string;
  descriptiontemplate:string;
  maxtemp: string;
  mintemp: string;
  maxhumidity: string;
  minhumidity: string;
  detectoxygen: boolean;
  detectdioxide: boolean;
  detectetylene: boolean;
  detectammonia: boolean;
  detectsulfurdioxide: boolean;


  constructor(
    id: string,
    nametemplate: string,
    descriptiontemplate: string,
    maxtemp: string,
    mintemp: string,
    maxhumidity: string,
    minhumidity: string,
    detectoxygen: boolean,
    detectdioxide: boolean,
    detectetylene: boolean,
    detectammonia: boolean,
    detectsulfurdioxide: boolean
  ) {
    this.id = id;
    this.nametemplate= nametemplate;
    this.descriptiontemplate= descriptiontemplate;
    this.maxtemp = maxtemp;
    this.mintemp = mintemp;
    this.maxhumidity = maxhumidity;
    this.minhumidity = minhumidity;
    this.detectoxygen = detectoxygen;
    this.detectdioxide = detectdioxide;
    this.detectetylene = detectetylene;
    this.detectammonia = detectammonia;
    this.detectsulfurdioxide = detectsulfurdioxide;
  }

}
