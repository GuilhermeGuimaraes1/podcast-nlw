 export function convertDurationTimeString(duration: number){
     const hours = Math.floor(duration / 3600 ); //floor aredonda  para abixo
     const minutes = Math.floor((duration % 36000 ) / 60);
     const seconds = duration % 60;

     const timeString = [hours, minutes, seconds] //passa pelos horas, minutos e segundo e coloca o 0 caso nao tenho ex 1 fica 01 ...
     .map(unit => String(unit).padStart(2,'0'))
     .join(':')

     return timeString;
 }