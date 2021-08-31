let raceTable = {
    "1-5": "Elf",
    "6-10": "Halfling",
    "11-15": "Dwarf",
    "16-95": "Human",
    96: "Dragonborn",
    97: "Gnome",
    98: "Half-elf",
    99: "Half-orc",
    100: "Tiefling",
}










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


let statRoller = () =>{

let stat = 0
    for (let i = 0; i <= 3; i++) {
        stat += randomIntegerD6
        
    }
}

function getWildEncounter() {
    let value = Math.floor((Math.random()*100)+1);
     for( var range in wildernessEncounters ) {
         var split = range.split("-");
 
         if( value >= parseInt(split[0]) && value <= parseInt(split[1] || split[0]) )
             return wildernessEncounters[range]}}

//const randomNumberTest = () => {

/*let arrayTemp = []
    for (let i = 0; i < 100; i++) {

        
        arrayTemp.push(randomIntegerD20())
        
    }
    return arrayTemp
}*/

const createCharacter = () =>{

    //creating containers first
    let newConatinerNode = document.createElement("div")
    let gender = ""
    let race = generateRace()
    let strength = statRoller()
    let dexterity = statRoller()
    let constitution = statRoller()
    let intelligence = statRoller()
    let wisdom = statRoller()
    let charisma = statRoller()

    


    let generateGender = randomIntegerD4()
    if (generateGeneder > 2) {
        gender = "male"
        
    } else {
        gender = "female"
    }

function generateRace() {
        let value = randomIntegerD100();
         for( var range in raceTable ) {
             var split = range.split("-");
     
             if( value >= parseInt(split[0]) && value <= parseInt(split[1] || split[0]) )
                 return raceTable[range]}}
    



}