import { useCookies } from "./database.js";

export const cookieList = () => {

    const cookieInfo = useCookies()

    let cookiesHTML = ""

    for (const flavor of cookieInfo) {
        cookiesHTML += `
            <section class="cookieCard">
                <img class="cookiePic" src="${flavor.img}" alt="${flavor.name} image">
                <div class="cookieText">
                    <p class="cookieName">${flavor.name}</p>
                    <p class="cookieInfo">${flavor.description}</p>
                </div>
            </section>
        `
    }
    return cookiesHTML
}