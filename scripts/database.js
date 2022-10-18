const database = {
    fish: [
        {
            id: 1,
            image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Zebrasoma_flavescens_Luc_Viatour.jpg",
            name: "Yellow Tang",
            species: "Zebrasoma flavescens",
            diet: "algae",
            harvestLocation: "Hawaiian Islands"
        },

        {
            id: 2,
            image:"https://upload.wikimedia.org/wikipedia/commons/1/1b/Humpback_anglerfish.png",
            name: "Humpback Anglerfish",
            species: "Melanocetus johnsonii",
            diet: "Nearly everything they encounter",
            harvestLocation: "South China Sea"  
        },

        {
            id: 3,
            image:"https://upload.wikimedia.org/wikipedia/commons/6/6f/Boops_boops_Karpathos_01.JPG",
            name: "Boops boops",
            species: "B. boops",
            diet: "seaweed, crustaceans, plankton",
            harvestLocation: "Canary Islands"   
        },

        {
            id: 4,
            image:"https://upload.wikimedia.org/wikipedia/commons/0/05/Tomato_clownfish_Amphiprion_frenatus.jpg",
            name: "Tomato Clownfish",
            species: "Amphiprion frenatus",
            diet: "algae, shrimpn",
            harvestLocation: "Japan"   
        }

    
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}