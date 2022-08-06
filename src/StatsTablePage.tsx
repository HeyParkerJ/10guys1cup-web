import React, { useState } from 'react';
import TableContainer from './components/tableContainer';
import SeasonSelectionDropdown from './components/seasonSelectionDropdown'

const StatsTablePage = () => {
    const [selectedSeason, setSelectedSeason] = useState('2021');
    return (
        <>
            <SeasonSelectionDropdown selectedSeason={selectedSeason} setSelectedSeason={setSelectedSeason} />
            <TableContainer selectedSeason={selectedSeason} />
        </>
    )
}


export default StatsTablePage;
