import {useIceCream} from "./database.js"


export const iceCreamList = () => {

    const iceCreamInfo = useIceCream()

    let iceCreamHTML = " "

    for (const flavor of iceCreamInfo) {
        iceCreamHTML += `<section class="iceCreamCard">
            <img class="iceCreamPic" alt="scoop of ${flavor.name}" src ="${flavor.img}">
                <p><bold>${flavor.name}</bold></p> <br>
                <p>${flavor.description}</p>
        </section>`
    }
    return iceCreamHTML
}