export class Account {
  businessName: string;        // Nombre del negocio
  businessId: string;          // Identificador único del negocio
  representativeId: number;    // Id del usuario que representa este negocio (el User creado)

  constructor(
    businessName: string = '',
    businessId: string = '',
    representativeId: number = 0
  ) {
    this.businessName = businessName;
    this.businessId = businessId;
    this.representativeId = representativeId;
  }

}
