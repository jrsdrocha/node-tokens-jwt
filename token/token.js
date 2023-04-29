import jwt from "jsonwebtoken";

const chaveSecreta = 'Mensagem secreta'

const token = jwt.sign(
   {
      apelido: 'jm',
      curso: 'segurança e node.js'
   }, chaveSecreta
);

console.log(token);

const tokenDecodificado = jwt.verify(token, chaveSecreta)

console.log(tokenDecodificado)