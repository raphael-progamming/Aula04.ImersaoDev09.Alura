// Preciso criar uma lista com meus jogadores

// Calcular a força de todos os jogadores e somar elas, essa será a força do time.

// Calcular pra ver qual é a força maior, a maior ganha.

let time = ['', '', ''] // Time do jogador
let strenghtTime = 0 // Força do time do jogador 
let maisForte = ['', 0] // O personagem mais forte do time

let viloes = ['', '', ''] // Vilões 
let strenghtViloes = 0 // Força dos vilões do PC

for (let i = 0; i <= 2; i++) {
  // Nome do personagem
  nomePersonagem = prompt(`Nome do ${i+1}° personagem`) // Nome fo personagem
  time[i] = nomePersonagem // Adicionar o personagem na lista do time
  
  // Força do personagem
  força = Math.floor(Math.random() * 10) + 1
  strenghtTime += força
  
  // Calcular personagem mais forte
  if (força > maisForte[1]) {
    maisForte[0] = nomePersonagem
    maisForte[1] = força
  }
}

for (let i = 0; i <= 2; i++) {
  // Sortear nome do vilão 
  random = Math.floor(Math.random() * 8) // Pegar um número aleatório para índice 
  possiveisViloes = ['Navaré Tedesco', 'Odete Roiltman', 'Flora', 'Carminha', 'Maura Prudente Da Costa', 'Diabo', 'Herobrine', 'Bowser'] // Lista de vilões que podem estar no time de vilões do PC
  
  viloes[i] = possiveisViloes[random] // Adicionar o vilão sorteado na lista de vilões 
  possiveisViloes.splice(random, 1) // Excluir o vilão sorteado
  
  // Força do vilão
  strenghtViloes += Math.floor(Math.random() * 10) + 1
}


// Verificação de vitória
if (strenghtTime > strenghtViloes) {
  // Se o time do jogador for mais forte
  alert(`PARABÉNS! Seu time foi mais forte, ganhando com ${strenghtTime} de força, competindo com ${strenghtViloes} de força do time adversário. Seu personagem mais forte foi ${maisForte[0]} com ${maisForte[1]} de força.`)
} else if (strenghtTime < strenghtViloes) {
  // Se os vilões forem mais fortes
  alert(`QUE PENA! Os vilões foram mais fortes e ganharam com ${strenghtViloes} de força, competindo com seu(s) ${strenghtTime} de força`)
} else {
  alert(`EMPATE! Os dois empataram, com seu time tendo ${strenghtTime} e os vilões tendo ${strenghtViloes}`)
}
