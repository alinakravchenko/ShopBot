import pizza from "../images/pizza.png"
import burger from "../images/burger.png"
import coca from "../images/coca.png"
import icecream from "../images/icecream.png"
import kebab from "../images/kebab.png"
import salad from "../images/salad.png"
import water from "../images/water.png"

export function getData()
{
    return[
        {title:"Pizza", price: 17.99, Image: pizza, id:1},
        {title:"Burger", price: 20.99, Image: burger, id:2},
        {title:"Coca", price: 3, Image: coca, id:3},
        {title:"IceCream", price: 10.28, Image: icecream, id:4},
        {title:"Kebab", price: 18.80, Image: kebab, id:5},
        {title:"Salat", price: 17.99, Image: salad, id:6},
        {title:"Water", price: 0.17, Image: water, id:7}
    ]
}

