/// <reference types="Cypress"/>

const { should } = require("chai");

describe('Teste E2E - Realizando compra do produto com sucesso', () => {
    it('Fluxo de compra de produtos', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('.title').should('contain','Products')

        // ordenação de produtos do menor para o maior
        cy.get('[data-test="product_sort_container"]').select('Price (low to high)')
        // validação da ordenação dos produtos
        cy.get(':nth-child(1) > .inventory_item_description').should('contain','Sauce Labs Onesie')
        cy.get(':nth-child(2) > .inventory_item_description').should('contain','Sauce Labs Bike Light')
        cy.get(':nth-child(3) > .inventory_item_description').should('contain','Sauce Labs Bolt T-Shirt')

        cy.contains('Sauce Labs Onesie').click()
        cy.get('.btn_primary').click()
        cy.get('[data-test="back-to-products"]').click()

        cy.contains('Sauce Labs Bike Light').click()
        cy.get('.btn_primary').click()
        cy.get('[data-test="back-to-products"]').click()

        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.get('.btn_primary').click()
        cy.get('[data-test="back-to-products"]').click()

        // Checagem da quantdade de elementos no carrinho
        cy.get('.shopping_cart_link').should('have.text','3')
        //Entrar no carrinho
        cy.get('.shopping_cart_link').click()
        // Checando itens do carrinho
        cy.get('.cart_list > :nth-child(3)').should('contain','Sauce Labs Onesie')
        cy.get('.cart_list > :nth-child(4)').should('contain','Sauce Labs Bike Light')
        cy.get('.cart_list > :nth-child(5)').should('contain','Sauce Labs Bolt T-Shirt')

        //Fazendo checkout
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('João')
        cy.get('[data-test="lastName"]').type('da Silva')
        cy.get('[data-test="postalCode"]').type('555-999')
        cy.get('[data-test="continue"]').click()
        //Verificando produtos no checkout
        cy.get('.cart_list > :nth-child(3)').should('contain','Sauce Labs Onesie')
        cy.get('.cart_list > :nth-child(4)').should('contain','Sauce Labs Bike Light')
        cy.get('.cart_list > :nth-child(5)').should('contain','Sauce Labs Bolt T-Shirt')
        //Verficando valor final da compra
        cy.get('.summary_total_label').should('have.text','Total: $36.69')

        cy.get('[data-test="finish"]').click()
        ///Validando mensagem de confirmação da compra
        cy.get('.complete-header').should('contain','Thank you for your order!')
    });
});