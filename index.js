import { Cliente } from "./Clientes/Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./Autenticacao/SistemaAutenticacao.js";

const diretor = new Diretor("Raul", 12345678910, 5000);
diretor.cadastrarSenha('12345')

const gerente = new Gerente("Enzo", 2225678910, 3000);
gerente.cadastrarSenha('123456789');

const cliente = new Cliente('Raul Pinheiro',12345678910, '1234');

const loginDiretor = SistemaAutenticacao.login(diretor, '123456789');
const loginGerente = SistemaAutenticacao.login(gerente, '123456789');
const loginCliente = SistemaAutenticacao.login(cliente,'1234');



console.log(loginDiretor, loginGerente, loginCliente);


