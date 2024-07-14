///<reference types="cypress"/>
const faker = require("faker-br");

import { HomePage } from "../../../support/pages/Home/homeAction";
import { MedCofSimulado } from "../../../support/pages/MedCofSimulado/medcofSimulado";
import { Simulado } from "../../../support/pages/SimuladoCadastrar/simuladoAction";
const homePage = new HomePage();
const medcofSimulado = new MedCofSimulado();
const simulado = new Simulado();

describe("Dado que o usuario esta na Home", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("/");
  });
  it("Então valido que consigo me cadastrar na MedCof Simulado", () => {
    const nome = "Jorge Luiz";
    const email = faker.internet.email().toLowerCase();
    const celular = faker.phone.phoneNumber();
    homePage.validarPaginaInicialCarregada();
    homePage.clicaLinkMdCofSimulado();
    medcofSimulado.validaEDirecionaParaAcessarConteudo();
    simulado.criarCadastro(nome, email, celular);
  });
});
