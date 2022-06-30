import { coins } from "../../static/coins"
import XMLHttpRequest from "xhr2";

const PriceUpdate = () => {
    for(let i = 0; i < coins.length; i += 1){
        if(!coins[i].name) continue;
        let name = coins[i].name.split(" ")[0].toLocaleLowerCase();
        const Http = new XMLHttpRequest();
        let request = "https://api.coingecko.com/api/v3/simple/price?ids=" 
            + name 
            + "&vs_currencies=usd";
        Http.open("GET", request);
        Http.send();
        Http.onreadystatechange = (e) => {
            let price = Http.responseText.toString();
            if(price){
                price = (price.split(':')[2]).split('}')[0]
                coins[i].priceUsd = Number(price);
            }
        }   
    }
}

export default PriceUpdate

