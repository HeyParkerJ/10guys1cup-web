import React, { useEffect, useState } from 'react';
import HttpClients from '../http-clients/ff-sleeper-scripts'
import Table from './table'

const TableContainer = ({ selectedSeason }: { selectedSeason: string }) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        HttpClients.fetchScoreStats(selectedSeason).then(response => response.json()).then(d => setData(d));
    }, [selectedSeason, setData]);

    const renderTable = () => {
        return data ? <Table data={data} /> : 'Loading...'
    }

    return (
        <div>
            {renderTable()}
        </div>
    )
}

export default TableContainer;
