# Estudos de testes Automatizados #
Para executar localmente o projeto, siga os passos:

1.Faça o clone ou download do projeto.
2.Verifique se possui Node e npm instalado:
"""
node --version && npm --version
"""
3.Acesse o diretório e execute via terminal o comando que fará a instalação do framework Cypress na versão utilizada no prjeto:
"""
npm install cypress@13.6.1
"""
4. Após a instalação execute o comando para abrir o Cypress e executar os testes automatizados:
"""
npx Cypress open
"""

<a href="https://github.com/vismartins/Testes-com-Cypress/blob/main/cypress/e2e/login/vlogin.cy.js" target="_blank">Automação de login com validação de usuário e senha.</a><br>
<a href="https://github.com/vismartins/Testes-com-Cypress/blob/main/cypress/e2e/vCompraProdutoOk.cy.js" target="_blank">Automação de login, seleção de produtos, adição ao carrinho de compras e finalização na tela de checkout.</a><br>
<a href="https://github.com/vismartins/Testes-com-Cypress/blob/main/cypress/support/loginComands.js" target="_blank">Uso de Commands.js para redução do tamanho do código e fácil manutenção</a><br>
<a href="https://github.com/vismartins/Testes-com-Cypress/blob/main/cypress/e2e/API/api_login.cy.js" target="_blank">Teste funcional de login através de API.</a><br>
