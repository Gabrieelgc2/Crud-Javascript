class Contato{
    constructor(nome, sobrenome, telefone, email){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.telefone = telefone;
        this.email= email;
        if(typeof nome!=='string'){
            throw new Error('Forneça um nome!')
        }
        if(typeof sobrenome!=='string'){
            throw new Error('Forneça um sobrenome!')
        }
        if(typeof telefone!=='number'){
            throw new Error('Forneça um número para o telefone!')
        }
        if(typeof email!=='string'){
        throw new Error('Forneça um email!')
        }
    }
}
class GerenciadorDeContatos{
    constructor(){
this.contatos = [];
}
}
GerenciadorDeContatos.prototype.adicionarContatos = function(Contato){
    this.contatos.push(Contato)
console.log(`O contato de ${Contato.nome} ${Contato.sobrenome} foi adicionado!`)
}

GerenciadorDeContatos.prototype.listarContatos = function(){
    this.contatos.forEach((contato) => console.log(contato));  
}   

GerenciadorDeContatos.prototype.deletarContatos = function (Contatos){
    this.contatos = this.contatos.filter(contato => contato.nome !== Contatos.nome)
}

GerenciadorDeContatos.prototype.AtualizarContatos = function(Variavel, Contatos, Contatos2, Contatos3, Contatos4){
    if(typeof Contatos!=='string'){
        throw new Error('Forneça um nome!')
    }
    if(typeof Contatos2!=='string'){
        throw new Error('Forneça um sobrenome!')
    }
    if(typeof Contatos3!=='number'){
    throw new Error('Forneça o número de telefone') 
    }
    if(typeof Contatos4!=='string'){
        throw new Error('Forneça um email!')
    }
    return Variavel.nome = Contatos, 
    Variavel.sobrenome = Contatos2,
    Variavel.telefone = Contatos3,
    Variavel.email = Contatos4;
}

const PrimeiroContato = new Contato('Gabriel', 'Garcia', 81979010538, 'gabrielao8@hotmail.com')
const SegundoContato = new Contato('Teste', '1', 9981302255, 'ggsao@cesar.school')
const TerceiroContato = new Contato('Terceiro Usuário','2', 33259109, 'gabrielss27@hotmail.com')
const gerenciarcontatos = new GerenciadorDeContatos

gerenciarcontatos.adicionarContatos(PrimeiroContato)
gerenciarcontatos.adicionarContatos(SegundoContato)
gerenciarcontatos.adicionarContatos(TerceiroContato)
// gerenciarcontatos.deletarContatos(TerceiroContato)
gerenciarcontatos.AtualizarContatos(PrimeiroContato, 'Bruno', 'Andrade', 81791053298, 'teste@gmail.com')
gerenciarcontatos.listarContatos()