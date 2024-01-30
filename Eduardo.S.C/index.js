//#usar o maximo possivel arquvios externos por  ser menos confuso e mais raído pra baixar e subir atulaizações
//reucie enu script do TCC aqui
//este arrqquivo roda no Frontend
//pega os campos e botês nuum script

"use client"
//var camposebotoes = document.getElementsByTagName('input')

const licenca_LGPD="./Eduardo.S.C/LicençaLGPD.txt"
//gera caixinha da LGPD 
// mostra no conosle a a caixinha da LGPD
//botão e atributos
const button={

valor:"aceitar",

onclick:"LGPD.innerText=''"

}


var menu_LGPD  = (
`<menu id="LGPD">
<iframe src="${licenca_LGPD}">
</iframe>
<input type="button" value=${button.valor} onclick="${button.onclick}">
</menu>`

) ;

console.log(menu_LGPD)


//referencias


/*
a ideia epe  fazer a caixinha doaLGPD com ostermos p contradoinho da LGPD puxda o dum arquvio de bloco de ometas usando um qyuadr html(iframe)

*/
