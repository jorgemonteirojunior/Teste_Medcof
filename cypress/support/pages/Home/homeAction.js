import { ELEMENTS } from "./elements.js";


export class HomePage {
  validarPaginaInicialCarregada() {
    cy.get(ELEMENTS.iconesMenu).should("be.visible");
    cy.get(ELEMENTS.sectionAprovados).should("be.visible");
    cy.get(ELEMENTS.sectionCursos).should("be.visible");

    cy.get(ELEMENTS.menuConteudos).should("be.visible");
  }

  clicaLinkMdCofSimulado() {
    cy.get(ELEMENTS.menuConteudos).click();
    cy.get(ELEMENTS.txtMedCofSimulado).invoke('text').should("eq", "Simulado Multimídia UNIFESP");
    cy.get(ELEMENTS.linkMedCofSimulado)
    .invoke("attr", "target", "_self")
    .click();
  }
}
