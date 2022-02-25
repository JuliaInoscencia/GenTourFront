import { Tipos } from "./Tipos";

export class Usuario {
  public id: number;
  public nome: string;
  public email: string;
  public senha: string;
  public foto: string;

  public tipos: Tipos;
}
