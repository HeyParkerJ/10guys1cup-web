import React from 'react';

const seasons = [2020, 2021]
const SeasonSelectionDropdown = ({ selectedSeason, setSelectedSeason }: { selectedSeason: any, setSelectedSeason: any }): JSX.Element => {
    const updateSeasonID = (e: any) => {
        console.log('e', e.target.value)
        setSelectedSeason(e.target.value)
    }
    return (
        <select name="select" value={selectedSeason} onChange={updateSeasonID} >
            {seasons.map((season) => {
                return (<option value={season} selected={selectedSeason === season}>{season}</option>)
            })}
        </select>
    )
}

export default SeasonSelectionDropdown;
