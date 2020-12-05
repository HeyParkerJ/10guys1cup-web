import React, { useState, useEffect, useMemo } from 'react';
import HttpClients from '../http-clients/ff-sleeper-scripts'
import Table from './table';

const TableContainer = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        HttpClients.fetchScoreStats().then(response => setData(response));
    }, []);

    const renderTable = () => {
        return data ? <Table data={data} /> : 'Loading...'
    }

    return (
        <div>
            { renderTable()}
        </div>
    )
}
export default TableContainer;
