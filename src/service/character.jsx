import CryptoJS from "crypto-js"

const time_stamp = new Date().getTime()
const private_api_key = '1c15ac5e7ca2277443318cb70fe4f08f2b4f656a'
const public_api_key = 'dbb2234629e758a301b0e5f24a9258ab'
const hash = CryptoJS.MD5(time_stamp + private_api_key + public_api_key).toString()

export const reqCharacter = async(character, pagina) => {
    const validPage = pagina > 0 ? pagina : 1;
    const offset = (validPage-1)*20

    let url = `https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${public_api_key}&hash=${hash}&offset=${offset}`;
    if (character != null && character != "") {
        url = `https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${public_api_key}&hash=${hash}&offset=${offset}&nameStartsWith=${character}`;
    }
    
    const resp = await fetch(url)
    const {data} = await resp.json()

    return data
}