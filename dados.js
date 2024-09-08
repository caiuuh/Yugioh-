let cartas = [
    {
        nome: "Exodia, o Proibido",
        tipo: "Monstro",
        descricao: "Quando todas as cinco partes de Exodia, o Proibido estiverem no seu campo, você ganha o Duelo.",
        link:"https://yugioh.fandom.com/pt-br/wiki/Exodia"
    },
    {
        nome: "Mago Negro",
        tipo: "Monstro",
        descricao: "Um dos monstros mais icônicos de Yugi Muto, o Mago Negro é um poderoso mago.",
        link:"https://yugioh.fandom.com/pt-br/wiki/Dark_Magician"
    },
    {
        nome: "Dragão Branco de Olhos Azuis",
        tipo: "Monstro",
        descricao: "Este dragão lendário é uma poderosa máquina de destruição. Praticamente invencível, muito poucos enfrentaram esta magnífica criatura e viveram para contar a história.",
        link:"https://yugioh.fandom.com/pt-br/wiki/Blue-Eyes_White_Dragon"
    },
    {
         nome: "Dragão Negro de Olhos Vermelhos",
        tipo: "Monstro",
        descricao: "O rival do Dragão Branco de Olhos Azuis, invocado por Seto Kaiba.",
         link:"https://yugioh.fandom.com/pt-br/wiki/Red-Eyes_B._Dragon"
     },
    {
        nome: "Força de Espejo - Espelho Forçado",
        tipo: "Magia",
        descricao: "Uma carta de magia rápida que permite invocar um monstro especial do seu Deck Extra.",
        link:"https://yugioh.fandom.com/pt-br/wiki/Mirror_Force"
    },
    {
        nome: "Pot of Greed",
        tipo: "Magia",
        descricao: "Uma carta de magia clássica que permite ao jogador adicionar duas cartas da sua Deck para a mão.",
        link:"https://yugioh.fandom.com/pt-br/wiki/Pot_of_Greed"
    },
    {
        nome: "Slifer, o Dragão do Céu",
        tipo: "Monstro",
        descricao: "O ataque deste card é igual ao número de cartas na sua mão x 1000. Uma vez por turno: você pode descartar 1 carta; escolha 1 card no campo; destrua-o.",
        link: "https://yugioh.fandom.com/pt-br/wiki/Slifer_the_Sky_Dragon"
    },
    {
        nome: "Mensageiro da Paz",
        tipo: "Magia",
        descricao: "Monstros com 1500 ou mais de ATK não podem declarar um ataque. Uma vez por turno, durante sua Fase de Apoio, pague 100 PV ou destrua este card.",
        link: "https://yugioh.fandom.com/pt-br/wiki/Messenger_of_Peace"
    },
    {
        nome: "Sábio Negro",
        tipo: "Mago",
        descricao: "Não pode ser Invocado por Invocação-Normal/Baixado. Primeiro deve ser Invocado por Invocação-Especial (da sua mão ou Deck) ao oferecer como Tributo 1",
        link: "https://yugioh.fandom.com/pt-br/wiki/Dark_Sage"
    },
    {
        nome: "Elfa Mística",
        tipo: "Mago",
        descricao: "Uma elfa delicada com pouco poder de ataque, mas com uma incrível defesa proveniente de poderes místicos.",
        link: "https://yugioh.fandom.com/pt-br/wiki/Mystical_Elf"
    },
    {
        nome: "Diabrete Selvagem",
        tipo: "Monstro",
        descricao: "Um pequeno demônio brincalhão que se esconde na escuridão, esperando para atacar um inimigo descuidado.",
        link: "https://yugioh.fandom.com/pt-br/wiki/Feral_Imp"
    },
    {
        nome: "Dragão Alado, Guardião da Fortaleza Nº1",
        tipo: "Monstro",
        descricao: "Um dragão normalmente encontrado protegendo fortalezas das montanhas. O seu ataque característico é um mergulho arrebatador vindo do céu.",
        link: "https://yugioh.fandom.com/pt-br/wiki/Winged_Dragon,_Guardian_of_the_Fortress_1"
    },
   
    {
            nome: "Caveira Invocada",
            tipo: "Monstro",
            descricao: "Um demônio com poderes das trevas para confundir os inimigos. Entre os monstros do tipo demônio, é dos mais fortes.",
            link:"https://yugioh.fandom.com/pt-br/wiki/Summoned_Skull"
    },
    {
            nome: "Castor Guerreiro",
            tipo: "Monstro",
            descricao: "O que esta criatura falta em tamanho ele compensa em defesa quando lutando na pradaria",
            link:"https://yugioh.fandom.com/pt-br/wiki/Beaver_Warrior"
    },
    {
            nome: "Gaia, o Cavaleiro Impetuoso",
            tipo: "Monstro",
            descricao: "Um cavaleiro cujo cavalo galopa mais rápido do que o vento. A sua carga de batalha é de uma força avassaladora.",
            link:"https://yugioh.fandom.com/pt-br/wiki/Gaia_The_Fierce_Knight"
    },
    {
             nome: "Maldição do Dragão",
            tipo: "Monstro",
            descricao: "Um elfo que aprendeu a empunhar uma espada e confunde os inimigos com ataques relâmpagos.",
             link:"https://yugioh.fandom.com/pt-br/wiki/Curse_of_Dragon"
    },
    {
            nome: "Guardião Celta",
            tipo: "Monstro",
            descricao: "Uma carta de magia rápida que permite invocar um monstro especial do seu Deck Extra.",
            link:"https://yugioh.fandom.com/pt-br/wiki/Celtic_Guardian"
    },
    {
            nome: "Cemitério de Mamutes",
            tipo: "Monstro",
            descricao: "Um mamute que protege os túmulos do seu bando e que enfrenta ladrões de túmulos impiedosamente.",
            link:"https://yugioh.fandom.com/pt-br/wiki/Mammoth_Graveyard"
    },
    {
            nome: "O Grande Branco",
            tipo: "Monstro",
            descricao: "Um tubarão branco gigante com dentes afiados como lâminas.",
            link: "https://yugioh.fandom.com/pt-br/wiki/Great_White"
    },
    {
            nome: "O Presa de Prata",
            tipo: "Monstro",
            descricao: "Um lobo da neve que, embora agrade aos olhos, é absolutamente feroz em batalha.",
            link: "https://yugioh.fandom.com/pt-br/wiki/Silver_Fang"
    },
    {
            nome: "Soldado de Pedra Gigante",
            tipo: "Monstro",
            descricao: "Um guerreiro gigante feito de pedra. Um soco desta criatura faz com que a terra estremeça.",
            link: "https://yugioh.fandom.com/pt-br/wiki/Giant_Soldier_of_Stone"
    },
    {
            nome: "Dragão Zumbi",
            tipo: "Monstro",
            descricao: "Um dragão renascido por feitiçaria. O seu hálito é altamente corrosivo.",
            link: "https://yugioh.fandom.com/pt-br/wiki/Dragon_Zombie"
    },
    {
            nome: "Doma, O Anjo do Silêncio",
            tipo: "Monstro",
            descricao: "Este anjo governa a morte e administra-a quando necessário.",
            link: "https://yugioh.fandom.com/pt-br/wiki/Doma_The_Angel_of_Silence"
    },
    {
            nome: "Ansatsu",
            tipo: "Monstro",
            descricao: "Um guerreiro silencioso e mortal especializado em assassínios.",
            link: "https://yugioh.fandom.com/pt-br/wiki/Ansatsu"
    },
    {
            nome: "Fantasma Sarcástico",
           tipo: "Monstro",
           descricao: "Vestido com um smoking preto como a noite, esta criatura preside à morte.",
            link:"https://yugioh.fandom.com/pt-br/wiki/Witty_Phantom"
    },
    {
           nome: "Estende Garras",
           tipo: "Monstro",
           descricao: "Braços que esticam e garras afiadas com lâminas fazem deste monstro um oponente formidável.",
           link:"https://yugioh.fandom.com/pt-br/wiki/Claw_Reacher"
    },
    {
           nome: "Palhaço Místico",
           tipo: "Monstro",
           descricao: "Nada pode parar o ataque enlouquecido desta poderosa criatura.",
           link:"https://yugioh.fandom.com/pt-br/wiki/Mystic_Clown"
    },
    {
           nome: "Espada Sombria da Destruição",
           tipo: "Monstro",
           descricao: "Um monstro das TREVAS equipado com este card aumenta o seu ATK em 400 pontos e diminui o seu DEF em 200 pontos.",
           link: "https://yugioh.fandom.com/pt-br/wiki/Sword_of_Dark_Destruction"
    },
    {
           nome: "Livro das Artes Secretas",
           tipo: "Magia",
           descricao: "Um monstro do Tipo Mago equipado com este card aumenta seu ATK e DEF em 300 pontos.",
           link: "https://yugioh.fandom.com/pt-br/wiki/Book_of_Secret_Arts"
    },
    {
           nome: "Buraco Negro",
           tipo: "Magia",
           descricao: "Destrua todos os monstros no campo.",
           link: "https://yugioh.fandom.com/pt-br/wiki/Dark_Hole"
    },
    {
           nome: "Dian Keto, Mestre da Cura",
           tipo: "Magia",
           descricao: "Aumente seus Pontos de Vida em 1000 pontos.",
           link: "https://yugioh.fandom.com/pt-br/wiki/Dian_Keto_the_Cure_Master"
    },
    {
           nome: "Elfo Ancião",
           tipo: "Monstro",
           descricao: "Rumores dizem que este elfo vive há milhares de anos. Ele lidera um exército de espíritos contra seus inimigos.",
           link: "https://yugioh.fandom.com/pt-br/wiki/Ancient_Elf"
    },
    {
           nome: "Fantasma Mágico",
           tipo: "Monstro",
           descricao: "Esta criatura lança uma mágica de terror e confusão logo antes de atacar seus inimigos.",
           link: "https://yugioh.fandom.com/pt-br/wiki/Magical_Ghost"
    },
];