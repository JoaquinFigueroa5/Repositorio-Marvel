import CryptoJS from "crypto-js"
import { useEffect, useState } from "react"

export const MarvelApp = () => {

    const [characters, setCharacters] = useState()

    const time_stamp = new Date().getTime()
    const privateApiKey = '1c15ac5e7ca2277443318cb70fe4f08f2b4f656a'
    const publicApiKey = 'dbb2234629e758a301b0e5f24a9258ab'

    const hash = CryptoJS.MD5(time_stamp + privateApiKey + publicApiKey).toString();
    
    useEffect(() => {
        const reqCharacter = async() => {
            const resp = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${publicApiKey}&hash${hash}`)
            const {data} = await resp.json()
    
            setCharacters(data.results)
        }
    
        reqCharacter()
    }, [])
    
  return (
    <>
        {
            characters.map((char) => (
                <h1>{characters}</h1>
            ))
        }
    </>
  )
}
