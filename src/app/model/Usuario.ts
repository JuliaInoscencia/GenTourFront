import { Tipos } from "./Tipos";
import { Turismo } from "./Turismo";

export class Usuario {
  public id: number;
  public nome: string;
  public email: string;
  public senha: string;
  public foto: string;

  public tipos: Tipos;
  public turismo: Turismo;
}
