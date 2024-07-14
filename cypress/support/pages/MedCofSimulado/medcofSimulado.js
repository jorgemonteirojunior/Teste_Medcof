import { ELEMENTS } from "./elements.js";

export class MedCofSimulado {
  validaEDirecionaParaAcessarConteudo() {
    cy.url().should("include", "/simulado-multimidia-unifesp/");

    cy.get(ELEMENTS.logMedCofSimulado).should("be.visible");
  }
}
