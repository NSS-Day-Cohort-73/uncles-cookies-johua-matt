import {useIceCream} from "./database.js"


export const iceCreamList = () => {

    const iceCreamInfo = useIceCream()

    let iceCreamHTML = "" 

    for (const flavor of iceCreamInfo) {
        iceCreamHTML += `
            <section class="iceCreamCard">
                <img class="iceCreamPic" alt="scoop of ${flavor.name}" src ="${flavor.img}">
                <div class="iceCreamText">
                    <p class="iceCreamName">${flavor.name}</p>
                    <p class="iceCreamInfo">${flavor.description}</p>
                </div>
            </section> 
        `
    }
    return iceCreamHTML
}