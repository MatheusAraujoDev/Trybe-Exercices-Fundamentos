let nota1 = 60;

switch (nota1) {
    case (nota1) >= 80:
      console.log('Parabéns, você foi aprovada(o)!');
      break;

    case (nota1 < 80) && (nota1 >= 60):
      console.log('Você está na nossa lista de espera');
      break;
      
    case (nota1 < 60):
      console.log('Você foi reprovado(a)'); 
      
    default:
        console.log('Não se aplica');  
}



