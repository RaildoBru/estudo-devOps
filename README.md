<<<<<<< HEAD
<<<<<<< HEAD
<h1 align="center"> ESTUDO DEVOPS </h1>
=======
#ESTUDO DEVOPS
>>>>>>> 5be0a0c (Adicionando intrucoes readme)


Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina o Node.js
<<<<<<< HEAD
    1.  Baixe e instale o NVM:

        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

    2.  Carregue o NVM:

        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
        [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

    3.  Verifique a versão do NVM:

        Execute o comando nvm -v

    4.  Liste as versões disponíveis do Node.js:

        Execute o comando nvm ls-remote

    5.  Instale o Node.js:
        
        Execute o comando nvm install node para instalar a versão mais recente
        Execute o comando nvm install 20.18 para instalar uma versão específica

=======
>>>>>>> 5be0a0c (Adicionando intrucoes readme)

Instalação

1.  Clone o repositório:

<<<<<<< HEAD
    git clone https://github.com/RaildoBru/estudo-devOps.git
    
    cd estudo-devOps
=======

git clone https://github.com/RaildoBru/estudo-devOps.git
cd estudo-devOps
>>>>>>> 5be0a0c (Adicionando intrucoes readme)


2.  Instale as dependências:

<<<<<<< HEAD
    npm install


3.  Configure as variáveis de ambiente criando um arquivo .env na raiz do projeto, baseado no <br> exemplo .env.example. Este arquivo deve conter:

    POSTGRES_USER='postgres-user'
    
    POSTGRES_PASSWORD='senha'
=======
npm install


3.  Configure as variáveis de ambiente criando um arquivo .env na raiz do projeto, baseado no 
    exemplo .env.example. Este arquivo deve conter:

POSTGRES_USER='postgres-user'
POSTGRES_PASSWORD='senha'
>>>>>>> 5be0a0c (Adicionando intrucoes readme)


4.  Inicialize o servidor:

<<<<<<< HEAD
    npm start

    O servidor estará disponível em http://localhost:3000.




Instalar Banco de dados se necessario
    
    1. instalação banco redis
        sudo apt update
        sudo apt install redis-server
    
    
    2. Editar arquivo redis.conf

        sudo nano /etc/redis/redis.conf
        faça a alteração do supervised que por padão é "no" para systemd.
        Salve o arquivo
    
    3. Reiniciar o serviço

        sudo systemctl restart redis.service
        sudo systemctl status redis
=======
ESTUDO DEVOps
>>>>>>> 217ee5c (Adicionando arquivo .env)
=======
O servidor estará disponível em http://localhost:3000.
>>>>>>> 5be0a0c (Adicionando intrucoes readme)
