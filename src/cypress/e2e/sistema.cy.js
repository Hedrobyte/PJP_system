/// <reference types="cypress" />


describe('teste de sistema usuário', () => {
  it('teste de login', () => {
    cy.visit('http://localhost:8080/usuario/login')
    cy.get('[data-cy=nome]').type('pedro@hotmail.com')
    cy.get('[data-cy=senha]').type('123456')
    cy.get('.btn-login').click()
    cy.url().should('be.equal', 'http://localhost:8080/usuario/principal')
  })

  beforeEach(() => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8080/usuario/login',
      body: {
        usuario: 'pedro@hotmail.com',
        senha: '123456'
      }
    })
  })
  it('teste de compra', () => {
    cy.visit('http://localhost:8080/usuario/principal')
    cy.get(':nth-child(1) > :nth-child(4) > a > .btn').click()
    cy.get('#quantidadeProduto').type('2')
    cy.get('#nomeRua').type('Rua Maria Joana')
    cy.get(':nth-child(8) > input').type('79')
    cy.get('.form-button').click()
    cy.get('.alert').should(($div)=>{
      expect($div).to.have.text('Compra realizada com sucesso')
    })

  })

})



describe('teste de sistema admin', () => {
  beforeEach(() => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8080/usuario/login',
      body: {
        usuario: 'admin_controle@hotmail.com',
        senha: '123321'
      }
    })
  })
  it('teste de cadastro de produto', () => {
    cy.visit('http://localhost:8080/produto')
    cy.get('[href="http://localhost:8080/produto/cadastrar-produto"] > .button-adm').click()
    cy.get(':nth-child(3) > #nomeProduto').type('Margot')
    cy.get(':nth-child(4) > #nomeProduto').type('Computador')
    cy.get(':nth-child(5) > input').type('5831.36')
    cy.get('.form-button').click()
    cy.get('h3').should(($h3)=>{
      expect($h3).to.have.text(' Produto cadastrado com sucesso ')
    })
  })

})