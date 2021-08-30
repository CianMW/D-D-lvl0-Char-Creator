









const randomIntegerD100 = () =>{ 

    return Math.floor((Math.random()*100)+1)
}
const randomIntegerD20 = () =>{ 
   return  Math.trunc((Math.random()*20)+1)
}
const randomIntegerD10 = () =>{ 

    return Math.floor((Math.random()*10)+1)
}
const randomIntegerD6 = () =>{ 

    return Math.floor((Math.random()*6)+1)
}
const randomIntegerD4 = () =>{ 

    return Math.floor((Math.random()*4)+1)
}


function getWildEncounter() {
    let value = Math.floor((Math.random()*100)+1);
     for( var range in wildernessEncounters ) {
         var split = range.split("-");
 
         if( value >= parseInt(split[0]) && value <= parseInt(split[1] || split[0]) )
             return wildernessEncounters[range]}}

const randomNumberTest = () => {

let arrayTemp = []
    for (let i = 0; i < 100; i++) {

        
        arrayTemp.push(randomIntegerD20())
        
    }
    return arrayTemp
}

console.log(randomNumberTest())
