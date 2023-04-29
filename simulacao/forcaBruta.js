import { createHash } from 'crypto';

class Usuario {

   constructor(nome, senha) {
      this.nome = nome;
      this.hash = this.criaHash(senha);
   }
   criaHash(senha) {
      return createHash('sha256').update(senha).digest('hex')
   }

   autentica(nome, senha) {
      if (nome === this.nome && this.hash === this.criaHash(senha)) {
         console.log("Usuário cadastrado com sucesso!")
         return true;
      }
      /* console.log('Usuário ou senha incorretos.'); */
      return false;
   }
}

const usuario = new Usuario('jose Roberto', '1987')

console.log(usuario)

for (let senhaTeste = 0; senhaTeste < 10000 ; senhaTeste++) {
   if (usuario.autentica("jose Roberto", senhaTeste.toString())) {
      console.log(`Asenha do usuario é ${senhaTeste}`)
   }
}

