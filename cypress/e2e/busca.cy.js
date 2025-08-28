describe('CT-03 e CT-04 - Busca', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('CT-03 - Realizar busca por Nº da Ata válido', () => {
    cy.get('input[placeholder="Buscar"]').type('01/2023');
    cy.get('button').contains('Buscar').click();
    cy.contains('01/2023').should('exist');
  });

  it('CT-04 - Realizar busca por descrição inexistente', () => {
    cy.get('input[placeholder="Buscar"]').type('DescriçãoInexistente');
    cy.get('button').contains('Buscar').click();
    cy.contains('Nenhuma ata encontrada para os filtros aplicados.').should('be.visible');
  });
});
