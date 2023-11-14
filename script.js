class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque="";

        switch (this.tipo) {
            case 'Mago':
                ataque = 'usou magia';
                break;
            case 'Guerreiro':
                ataque = 'usou espada';
                break;
            case 'Monge':
                ataque = 'usou artes marciais';
                break;
            case 'Ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou ataque desconhecido';
                break;
        }
        let mensagem = `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

let heroi1 = new heroi("Oghrum", 20, "Guerreiro");
heroi1.atacar();

let heroi2 = new heroi("Donato", 1000, "Mago");
heroi2.atacar();

let heroi3 = new heroi("Po", 10, "Monge");
heroi3.atacar();

let heroi4 = new heroi("Xingling", 25, "Ninja");
heroi4.atacar();