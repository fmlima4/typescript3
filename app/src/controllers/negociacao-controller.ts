import { domInjector } from '../decorator/dom-injection.js';
import { LogExecutionTime } from '../decorator/executionTime.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { NegotionsService } from '../services/negotiantion-service.js';
import { print } from '../utils/print.js';

export class NegociacaoController {
    @domInjector('#data')    
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')    
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')    
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negotiationService = new NegotionsService();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    @LogExecutionTime()
    public adiciona(): void {
        /*
            Zé, você já viu isso?
        */
        const negociacao = Negociacao.criaDe(
            this.inputData.value, 
            this.inputQuantidade.value,
            this.inputValor.value
        );
     
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView
                .update('Apenas negociações em dias úteis são aceitas');
            return ;
        }

        this.negociacoes.adiciona(negociacao);
        // console.log(negociacao.toText)
        // console.log(this.negociacoes.toText)
        print(negociacao, this.negociacoes) //polimorfism
        this.limparFormulario();
        this.atualizaView();
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO 
            && data.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }

    importData(): void {
        this.negotiationService.fetchNegotiantions()
        .then(negociacoesFromToday => {
            return negociacoesFromToday.filter(negociacoesFromToday => {
                return !this.negociacoes.lista()
                .some(negociacao => negociacao.isSame(negociacoesFromToday))
            })
        })
        .then(negociacoesFromToday => {
            for (let todayNegotion of negociacoesFromToday){
                this.negociacoes.adiciona(todayNegotion)
            }      
            this.negociacoesView.update(this.negociacoes)         
        });
    }
}
