import { ELEMENTS } from "./elements.js";

export class Simulado {
  criarCadastro(nome, email, celular) {
    cy.url().should("eq", "https://www.grupomedcof.com.br/simulado-multimidia-unifesp/");
    cy.get(ELEMENTS.inputNome).type(nome);
    cy.get(ELEMENTS.inputEmail).type(email);
    cy.get(ELEMENTS.inputCelular).type(celular);
    cy.get(ELEMENTS.btnMeInscrever).click();
    cy.wait(1000)
    cy.get(ELEMENTS.txtConfirmacao).contains('PARABÉNS, VOCÊ ESTÁ QUASE LÁ...')
  }
}
