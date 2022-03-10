import { Tipos } from "./Tipos";
import { Usuario } from "./Usuario";

export class Turismo{
  public id: number;
  public hospedagem: string;
  public descricao: string;
  public atracao: string;
  public preco: number;
  public locomocao: string;
  public foto: string;
  public temporada: string;

  public tipo: Tipos
  public usuario: Usuario
}
