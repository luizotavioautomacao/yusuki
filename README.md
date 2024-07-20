# README #

opção 1: Instalação/Configuração/Start via Docker  
&nbsp; a- Dependências opção 2: instalar 1 e 2 (nvm, node e npm)  
  
&nbsp; b- Instalar Docker  
&nbsp; &nbsp; Atualizar repositórios locais: `sudo apt-get update`    
&nbsp; &nbsp; Instale algumas dependências necessárias: `sudo apt-get install \ apt-transport-https \ ca-certificates \ curl \ gnupg \ lsb-release`   
&nbsp; &nbsp; Adicione a chave oficial GPG do Docker: `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg`  
&nbsp; &nbsp; Adicione o repositório do Docker Para Ubuntu 64-bit: `echo \  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/inux/ubuntu \  $(lsb_release -cs) \  stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`  
&nbsp; &nbsp; Atualiazar repositórios: `sudo apt-get update`   
&nbsp; &nbsp; Instalar docker : `sudo apt-get install docker-ce docker-ce-cli containerd.io`  
&nbsp; &nbsp; Versão docker: `sudo docker --version`   
&nbsp; &nbsp; Para executar docker comandos sem sudo: `sudo usermod -aG docker $USER`   

b- Executar docker: `npm run up` 

opção 2: Instalação pelo terminal do Linux [resumo]  

1. Instalar o nvm (gerenciador do node)  
    &nbsp; `sudo apt install curl`  
    &nbsp; `curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash`  
    &nbsp; `source ~/.profile`  
    &nbsp; `nvm --version`  

2. Após instalação do nvm vamos instalar o node e o npm  
    &nbsp; `nvm install v14.15.0`  
    &nbsp; `node --version`  
    &nbsp; `npm --version`  

3. Instalar VS Code (Melhor editor de código grátis) => baixar o VSCode pela loja do Ubuntu (Linux) ou pelo navegador (Windows)  

4. Instalar git  
    &nbsp; `sudo apt install git`  
    &nbsp; `git --version`  

5. Baixar repositório do projeto usando git clone e abrir o projeto com o VSCode  
    &nbsp; `git clone git@bitbucket.org:dmabrasil/yusuke.git`  
    &nbsp; `cd yusuke`  
    &nbsp; `code .`  

6. Instalar pacotes npm  
    &nbsp; `npm install`  

7. Projeto está habilitado para rodar na máquina  

8. Comando para rodar o servidor  
    &nbsp; `npm start`  
    &nbsp; `control + C` -> parar de executar o projeto do servidor  

9. Comando para testes unitário  
    &nbsp; `npm run test:unit`  

10. Comando para testes de integração  
    &nbsp; `npm run test:integration`  

11. Comando de testes para saber o coverage do projeto (quais documentos estão com testes -> ideal é 100% em todos)  
    &nbsp; `npm test:ci`  

12. Abrir a foto clean.png para entender a estrutura inicial do projeto (Vale ressaltar que ainda não temos o projeto igual na foto, em breve teremos)

---

obs.: 13. Parace ser necessário instalar o mongodb na máquina.

O main vai ser ACOPLADO.

O node não roda arquivos .ts => por isso é necessário instalar o sucrase e usá-lo para chamar o node => `npm run start`

`npm i -D supertest @types/supertest` # => emule requisição HTTP

`npm i fast-glob` # => biblioteca para usar arquivos "file system turbo"

Como usar o [readme.md](https://raullesteves.medium.com/github-como-fazer-um-readme-md-bonit%C3%A3o-c85c8f154f8) do git

