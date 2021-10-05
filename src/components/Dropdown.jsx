import React from 'react';

const seasons = [2020, 2021]
const Dropdown = ({ selectedSeasonID, setSeasonID }) => {
    const updateSeasonID = (e) => {
        console.log('e', e.target.value)
        setSeasonID(e.target.value)
    }
    return (
        <select name="select" value={selectedSeasonID} onChange={updateSeasonID} >
            {seasons.map((season) => {
                return (<option value={season} selected={selectedSeasonID === season}>{season}</option>)
            })}
        </select>
    )
}

export default Dropdown;
