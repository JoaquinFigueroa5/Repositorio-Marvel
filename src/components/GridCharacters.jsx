import React from 'react'

export const GridCharacters = ({characters}) => {
  return (
    <>
        <div className="d-flex flex-row row row-cols-4" style={{padding: '30px'}}>
            {
            characters &&
            characters.map((char) => (
                <div key={char.id} className='card'>
                <h1 className='d-flex justify-content-center'>{char.name}</h1>
                <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`}></img>
                </div>
            ))}
        </div>
    </>
  )
}
