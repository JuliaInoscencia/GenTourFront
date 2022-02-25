import { Turismo } from "./Turismo";
import { Usuario } from "./Usuario";

export class Tipos{
  public id: number;
  public tipoTurismo: string;
  public local: string;
  public temporada: string;

  public usuario: Usuario;
  public turismo: Turismo;
}
