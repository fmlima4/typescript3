import { Negociacao } from "../models/negociacao.js";
export class NegotionsService {
    fetchNegotiantions() {
        return fetch('http://localhost:8080/dados')
            .then(response => response.json())
            .then((data) => {
            return data.map(dataFromToday => {
                return new Negociacao(new Date(), dataFromToday.vezes, dataFromToday.montante);
            });
        });
    }
}
//# sourceMappingURL=negotiantion-service.js.map