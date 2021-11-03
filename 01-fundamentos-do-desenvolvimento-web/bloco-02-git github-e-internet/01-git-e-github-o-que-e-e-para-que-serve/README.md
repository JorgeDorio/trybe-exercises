# Git & GitHub - O que é e para que serve

## Dinâmica de controle de versão

Hoje vamos aprender sobre o uso do Git, um sistema de controle de versão amplamente utilizado no mundo do desenvolvimento de software!

## Você será capaz de:

- Instalar e configurar o Git no seu computador;
- Salvar seus projetos no repositório Git local;
- Controlar as alterações e versões dos seus arquivos;
- Enviar seus projetos para o repositório remoto do GitHub .

## Por que isso é importante?

Entender como funciona e colocar em prática o Git em seus projetos é crucial no dia a dia de quem trabalha com desenvolvimento de software. O Git é o mecanismo de controle de versão mais popular e, por consequência, a chance de você trabalhar com ele é bem alta.

Utilizando o Git , você e seu time vão conseguir colaborar de forma assíncrona e harmoniosa, ganhando produtividade no momento de "juntar as partes" que cada um fez e tendo segurança de que todo o trabalho realizado está salvo. Estar salvo depende de você sempre dar "push" (enviar as alterações para o repositório online) antes de sair com seu computador por aí, né? 😊

O GitHub , ferramenta online que hospeda repositórios Git , é uma excelente ferramenta para toda a gestão do seu código, tendo recursos para acompanhamento de projeto ágil de software, controle de Issues , quadros Kanban , Pull Requests que permitem um Code Review mais bem feito, entre outras dezenas de integrações que vão facilitar sua vida com desenvolvimento de software.

Agora que você já entendeu um pouco sobre o que é o Git e como ele pode ajudar, vamos aprender!

## Autenticação - Como funciona a conexão entre local e remoto?

Como tudo o que você vai fazer ao longo do curso (e muito provavelmente da sua vida profissional) irá ter como workspace principal o GitHub, é necessário estabelecer uma ponte entre o Git ( local ) e o GitHub ( remoto ), e sobretudo que essa ponte seja segura .

É aí que entra o processo de autenticação do GitHub, que lhe permitirá, ao mesmo tempo, proteger suas informações pessoais e mandar comandos para o GitHub diretamente pelo seu terminal!

Quando esse processo é feito, você informa ao sistema remoto que é para utilizar as credenciais da sua conta ao executar algum comando do git e, ao mesmo tempo, comprova para o GitHub que você é exatamente quem diz que é.

### Autenticar via SSH ou HTTPS?

Existem duas formas pelas quais você pode acessar o GitHub pelo terminal: HTTPS (Hypertext Transfer Protocol Secure) e SSH (Secure Shell). Ambas as formas são válidas, mas possuem algumas diferenças entre si:

- SSH ou Secure Shell : é um protocolo de criptografia de rede que serve para transferir dados de forma segura mesmo em redes inseguras. Usando o protocolo SSH, você pode se conectar ao GitHub sem precisar digitar seu nome e chave de acesso pessoal a cada comando executado.
- HTTPS ou Hypertext Transfer Protocol Secure : é uma extensão do protocolo de internet HTTP ( você verá mais sobre esse protocolo no dia de conteúdo que trata sobre internet! ) que utiliza certificados digitais para autenticar os dados e permitir que eles sejam cripografados de forma segura.

No caso do HTTPS, você precisará criar um token de acesso pessoal para usar no lugar da sua senha quando ela for pedida. Para entender melhor, veja o passo a passo na [documentação do GitHub](https://docs.github.com/pt/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token). No entanto, recomendamos o uso do SSH.
Como o SSH nos permite pular a etapa de digitar login e senha do GitHub a cada comando (e ao longo do curso serão muuuuuuuuitos comandos), iremos utilizar o SSH como modelo padrão de autenticação. Para isso você deverá seguir alguns passos, mas não se assuste: é mais simples do que parece! Quer ver só? Então vamos praticar um pouco!

## Do git init ao git push

> ⚠️ O conteúdo a seguir é apenas para leitura, foque em entender todo o fluxo. Caso não tenha o Git instalado em sua máquina, os comandos referentes ao Git , não funcionarão. Mas não se assuste, na parte de exercícios teremos o passo a passo para preparar todo o ambiente e um exercício para praticar esses comandos. ⚠️

Agora você vai aprender a iniciar um repositório Git , fazer seu primeiro commit e subi-lo para um repositório no GitHub .

### Criando um repositório local

Antes de se criar um repositório é preciso criar uma pasta para ele. Para isso você deve utilizar o comando mkdir , como vimos anteriormente, e então navegar para a pasta criada com o comando cd .

Para criar um repositório você deve digitar o comando git init . É muito importante que esteja dentro da pasta criada para o repositório.

Após usar o git init a resposta do seu terminal será algo parecido com a imagem a seguir:

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/git/images/git-init-9ebbfdfa9b0b14d495f0498bf2e7b18d.png)

Como seu nome bem diz, esse comando é responsável por iniciar um repositório Git dentro da pasta em que foi executado.
Para verificar se um repositório Git foi de fato iniciado, você pode executar o comando git status , que retorna o status do repositório. No contexto de um repositório recém criado onde nenhuma modificação foi feita você receberia a seguinte resposta:

```
No ramo master

No commits yet

nada para enviar (crie/copie arquivos e use "git add" para registrar)
```

### Adicionando e comitando arquivos

Vamos adicionar um arquivo a esta pasta para então podermos versionar as alterações feitas no novo repositório.
Primeiro crie um arquivo .txt com o nome meu_arquivo e inclua a ele o texto:

```
Meu primeiro repositório Git.
```

Feita a criação do arquivo, ao executar o comando **git status** , você irá receber uma resposta parecida com essa:

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/git/images/git-status-answer-737da3a31bd20ad17e05b8dfbf626682.png)

Para que possamos versionar alterações feitas no código é preciso sempre seguir a seguinte sequência:

- Adicionar ( add )
- Comitar ( commit -m "mensagem" )

Os comandos ficam da seguinte forma:

```
# Adicionar todos os arquivos modificados
git add .

# Ou você também pode adicionar arquivos específicos
git add meu_arquivo.txt

# Então você comita a alteração
# Ao comitar você deve adicionar também uma mensagem que descreve o que aquela alteração faz

git commit -m "Mensagem sobre a alteração feita"
```

Após adicionar e fazer um commit de suas alterações, você receberá no terminal algo parecido com a próxima imagem:

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/git/images/git-commit-answer-ed4540bbfe5427bf3b9e97ba06c73295.png)

### Criando um repositório no GitHub

Para isso acesse o GitHub e procure o ícone com um sinal + na barra superior e ao clicar nele busca pela opção New repository . Você será redirecionado para uma página semelhante a essa:

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/git/images/create-new-repo-10a0b1f329e7d34c7d549df76898d559.png)

Você deve então adicionar um nome ao seu repositório, como por exemplo meu-super-repo . Após fazer isso o botão Create repository será habilitado e ao clicar nele seu repositório será criado.

> Por enquanto ignore as outras opções, a medida que for avançando no curso você aprenderá mais sobre elas!

Como seu repositório estará vazio, o GitHub lhe dará algumas dicas, você verá uma página parecida com essa:

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/git/images/created-repo-55db2dd5f7ce38652a379d81c8c3fa0c.png)

Você deverá clicar no botão SSH e então a URL gerada. Você irá precisar dela para realizar a conexão entre seu repositório local e seu repositório remoto.

### Conectando o repositório local com o remoto

Para conectar os dois repositórios você deverá abrir o seu terminal, acessar o diretório do seu repositório e então executar o seguinte comando:

```
git remote add origin git@github.com:user-github/repo-name.git
```

Sendo origin um apelido para o seu repositório, poderia ser qualquer outro. E no lugar da URL git@github.com:user-github/repo-name.git deve ir a gerada pelo seu repositório (aquela que acabamos de no passo acima).
Para verificar que tudo funcionou corretamente, execute o comando git remote -v , você obterá um resultado semelhante a esse:

```
origin  git@github.com:user-github/repo-name.git (fetch)
origin  git@github.com:user-github/repo-name.git (push)
```

### Sincronizando os repositórios

Os repositórios já estão criados e também já estão conectados, agora é a hora de enviar as alterações feitas no repositório local para o repositório remoto.

Para isso, certifique-se que as alterações já foram adicionadas e comitadas utilizando o comando git status , caso esteja tudo certo, você receberá uma mensagem no terminal parecida com a imagem a seguir:

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/git/images/git-status-clean-534370a6d9343496469ea5b0a6cbff08.png)

Caso tenha alguma alteração que não foi comitada, faça o commit para depois enviar as alterações.
Com tudo comitado é hora de enviar essas alterações para o respositório remoto utilizando o seguinte comando:

```
git push origin master
```

Com isso, você está enviando as alterações feitas localmente para a branch principal, master , do seu repositório remoto, origin .

Se tudo ocorreu conforme o esperado, acesse novamente, ou atualize, a página do seu repositório no GitHub , você então verá que os arquivos e alterações que comitou agora se encontram lá!

## Parte 1 - Instalação e configuração

Vamos começar realizando a instalação e configuração do Git . Siga o passo a passo para deixar o Git pronto em seu ambiente.

### Instalação

#### Linux

Para instalar o Git abra o seu terminal e digite o seguinte comando:

```
sudo apt-get install git-all
```

#### macOS

Para instalar o Git abra o seu terminal e digite o seguinte comando:

```
brew install git
```

Caso você não possua o brew instalado digite o comando abaixo no seu terminal e após a instalação execute novamente o comando acima:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### Configuração

O Git vem com uma ferramenta chamada git config que permite ver e atribuir variáveis de configuração que controlam todos os aspectos de como o Git aparece e opera.

#### Identidade

O primeiro passo é configurar sua identidade, seu nome e endereço de e-mail, isso é importante pois cada commit usa esta informação, e ela é carimbada de forma imutável nos commits que você criar. Para configurar isso digite o comando abaixo em seu terminal:

> É preciso que o e-mail informado seja o mesmo que você utilizará para criar a sua conta no GitHub

```
git config --global user.name "Seu nome"
git config --global user.email seuemail@exemplo.br
```

#### Editor

Um outro ponto legal de se configurar é o editor onde você poderá abrir o arquivo de configuração do Git , .gitconfig , fica fácil de você visualizar as configurações do Git e também adicionar outras que julgue necessário. Para isso execute o comando à seguir no seu terminal:

```
git config --global core.editor "code --wait"
```

> Esse comando define o editor do .gitconfig como o VS Code , que é o editor que você usará ao longo curso. Caso queira abrir o arquivo de configuração no VS Code basta executar em seu terminal o comando abaixo. Para isso certifique-se que você se encontra no diretório onde o arquivo .gitconfig está localizado.

```
code .gitconfig
```

Verificando a instalação e a configuração
Agora que você já configurou tudo, vamos fazer uma validação e verificar se tudo está certinho! 😉
No terminal:

- Digite git --version para saber qual versão do git está instalada.
  - Seu terminal deve conter algo parecido com:

```
git version 2.x.y
```

- Digite git config --list
  - Seu terminal deve conter algo similar a isso:

```
user.email=seuemail@gmail.com
user.name=seunome
```

- O email deve ser o mesmo que você utilizou para se registrar no GitHub

Pronto, agora que tudo está devidamente instalado e configurado, vamos ao próximo passo.

## Parte 2 - Criar conta no GitHub

- [Crie sua conta no GitHub usando seu e-mail pessoal 🐙](https://github.com/join)

## Parte 3 - Adicionando uma chave SSH na sua conta do GitHub

Neste passo, vamos aprender como adicionar uma chave SSH à sua conta do GitHub , o que vai te permitir fazer pushes e pulls sem ter que ficar digitando usuário e senha, como já explicamos. É de extrema importância que você siga TODOS os passos apresentados no artigo, apenas dessa forma você obterá o resultado esperado.

### Gerando uma chave SSH

Abra seu terminal e digite o comando abaixo. Ele cria uma nova chave SSH, usando o seu email como rótulo.

> É preciso que o e-mail informado seja o mesmo que você utilizou para criar a sua conta no GitHub

```
ssh-keygen -t rsa -b 4096 -C "seuemail@gmail.com"
```

Durante o processo irá aparecer escrito no terminal Enter a file in which to save the key , quando isso acontecer pressione Enter para aceitar a localização padrão /home/you/.ssh/id_rsa .

```
Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]
```

Agora você deve digitar uma senha segura.

```
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```

Adicionando sua chave SSH ao ssh-agent
Primeiro você deve iniciar o ssh-agent em background:

```
eval "$(ssh-agent -s)"
```

Agora você deve adicionar sua chave privada SSH ao ssh-agent . Para isso execute o comando abaixo no terminal:

```
ssh-add ~/.ssh/id_rsa
```

Adicionando a chave SSH na sua conta do GitHub
Antes de tudo você deve copiar a sua chave SSH. Para isso, você vai aprender um comando bem útil, mas que nem sempre vem instalado nativamente no Linux: o xclip .

Para entender como funciona o xclip , temos que nos perguntar uma coisa: como se copia um texto ou uma parte dele quando estamos trabalhando com um ambiente de terminal? Provavelmente a primeira coisa que se passou pela sua cabeça foi abrir o arquivo em um editor de texto, selecionar aquilo que você deseja copiar, fechar o editor de texto e depois colar em outro lugar.

Não há nada de errado com essa lógica: ela funciona, mas convenhamos que dá pra ser um pouquinho mais eficiente, né? Aí entra o tal do xclip . Usando esse comando podemos fazer uma ponte diretamente entre os comandos que serão utilizados no terminal e a área de transferência do Linux, ou seja, dá pra copiar a saída de um comando de forma direta pelo terminal!

Vamos ver como funciona? Execute a sequência de comandos abaixo:

```
# Como o xclip não vem instalado por padrão na maioria das distribuições,
# precisaremos instalá-lo usando o comando a seguir:
sudo apt-get install xclip

# Agora utilize o comando abaixo para copiar o conteúdo da sua chave id_rsa.pub
# Para garantir que o conteúdo foi copiado dê Ctrl + V em um editor de texto
xclip -sel clip < ~/.ssh/id_rsa.pub
```

Caso o xclip não funcione, execute o comando abaixo e copie manualmente a saída do terminal.

```
cat ~/.ssh/id_rsa.pub
```

Entre no seu GitHub e siga os passos abaixo:

- No canto superior direito do GitHub , clique na sua foto de perfil e clique em Settings ;
- Na barra lateral esquerda, clique em SSH and GPG keys ;
- Clique em New SSH key ou Add SSH key ;
- No campo Título , adicione um descrição para a nova chave;
- Cole sua chave dentro do campo Key ;
  -Clique em Add SSH key ;
- Caso seja solicitado, confirme sua senha do Github.

Se tiver problemas ao seguir o tutorial acima, consulte a [documentação oficial do GitHub](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account) .

## Parte 4 - O seu repositório no GitHub

Pronto! Agora que você já é capaz de gerenciar localmente seus códigos e também enviá-los para o GitHub , é hora de colocar a casa em ordem!

Antes de começar, siga as instruções da página sobre Portfólio de Exercícios para criar a estrutura de diretórios que usará ao longo de todo o curso para guardar seus exercícios.

Durante seu curso na Trybe , seus projetos serão entregues através de pushes nos repositórios do GitHub . Para podermos simular um exercício feito, você criará um arquivo .txt com um nome de sua escolha (Exemplo: trybe-skills.txt ) e utilizará o conteúdo abaixo.

```
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
```

No final, ao executar o comando ls -l na pasta de arquivos deste dia, você deverá receber um retorno parecido com:

```
ls -l

total 0
-rw-r--r-- 1 tryber staff 0 Jan 27 00:34 trybe-skills.txt
```

Agora vamos transformar essa pasta em um repositório Git :

- Retorne para a raiz da pasta de exercícios;
- Inicialize o repositório com git init ;
- Crie um arquivo de README utilizando o comando touch README.md ;
- Crie um commit inicial utilizando:

```
git add .
git commit -m "Initial commit"
```

- Vá até o seu GitHub e crie um repositório público , onde você irá guardar todos os exercícios que desenvolverá ao longo do curso;
  - Dê ao repositório um nome descritivo, como por exemplo trybe-exercicios ;
  - ⚠️ Lembre-se de não inicializar o repositório com um arquivo README.md , pois você já criou um nos passos anteriores! 😉
- Clique no botão SSH e então copie a URL do repositório;
  - Execute o comando para adicionar a URL ao repositório local git remote add origin "URL_DO_REPOSITÓRIO" ;
- Verifique se tudo está certo com sua URL remota utilizando o comando git remote -v . Seu terminal deve conter algo similar a isso:

```
origin git@github.com:john-snow/know-nothing.git (fetch)
origin git@github.com:john-snow/know-nothing.git (push)
```

- Em que john-snow corresponde ao seu username e know-nothing ao nome que você deu ao seu repositório;
- Agora que tudo está devidamente configurado e verificado, é hora de subir seu primeiro commit para o GitHub ! 🤩
- Execute o comando git push origin master no terminal;
- Vá até o seu GitHub e verifique as novas alterações.

Agora que tal adicionar uma descrição do que é seu repositório no README.md ? 💪🏼.

- O README.md que você recriou é referente ao repositório trybe-exercicios , tendo isso em mente é interessante que você adicione informações relacionadas ao curso da Trybe e o que você está desenvolvendo e o que irá desenvolver;
- Uma outra coisa interessante a se fazer é adicionar um README.md dentro do diretório de exercícios do dia para colocar a descrição dos exercícios que você desenvolveu;
- Lembre-se de fazer um commit quando terminar de alterar os arquivos;
  Depois do commit , faça sempre um push ;
- Confira as alterações no GitHub .

## Recursos Adicionais (opcional)

- [Livro oficial sobre Git](https://git-scm.com/book/pt-br/v2)
- [Ótimo curso da Udemy sobre Git](https://www.udemy.com/course/git-e-github-para-iniciantes/)
- [Curso da Udacity sobre Git](https://www.udacity.com/course/version-control-with-git--ud123)
- [Como conectar com o repositório no GitHub via SSH ?](https://help.github.com/en/articles/connecting-to-github-with-ssh)
- [Reforço sobre aprendizado do Git em um guia rápido](https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/)
- [Instalando o Git - Git Setup](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git)
- [Configuração inicial - Git Config](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git)
- [Adicionando chave SSH na conta do GitHub](https://medium.com/@rgdev/como-adicionar-uma-chave-ssh-na-sua-conta-do-github-linux-e0f19bbc4265)
- [Do primeiro commit ao primeiro Push](http://www.devfuria.com.br/git/tutorial-iniciando-git/)
