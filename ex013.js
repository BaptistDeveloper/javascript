var agora = new Date()
var diaSem = agora.getDay()
/* 
  0 Domingo
  1  Segunda
  2   Terça
  3  Quarta
  4  Quinta
  5  Sexta
  6  Sabado
  */
 diaSem = 1
 switch(diaSem) {
    case 0:
        console.log (`Domingo`)
        break
    default:
        console.log(`[ERRO] Dia invalido!`)
        break
 }  