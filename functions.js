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


let occupationTable = {
        1: " Advocate - book of legal formalities, glasses,quill, ink, 1d4 sheets of paper, stately clothes,",
        2: " Apothecary - book of recipes, healers kit, pint of oil, flask of acid, common clothes",
        3: " Artist - paint brushes, palette, professional paints, funny-looking hat, half finished painting, common clothes",
        4: " Astronomer - spyglass, robe, book of planetary charts, common clothes",
        5: " Atilliator - light crossbow, 1d12 bolts, sinew, common clothes",
        6: " Bailiff - seal of the local noble, accounting book, quill, 1d4 sheets of paper, bottle of ink, stately clothes",
        7: " Baker - rolling pin, sack of flour, 1d4 apples, common clothes",
        8: " Barber - sharp razor, apron, comb, common clothes",
        9: " Basket - Weaver heavy basket, 1d4 pounds of flat reeds, basket making tools, full waterskin, common clothes",
        10: " Beggar - dull knife, ragged clothes with a fake pocket, begging dish",
        11: " Bellmaker - 1d8 sleigh bells, small hammer, 1d4 bell molds, common clothes",
        12: " Blacksmith - smithing hammer, scraps of metal, leather apron, common clothes",
        13: " Bookbinder - bottle of glue, 1d4 well-made books, glasses, common clothes,",
        14: " Bowyer - shortbow, sharp knife, 1d10 arrows, quiver, common clothes",
        15: " Brewer - sturdy pot, sack of malted barley, small keg of beer, common clothes",
        16: " Bricklayer - level, 1d4 bricks, recipe for mortar, trowel, common clothes",
        17: " Butcher - cleaver, blood stained apron, small ration of salted meat, common clothes",
        18: " Carpenter - work mallet, handheld auger, 1d8 nails, common clothes",
        19: " Cartwright - 1d4 wagon wheel spokes, dull knife, notes for your current project, common clothes",
        20: " Catchpole - knife, cloak, warrant for the arrest of a debtor, boots, common clothes",
        21: " Chandler - 1d20 candles, 1d4 bars of soap, 1d10 pounds of wax, small box of matches, common clothes",
        22: " Charcoaler - shovel, 1d4 pounds of charcoal, soot stained clothes",
        23: " Clerk - book of accounts, 1d4 pieces of paper, quill, bottle of ink, stately clothes",
        24: " Cobbler - tack hammer, box of nails, 1d4 pairs of new boots, common clothes",
        25: " Colporteur - 1d20 pamphlets, 1d4 ordinary books, 1d4 religious texts, common clothes",
        26: " Constable - club, chain of authority, official hat, uniform, iron cufflinks with a key",
        27: " Cook - metal pan, warm meal in a basket, chef's knife, white uniform",
        28: " Cooper - stout piece of wood, two empty barrels, barrel shaping tools, common clothes",
        29: " Cowherd - walking stick, 1d8 turnips, 1d4 cows, common clothes",
        30: " Criminal - sharp knife, small stolen item (player's choice), ragged clothes",
        31: " Ditcher - shovel, that day's lunch, common clothes",
        32: " Dyer - 1d4 dyes, 1d4 sheets of brightly colored cloth, well dyed clothes, boots",
        33: " Eggler - 2d20 eggs, 2 chickens that follow you, common clothes, boots",
        34: " Entertainer - well tuned lute, brightly colored clothes, a set of makeup, 3 juggling balls",
        35: " Falconer - well trained falcon, heavy gauntlet, falcon hood, common clothes, boots",
        36: " Famulus - empty book of spells, historical guide to the area, 1d4 sheaves of blank paper, common clothes",
        37: " Farmer - pitchfork, straw hat, small sack of grain, common clothes",
        38: " Farrier - tack hammer, 8 horseshoes, box of nails, common clothes",
        39: " Fisher - pole and line, dried fish meat, small cup of worms, common clothes, waterproof boots",
        40: " Fletcher - sharp knife, shortbow, 2d20 arrows, quiver, common clothes",
        41: " Forester - hatchet, shortbow, 1d4 arrows, compass, muddy boots, common clothes",
        42: " Fortune Teller - tarot deck, small tarot deck guide book, scuffed 'crystal' ball, flowing robes, pointy hat",
        43: " Gambler - 2d20 sp, pair of loaded dice, normal dice, debt of 1d20 gp, common clothes",
        44: " Gardener - spade, 1d4 carrots, 1d6 potatoes, packet of seeds, common clothes",
        45: " Glassworker - steel blowpipe, 1d4 glasses, small bucket of pure sand, common clothes",
        46: " Glover - 1d4 pairs of well stitched gloves, shar knife, needle and thread, 1d6 skins, common clothes",
        47: " Hat Maker - needle and thread, 1d4 fancy hats, 1d6 beaver pelts, mannequin head, common clothes",
        48: " Hayward - loud horn, map of the local area, large belt knife, woolen clothes, boots",
        49: " Herbalist - 1d4 packets of dried herbs, 1d4 packets of seeds, small knife, book on herbs, common clothes",
        50: " Hound Trainer - 1d4 well trained dogs, 1 bag of dog snacks, 2d4 dog food rations, common clothes, boots",
        51: " Innkeeper - axe handle, waterskin filled with wine, apron, common clothes",
        52: " Janitor - staff, list of approved guests, uniform",
        53: " Jeweler - 1d4 jewelry molds, metal tongs, scrap metals, common clothes",
        54: " Linkman - 1d4 torches, knapsack, pint of oil, common clothes",
        55: " Locksmith - thieves’ tools, set of master keys, well made lock and key, common clothes",
        56: " Mason - masonry hammer, level, stone carving tools, symbol to a secret society, common clothes",
        57: " Miller - hand quern, 1d4 sacks of flour, common clothes",
        58: " Mime - white face paint, black performance clothes, fun hat, common clothes",
        59: " Miner - pickaxe, lantern, pint of oil, 50 feet of rope, common clothes",
        60: " Noble - blunt epee, deed to a large farm, 2d10+10 gold pieces, silk clothes, high end boots",
        61: " Ostler - riding crop, brush, small bag of horse feed, common clothes",
        62: " Outfitter - heavy belt knife, backpack, flint and steel, fishing pole, well worn boots, common clothes",
        63: " Page - wooden practice sword, clothes brush, a forgotten message, livery, scuffed boots",
        64: " Pastry Chef - 1d4 pastries, recipe for a 'superior' dough, apron, rolling pin, common clothes",
        65: " Peddler - local area map, sack of 1d10 trinkets and 1d20 baubles, common clothes, comfortable boots",
        66: " Philosopher - tome of logic, sheaf of notes, quill, ink bottle, common clothes with ink stained sleeves",
        67: " Physician - healer's kit, healing herbs, bandages, common clothes",
        68: " Pie Seller - basket containing 1d4 fruit pies, apron, rolling pin, common clothes",
        69: " Plumer - sack of goose down, fine pillow, 1d4 rare feathers, common clothes",
        70: " Poisoner - 1d4 vials of basic poison, treatise on poison, cloak, common clothes",
        71: " Potter - 1d4 pounds of clay, potter’s wheel, 1d6 small clay jars, common clothes",
        72: " Priest - holy symbol, healer's kit, incense, vestments, small bottle of wine, habit",
        73: " Ratcatcher - club, 1d8 dead rats, rat bait, common clothes, coat made out of clean rat skins",
        74: " Roofer - tack hammer, 1d4 bunches of thatch, box of nails, common clothes",
        75: " Rope Maker - sharp knife, two 50 ft lengths of rope, common clothes Occupation and Equipment d100 Occupation Equipment",
        76: " Sage - book of lore, quill, ink, few sheets of paper, scroll of magic missile, common clothes",
        77: " Salter - sharp knife, 1 pound of salted meat, 1d10 pounds of salt, common clothes",
        78: " Scribe - 1d20 pages of paper, half copied book, quill, 1d4 colored inks, common clothes",
        79: " Scullion - apron, well worn brush, half a loaf of bread, broom, common clothes",
        80: " Servant - dull knife, mark of indentured servitude, common clothes",
        81: " Spice Merchant - 1d10 exotic spices, small amount of cinnamon, 1d8 gp, silk clothes, shiny boots",
        82: " Squire - longsword, book on chivalry, fine clothes, polished boots",
        83: " Stevedore - thick belt, heavy belt knife, warm clothes, heavy boots",
        84: " Steward - livery, chain of office, book of the estate’s accounts, velvet clothes",
        85: " Swineherd - crook, 1d8 turnips, 1d4 pigs, common clothes",
        86: " Tailor - needle and thread, scraps of cloth, well sewn vest, common clothes",
        87: " Tanner - belt knife, 1d6 animal skins, thick gloves, common clothes",
        88: " Teamster - crop, brush, blanket, small bag of horse feed, common clothes",
        89: " Timberwright - hand axe, several small pieces of wood, comfortable boots, common clothes, cloak",
        90: " Tinker - sharp knife, sack full of 1d20 small trinkets, small tools, colorful clothes",
        91: " Torturer - bag of 'special tools', signed confession, cloak, common clothes",
        92: " Town Crier - hand held bell, fancy hat, buckled shoes, lantern, common clothes",
        93: " Veterinarian - book of animal diseases, 1d4 packs of herbs, small bag of horse feed, common clothes",
        94: " Vintner - 1d6 bottles of cheap wine, 1d4 bottles of rare wine, common clothes, boots",
        95: " Watchman - spear, steel helmet, lantern, well-made boots, uniform, cloak",
        96: " Weaver - 1d6 pounds thread, loom tools, hand loom, a finely woven cape, common clothes",
        97: " Witch's Apprentice - knife, scroll of burning hands, jar of 'newt eyes', common clothes, cloak",
        98: " Woodcrafter - hand axe, small knife, small carved wooden item, common clothes",
        99: " Yeoman - longbow, shortsword, 1d10 arrows, title to a small farm, cloak, common clothes, boots",
        100: "visiting young royalty - 10d10gp, jeweled daggar, note from parent removing child from royal line",
        }


let physicalQuirk = {
    1:" A mark of Fey ancestry",
    2:" Almond-shaped eyes",
    3:" Amputee",
    4:" Authentic limp",
    5:" Bald",
    6:" Beady eyes",
    7:" Beard",
    8:" Beautiful",
    9:" Beer gut",
    10:" Big ears",
    11:" Broad-shouldered",
    12:" Bushy mustache",
    13:" Button nose",
    14:" Chapped lips",
    15:" Cleft chin",
    16:" Club foot",
    17:" Completely unremarkable",
    18:" Constantly dirty",
    19:" Cross-eyed",
    20:" Curly hair",
    21:" Curvaceous",
    22:" Differently colored eyes",
    23:" Disarmingly adorable",
    24:" Eye patch",
    25:" Facial scar",
    26:" Facial tick",
    27:" Fair skin",
    28:" Fake limp",
    29:" Fancy clothes",
    30:" Fat",
    31:" Fit",
    32:" Freckled",
    33:" Frizzy hair",
    34:" Gap-toothed",
    35:" Gassy",
    36:" Gaunt",
    37:" Goateed",
    38:" Graying Hair",
    39:" Great sense of smell",
    40:" Harry arms",
    41:" High cheek bones",
    42:" Humpback",
    43:" Knock kneed",
    44:" Lanky",
    45:" Large nose",
    46:" Lazy eye",
    47:" Long fingernails",
    48:" Long hair",
    49:" Long legs",
    50:" Missing teeth",
    51:" Mumbles",
    52:" Muscled",
    53:" No eyebrows",
    54:" Notched ears",
    55:" Noticeable birthmark",
    56:" Noticeable scar",
    57:" Peg leg",
    58:" Perfectly groomed",
    59:" Perfumed",
    60:" Pierced ears",
    61:" Pierced nose",
    62:" Pigeon toed",
    63:" Plump",
    64:" Previously broken nose",
    65:" Rat faced",
    66:" Several warts",
    67:" Shapely knees",
    68:" Short",
    69:" Short hair",
    70:" Slightly green skin",
    71:" Six fingers on left hand",
    72:" Slack jawed",
    73:" Sleek",
    74:" Small ears",
    75:" Sniffles constantly",
    76:" Sparkly eyes",
    77:" Square jaw",
    78:" Stocky",
    79:" Stout",
    80:" Stubble",
    81:" Swan necked",
    82:" Sweaty",
    83:" Tall",
    84:" Tattooed",
    85:" Thick eyebrows",
    86:" Thick hair",
    87:" Thin",
    88:" Thin lips",
    89:" Tiny feet",
    90:" Turkey neck",
    91:" Twitchy",
    92:" Uneven shoulders",
    93:" Unusually colored hair",
    94:" Voluptuous",
    95:" Weak-chinned",
    96:" Well-toned calves",
    97:" White streak in hair",
    98:" Wide chin",
    99:" Wide-eyed",
    100: "Wild hair",
}


let personalityQuirk ={
    1:" Abrasive",
    2:" Absentminded",
    3:" Aimless",
    4:" Alert",
    5:" Aloof",
    6:" Anxious",
    7:" Articulate",
    8:" Assertive",
    9:" Bland",
    10:" Blunt",
    11:" Calculating",
    12:" Callous",
    13:" Cantankerous",
    14:" Careless",
    15:" Casual",
    16:" Cautious",
    17:" Charming",
    18:" Chummy",
    19:" Clean",
    20:" Clear-headed",
    21:" Coarse",
    22:" Cold",
    23:" Complacent",
    24:" Compulsive",
    25:" Critical",
    26:" Cunning",
    27:" Daring",
    28:" Deceptive",
    29:" Delicate",
    30:" Devious",
    31:" Dirty",
    32:" Disciplined",
    33:" Dramatic",
    34:" Droll",
    35:" Empathetic",
    36:" Fanciful",
    37:" Fickle",
    38:" Fiery",
    39:" Folksy",
    40:" Freethinking",
    41:" Freewheeling",
    42:" Fun-loving",
    43:" Gallant",
    44:" Gentle",
    45:" Genuine",
    46:" Gracious",
    47:" Healthy",
    48:" Helpful",
    49:" High-handed",
    50:" Honorable",
    51:" Humble",
    52:" Hurried",
    53:" Idealistic",
    54:" Intense",
    55:" Kind",
    56:" Lazy",
    57:" Masculine",
    58:" Mellow",
    59:" Messy",
    60:" Modest",
    61:" Moody",
    62:" Morbid",
    63:" Mystical",
    64:" Neat",
    65:" Nihilistic",
    66:" Obedient",
    67:" Objective",
    68:" Odd",
    69:" Open",
    70:" Optimistic",
    71:" Outspoken",
    72:" Patient",
    73:" Placid",
    74:" Prim",
    75:" Proud",
    76:" Pure",
    77:" Relaxed",
    78:" Religious",
    79:" Rigid",
    80:" Ritualistic",
    81:" Romantic",
    82:" Selfish",
    83:" Serious",
    84:" Shy",
    85:" Skeptical",
    86:" Smooth",
    87:" Stern",
    88:" Stubborn",
    89:" Stylish",
    90:" Suave",
    91:" Tense",
    92:" Tough",
    93:" Uninhibited",
    94:" Unpredictable",
    95:" Unsentimental",
    96:" Versatile",
    97:" Well-meaning",
    98:" Whimsical",
    99:" Wishful",
    100:" Witty",
}

let maleName ={
1:" Adriano ",
2:" Agnar   ",
3:" Allan   ",
4:" Alonso  ",
5:" Amerys  ",
6:" Archie  ",
7:" Ario    ",
8:" Arnalt  ",
9:" Arnost  ",
10:" Askan   ",
11:" Astgeir ",
12:" Belal   ",
13:" Benedict",
14:" Bernard ",
15:" Book    ",
16:" Bryson  ",
17:" Caerwyn ",
18:" Carl    ",
19:" Carter  ",
20:" Cason   ",
21:" Cortez  ",
22:" Curtis  ",
23:" Dacio   ",
24:" Dean    ",
25:" Delphin ",
26:" Devon   ",
27:" Dylan   ",
28:" Dyonte  ",
29:" Earl    ",
30:" Eldon   ",
31:" Elliot  ",
32:" Ewart   ",
33:" Feo     ",
34:" Flavio  ",
35:" Friso   ",
36:" Fuller  ",
37:" Gauti   ",
38:" Gerveis ",
39:" Gigjar  ",
40:" Gil     ",
41:" Godfrey ",
42:" Gregory ",
43:" Hakim   ",
44:" Hayden  ",
45:" Heini   ",
46:" Helmut  ",
47:" Hespu   ",
48:" Horace  ",
49:" Hubert  ",
50:" Ix ",
51:" Jack    ",
52:" Jafari  ",
53:" Jaxson  ",
54:" Jonah   ",
55:" Jordan  ",
56:" Jorvar  ",
57:" Joseph  ",
58:" Kaleb   ",
59:" Kaprice ",
60:" Ken     ",
61:" Kincade ",
62:" Kyle    ",
63:" Lawrence",
64:" Lind    ",
65:" Luther  ",
66:" Mal     ",
67:" Manu    ",
68:" Marsden ",
69:" Mather  ",
70:" Michael ",
71:" Miles   ",
72:" Miller  ",
73:" Mulac   ",
74:" Nassau  ",
75:" Nixon   ",
76:" Nolan   ",
77:" Oliver  ",
78:" Osburn  ",
79:" Oscar   ",
80:" Quedell ",
81:" Rawley  ",
82:" Rodric  ",
83:" Rodulf  ",
84:" Rufo    ",
85:" Samuel  ",
86:" Sap     ",
87:" Sherman ",
88:" Spencer ",
89:" Stroud  ",
90:" Terrill ",
91:" Thor    ",
92:" Tureis  ",
93:" Turolt  ",
94:" Tyler   ",
95:" Urick   ",
96:" Valtyr  ",
97:" Voltan  ",
98:" Wendall ",
99:" Wendlin ",   
100:" Willie ", 
}

let femaleNames ={
1:" Abby",
2:" Abelina",
3:" Abigail",
4:" Adela",
5:" Agate",
6:" Ainsley",
7:" Alfey",
8:" Alice",
9:" Alisha",
10:" Anest",
11:" Angela",
12:" Anne",
13:" Arionna",
14:" Audrey",
15:" Bailee",
16:" Barbara",
17:" Breanna",
18:" Brook",
19:" Carlie",
20:" Carmen",
21:" Cassie",
22:" Cat",
23:" Ceri",
24:" Chin",
25:" Christine",
26:" Dalila",
27:" Damete",
28:" Dani",
29:" Dawn",
30:" Diega",
31:" Dufa",
32:" Eartha",
33:" Edith",
34:" Eike",
35:" Eir",
36:" Elena",
37:" Ellie",
38:" Elsie",
39:" Enida",
40:" Erna",
41:" Esmeralda",
42:" Eve",
43:" Faith",
44:" Fodla",
45:" Fran",
46:" Frauke",
47:" Gotlinde",
48:" Hana",
49:" Harley",
50:" Hollie",
51:" Inge",
52:" Isabelle",
53:" Ixtab",
54:" Jstormie",
55:" Judith",
56:" Karin",
57:" Kasey",
58:" Kassidy",
59:" Katarina",
60:" Kelsey",
61:" Khat",
62:" Lara",
63:" Libby",
64:" Lillian",
65:" Ludwina",
66:" Luna",
67:" Lynda",
68:" Madeleine",
69:" Madisen",
70:" Maisy",
71:" Margot",
72:" Marlena",
73:" Merte",
74:" Nathalie",
75:" Nicolette",
76:" Ninna",
77:" Nykee",
78:" Olwenna",
79:" Piper",
80:" Priscilla",
81:" Ranno",
82:" Rihanni",
83:" Romana",
84:" Rosemary",
85:" Sadie",
86:" Samuella",
87:" Sandra",
88:" Sara",
89:" Seben",
90:" Serefine",
91:" Skye",
92:" Skyler",
93:" Toka",
94:" Tykera",
95:" Vanessa",
96:" Vigdis",
97:" Xoco",
98:" Yizel",
99:" Ylfa",
100:"Zita",
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
    let gender = generateGender()
    let race = generateRace()
    let strength = statRoller()
    let dexterity = statRoller()
    let constitution = statRoller()
    let intelligence = statRoller()
    let wisdom = statRoller()
    let charisma = statRoller()
    let occupation = generateOccupation()
    let racialFeatures = getFeatures()




const getFeatures = () =>{

    if (race === "Elf") {
        dexterity +=2
        return "Fey Ancestry:  Elves and half-elves have advantage on saving throws against being charmed, and magic cannot put them to sleep."
        
    } else if (race === "Dwarf"){
        constitution += 2
        return "Dwarven Resilience Dwarves have advantage on saving throws against poison. They also have resistance against poison damage."
    
    } else if (race === "Gnome"){
        intelligence += 2
        constitution += 1
        return "Gnome Cunning Gnomes have advantage on Intelligence, Wisdom, and Charisma saving throws against magic."
    
    } else if (race === "Tiefling"){
        intelligence += 1
        charisma += 2
        return "Hellish Resistance Tieflings have resistance to fire damage."
    
    } else if (race === "Halfling"){
        dexterity += 2 
        return "Lucky When a halfling rolls a 1 on the d20 for an attack roll, ability check, or saving throw, the halfling can reroll the die and must use the new roll.  Brave Halflings have advantage on saving throws against being frightened."
    
    } else if (race === "Half-orc"){
        strength +=2
        constitution += 1
        return "Relentless Endurance When a half-orc is reduced to 0 hit points but not killed outright, it can drop to 1 hit point instead. You cannot use this feature again until you finish a long rest."
    
    } else if (race === "Dragonborn"){
        strength += 2
        charisma += 1
        return ""
    
    } else (race === "Human"){
        strength += 1
        dexterity += 1
        constitution += 1
        intelligence += 1
        wisdom += 1
        charisma += 1
        return ""
    }

}




//Generates Gender
    const generateGender = ()=>{
    let chooseGender = randomIntegerD4()
    if (chooseGender > 2) {
        return "male"
        
    } else {
        return "female"
    }
};


//Generates Race
function generateRace() {
        let value = randomIntegerD100();
         for( var range in raceTable ) {
             var split = range.split("-");
     
             if( value >= parseInt(split[0]) && value <= parseInt(split[1] || split[0]) )
                 return raceTable[range]}}
         

//Generates Gender
function generateOccupation() {
        let value = randomIntegerD100();
         for( var range in raceTable ) {
             var split = range.split("-");
     
             if( value >= parseInt(split[0]) && value <= parseInt(split[1] || split[0]) )
                 return occupationTable[range]}}
