import React, { useState, useEffect, useMemo } from 'react';
import HttpClients from '../http-clients/ff-sleeper-scripts'
import Table from './table';

const TableContainer = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
	    // TODO - This needs to be different when not in prod????
        HttpClients.fetchScoreStats().then(response => response.json()).then(data => setData(data));
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
