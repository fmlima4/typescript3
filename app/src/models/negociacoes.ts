import { Negociacao } from './negociacao.js';
import { Object } from "../interfaces/Object.js";

export class Negociacoes implements Object<Negociacoes>{
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public toText(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }

    isSame(negociacoes: any): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}
