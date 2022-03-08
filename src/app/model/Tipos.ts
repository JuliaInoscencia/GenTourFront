import { Turismo } from "./Turismo";
import { Usuario } from "./Usuario";

export class Tipos{
  public id: number;
  public categoria: string;
  public local: string;
  public descricao: string;

  public usuario: Usuario;
  public turismo: Turismo;
}
