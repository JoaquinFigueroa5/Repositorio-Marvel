import CryptoJS from "crypto-js"
import { useEffect, useState } from "react"
import { useCharacters } from "../hooks/useCharacters"
import Pagination from '@mui/material/Pagination';
import { GridCharacters } from "./GridCharacters";
import { SearchCharacter } from "./SearchCharacter";

export const MarvelApp = () => {
  const [currentpage, setCurrentpage] = useState(1)
  const [searchCharacter, setSearchCharacter] = useState("");
  const { characters, total } = useCharacters(currentpage, searchCharacter);
 
  const handleSearch = (character) => {
    setSearchCharacter(character)
  }
    
  return (
    <>
        <SearchCharacter onSearch={handleSearch}/>
        <GridCharacters characters={characters} />
        <Pagination className="d-flex justify-content-center" count={Math.round(total/20)} onChange={(e, value) => (setCurrentpage(value))}/>
    </>
  )
}
