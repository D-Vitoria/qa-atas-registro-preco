describe('CT-05 - Filtro por Vigência', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Filtrar atas vigentes', () => {
    cy.contains('Vigentes').click();
    cy.get('table tbody tr').each(($row) => {
      cy.wrap($row).contains('202').should('exist'); // exemplo: datas vigentes
    });
  });
});
