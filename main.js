/*1
Výplňořez

Napište funkci fillcut, která jako svůj první parametr str očekává řetězec a jako
 druhý parametr len kladné celé číslo. Úkolem funkce je oříznout nebo prodloužit
  zadaný řetězec tak, aby měl délku přesně len.
Pokud je vstupní řetězec delší než len, tak funkce odřízne jeho konec a vrátí 
výsledek.
Pokud je vstupní řetězec kratší než len, tak jej doplní od začátku znakem tečky a
 vrátí výsledek.
Pokud je vstupní řetězec dlouhý přesně len, funkce jej vrátí beze změny.
Příklad použití:

> fillcut('petr', 8)
'....petr'
> fillcut('petr', 3)
'pet'
> fillcut('petr', 4)
'petr'
*/
const fillcut = (str,len)=>{
    if (str.length>len){
        return str.slice(0,len)
    }else if (str.length<len){
        return str.padStart(len,".")
    }else{
        return str;
    }
}
/*
2
Přestupný rok jako funkce

Napište funkci isLeapYear, která jako svůj parametr obdrží celé číslo představující
 rok. Funkce vrátí true, pokud je zadaný rok přestupný. V opačném případě vrátí false.
*/
const isLeapYear = (rok)=>{
    if((rok%4===0) &(rok%100>0)){
        return true
    }else{
        return false
    }
}