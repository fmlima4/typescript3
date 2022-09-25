import { NegotiationFromToday } from "../interfaces/negotiationFromToday.js";
import { Negociacao } from "../models/negociacao.js";

export class NegotionsService {
    public fetchNegotiantions(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
        .then(response => response.json())
        .then((data:  Array<NegotiationFromToday>) => {
            return data.map(dataFromToday => {
                return new Negociacao(
                    new Date(), 
                    dataFromToday.vezes, 
                    dataFromToday.montante
                )
            })
        })
    } 
}