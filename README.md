# Classificador de Sentimentos em Comentários Usando TensorFlow.js

## Aluno
Naion Belas Juvenal

## Curso
Análise e Desenvolvimento de Sistemas

## Disciplina
Inteligência Artificial

## Instituição
FATEC de Santana de Parnaíba

## E-mail
naionbelas@gmail.com

## Descrição do Projeto
Este projeto utiliza TensorFlow.js, uma biblioteca de aprendizado de máquina que funciona diretamente no navegador, para construir um sistema que analisa comentários textuais e classifica seu sentimento. O sistema permite que um usuário insira texto em uma interface web e receba um feedback imediato sobre o sentimento detectado.

## Problema a ser Solucionado
A necessidade de uma ferramenta acessível e eficiente para análise de sentimentos em textos, como comentários de clientes, avaliações de produtos ou feedback em redes sociais.

## Tecnologias Utilizadas
- **Visual Studio Code**: Editor de código utilizado para desenvolvimento.
- **XAMPP**: Servidor local utilizado para testes (opcional).
- **HTML**: Estrutura da interface web.
- **BOOTSTRAP**: O Bootstrap foi utilizado para estilizar a interface, proporcionando um design responsivo e moderno.
- **CSS**: Estilização da interface.
- **JavaScript**: Lógica do aplicativo e interação com TensorFlow.js.
- **Hugging Face API**: Para análise de sentimentos em português.

## Instalação do Node.js
Para rodar o projeto, você precisará do Node.js instalado em sua máquina. Siga as etapas abaixo:

1. **Baixar o Node.js**:
   - Acesse o site oficial do Node.js: [nodejs.org](https://nodejs.org/)
   - Baixe a versão recomendada para o seu sistema operacional (Windows, macOS ou Linux).

2. **Instalar o Node.js**:
   - Execute o instalador baixado e siga as instruções na tela.
   - Verifique a instalação abrindo o terminal (ou prompt de comando) e digitando:
     ```bash
     node -v
     ```
   - Isso deve retornar a versão do Node.js instalada.

3. **Instalar o npm (Node Package Manager)**:
   - O npm é instalado automaticamente junto com o Node.js. Para verificar se está instalado, digite:
     ```bash
     npm -v
     ```

## Gerando a API Key da Hugging Face
Para utilizar a API da Hugging Face para análise de sentimentos, siga os passos abaixo:

1. **Criar uma Conta**:
   - Acesse o site da [Hugging Face](https://huggingface.co/).
   - Clique em "Sign Up" para criar uma nova conta, ou "Log In" se você já tiver uma.

2. **Obter o Token da API**:
   - Após fazer login, vá para a página do seu perfil clicando no seu nome no canto superior direito.
   - Na seção "Access Tokens", clique em "New token" para gerar um novo Token de API.
   - Dê um nome ao seu token e selecione as permissões necessárias (geralmente, as permissões padrão são suficientes).
   - Clique em "Generate" e copie o token gerado. **Mantenha este token em segredo!**
   - No arquivo script.js será necessário incluir o seu token:
   // Token de API (substitua com seu token gerado no Hugging Face)
        ```bash
        const token = 'coloque-o-seu-token-aqui';
        ```

## Clonando o Repositório
Clone este repositório em sua máquina local usando o seguinte comando:

    ```bash
    git clone https://github.com/naionbelas/Classificador-de-Sentimentos.git
    ```

## Navegue até a pasta do projeto e instale o TensorFlow.js com o seguinte comando:

    ```bash
    npm install @tensorflow/tfjs
    ```

## Executando o Projeto

Abra o arquivo index.html em um navegador web.
Você verá uma interface onde poderá inserir um comentário.
Clique no botão "Analisar Sentimento" para ver a classificação do sentimento.

## Demonstração do Programa Funcionando

A aplicação será acessível via navegador, onde o usuário poderá inserir um texto e ver a classificação.

## Explicação da Solução Implementada

**Integração do TensorFlow.js**: A biblioteca foi incluída no projeto para fornecer funcionalidades de aprendizado de máquina.
**Modelo Mock**: O código usa uma função de predição simulada, que pode ser substituída por um modelo real treinado.
**Frontend Simples**: A interação acontece diretamente no navegador, tornando o sistema acessível e fácil de usar.

## Considerações Finais

Este projeto é uma demonstração prática das capacidades de processamento de linguagem natural utilizando TensorFlow.js. A análise de sentimentos é uma aplicação direta de inteligência artificial, ideal para demonstrar suas capacidades em um contexto acessível e amigável.

