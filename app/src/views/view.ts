import { LogExecutionTime } from "../decorator/executionTime.js";
import { inspect } from "../decorator/inpect.js";

export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string ) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
    }
    	
    @inspect //decorator without params
    @LogExecutionTime(true) //decorator with params
    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}