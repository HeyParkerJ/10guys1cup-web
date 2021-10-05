import React, { useState, useEffect } from 'react';
import HttpClients from '../http-clients/ff-sleeper-scripts'
import Table from './table';
import Dropdown from './Dropdown'

const TableContainer = () => {
    const [data, setData] = useState(null);
    const [seasonID, setSeasonID] = useState(2021);
    useEffect(() => {
        HttpClients.fetchScoreStats(seasonID).then(response => response.json()).then(data => setData(data));
    }, [seasonID, setData]);

    const renderTable = () => {
        return data ? <Table data={data} /> : 'Loading...'
    }

    return (
        <div>
            <Dropdown selectedSeasonID={seasonID} setSeasonID={setSeasonID} />
            {renderTable()}
        </div>
    )
}
export default TableContainer;
