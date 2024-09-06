 import { useState, useEffect } from "react";
import { reqCharacter } from "../service/character";
 
export const useCharacters = (currentpage, searchCharacter) => {
  const [characters, setCharacters] = useState([]);
  const [total, setTotal] = useState();
 
   
 
  useEffect(() => {
   
    reqCharacter(currentpage, searchCharacter).then((data)=>{
        setCharacters(data.results)
        setTotal(data.total)
        console.log(data)
    })
  }, [currentpage, searchCharacter]);
 
 
 
  return {
    characters,
    total
  };
};