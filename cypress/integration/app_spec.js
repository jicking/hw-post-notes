const baseUrl = `http://localhost:3000`

describe('Homepage', () => {
  it('loads home page', () => {
    cy.visit(baseUrl)
  })
  it('has posts', () => {
    cy.visit(baseUrl)
    cy.get('.main-container .card').contains('View Full Post')
  })
  it('has view full post that works ', () => {
    cy.visit(baseUrl)
    cy.get('.main-container .card').contains('View Full Post').click()
    cy.url().should('include', '/post?id=')
  })
  it('has refresh btn', () => {
    cy.visit(baseUrl)
    cy.get('.main-container').contains('Refresh').click()
    cy.wait(5000)
    cy.get('.main-container .card').contains('View Full Post')
  })

  // TODO
  it('has pagination that works ', () => {
    cy.visit(baseUrl)
    cy.get('.pagination').contains('1')
    cy.get('.pagination').contains('2').click()
    cy.wait(5000)
    cy.url().should('include', '/?page=2')
    cy.get('.pagination').contains('Previous').click()
    cy.wait(5000)
    cy.url().should('include', '/?page=1')
    cy.get('.pagination').contains('Next').click()
    cy.wait(5000)
    cy.url().should('include', '/?page=2')
  })
})

describe('Other tests', () => {
  it('loads about page', () => {
    cy.visit(`${baseUrl}/about`)
  })
  it('has github link that works', () => {
    cy.visit(baseUrl)
    cy.get('.navbar')
      .contains('Check Code')
      .should('have.attr', 'href', 'https://github.com/jicking/hw-post-notes')
  })
})