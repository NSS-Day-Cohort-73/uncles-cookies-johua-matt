import { cookieList } from "./cookies.js"
import { iceCreamList } from "./iceCream.js"


const cookiesFinal = cookieList()

const cookiePointer = document.getElementById('cookies')

cookiePointer.innerHTML = cookiesFinal


const iceCreamFinal = iceCreamList()

const iceCreamPointer = document.getElementById('icecream')

iceCreamPointer.innerHTML = iceCreamFinal