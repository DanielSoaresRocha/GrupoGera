import { Fatura } from "./fatura";

export interface UnidadeConsumidora{
    createdAt: string;
    distribuidora: string;
    endereco: string;
    faturas: Fatura[];
    id: number;
    nome: string;
    numero: string;
    updatedAt: string;
}