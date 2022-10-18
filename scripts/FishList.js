import { getFish } from "./database.js"

//const allTheFish = getFish()

//console.log(allTheFish)

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const allTheFish = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of allTheFish) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish-card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length"> Diet: ${fish.diet}</div>
            <div class="fish__location"> Harvest Location: ${fish.harvestLocation}</div>
            </section>
`
    }
    htmlString += `</article>`

    return htmlString
}