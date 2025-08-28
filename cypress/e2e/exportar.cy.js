describe('CT-06 e CT-07 - Exportar Atas', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('CT-06 - Exportar ata em PDF', () => {
    cy.get('table tbody tr').first().find('button[title="Exportar PDF"]').click();
    // Verificação de download pode ser feita via plugin ou mock
  });

  it('CT-07 - Exportar ata em XLSX', () => {
    cy.get('table tbody tr').first().find('button[title="Exportar XLSX"]').click();
    // Verificação de download pode ser feita via plugin ou mock
  });
});
