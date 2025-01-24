// app.spec.js created with Cypress
//
describe('The app', () => {
    it('tells that you are a butler', () => {
        cy.visit('https://cicd-workshop-playground.s3.amazonaws.com/manuelriener/index.html')
        cy.get('h1')
        .should('have.text', 'Hello, my name is Manuel Riener!')
    })
  })