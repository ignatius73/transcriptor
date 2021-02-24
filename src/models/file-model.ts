export class FileItem {
  public archivo: File;
  public nombre: string;

  constructor( archivo: File){
    this.archivo = archivo;
    this.nombre = archivo.name;
  }
}

