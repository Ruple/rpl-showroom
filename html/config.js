cars = [
    { model: "panto", label: "Panto", price: 55000, onStock: 1, category: 1 },
    { model: "gtrc", label: "AMG GT Black Series", price: 650000, onStock: 1, category: 0 },
    { model: "gt63", label: "AMG GT63", price: 535000, onStock: 1, category: 0 },
    { model: "z2879", label: "Camaro Z28 1979", price: 565000, onStock: 1, category: 0 },
    { model: "exor", label: "Camaro ZL1", price: 580000, onStock: 1, category: 0 },
    { model: "fk8", label: "Civic Type-R", price: 415000, onStock: 1, category: 0 },
    { model: "delsoleg", label: "Civic Type-R EG", price: 330000, onStock: 1, category: 0 },
    { model: "contss18", label: "Continental SS", price: 590000, onStock: 1, category: 0 },
    { model: "c7", label: "Corvette C7", price: 545000, onStock: 1, category: 0 },
    { model: "esv", label: "Escalade", price: 560000, onStock: 1, category: 0 },
    { model: "srt8b", label: "Grand Cherokee SRT-8", price: 440000, onStock: 1, category: 0 },
    { model: "bluecunt", label: "HSV", price: 385000, onStock: 1, category: 0 },
    { model: "m5e60", label: "M5 E60", price: 540000, onStock: 1, category: 0 },
    { model: "na6", label: "MX5 NA", price: 330000, onStock: 1, category: 0 },
    { model: "lp670", label: "MX5 NA", price: 780000, onStock: 1, category: 0 },
    { model: "66fastback", label: "Mustang 1965", price: 550000, onStock: 1, category: 0 },
    { model: "rmodmustang", label: "Mustang 2015", price: 470000, onStock: 1, category: 0 },
    { model: "mustang19", label: "Mustang GT 2015", price: 490000, onStock: 1, category: 0 },
    { model: "panamera17turbo", label: "Panamera Turbo", price: 595000, onStock: 1, category: 0 },
    { model: "r1", label: "R1", price: 315000, onStock: 1, category: 0 },
    { model: "r8v10", label: "R8 V1", price: 635000, onStock: 1, category: 0 },
    { model: "audirs6tk", label: "RS6", price: 485000, onStock: 1, category: 0 },
    { model: "fnfrx7", label: "RX7", price: 435000, onStock: 1, category: 0 },
    { model: "f150", label: "Raptor F150", price: 445000, onStock: 1, category: 0 },
    { model: "ap2", label: "S2000", price: 420069, onStock: 1, category: 0 },
    { model: "subwrx", label: "WRX", price: 375000, onStock: 1, category: 0 },
    { model: "asbo2", label: "Asbo", price: 35000, onStock: 1, category: 1 },
    { model: "asbo2", label: "Asbo", price: 35000, onStock: 1, category: 1 },
    { model: "blista", label: "Blista", price: 55000, onStock: 1, category: 1 },
    { model: "blista2", label: "Blista Compact", price: 35000, onStock: 1, category: 1 },
    { model: "brioso", label: "Brioso R/A", price: 130000, onStock: 1, category: 1 },
    { model: "club", label: "Club", price: 55000, onStock: 1, category: 1 },
    { model: "futo", label: "Futo", price: 51500, onStock: 1, category: 1 },
    { model: "issi3", label: "Issi Classic", price: 78500, onStock: 1, category: 1 },
    { model: "kanjo", label: "Kanjo", price: 125000, onStock: 1, category: 1 },
    { model: "panto", label: "Panto", price: 55000, onStock: 1, category: 1 },
    { model: "rhapsody", label: "Prairie", price: 26000, onStock: 1, category: 1 },
    { model: "akuma", label: "Akuma", price: 110000, onStock: 1, category: 2 },
    { model: "avarus", label: "Avarus", price: 140000, onStock: 1, category: 2 },
    { model: "bf400", label: "BF400", price: 63000, onStock: 1, category: 2 },
    { model: "bagger", label: "Bagger", price: 75000, onStock: 1, category: 2 },
    { model: "bati", label: "Bati 801", price: 120000, onStock: 1, category: 2 },
    { model: "cliffhanger", label: "Cliffhanger", price: 70000, onStock: 1, category: 2 },
    { model: "daemon", label: "Daemon", price: 92000, onStock: 1, category: 2 },
    { model: "daemon2", label: "Daemon Custom", price: 125000, onStock: 1, category: 2 },
    { model: "defiler", label: "Defiler", price: 115000, onStock: 1, category: 2 },
    { model: "diablous", label: "Diabolus", price: 86000, onStock: 1, category: 2 },
    { model: "double", label: "Double-T", price: 120000, onStock: 1, category: 2 },
    { model: "enduro", label: "Enduro", price: 45000, onStock: 1, category: 2 },
    { model: "esskey", label: "Esskey", price: 55000, onStock: 1, category: 2 },
    { model: "fcr", label: "FCR 100", price: 90000, onStock: 1, category: 2 },
    { model: "faggio2", label: "Faggio", price: 31000, onStock: 1, category: 2 },
    { model: "faggio3", label: "Faggio Mod", price: 96000, onStock: 1, category: 2 },
    { model: "faggio", label: "Faggio Sport", price: 15000, onStock: 1, category: 2 },
    { model: "gargoyle", label: "Gargoyle", price: 43000, onStock: 1, category: 2 },
    { model: "hakuchou", label: "Hakuchou", price: 120000, onStock: 1, category: 2 },
    { model: "hexer", label: "Hexer", price: 65000, onStock: 1, category: 2 },
    { model: "innovation", label: "Innovation", price: 85000, onStock: 1, category: 2 },
    { model: "lectro", label: "Lectro", price: 105000, onStock: 1, category: 2 },
    { model: "manchez", label: "Manchez", price: 55000, onStock: 1, category: 2 },
    { model: "nemesis", label: "Nemesis", price: 65000, onStock: 1, category: 2 },
    { model: "nightblade", label: "Nightblade", price: 105000, onStock: 1, category: 2 },
    { model: "pcj", label: "PCJ 600", price: 53000, onStock: 1, category: 2 },
    { model: "ruffian", label: "Ruffian", price: 75000, onStock: 1, category: 2 },
    { model: "sanchez", label: "Sanchez", price: 31000, onStock: 1, category: 2 },
    { model: "sovereign", label: "Sovereign", price: 78000, onStock: 1, category: 2 },
    { model: "thrust", label: "Thrust", price: 185000, onStock: 1, category: 2 },
    { model: "vader", label: "Vader", price: 95000, onStock: 1, category: 2 },
    { model: "vindicator", label: "Vindicator", price: 195000, onStock: 1, category: 2 },
    { model: "vortex", label: "Vortex", price: 138000, onStock: 1, category: 2 },
    { model: "wolfsbane", label: "Wolfsbane", price: 125000, onStock: 1, category: 2 },
    { model: "zombieb", label: "Zombie Bobber", price: 175000, onStock: 1, category: 2 },
    { model: "blade", label: "Blade", price: 85000, onStock: 1, category: 3 },
    { model: "buccaneer", label: "Buccaneer", price: 47000, onStock: 1, category: 3 },
    { model: "buccaneer2", label: "Buccaneer Custom", price: 77000, onStock: 1, category: 3 },
    { model: "chino", label: "Chino", price: 35500, onStock: 1, category: 3 },
    { model: "chino2", label: "Chino Custom", price: 75000, onStock: 1, category: 3 },
    { model: "dominator", label: "Dominator", price: 134000, onStock: 1, category: 3 },
    { model: "dominator3", label: "Dominator GTX", price: 235000, onStock: 1, category: 3 },
    { model: "dukes", label: "Dukes", price: 130000, onStock: 1, category: 3 },
    { model: "ellie", label: "Ellie", price: 90000, onStock: 1, category: 3 },
    { model: "faction", label: "Faction", price: 48500, onStock: 1, category: 3 },
    { model: "faction2", label: "Faction Custom", price: 80000, onStock: 1, category: 3 },
    { model: "faction3", label: "Faction Donk", price: 87500, onStock: 1, category: 3 },
    { model: "gauntlet", label: "Gauntlet", price: 210000, onStock: 1, category: 3 },
    { model: "gauntlet3", label: "Gauntlet Classic", price: 365000, onStock: 1, category: 3 },
    { model: "hotknife", label: "Hotknife", price: 215000, onStock: 1, category: 3 },
    { model: "impaler", label: "Impaler", price: 132000, onStock: 1, category: 3 },
    { model: "nightshade", label: "Nightshade", price: 91000, onStock: 1, category: 3 },
    { model: "phoenix", label: "Phoenix", price: 84000, onStock: 1, category: 3 },
    { model: "picador", label: "Picador", price: 66000, onStock: 1, category: 3 },
    { model: "ratloader", label: "Rat-Loader", price: 5500, onStock: 1, category: 3 },
    { model: "ratloader2", label: "Rat-Truck", price: 88500, onStock: 1, category: 3 },
    { model: "ruiner", label: "Ruiner", price: 78000, onStock: 1, category: 3 },
    { model: "sabregt", label: "Sabre Turbo", price: 67000, onStock: 1, category: 3 },
    { model: "sabregt2", label: "Sabre Turbo Custom", price: 95000, onStock: 1, category: 3 },
    { model: "slamvan", label: "Slamvan", price: 64000, onStock: 1, category: 3 },
    { model: "slamvan2", label: "Slamvan", price: 48000, onStock: 1, category: 3 },
    { model: "slamvan3", label: "Slamvan Custom", price: 145000, onStock: 1, category: 3 },
    { model: "stalion", label: "Stallion", price: 73000, onStock: 1, category: 3 },
    { model: "tampa", label: "Tampa", price: 68000, onStock: 1, category: 3 },
    { model: "tornado6", label: "Tornado Gasser", price: 39000, onStock: 1, category: 3 },
    { model: "tulip", label: "Tulip", price: 83000, onStock: 1, category: 3 },
    { model: "vamos", label: "Vamos", price: 185000, onStock: 1, category: 3 },
    { model: "vigero", label: "Vigero", price: 79000, onStock: 1, category: 3 },
    { model: "virgo", label: "Virgo", price: 91000, onStock: 1, category: 3 },
    { model: "yosemite", label: "Yosemite", price: 57000, onStock: 1, category: 3 },
    { model: "bifta", label: "Bifta", price: 55000, onStock: 1, category: 4 },
    { model: "bison", label: "Bison", price: 35000, onStock: 1, category: 4 },
    { model: "blazer", label: "Blazer", price: 25000, onStock: 1, category: 4 },
    { model: "bobcatxl", label: "Bobcat XL", price: 44500, onStock: 1, category: 4 },
    { model: "bodhi2", label: "Bodhi", price: 7100, onStock: 1, category: 4 },
    { model: "brawler", label: "Brawler", price: 71500, onStock: 1, category: 4 },
    { model: "caracara2", label: "Caracara", price: 135000, onStock: 1, category: 4 },
    { model: "comet4", label: "Comet Safari", price: 141000, onStock: 1, category: 4 },
    { model: "contender", label: "Contender", price: 152000, onStock: 1, category: 4 },
    { model: "trophytruck2", label: "Desert Raid", price: 235000, onStock: 1, category: 4 },
    { model: "dubsta3", label: "Dubsta 6x6", price: 60000, onStock: 1, category: 4 },
    { model: "dune", label: "Dune Buggy", price: 38500, onStock: 1, category: 4 },
    { model: "dloader", label: "Duneloader", price: 7900, onStock: 1, category: 4 },
    { model: "everon", label: "Everon", price: 190000, onStock: 1, category: 4 },
    { model: "freecrawler", label: "Freecrawler", price: 160000, onStock: 1, category: 4 },
    { model: "guardian", label: "Guardian", price: 195000, onStock: 1, category: 4 },
    { model: "bfinjection", label: "Injection", price: 29000, onStock: 1, category: 4 },
    { model: "kalahari", label: "Kalahari", price: 29500, onStock: 1, category: 4 },
    { model: "kamacho", label: "kamacho", price: 119000, onStock: 1, category: 4 },
    { model: "mesa", label: "Mesa", price: 110000, onStock: 1, category: 4 },
    { model: "mesa3", label: "Mesa Safari", price: 68000, onStock: 1, category: 4 },
    { model: "outlaw", label: "Outlaw", price: 180000, onStock: 1, category: 4 },
    { model: "rancherxl", label: "Rancher XL", price: 68000, onStock: 1, category: 4 },
    { model: "rebel2", label: "Rebel", price: 42000, onStock: 1, category: 4 },
    { model: "rebel", label: "Rebel", price: 32000, onStock: 1, category: 4 },
    { model: "riata", label: "Riata", price: 120000, onStock: 1, category: 4 },
    { model: "rumpo3", label: "Rumpo Custom", price: 102000, onStock: 1, category: 4 },
    { model: "sandking2", label: "Sandking", price: 67100, onStock: 1, category: 4 },
    { model: "sandking", label: "Sandking XL", price: 75500, onStock: 1, category: 4 },
    { model: "blazer4", label: "Street Blazer", price: 45000, onStock: 1, category: 4 },
    { model: "streiter", label: "Streiter", price: 129500, onStock: 1, category: 4 },
    { model: "trophytruck", label: "Trophy Truck", price: 240000, onStock: 1, category: 4 },
    { model: "yosemite3", label: "Yosemite Rancher", price: 67000, onStock: 1, category: 4 },
    { model: "gb200", label: "GB200", price: 172000, onStock: 1, category: 5 },
    { model: "michelli", label: "Michelli GT", price: 175000, onStock: 1, category: 5 },
    { model: "omnis", label: "Omnis", price: 170000, onStock: 1, category: 5 },
    { model: "retinue", label: "Retinue MkI", price: 195000, onStock: 1, category: 5 },
    { model: "tropos", label: "Tropos Rallye", price: 160000, onStock: 1, category: 5 },
    { model: "baller", label: "Baller", price: 85000, onStock: 1, category: 6 },
    { model: "baller2", label: "Baller", price: 115000, onStock: 1, category: 6 },
    { model: "baller3", label: "Baller LE", price: 185000, onStock: 1, category: 6 },
    { model: "bjxl", label: "BeeJay XL", price: 68500, onStock: 1, category: 6 },
    { model: "cavalcade", label: "Cavalcade", price: 000, onStock: 1, category: 6 },
    { model: "cavalcade2", label: "Cavalcade", price: 68500, onStock: 1, category: 6 },
    { model: "dubsta", label: "Dubsta", price: 140000, onStock: 1, category: 6 },
    { model: "dubsta2", label: "Dubsta Mandem", price: 165000, onStock: 1, category: 6 },
    { model: "fq2", label: "FQ-2", price: 60000, onStock: 1, category: 6 },
    { model: "granger", label: "Granger", price: 54500, onStock: 1, category: 6 },
    { model: "gresley", label: "Gresley", price: 135000, onStock: 1, category: 6 },
    { model: "habanero", label: "Habanero", price: 48000, onStock: 1, category: 6 },
    { model: "huntley", label: "Huntley S", price: 175000, onStock: 1, category: 6 },
    { model: "landstalker", label: "Landstalker", price: 55000, onStock: 1, category: 6 },
    { model: "landstalker2", label: "Landstalker XL", price: 120000, onStock: 1, category: 6 },
    { model: "minivan2", label: "Minivan Custom", price: 95000, onStock: 1, category: 6 },
    { model: "novak", label: "Novak", price: 190000, onStock: 1, category: 6 },
    { model: "patriot", label: "Patriot", price: 64000, onStock: 1, category: 6 },
    { model: "radi", label: "Radius", price: 44000, onStock: 1, category: 6 },
    { model: "rebla", label: "Rebla", price: 169000, onStock: 1, category: 6 },
    { model: "rocoto", label: "Rocoto", price: 135000, onStock: 1, category: 6 },
    { model: "seminole", label: "Seminole", price: 38000, onStock: 1, category: 6 },
    { model: "seminole2", label: "Seminole Frontier", price: 55000, onStock: 1, category: 6 },
    { model: "serrano", label: "Serrano", price: 55000, onStock: 1, category: 6 },
    { model: "xls", label: "XLS", price: 140000, onStock: 1, category: 6 },
    { model: "asea", label: "Asea", price: 21500, onStock: 1, category: 7 },
    { model: "asterope", label: "Asterope", price: 59500, onStock: 1, category: 7 },
    { model: "buffalo", label: "Buffalo", price: 130000, onStock: 1, category: 7 },
    { model: "buffalo2", label: "Buffalo S", price: 143000, onStock: 1, category: 7 },
    { model: "cheburek", label: "Cheburek", price: 41000, onStock: 1, category: 7 },
    { model: "cognoscenti", label: "Cognoscenti", price: 260000, onStock: 1, category: 7 },
    { model: "cog55", label: "Cognoscenti 55", price: 205000, onStock: 1, category: 7 },
    { model: "dilettante", label: "Dilettante", price: 23500, onStock: 1, category: 7 },
    { model: "dilettante2", label: "Dilettante", price: 23500, onStock: 1, category: 7 },
    { model: "dilettante3", label: "Dilettante Taxi", price: 23500, onStock: 1, category: 7 },
    { model: "emperor", label: "Emperor", price: 29500, onStock: 1, category: 7 },
    { model: "emperor2", label: "Emperor", price: 7300, onStock: 1, category: 7 },
    { model: "exemplar", label: "Exemplar", price: 160000, onStock: 1, category: 7 },
    { model: "fagaloa", label: "Fagaloa", price: 26000, onStock: 1, category: 7 },
    { model: "felon", label: "Felon", price: 170000, onStock: 1, category: 7 },
    { model: "fugitive", label: "Fugitive", price: 90000, onStock: 1, category: 7 },
    { model: "glendale", label: "Glendale", price: 34500, onStock: 1, category: 7 },
    { model: "glendale2", label: "Glendale Custom", price: 70000, onStock: 1, category: 7 },
    { model: "ingot", label: "Ingot", price: 43500, onStock: 1, category: 7 },
    { model: "intruder", label: "Intruder", price: 85000, onStock: 1, category: 7 },
    { model: "jackal", label: "Jackal", price: 125000, onStock: 1, category: 7 },
    { model: "jugular", label: "Jugular", price: 275000, onStock: 1, category: 7 },
    { model: "komoda", label: "Komoda", price: 165000, onStock: 1, category: 7 },
    { model: "kuruma", label: "Kuruma", price: 130000, onStock: 1, category: 7 },
    { model: "oracle", label: "Oracle", price: 105000, onStock: 1, category: 7 },
    { model: "oracle2", label: "Oracle XS", price: 120000, onStock: 1, category: 7 },
    { model: "premier", label: "Premier", price: 65000, onStock: 1, category: 7 },
    { model: "primo", label: "Primo", price: 48000, onStock: 1, category: 7 },
    { model: "primo2", label: "Primo Custom", price: 89000, onStock: 1, category: 7 },
    { model: "raiden", label: "Raiden", price: 185000, onStock: 1, category: 7 },
    { model: "regina", label: "Regina", price: 17300, onStock: 1, category: 7 },
    { model: "schafter2", label: "Schafter", price: 145000, onStock: 1, category: 7 },
    { model: "schafter4", label: "Schafter LWB", price: 175000, onStock: 1, category: 7 },
    { model: "schafter3", label: "Schafter V12", price: 165000, onStock: 1, category: 7 },
    { model: "stanier", label: "Stanier", price: 39500, onStock: 1, category: 7 },
    { model: "stratum", label: "Stratum", price: 121000, onStock: 1, category: 7 },
    { model: "stretch", label: "Stretch", price: 130000, onStock: 1, category: 7 },
    { model: "sugoi", label: "Sugoi", price: 142000, onStock: 1, category: 7 },
    { model: "sultan2", label: "Sultan MkII", price: 180000, onStock: 1, category: 7 },
    { model: "sultan", label: "Sultan MkIII", price: 125000, onStock: 1, category: 7 },
    { model: "superd", label: "Super Diamond", price: 210000, onStock: 1, category: 7 },
    { model: "surge", label: "Surge", price: 145000, onStock: 1, category: 7 },
    { model: "Tailgater", label: "tailgater", price: 133000, onStock: 1, category: 7 },
    { model: "taxi", label: "Taxi", price: 34500, onStock: 1, category: 7 },
    { model: "vstr", label: "VSTR", price: 210000, onStock: 1, category: 7 },
    { model: "warrener", label: "Warrener", price: 65000, onStock: 1, category: 7 },
    { model: "washington", label: "Washington", price: 39000, onStock: 1, category: 7 },
    { model: "windsor2", label: "Windsor Drop", price: 215000, onStock: 1, category: 7 },
    { model: "drafter", label: "8F Drafter", price: 205000, onStock: 1, category: 8 },
    { model: "ninef", label: "9F", price: 235000, onStock: 1, category: 8 },
    { model: "ninef2", label: "9F Cabrio", price: 235000, onStock: 1, category: 8 },
    { model: "alpha", label: "Alpha", price: 165000, onStock: 1, category: 8 },
    { model: "banshee", label: "Banshee", price: 250000, onStock: 1, category: 8 },
    { model: "bestiagts", label: "Bestia GTS", price: 315000, onStock: 1, category: 8 },
    { model: "carbonizzare", label: "Carbonizzare", price: 335000, onStock: 1, category: 8 },
    { model: "cogcabrio", label: "Cognoscenti Cabrio", price: 295000, onStock: 1, category: 8 },
    { model: "comet2", label: "Comet", price: 275000, onStock: 1, category: 8 },
    { model: "comet5", label: "Comet SR", price: 310000, onStock: 1, category: 8 },
    { model: "coquette", label: "Coquette", price: 240000, onStock: 1, category: 8 },
    { model: "elegy2", label: "Elegy", price: 235000, onStock: 1, category: 8 },
    { model: "f620", label: "F620", price: 220000, onStock: 1, category: 8 },
    { model: "felon2", label: "Felon GT", price: 210000, onStock: 1, category: 8 },
    { model: "feltzer2", label: "Feltzer", price: 275000, onStock: 1, category: 8 },
    { model: "furoregt", label: "Furore GT", price: 190000, onStock: 1, category: 8 },
    { model: "fusilade", label: "Fusilade", price: 78000, onStock: 1, category: 8 },
    { model: "jester", label: "Jester", price: 325000, onStock: 1, category: 8 },
    { model: "locust", label: "Locust", price: 295000, onStock: 1, category: 8 },
    { model: "lynx", label: "Lynx", price: 215000, onStock: 1, category: 8 },
    { model: "massacro", label: "Massacro", price: 260000, onStock: 1, category: 8 },
    { model: "paragon", label: "Paragon", price: 350000, onStock: 1, category: 8 },
    { model: "penumbra", label: "Penumbra", price: 150000, onStock: 1, category: 8 },
    { model: "penumbra2", label: "Penumbra FF", price: 130000, onStock: 1, category: 8 },
    { model: "rapidgt", label: "Rapid GT", price: 250000, onStock: 1, category: 8 },
    { model: "rapidgt2", label: "Rapid GT Cabrio", price: 250000, onStock: 1, category: 8 },
    { model: "ruston", label: "Ruston", price: 280000, onStock: 1, category: 8 },
    { model: "schwarzer", label: "Schwartzer", price: 195000, onStock: 1, category: 8 },
    { model: "sentinel", label: "Sentinel", price: 84000, onStock: 1, category: 8 },
    { model: "sentinelsg4", label: "Sentinel SG4", price: 260000, onStock: 1, category: 8 },
    { model: "sentinel2", label: "Sentinel XS", price: 90000, onStock: 1, category: 8 },
    { model: "seven70", label: "Seven-70", price: 325000, onStock: 1, category: 8 },
    { model: "specter", label: "Specter", price: 260000, onStock: 1, category: 8 },
    { model: "specter2", label: "Specter", price: 285000, onStock: 1, category: 8 },
    { model: "surano", label: "Surano", price: 240000, onStock: 1, category: 8 },
    { model: "voltic", label: "Voltic", price: 310000, onStock: 1, category: 8 },
    { model: "windsor", label: "Windsor", price: 260000, onStock: 1, category: 8 },
    { model: "zion", label: "Zion", price: 130000, onStock: 1, category: 8 },
    { model: "zion2", label: "Zion Cabrio", price: 140000, onStock: 1, category: 8 },
    { model: "z190", label: "190Z", price: 260000, onStock: 1, category: 9 },
    { model: "casco", label: "Casco", price: 495000, onStock: 1, category: 9 },
    { model: "clique", label: "Clique", price: 510000, onStock: 1, category: 9 },
    { model: "comet3", label: "Comet Retro", price: 295000, onStock: 1, category: 9 },
    { model: "coquette3", label: "Coquette Blackfin", price: 345000, onStock: 1, category: 9 },
    { model: "coquette2", label: "Coquette Classic", price: 345000, onStock: 1, category: 9 },
    { model: "dynasty", label: "Dynasty", price: 310000, onStock: 1, category: 9 },
    { model: "gt500", label: "GT500", price: 720000, onStock: 1, category: 9 },
    { model: "hermes", label: "Hermes", price: 295500, onStock: 1, category: 9 },
    { model: "hustler", label: "Hustler", price: 165400, onStock: 1, category: 9 },
    { model: "mamba", label: "Mamba", price: 320000, onStock: 1, category: 9 },
    { model: "manana", label: "Manana", price: 41500, onStock: 1, category: 9 },
    { model: "peyote", label: "Payote", price: 35000, onStock: 1, category: 9 },
    { model: "peyote3", label: "Payote Custom", price: 60000, onStock: 1, category: 9 },
    { model: "pigalle", label: "Pigalle", price: 15700, onStock: 1, category: 9 },
    { model: "rapidgt3", label: "Rapid GT Classic", price: 250000, onStock: 1, category: 9 },
    { model: "btype", label: "Roosevelt", price: 395000, onStock: 1, category: 9 },
    { model: "savestra", label: "Savestra", price: 90000, onStock: 1, category: 9 },
    { model: "sentinel3", label: "Sentinel Classic", price: 125000, onStock: 1, category: 9 },
    { model: "stafford", label: "Stafford", price: 570000, onStock: 1, category: 9 },
    { model: "feltzer3", label: "Stirling", price: 330000, onStock: 1, category: 9 },
    { model: "swinger", label: "Swinger", price: 750000, onStock: 1, category: 9 },
    { model: "tornado", label: "Tornado", price: 35000, onStock: 1, category: 9 },
    { model: "tornado3", label: "Tornado", price: 25000, onStock: 1, category: 9 },
    { model: "tornado2", label: "Tornado Cabrio", price: 35000, onStock: 1, category: 9 },
    { model: "tornado5", label: "Tornado Custom", price: 75000, onStock: 1, category: 9 },
    { model: "virgo2", label: "Virgo Custom", price: 160000, onStock: 1, category: 9 },
    { model: "virgo3", label: "Virgo Custom", price: 125000, onStock: 1, category: 9 },
    { model: "viseris", label: "Viseris", price: 345000, onStock: 1, category: 9 },
    { model: "viseris", label: "Voodoo", price: 31000, onStock: 1, category: 9 },
    { model: "voodoo", label: "Voodoo Custom", price: 71500, onStock: 1, category: 9 },
    { model: "zion3", label: "Zion Classic", price: 190000, onStock: 1, category: 9 },
    { model: "tractor2", label: "Fieldmaster", price: 35000, onStock: 1, category: 10 },
    { model: "Mower", label: "mower", price: 15000, onStock: 1, category: 10 },
    { model: "burrito3", label: "Burrito", price: 10000, onStock: 1, category: 10 },
    { model: "gburrito2", label: "Burrito G2", price: 37000, onStock: 1, category: 10 },
    { model: "camper", label: "Camper", price: 70000, onStock: 1, category: 11 },
    { model: "journey", label: "Journey", price: 18500, onStock: 1, category: 11 },
    { model: "minivan", label: "Minivan", price: 18500, onStock: 1, category: 11 },
    { model: "moonbeam", label: "Moonbeam", price: 46500, onStock: 1, category: 11 },
    { model: "moonbeam", label: "Moonbeam Custom", price: 000, onStock: 1, category: 11 },
    { model: "rumpo", label: "News Rumpo", price: 6500, onStock: 1, category: 11 },
    { model: "paradise", label: "Paradise", price: 23900, onStock: 1, category: 11 },
    { model: "pony", label: "Pony", price: 6000, onStock: 1, category: 11 },
    { model: "pony2", label: "Pony", price: 12000, onStock: 1, category: 11 },
    { model: "newsvan", label: "Rumpo News", price: 23000, onStock: 1, category: 11 },
    { model: "speedo", label: "Speedo", price: 6000, onStock: 1, category: 11 },
    { model: "surfer", label: "Surfer", price: 35000, onStock: 1, category: 11 },
    { model: "surfer2", label: "Surfer Kona", price: 5400, onStock: 1, category: 11 },
    { model: "youga", label: "Youga", price: 34000, onStock: 1, category: 11 },
    { model: "youga2", label: "Youga Classic", price: 60500, onStock: 1, category: 11 },
    { model: "youga3", label: "Youga Classic 4x4", price: 82000, onStock: 1, category: 11 },
]