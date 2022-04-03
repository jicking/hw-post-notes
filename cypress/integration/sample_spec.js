const baseUrl = `http://localhost:3000`

describe('Homepage', () => {
  it('loads home page', () => {
    cy.visit(baseUrl)

  })
  it('loads about page', () => {
    cy.visit(`${baseUrl}/about`)
  })
  it('has github link that works', () => {
    cy.visit(baseUrl)
    cy.get('.navbar')
      .contains('Check Code')
      .should('have.attr', 'href', 'https://github.com/jicking/hw-post-notes')
  })
  it('has posts', () => {
    cy.visit(baseUrl)
    cy.get('.card').contains('View Full Post')
  })
  it('has view full post that works ', () => {
    cy.visit(baseUrl)
    cy.get('.card').contains('View Full Post')
    cy.get('.card').contains('View Full Post').click()
    cy.url().should('include', '/post?id=')
  })
  it('has pagination that works ', () => {
    cy.visit(baseUrl)
    cy.get('.card').contains('View Full Post')
    cy.get('.card').contains('View Full Post').click()
    cy.url().should('include', '/post?id=')
  })
})
