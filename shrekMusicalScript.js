async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

Shrek – O Musical

Ato um
CENA I
Shrek: era uma vez, um pequeno ogro chamado Shrek, no qual, vivia numa arvore com seus parentes, era um lugar pequeno e nojento, mas ele era feliz, pois ogros gostam de lugares assim, no dia de seu aniversário de sete anos, sua mãe o chamou para uma conversa, no qual é uma tradição, e todos os pequenos ogros deviam seguir.
Mamãe ogro:
Filho meu que cresce tão depressa Cresce mais e não vai parar
A hora vem ai À hora de partir Sete anos
Sete anos
Já ta bom pra se virar
Mamãe fez sanduíche pra você também pus cobertor, pois vai nevar Orgulho dos seus pais
Jamais olhar pra trás Sempre em frente Sempre em frente
Você vai, vai se encontrar É um mundo grande e feliz Com céu azul sobre nós
A vida é legal e faz bilu-bilu Mas não pra tu
É um mundo grande e feliz
E tudo é diversão, tudo é cor Amigos pra brincar
Festa pra chuchu Mas não pra tu Filhinho meu
Meu bem a gente é feio E o povo então.
Não quer olhar pra nós E toma palavrão
E toma tropeção
Vem pra nos caçar E calam nossa voz
Sendo assim você precisa achar seu canto Algum lugar difícil de encontrar
Porém se alguém chegar Você tem que assustar bem Bota medo
Bota medo
Só assim pra não dançar Adeus!
Cuidado com os homens maus
(Shrek passa em lugares e assusta moradores)
*** Shrek:
Eu não quero um mundo feliz Já sou feliz aqui, como eu sou Com tudo que é meu Portanto vejam bem
Eu não quero um mundo feliz Na festa mando eu e só eu Faço o que eu quiser
Eu convido e vou também
Pegue o mundo azul de vocês Com ursinhos e unicórnios
E enfie num lugar
Bem fundo e bem quentinho, sim Eu prefiro a vida assim
Não sou tão complicado
Eu nasci pra ser sozinho E pra sempre detestado
Todo livro fala em mim Como um degenerado Mas tudo bem
Pois tanto faz
caguei pra ser amado
Caguei pro mundo belo e feliz
Eu tenho o meu, meu mundinho só meu Que não é belo e nem é feliz
Mas é meu! É todo meu!
Ele é meu! Ele é meu!

CENA II
(Shrek após cantar a musica entra em casa, no qual aparecem as criaturas de contos de fadas que seguem um guarda do lorde Farquaad).
 
Guarda: vejam! Aqui que vocês iram morar! Não liguem para a lama, logo se acostumam! E não reclamem! Vocês leram o decreto do lorde Farquaad!
Pinóquio: sim lemos! (agora ele fala com um tom debochado) todas as criaturas de contos de fadas, estão completamente banidas de Duloc. Todos os frutinhas e bobões serão levados para a “reabilitação” (ele faz aspas com as mãos)
Guarda: sem graça! quando eu chamar seus nomes dê um passo à frente! Pinóquio, a marionete!
Pinóquio: não sou uma marionete! Sou um menino de verdade! (o nariz dele cresce)
Guarda: ali vai ser seu pedaço de lama! Pinóquio: muitíssimo obrigado!
(ele senta num tronco)
Pinóquio: cara eu vou te contar! Às vezes ser uma criatura de contos de fadas é um saco!
Pinóquio:
Ai, a vida é um saco Eu to sempre mal Tenho esse nariz Que me trai e diz Que eu sou Pinóquio Não da pra mentir
É uma vida feia Bobo aqui na luz E dentro da baleia
É uma vida uó, é sim! É uma vida uó

Guarda: porcas! Procurem um lugar perto daquela arvore! Não tão perto! Nem Tão longe! Acertou!
Dói, a vida é dura Expulso, sem lugar Quebraram meu poder Botaram pra correr Sopraram nosso lar
Ai, a caça às bruxas fada ta no chão fada se ferrou
 
Que bosta de chapéu To gorda pra dedéu
Rasgaram o traje de vovó E o povo só faz me dar coió É uma vida uó
Todo mundo chuta Ninguém ta nem ai E ninguém te escuta É uma vida de cão
guarda: e lembre-se, se virmos vocês lá em Duloc, serão executados! É uma vida de cão
Eu que sonhava com finais felizes Não vai rolar
Tudo ilusão
Eu que sonhava em ser feliz pra sempre Será que sou?
Sou não, sou não, sou não! É uma vida uó
Sempre pelas bordas Sempre a escuridão Sempre atrás das cordas Sempre sem ninguém Sempre alguém diz não
Sempre alguma voz pra xingar de aberração Essa vida é uó, Yes sir
Essa vida é uó, oh yeah Essa vida é uó!

Shrek: oque estão fazendo no meu pântano?!
Pinóquio: aiiii meeeeu Deeeeus! Fomos forçados a vir pelo lorde Farquaad!
Porca um: ele soprou
 



nossa ordem de despejo!
 
Porca dois: bufou
 


Porca três: e assinou
 
Shrek: forçados? Então vão embora, não é problema meu!
Porcas: não podemos voltar! Farquaad vai nos transformar em linguiça!
Bruxa má: ei! Porque você não vai falar com ele!
 
Pinóquio: sim! A você ele ouviria (ele chega bem perto dele) você é assustador!
Shrek: isso quer dizer que eu sou um ogro! E isso significa que eu fico no meu pântano! Vocês nunca leram os livros?
Lobo mau: aqueles livros que falam que eu sou um grande lobo mau! (todos riem)
Bruxa má: aquelas que falam que eu sou uma bruxa má! (todos riem)
Pinóquio: sim! E aquelas que falam que eu sou um menino de madeira!(todos ficam quietos) que foi! Eu sou não sou um menino de madeira (o nariz dele cresce) isso é problema de glândula, sabia?
Bruxa má: olha aqui ogro! Nós não queremos ficar aqui tanto quanto você, então se você convencer o Farquaad, todos seremos felizes!
Peter pan: sempre sonhei com um final feliz!
Fada madrinha: é!
Estava no meu horoscopo!
Shrek: está bem! Já entendi! Vou atrás desse tal “lorde Farquaad”! mas...
(todos entram na casa do Shrek)
Shrek: esperem! Não mexam nas minhas coisas! (fada madrinha abre a porta)
Fada madrinha: não morra!
CENA III
Shrek: Aiai! Cada dia tem mais um maluco! (ele olha pra uma placa) pântano... Duloc... Burro?
(um burro sai pela rampa e vem correndo pela escada, no qual, atrás dele vem correndo o guarda um)
(o burro fica atrás de Shrek)
Burro: oi como vai! Você não tá a fim de ajudar um burrinho hoje? (o guarda se assusta com o Shrek)
Guarda: sai daqui sua aberração!
Shrek: ei! Isso não foi tão gentil! (ele vira pra trás) Ele é só um burro!
Guarda: por ordem de Farquaad, estou autorizado a levar vocês para a cadeia!
 
Shrek: cadeia?(ele dá uma curta risada, e dá um rugido, o guarda fica paralisado) essa é a hora em que você sai correndo!
Guarda: mamãe! (ele sai correndo) Shrek: e não volte mais!
Burro (impressionado): aquilo foi incrível! Diga, você está perdido ou oque?
Shrek: estou tentando ir para Duloc!
Burro: Duloc! Duloc! Eu sei tudo sobre Duloc! Me leve com você! É porque sou tipo um GPS com pelos!
Shrek: não, muito obrigado! Sou melhor sozinho
Burro: mas ninguém fica melhor sozinho! Eu posso te ajudar! Esse lugar está ficando cada vez mais maluco, temos que nos unir! Não posso voltar pra jaula, não sei se você sabe, mas eu fiquei seis anos na solitária porque eu me passei por uma piñata!
(Shrek dá um rugido)
Burro: quer uns halls? Olha se o barulho não der certo, o bafo dá conta do recado!
Shrek: olha pra mim! Oque eu sou? Burro: verde pra caramba? Feio?
Shrek: Eu sou um ogro! Sabe “peguem suas tochas e forquilhas”! Isso não te incomoda?
Burro: não! Bem! Gostei de você! Qual o seu nome? Shrek: Shrek
Burro: Shrek? Você dá Uma de “eu não ligo para oque as pessoas pensam sobre mim”! Eu gosto disso, eu respeito isso! Você é legal!
(Shrek tenta fugir)
Burro: por favor! por favor! por favor! por favor! por favor! A gente é tipo lé com cré, velcro, gordo e bolo juntos, e dunots, oque combina com dunots? Dunots e diabetes!

Shrek: está bem! Mas só porque estou perdido! Mas, com uma condição! Deixa o tagarelar no mínimo!
Burro: está bem! Você não vai se arrepender! Shrek: tarde demais!
 
Burro: Shrek e burro! Dois amigos em busca à cidade grande! Isso daria um bom nome pra um filme! Espere! Vamos fazer um filme! Você tem uma câmera?
(eles saem de cena)
CENA III
(lorde Farquaad sai da porta)
Lorde Farquaad: estou pronto! Tragam o biscoito! (os guardas trazem)
Biscoito: ah! É você!
Lorde Farquaad: e quem seria
Biscoito: sei lá! A chapeuzinho vermelho tentando me comer! (Lorde Farquaad concorda)
Lorde Farquaad: você está aqui por um motivo! Onde estão os outros? Biscoito: que outros?
Lorde Farquaad: fale sua aberração! Biscoito: vai ter que me comer!
Lorde Farquaad: não vou te comer, vou fazer pior! (ele tenta pegar os botões de jujuba do biscoito)
Biscoito: não! Não meus botões de jujuba! Lorde Farquaad: então me diga!
Biscoito: está bem, sabe o soldado? Lorde Farquaad: o soldado?
Biscoito: sim o soldado! Ela é casada com ele! Lorde Farquaad: o soldado?
Biscoito (gritando): o soldado!
Guarda dois: Lorde Farquaad... Achamos oque você tanto queria!
Lorde Farquaad: espera! Não fala! É um... Pônei metade unicórnio magico encantado?
Guarda três: não! É o espelho magico! Achamos em oferta!
Lorde Farquaad: (que estava feliz, fica serio) traga-o! e leve esse biscoito para o pântano!
(os guardas levam o biscoito)
 
(projeção do espelho)
Lorde Farquaad: espelho, espelho, meu! Existe algum reino mais perfeito do que o meu?
Espelho: Duloc é uma terra maravilhosa, mas você se esqueceu de um detalhe, tecnicamente, aqui não é um reino, você não tem um titulo de realeza!
Lorde Farquaad: oque!
Espelho: espere! Disse que você não tem não que você não pode ter! Agora se prepare! Pois você está dentro do “quem vai ser sua princesa”, escolha a alternativa um: cinderela, uma mulher que gosta de limpar as coisas, e curte musica clássica, gosta de sushi, e ainda é divertida!
Lorde Farquaad: gostei da vassoura!
Espelho: alternativa Dois: branca de neve, ela é linda, além disso, pode viver numa casa com sete homens, paciente, capaz de esperar num caixão de vidro seu beijo do amor verdadeiro!
Lorde Farquaad: ela vem numa tupperware!
Espelho: três: ela vive numa torre cercada por lava quente! Gosta de coquetéis de pina colada, e coisas luxuosas! Fiona esteve presa numa torre durante vinte anos cercada por um dragão!
Lorde Farquaad: qual gente (pergunta pra plateia) não tem quatro! A alternativa três.
Espelho: espere tem um fato...
Lorde Farquaad: já escolhi, vamos, tenho que encontrar algum idiota para ir busca-la!! (Lorde Farquaad sai)
Espelho: eu tentava dizer que, com sete anos, uma bruxa a enfeitiçou, fazendo com que ela de dia seja uma menina linda, e de noite, uma ogra horrenda.
(sai espelho, a torre de Fiona aparece).
 
Fiona pequena: hora de ler contos! Rapunzel ta lá na torre
Ai meu Deus, igual a mim
Quer um corte de cabelo
Mas a bruxa não
 
diz sim
Então ela só canta Igual a um certo alguém
O tempo passa e ela ali...
O tempo passa? Oh Oh
Que vida
 
torturante
Não me lembro dessa parte
Só pensa em se matar
Vou pular, vou pular
Mas Rapunzel no fim
 
Tem sorte de encontrar Um príncipe espertinho Que vem pra resgatar
Eu já sei que ele vem
Pois toda historia tem um truque Eu sei que vai chegar a minha vez
Quantos dias? 23 É hoje eu sei!
É hoje eu sei! Fiona jovem: vamos ler esse, é um clássico!
A princesa ta em coma
Ela lá e eu aqui Num caixão que é de vidro
Como ela faz xixi? Bla Bla Bla maçã, veneno
Que madrasta chata e má Historinha mais sem graça
Sete anões, enxada e pá. Vou pular, vou pular
Mas no final da historia
Ela despertou E o príncipe beijando

CENA IV
 
A desenfeitiçou Eu já sei
que ele vem Casamento, maravilha
Com data e com festa por um mês No dia 923
É hoje eu sei!
É hoje ele vem! (Fiona adulta) A princesa, qualquer uma
Todas são iguais a mim
Mais ou menos, eu to nessa
E elas lá no seu jardim
Bem casadas para sempre
E eu ainda infeliz Muita historia, pouca ação
Ops, oque que eu fiz?
Corta ao meio, corta as partes Corta o Bla Bla Bla Sai vilão e carruagem
Que é pra historia não parar
Corta o monstro, corta a praga Corta a estrofe, corta a saga Vem depressa, depressa Depressa, depressa
 
Depressa! Mas eu sei que ele vem
Mesmo eu sendo assim doidona Maluca, estranha e bipolar
Mas ele vai me aceitar
E entender Que no fim da maratona
O prêmio sou eu, é só pegar
No dia...
Cê ta ai Deus? Sou eu Fiona! Sou eu Fiona!
Eu já sei que ele vem
Pois toda historia tem um truque
Pra fazer acontecer o que é melhor
Ele vem, vem me ver
É lindo, fez um book
Eu sei que vai chegar a minha vez
No dia 23
No dia 900 e... No dia 8423
É hoje eu sei! É hoje eu sei! É hoje eu sei! É hoje eu sei! Eu sei que ele vem!
 
Shrek: aqui burro! O castelo do tal “Farquaad”
 
Burro: não disse que encontraria! Shrek: aqui é meio estranho!
Burro: espera! Quero comprar um refri! Shrek: não vamos comprar refri!
(eles saem)
 
Moradores: Aqui em Duloc é tão bom viver Nossas regras já vamos te dizer No jardim não mijar
Todos cumprimentar Tudo aqui é perfeição
Na cabeça xampu Lave bem o seu... Pé!
Em Duloc, em Duloc
Tudo aqui é perfeição moradora três: e agora, o homem que fez tudo isso! Um exemplo de coragem! Lorde Farquaad!
Lorde Farquaad: ah! São vocês! Muito tempo atrás A coisa era feia Eram tantos monstros
Mandei lá pra cadeia
Eu disse nananinanão Um defeito só
E eu já não aceito
 
Eu não quebro a regra
Só passa o que é perfeito
E então... E então Tudo é tão perfeito em Duloc
(É bom demais) Fui eu que dei um jeito em Duloc (Não tem mais, mais)
Criei o meu modelo É tudo planejado Nyemair
Duloc agora é o selo
Tudo é mais que o dobro em Duloc (É mais e mais) Em Duloc
Mulheres são fatais Os homens faceiros
Pois no meu governo
A moda vem primeiro
Ei nananinanão O meu castelo é bem
Mais alto que as torrinhas
Cartão postal com fotos
A venda em mil
 
lojinhas
E então... E então E então... E então Então
Não há mais mendigos em Duloc
(Mandou matar) São lindos os umbigos de Duloc (É pra mostrar) Não há poeira e mofo
E o povo diz: Que fofo!
Tudo é bom demais Só em Duloc
E é por minha causa
Que Duloc continua sempre assim
Só desenvolvendo Crescendo, crescendo
E ele cresce, e cresce, e cresce E já cresceu
É preciso acertar (A gente é assim Perfeito e feliz Um passo que errar
Ta frito de vez) Eu não deixo passar
 
(Foi ele quem deu as aulas de jazz Flamenco e ballet, só passa com 10) tudo é planejado
 
Niemeyer ta chocado!
Tudo aqui é mais Tudo é mais que mais
 
Tudo é bom demais Só em Duloc
Só em Duloc Mais, mais, mais, mais, mais!
 
Lorde Farquaad: moradores! Agora a hora mais esperada! O sorteio para que o ganhador trague a princesa Fiona para mim e...
shrek: o Fatima Bernardes! Vamos acabar com esse encontro! Moradores/lorde Farquaad: ogro!
(todos saem e deixam lorde Farquaad sozinho) Lorde Farquaad: não me deixem!
Shrek: você é tal Lorde Farquaad?
Lorde Farquaad: talvez! Meu nome te põe medo?
Shrek: não, mas seu chapeuzinho sim! (ele fala num tom irônico) agora me dê meu pântano de novo! Não aguento mais aquelas criaturas!
Lorde Farquaad: desculpe, mas seu pântano pertence à província de Duloc! você é uma espécie de Hulk feio, e maravilhosamente descartável, povo de Duloc! Nós temos um vencedor! Ogro! Tudo oque você tem que fazer é uma tarefa, e eu te darei a escritura do pântano!
Shrek: e qual é a tarefa?
Lorde Farquaad: a senhora Duloc poderá te levar até a porta, e ela te explicam!
(saem)
Lorde Farquaad: povo de Duloc! Temos uma rainha!
Tudo é bom de mais (tudo é bom de mais) Tudo é bom demais Só em Duloc
(só em Duloc)
E nada vai me abalar
CENA V
Burro: eu não entendo, porque você não o assustou e forçou-o a te dar a escritura?
Shrek: porque ser ogro não é só isso, eles não ficam assustando os outros o tempo todo! Veja! Ogros são como cebolas!
 
Burro: eles fedem? Shrek: não
Burro: eles te fazem chorar? Shrek: não!
Burro: quando você os deixa no sol, ele fica marrom e solta àqueles pelinhos?
Shrek: não! Camadas! Ogros e cebolas têm camadas!
Burro: camadas? Mas nem todo mundo gosta de cebolas! Pavê! Pavê tem camadas! E todo mundo gosta de pavê! Você já ouviu alguém dizer: “ei cara, vamos comer pavê?” e o outro responder: “de jeito nenhum, odeio pavê”? Sabe oque é melhor que pavê?
Shrek: eu não ligo!
Burro: acho que pavê é a comida mais gostosa de todo o planeta! Shrek: hoje deve ser o dia mais longo de todos!
(eles saem) (cenário dragão)
Burro: Shrek! Acho que aqui não é tão seguro! Shrek: que se dane segurança quero o meu pântano! Burro: acho que vou ficar aqui te esperando!
Shrek: que fique! Olhe (ele pega o capacete) isso vai ser útil! (Shrek sai burro fica morrendo de medo)
Burro: ai, meu deus, por favor, me salva! (aparece um dragão)
 
Mais uma vez chegou alguém Pra me acordar com nhenhenhém Quero dormir e um chato vem
Vem me acordar A persiana eu já baixei
Porta e portão já tranquei
Mas você não sabe a lei
 
E vem me acordar E acordar e acordar
Pois vai ficar, e vai ficar
Cê vai ficar Pra sempre Pra sempre
Eu não nasci pra ser a babá da bonitinha
Ninguém ta nem ai
 
Ninguém quer tirar casquinha
Não sou linda, nem princesa
Quem me olha nunca, nunca Nunca leva
***
Eu gosto até demais
De um mulherão
grandão enquanto tu,
 
Tu ta blefando Se quer amor,
chega de ira, vem com o papai, que as mina pira!
***
Não sou linda, nem
CENA VI
(torre de Fiona)
 
princesa
Mas eu tenho certeza
Quem me olha nunca, nunca Nunca leva
Pois vai ficar, e vai
 
ficar, Cê vai ficar Pra sempre
Eu vou te amar aqui pra sempre Eu e você aqui pra sempre mais
Pra sempre
 
Shrek (in off): tem alguém aí?
(Fiona percebe o Shrek, se arruma, pega um buque de flores e deita na cama)
Shrek (já na torre): ah! Ótimo! Mais uma princesa com narcolepsia! Acorda!
(Fiona acorda)
Shrek: agora vamos logo! Fiona: espera!
Shrek: não!
Fiona: hoje é o dia mais feliz da minha vida e... Shrek: vem logo mulher!
(Shrek pega Fiona no colo e leva ela para baixo) (sai torre, cenário dragão).
Shrek: vem burro!
Burro: não precisa falar duas vezes! tenho que ir! Dragona: não!
(dragona vai atrás dos três, mas não consegue alcança-los).
CENA VII
Shrek: ainda bem que conseguimos sair! Fiona: quero ver o rosto do meu príncipe! (burro começa a rir descontroladamente)
Fiona: que foi! Quero ver o rosto do príncipe em que irei dar o beijo do amor verdadeiro!
Burro: Shrek? Amor verdadeiro?
 
(eles riem)
Fiona: tire o elmo!
(Shrek tira o elmo, a princesa toma um susto). Fiona: você é um ogro?
Burro: vai nessa que é o que tem pra hoje. Olha! Ele é feio, mas é simpático, olha aqui o sorriso, sorri pra moça (Shrek sorri) deus que me livre! Sorri não, sorri não!
Shrek: não se preocupe! “Seu príncipe encantado” não sou eu! É lorde Farquaad! Vamos trazê-la a Duloc! Assim, recuperarei meu pântano!
Fiona: ah! Tomei um susto agora!
Burro: mas deixe pra lá! Vamos curtir os pássaros e o por do sol! Fiona: por do sol? Precisamos acampar!
Shrek: não, a gente pode chegar até... Fiona: preciso de um lugar para acampar!
(eles se assustam com o tom de voz da princesa) Shrek: tem uma caverna aqui perto!
Burro: isso não é lugar de princesa!
Fiona: não tem problema! Agora boa noite!
Burro: princesa, eu posso contar umas historias pra você dormir! Fiona: eu disse: BOA NOITE!
Burro: gostei dela! Agressiva mas gostei (blackout)
Fiona (in off): de dia de um jeito, de noite de outro, essa deve ser a norma, até encontrar o primeiro beijo do amor verdadeiro e, em seguida, tomar a forma verdadeira.
CENA VIII
Burro: Shrek, eu estive pensando, nós escapamos de um dragão, salvamos uma princesa de uma torre, e agora estamos num acampamento a caminho de um castelo de um anão! Então...
Poderíamos ser qualquer coisa! Eu queria ser um daqueles cavalos, os garanhões do hipismo, claro que teria que colocar um mega-hair e tals... Oque você quer ser?
Shrek: não quero ser ninguém!
 
Burro: que foi cara, porque você é assim, parece que você tá de mal com o mundo!
Shrek: esse é o problema, não estou de mal com o mundo, é o mundo que está de mal comigo, você viu como a princesa reagiu, é sempre assim, quando olham pra mim, saem correndo ou tentam me atacar! Elas fogem de mim mesmo antes de me conhecer! É por isso que eu prefiro ficar sozinho!
Burro: mas quer saber, quando eu te vi pela primeira vez, não te achei tão horroroso e nojento quanto você falou, eu te achei feinho...
(os dois dão uma risada leve)
Burro: então me diz cara, quem você queria ser?
 
Talvez eu fosse um dia Herói com capa e espada Armadura armada Brilhando os meus metais
Talvez, quem sabe, um viking Daqueles que há nos livros Matando sem motivos Imensos animais
E navegar e descobrir Um mundo mais distante
Vencer o mar e consultar o céu Um cavaleiro errante
Um outro eu Um outro eu Poeta eu seria
Poeta de outra historia Onde toda glória Consiste em não mentir E para os céus diria Pros astros espalharem Na lua desenharem
E o mundo descobrir
O que eu pensei, o que eu senti Meu verso, meu encanto Buscar em mim, meu coração Dizer com poesia e espanto Que dói viver
Que dói viver
o ogro sempre está
a sombra a se esconder
 
Por sob o ogro tem Tanta sombra e solidão
Então ai se eu pudesse E se um herói eu fosse
Quanta historia doce teria pra contar
Então ai se eu pudesse Na torre eu subisse Donzela que eu salvasse Nos braços carregar
E os guardas vem pra me atacar
Destruirei com calma
Nos braços meus, quando ela vem
Está feliz e salva
Pois somos nós e só nós dois Estrelas no caminho
Um beijo só e o meu final feliz O herói não mais sozinho
No fim não mais sozinho Vencendo no fim
Um mundo lindo e feliz Mas não pra mim
o ogro sempre está
a sombra a se esconder Por sob o ogro tem Tanta sombra e solidão Solidão.
 
Mas eu sei (então ai se eu pudesse)
que ele vem (se um herói eu fosse)
pois os livros nunca mentem (Quanta historia doce teria pra contar)
pois os livros nunca mentem (Então ai se eu pudesse)
as historias vão modernizar (Na
Ato dois
CENA I
 
torre eu subisse)
são irreais (donzela que eu salvasse)
Nos braços carregar (ah) Final feliz existe
E assim há de ser!
 
Fiona: Ah! Que dia lindo! Estou linda! e de manha eu sou mais eu! Olhe! (ela fala com um pássaro)
Pássaro: cheep cheep cheep cheep, cheep cheep cheep chepp!! Fiona: mais eu!
Pássaro: cheep cheep cheep cheep, cheep cheep cheep chepp!! Fiona: mais eu
Pássaro: cheep cheep cheep cheep, cheep cheep cheep chepp!! Fiona: mais eu!
(o passaro explode) Fiona: ai Socorro!
Burro: coitado! Como você fez isso? Shrek: café!
Burro: ah!
Fiona: não! É que estou animada para encontrar meu príncipe encantado!
Shrek: é! Fique animada, há poucos homens da estatura de farquaad (burro e Shrek riem)
Burro: é, pois você ANAO consegue fazer lorde Farquaad fechar a matraca!
(burro e Shrek riem)
 
Shrek: por isso é melhor você abaixar suas expectativas! (o burro cai de tanto rir)
Fiona: do que vocês estão rindo! Hoje eu vou casar! Vou ter uma festa enorme e minha lua de mel no Havaí!
Shrek: claro! Ele é um surfista de micro-ondas! (burro e Shrek riem)
Fiona: oque foi?
Shrek: aqui princesa! Seu príncipe não é tão grandioso assim! (burro e Shrek riem)
Fiona: eu esperei 20 anos da minha vida por um cavalheiro, no dia que eu consegui vocês não irão estragar tudo! Minha vida foi péssima!
Shrek: péssima? Naquela torre aconchegante? Eu fui abandonado no meio do nada! Ah claro! Tinha que economizar no shampoo?
Fiona: não está tentando comparar sua vidinha com a minha não é?
Shrek: não! Só quero dizer que você não é a “miss universo” das crianças traumatizadas!
 
Lá na torre eu só tinha
Só meu tédio, coisa minha Dava voltas sempre em torno E na volta...
Todo dia o mesmo pão
O mesmo gosto e a sensação
Todo dia a mesma historia
Pra mim nenhuma gloria
Da janela a mesma vista
Mundo feio lá na pista
E eu no quarto
De onde eu nunca parto
 
20 anos e eu sentada
Eu sempre dedicada
Nas paredes fui riscando
Cada dia fui somando
Eu sofri mais que você
Sofri mais que você
Yeah, yeah, yeaaaah
Sofri mais que você
Sofri mais que você
***
Tudo bem, que historia triste Ó princesa, tu
 
sofreste Reconheço teu malogro
Mas eu tive o dobro Multidões me perseguindo
Com as tochas me queimando
Acha pouco?
Eu quase fui pro fogo!
E eu fugi igual ao um rato Montanha, morro ou mato
Quem é ogro sabe o gosto
E no caso, é só desgosto
Eu sofri mais que você
 
Sofri mais que você
Yeah, yeah, yeah, yeah
Sofri mais que você
Sofri mais que você
*
Todo dia o mesmo pão
O mesmo gosto e a sensação (Ninguém chegou) Todo dia a mesma historia
Pra mim nenhuma gloria
(Nenhum alô
Da janela a mesma vista
(Nenhum sinal)
 
Mundo feio lá na pista
E eu no quarto
De onde eu nunca parto
(Sem Páscoa e Natal)
20 anos e eu sentada
Eu sempre dedicada
Nas paredes fui riscando (Ninguém chegou, papai mamãe me deram tchau) Cada dia fui somando
(Tchau filhinho e nunca mais, tchau) 20 anos!
Papai, mamãe me
 
deram tchau Eu
Eu
Sofri mais que você
Sofri mais que você
Yeah, yeah, yeah, yeah
Sofri mais que você
Sofri mais que você
Yeah, yeah, yeah, yeah
Sofri mais que você
Sofri mais que você
Yeah, yeah, yeah, yeah
 

(começa uma sucessão de gazes) Burro: tá de sacanagem!
Fiona: vamos logo gente! (eles saem)
CENA II
Lorde Farquaad: telonius! Acho que preciso de fazer uma chapinha, e você?
Guarda: ah não sei!
Lorde Farquaad: é meu casamento seu asno! Claro que sim! Guarda: mas então porque você perguntou?
Lorde Farquaad: quieto! É meu casamente! Não estrague isso!
Guarda 2: falando em casamento... Não está pensando em convidar seu pai para a cerimonia...
Lorde Farquaad: oque?! Guarda 2: mas porque senhor?
 
Lorde Farquaad: ele me largou no meio do mato quando eu era bem pequenininho!
 
Meu pai caçava pedras Diamantes e rubis Nunca estava em casa
À vida assim o quis Homem tão calado Dizia nem hello Dizia apenas ‘hi ho’ Pra casa agora eu vou
Era o zangado! Mamãe era princesa
Sem reino ou ambição
Só papai contava Amava seu anão Não conheci mamãe, não
Mas eu sei que ela era a tal
Que por amor foi longe
Casou com um anormal
Na caminha dele Mamãe cabia mal Ele então fez outra Maior e fatal
Cama tão alta
 
Tanto colchão Mamãe cai de cima E explode no chão Zangado viúvo
Eu e o velho pai Que história sem paixão
Eu lembro ainda dele
Com seu velho cuecão
Me largou no mundo
Só me abandonou Hoje tem sua turma
Seis colegas encontrou
***
A minha noiva é linda
E o seu olhar conquista Na festa que daremos
Anão não ta na lista
E vai ter orquestra Vão tocar canções Cujas letras vão dizer
 
Que não se aceita anões
*** Carruagens (Carruagens) 10 cavalos (10 cavalos) Delirantes (Delirantes) Garanhões (Garanhões)
Tem balada (Tem balada)
Gente linda (Gente linda)
E um DJ de sunga e peitões
Farei meu casamento
E rainha eu terei E depois da festa Eu te guilhotinarei Eu te pego papai Sim, eu vou me vingar
Pois eu cresci, você ficou
Papai eu juro Eu te esconjuro Pra casa eu vou Hi Ho
 
Lorde Farquaad: agora... vamos começar esse casamento
CENA III
Burro: olha! bem ali!
(Fiona anda até a ponta do palco calmamente) Burro: é Duloc!
Fiona: oh! Não sabia que estávamos tão perto! Shrek: é nem eu!
 
Burro: parabéns princesa, seu futuro te aguarda! Fiona: ah sim!
Shrek: bem... eu queria fazer uns mortmellows Fiona: oque é isso?
Shrek: é tipo marshmellows, só que em vez de marshmellows e chocolate, é tripas de esquilo e estrume. Praticamente derretem na boca!
(o burro sente uma ânsia de vomito) Burro: acho que preciso sentar!
Shrek: não! Temos que levar a princesa pra Duloc!
Fiona: não! É que quando eu terei oportunidade de provar isso? Burro: coma uma vez e você nunca mais terá
Shrek: calado!
Fiona: então acho que Duloc pode esperar mais um pouco! Shrek: ah sim! Eu vou prepara-los!
Fiona: e eu vou dar uma volta!
(eles se esbarram, e ficam sem graça se olhando) Shrek: ah eu já vou indo!
(Shrek e Fiona saem em direções diferentes)
 
Eu sinto alguma coisa no ar
Eu sou burro, mas eu posso enxergar Tem algo a mais, to sentindo um climão
E tem suor molhando a mão. Hummmm, hummmhummmhu m
Ela joga o cabelão sem querer
E os feromônios já vão chover
O casal ta atolado em paixão
 
Só precisam do meu empurrão (Ai, vocês não acreditam que o amor o cego?
Direto da minha imaginação...
Ratas cegas!) Eu não vi
Eu não vi Mas posso enxergar Você precisa acender
A chapa tem que esquentar
Se a gente não tentar a coisa não
 
sai
Pega na mão Tasca um beijo talvez
Pois ela ta querendo, então vai
Vai nessa (nessa) Nessa (nessa) Nessa (nessa, yeah)
Vai nessa pra pegar
(Vai nessa pra pegar)
Vai nessa pra pegar
(Vai nessa pra
 
pegar)
Vai nessa pra pegar
(Vai nessa pra pegar)
Yeah
burro: Shrek, olha aqui cara, abre o peito, deixa ela vir pô! Vai nessa!
Shrek: ah Fiona... Você... Vai comer tudo isso?
Burro: ah não! Vai nessa pra
 
pegar
Não deixa a fera escapar
Vai nessa Abre o peito e
deixa que vem
A cena ta perfeita, rapaz
Pôr do sol tem Tem a gata também
Então vai nessa (nessa)
Nessa (nessa) Come on, come on,
 
come on, come on baby
Vai nessa pra pegar, come on (Vai nessa pra pegar, baby) Vai nessa pra pegar, come on (Vai nessa pra pegar, baby) Yeah, yeah, yeaaaah.
 
Burro: come on, come on baby! Come on, com on baby! Shrek: burro... Oque você está fazendo
Burro: oque! Ha! Nada! É que eu estava viajando nesse lindo por do sol!
Fiona: por do sol? Não posso esperar! Vou dormir numa caverna aqui perto!
(Fiona sai)
Shrek: ah... Burro... Tenho uma coisa a resolver... Burro: oque?
Shrek: nada! (Shrek sai)
Burro: nossa até parece reprise da seção da tarde de esqueceram de mim!
(começa um barulho de floresta assombrada) Burro: ah! Não aguento ficar aqui! Princesa! (ele sai)
CENA IV
(blackout. Aparece à caverna).
Burro: princesa! Princesa! Ah! Aqui a caverna! (ele abre a porta) ah! (ele vê a princesa transformada)
(os dois quando se encontram dão um grito)
 
Burro: quem é você? Cadê a princesa? Fiona: burro, eu estou aqui?
Burro: você comeu a princesa?
Fiona: não! Sou eu! De dia de um jeito, de noite de outro, essa deve ser a norma, até encontrar o primeiro beijo do amor verdadeiro e, em seguida, tomar a forma verdadeira.
Burro: ah! Que coisa linda, tá trabalhando com poesia?
Fiona: não! É uma maldição que tenho dês de menina! Ah estou horrível
Burro:não! Você té linda! Não consigo mentir, você tá horrível miga! (Fiona começa a chorar)
Burro: não se preocupe você é feia só de noite, Shrek é feio o dia inteiro! Quero saber mais sobre isso, me explique.
(Shrek aparece do lado do palco com uma flor na mão)
Shrek: princesa... Eu... Ah! Não dá! Eu sou um ogro e ela... É tão linda! Como posso falar?
(desfoco nele e foco na caverna)
Burro: ah! Agora entendi tudo! Vou falar com o Shrek! Fiona: não! Não quero que ele saiba que eu sou...
(foco no Shrek e a caverna juntos, Shrek começa a ouvir a conversa)
Fiona: bem olhe... Um monstro horripilante! Jamais desejaria isso pra ninguém! Um ogro nojento!
(Shrek fica magoado, mas depois com raiva).
Shrek: ah! Quando chegar naquela porcaria de pântano! Irei construir a maior muralha de todas! Para ninguém chegar perto!
(Shrek sai foco na caverna)
Burro: mas como boa amiga, acho que você teria que contar para ele! Fiona: tem razão! Amanha de manha irei contar!
CENA V
(já de manhã) Fiona: bom dia! Burro: bom dia!
(Shrek chega e rosna)
 
Burro: que foi? Agora virou lobisomem?
Fiona: ah! Shrek... Preciso conversar com você!
Shrek: conversar oque? Pra depois me trair? Eu ouvi a sua conversinha com o burro ontem... Você disse que sou um monstro! A única conversa será um adeus!
Fiona: espere! Eu acho que você ouviu errado!
Shrek: eu ouvi em alto e bom som! Não a nada a conversar! Fiona: espere... Mas...
(lorde Farquaad chega)
Lorde Farquaad: olá... Minha bela noiva!
Fiona: espera... Ele é o meu noivo (ela fala pro burro) Burro: é o que tem pra hoje, pegar ou largar meu bem! Fiona: não tem problema! Tchau (fala pra Shrek)
Lorde Farquaad: vamos! Precisamos desse casamento! Fiona: estava só me despedindo!
Lorde Farquaad: não precisa gastar suas boas maneiras com um monstro... Não é como se isso tiver sentimentos
Fiona: é! E não tem! Vamos casar antes do por do sol! Hoje! Shrek: espere! Lembre-se do trato!
Lorde Farquaad: tome aqui seu contrato nojento! (ele joga o contrato)
Lorde Farquaad: vamos! (eles saem)
Burro: Shrek! Acho que você entendeu errado! A Fiona...
Shrek: chega burro! A minha missão já está completa, quando chegar ao meu pântano... Vou construir a maior muralha de todos os tempos em volta de minha casa!
Burro: espera!
Shrek: não! (ele da um rugido)
Burro: às vezes você me assusta Shrek... Pensei que nós fossemos amigos!
Shrek: nós nunca fomos amigos! Nunca fomos e nunca seremos! (Shrek sai, blackout)
 
CENA VI
(as criaturas de contos de fadas entram)
Pinóquio: que saco! Quando você pensa que você está no fundo do poço, você é despejado de um pântano!
Fada madrinha: e eu que pensei que aquele ogro ia ajudar a gente!
Peter pan: ah! Ele pode! É só a gente bater palminha bem forte assim!
Pinóquio: ah! Vê se cresce!
Peter pan: eu não quero crescer!
Pinóquio: olha aqui! Gosto da sua vibe forever! Mas isso só funcionaria se você fosse um marmanjo de 34 anos com barba mal feita!
Todos: Pinóquio!
Pinóquio: ué! Estou mentindo? Olha pro meu nariz! Lobo mau: pra onde que vamos agora?
Fada madrinha: uns vinte quilômetros pro norte! Porcas: parece que tem um lixão reservado pra nós!
Biscoito: um lixão? Até quando vamos ficar se rebaixando assim gente?
Bruxa: acho que tá na hora de se unir e enfrentar aquele anão! Porca 1: isso! Acho que o biscoito tem razão!
Porca 2: tá na hora de levantar o nosso traseiro e partir pra ação! Porca 3: é isso ai!
Pinóquio: não gente! Vamos esperar! Não é isso que as criaturas de contos de fadas fazem! O meu grilo sempre me disse...
Bruxa: ah! Estou cansada desse grilo, graças a deus ele se espatifou no vidro do caminhão!
Pinóquio: é só agente saber esperar! (todos começam a discutir)
Pinóquio: nada disso teria acontecido se eu fosse um menino de verdade!
(todos ficam quietos)
Pinóquio: porque eu não sou um menino de verdade?
 
Biscoito: escuta aqui o boneco!
 
A gente sempre sonha
Em ser o que não é
A gente quer não ser
E ninguém quer ser
quem é
Agora chega disso! Agora vamos lá!
Digo, sou diferente E lá vou eu
Eu sou assim Eu sou... Assim
Deixa entrar o sol Deixa o sol entrar Bota pra quebrar Bota pra quebrar A bandeira vai Tremulando
Vai, ela vai... Vai! Que droga é ser boneco (Bonequinho ai ai) É tanta amarração (Ta preso)
Mas você nasceu assim
Não foi escolha não!
Deixa entrar o sol Deixa o sol entrar Bota pra quebrar Bota pra quebrar A bandeira vai
Pinóquio: para Duloc! (eles saem)
CENA VII
 
Tremulando Vai!
Sou porco e tenho orgulho (Porcalhão, porcalhão)
Eu sou peludo sim (lobão, lobão)
E eu vou dizer pro mundo
Que eu sou isso tudo sim
(Isso tudo sim) Passei pela prisão (Yeah, yeah)
Sou muito lindo sim
(Oh Oh)
Eu vou sair do armário
(A ideia é essa sim)
Deixa entrar o sol Deixa o sol entrar Bota pra quebrar Bota pra quebrar A bandeira vai Pinóquio: é agora tudo faz sentido, nos podemos ser aberrações, mas somos aberrações
contentes, garras e varinhas de
 
condão! E juntos, enfrentaremos lorde Farquaad!
Bota pra quebrar A bandeira vai Somos muitos Temos força
Quem será melhor que nós?
Tudo que há em nós tem brilho
À magia está em nós
Nós somos fortes (Nós somos fortes)

Nós somos fortes Somos nós!
Deixa entrar o sol Deixa o sol entrar Bota pra quebrar Bota pra quebrar A bandeira vai Yeaaaah Tremulando
Vai... Vai Vai! Vai! Vai!
Eu sou de madeira Não to de bobeira E você vai ter que me engolir
Vai!
 

Shrek: finalmente! Chegando ao meu pântano!
 
(ele se depara com o burro)
Shrek: oque você está fazendo aqui? Sai! Sai!
Burro: eu ajudei a resgatar a princesa então metade desse pântano é meu!
(eles começam a discutir)
Shrek: saia! Esse pântano é MEU!
Burro: não vem de novo com essa historia de meu, meu, meu! Mas agora você me escute, Shrek, que eu vou falar! Você foi cruel comigo, você me insultou! Você nunca valoriza nada oque eu faço! Tá sempre me ignorando ou mandando embora! Você é tão cheio de camadas seu cebolão, que tem medo de seus próprios sentimentos!
Shrek: então se eu sou tudo isso... Porque você voltou?
Burro: porque é isso que os amigos fazem... Eles perdoam aos outros! Shrek: EU NÃO SOU SEU AMIGO!
Burro: olha Shrek, você até pode não ser meu amigo, mas eu sou! Você nos tratou mal! A Fiona não estava falando de você! Ela estava falando de... (ele lembra do trato feito com a Fiona) de outra pessoa!
Shrek: então... Ela não estava falando de mim?
Burro: nem um pouco! Sei que você parece um horrível cebolão, mas por dentro você é uma ótima pessoa, e usa essa mascara pra esconder seus sentimentos! Mas a Fiona te ama! E sei que com você não é diferente!
Shrek: desculpa se te fiz passar por tudo isso... Meu amigo! Burro: hum (ele fica com cara de serio) serio? (ele abraça Shrek) Shrek: espera... ah deixa! Vamos salvar esse casamento! (blackout)
CENA VIII
(igreja, lorde Farquaad está com Fiona no altar). Frei: vaamoos coomeeçaar essaa cerimooniaaa! Fiona: já entendemos!
Frei: e entãooo...
Fiona: vamos pular pra parte do aceito!
Frei: loordee faarquaaad, voocee aceeitaa seguir maatriimoonioo com...
 
Lorde Farquaad: aceito! (o frei fica bravo)
Frei: fioonaa, voocee aceeitaa... Fiona: aceito!
Frei: eu já imaginavaa
Lorde Farquaad: vamos seguir com a cerimônia!
Shrek: parem com o casamento! fiona eu preciso falar com você!
Lorde Farquaad: como pode atrapalhar... Seu monstro com cara de meleca, no meu casamento! Guardas mate...!
Fiona: o que você está fazendo aqui? No meu casamento!
Shrek: mas você não pode casar com ele! Ele quer casar com você só pra virar rei!
Lorde Farquaad: não!
Shrek: princesa! Por favor, me ouça!
Lorde Farquaad: Pode se retirar... Ou terei que pedir aos guardas! Fiona: não! Deixa-o continuar! Pode nos arrancar boas risadas!
Lorde Farquaad: você é má!
Um príncipe eu não sou igual você sonhava
O meu castelo não existe, o meu jeitão é todo tosco. Ao lado da princesa, olha só que imagem triste!

Lorde Farquaad: mico! Ele tá achando que a princesa... Tá adorando porque é uma voz muito bonitinha, pode continuar!

Mas o mundo é grande e feliz Agora eu sei... Agora eu vi
Meu muro caiu, e oque virá depois! Será pra dois!
Lorde Farquaad: podemos continuar princesa! (as criaturas de contos de fadas estão na rampa)
Todos (como se falacem um grito de guerra): lorde Farquaad! Lorde Farquaad: preciso de um calmante! Saiam daqui!
 
Pinóquio: olha aqui Farquaad! Temos muito a falar com você! Lorde Farquaad: mas no meu casamento? Que é isso gente? Fada madrinha: isso vai acabar hoje!
Lorde Farquaad: mas... Eu tenho a força! (ele levanta a espada) Porcas: nós não temos medo de você!
Lorde Farquaad: mas justo no meu casamento! Pinóquio: prepare-se pra enfrentar sua realidade! (zangado entra)
Zangado: Hi-ho! Hi-ho!
Lorde Farquaad: ah! Papai não! Shrek: oque é isso, casos de família?
Lorde Farquaad: seu cruel! Você me abandonou quando eu era um bebê! Tirem-no daqui!
Zangado: eu não te abandonei! Você tinha vinte e oito anos e morava no meu porão!
(todos começam a rir) Bruxa: perdedor!
(todos começam a zombar dele)
Lorde Farquaad: não! Eu sou o rei! Todo grande, e poderoso! Porca 3: quem é grande e poderoso é o mágico de oz!
Fiona (ogra): parem tudo!
Shrek: Fiona! Isso explica muita coisa!
Lorde Farquaad: oque é isso? Todo mundo virou grinch? Prendam-na! e mandarei você pra guilhotina. Eu sou o rei!
Shrek: não muito cedo!
(aparece à dragona com o burro, ela bufa. Blackout. Farquaad morre). Burro: Farquaad morreu! FIM DA HISTÓRIA!
Pinóquio: não! Ainda não! (todos olham para shrek e fiona)
Fiona: então! Pelo jeito, você é meu amor verdadeiro! Shrek: eu sou! E sempre serei!
(eles se beijam)
 
(começa a piscar as luzes)
Fiona: de dia de um jeito, de noite de outro, essa deve ser a norma, até encontrar o primeiro beijo do amor verdadeiro e, em seguida, tomar a forma verdadeira.
(para de piscar, Fiona fica confusa)
Fiona: eu não entendo! Era pra eu estar bonita! Shrek: você está sempre bonita!
Fiona: jura?
Shrek: para que jurar? Você é a minha princesa!
 
Fiona:
Eu sempre acreditei, nos livros que eu li. Mas não é a minha história
E você me amou, assim como eu sou, E não há maior vitória
Estou doce, boazinha.
Sou princesa e gordinha
Sou confusa, divertida e sou assim.
Corajosa, sou atriz , com você eu sou feliz.
É a minha história Shrek:
Eu faço você rir, mesmo eu sendo assim
Um ogro mais malcriado
Os dois:
Nós, esse estranho par, junção de dois doidões.
Com amor e os corações Somos ogros, orelhudos.
 
Nós somos burros e peludos.
Temos tanta história nova pra contar Escrevemos e contamos
Boca-a-boca e escutamos
É a nossa história Shrek: E é assim que o pequeno ogro foi Viver no pântano com uma linda princesa
Burro: E seu melhor amigo,
Shrek: e seu melhor amigo.
Biscoito: E um biscoito Pinóquio: e um
boneco muito bonito Peter pan: E um crianção
Fada madrinha: e uma fada madrinha Bruxa: e uma bruxa Lobo mau: E um lobo de vestido!
Porcas: e as três porquinhas!
Fada madrinha: Ser diferente Pinóquio:
Ser diferente
 
Todos:
Ser diferente Fada madrinha: Ser diferente Pinóquio:
Ser diferente Todos:
Ser diferente Todos:
Somos Nós Somos bruxos, encantados.
Esquisitos e engraçados.
Temos tanta história nova sem iguais
Os fantoches, os fedelhos Amorecos e fedelhos
Somos doidos, mas muito especiais Diferentes, mas unidos
Somos nós e muito mais
É a nossa história É a nossa história A nossa historia!
Biscoito: respeitem à todos, sem desigualdade!
É o fim!
 
(blackout)
(a luz acende, Pinóquio está com um teclado)


Eu achava que o amor era ilusão (tchup tchup) Bom pra todo mundo, menos eu (tchup tchup) Só pra mim não tinha (tchurup tchurup )
Não sobrou pra mim (tchurup tchurup ) Essa flor não da no meu jardim
Mas ela apareceu (ela apareceu) E agora acredito (ela apareceu) Logo eu (mas logo eu)
Eu creio no amor (no amor) É o amor (uh ah)
Eu acredito e é bonito acreditar
Eu que só pensava em dar e receber (tchup tchup) Quanto mais eu dava, menos eu ganhei (tchup tchup) Quanto mais tentei, (tchurup tchurup )
muito mais sofri (tchurup tchurup )
Tudo que eu sonhei eu não vivi (não vivi, não vivi) Burro: e aí gente! Posso falar?
Mas ela apareceu (ela apareceu) E agora acredito (ela apareceu) Logo eu (mas logo eu)
Eu creio no amor (no amor) É o amor, é o amor, é o amor E agora acredito
No amor, no amor, no amor Amor, amor, amor, amor
E agora acredito!
(o elenco agradece, fecha as cortinas)

Fim

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)