describe('CT-01 e CT-02 - Listagem de Atas', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('CT-01 - Validar exibição das colunas principais', () => {
    cy.contains('Nº Ata').should('be.visible');
    cy.contains('Descrição').should('be.visible');
    cy.contains('Gerenciador').should('be.visible');
    cy.contains('Modalidade').should('be.visible');
    cy.contains('Vigência').should('be.visible');
    cy.contains('Ações').should('be.visible');
  });

  it('CT-02 - Validar paginação com 25 registros', () => {
    cy.get('table tbody tr').should('have.length.at.most', 25);
  });
});
