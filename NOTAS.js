
// Calculo de media a partir de 3 notas.

var media, n1, n2, n3 ;

n1= prompt ("Digite a primeira nota do aluno: ") ;
n1= eval (n1) ;

n2= prompt ("Digite a segunda nota do aluno: ") ;
n2= eval (n2) ; 

n3= prompt ("Digite a terceira nota do aluno: ") ; 
n3= eval (n3) ;

media = (n1 + n2 + n3)/3 ; 

if ( media >= 6 ) 
{
    console.log ("O aluno está aprovado.");

} 
else 
{ 
    if ( media <= 5 ) 
    {
       console.log("O aluno está reprovado.");
    }
    else 
    {
       console.log ("O aluno irá para recuperação.");
    }
}

// Calculo de nota faltante para o aluno passar.

var n1, n2, NotaFaltante;

n1= prompt ("Digite a primeira nota do aluno: ") ;
n1= eval (n1) ;

n2= prompt ("Digite a segunda nota do aluno: ") ;
n2= eval (n2) ; 

NotaFaltante= 21 - (n1 + n2)
    if (NotaFaltante > 10){
        console.log('Mesmo que o aluno tire 10 ele será reprovado.')
    }
return console.log('Para atingir a média 7  o aluno precisa tirar ', NotaFaltante)