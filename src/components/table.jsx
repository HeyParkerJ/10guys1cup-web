import React, { useMemo } from 'react';
import { useTable } from 'react-table';

import styles from './table.module.css';

const Table = ({ data }) => {
    console.log('data', data)
    const columns = useMemo(
        () => [
            {
                Header: 'Team',
                accessor: 'team',
            },
            {
                Header: 'Total Score In Wins',
                accessor: 'totalScoreInWins',
            },
            {
                Header: 'AVG PF Per Win',
                accessor: 'averagePFPerWin',
            },
            {
                Header: 'Wins',
                accessor: 'winCount',
            },
            {
                Header: 'Weeks Won',
                accessor: ({ weeksWon }) => {
                    return weeksWon.reduce((acc, week) => {
                        if (acc) {
                            return `${acc},${week}`
                        } else return week
                    }, null)
                },
            },
            {
                Header: 'Total Score In Losses',
                accessor: 'totalScoreInLosses',
            },
            {
                Header: 'Average PF Per Loss',
                accessor: 'averagePFPerLoss',
            },
            {
                Header: 'Losses',
                accessor: 'lossCount',
            },
            {
                Header: 'Weeks Lost',
                accessor: ({ weeksLost }) => {
                    return weeksLost.reduce((acc, week) => {
                        if (acc) {
                            return `${acc},${week}`
                        } else return week
                    }, null)
                },
            },
            {
                Header: 'Total Score',
                accessor: 'totalScore',
            },
            {
                Header: 'AVG Score',
                accessor: 'averageScore',
            },
            {
                Header: 'Standard Deviation',
                accessor: 'standardDeviation',
            },
            {
                Header: 'Scores',
                accessor: ({ scores }) => {
                    return scores.reduce((acc, score) => {
                        if (acc) {
                            return `${acc},${score}`
                        } else return score
                    }, null)
                },
            },
        ]
    )
    const tableInstance = useTable({ columns, data })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        // apply the table props
        <table {...getTableProps()}>
            <thead style={styles.table}>
                {// Loop over the header rows
                    headerGroups.map(headerGroup => (
                        // Apply the header row props
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {// Loop over the headers in each row
                                headerGroup.headers.map(column => (
                                    // Apply the header cell props
                                    <th {...column.getHeaderProps()}
                                        style={styles.th}>
                                        {// Render the header
                                            column.render('Header')}
                                    </th>
                                ))}
                        </tr>
                    ))}
            </thead>
            {/* Apply the table body props */}
            <tbody {...getTableBodyProps()}>
                {// Loop over the table rows
                    rows.map(row => {
                        // Prepare the row for display
                        prepareRow(row)
                        return (
                            // Apply the row props
                            <tr {...row.getRowProps()}>
                                {// Loop over the rows cells
                                    row.cells.map(cell => {
                                        // Apply the cell props
                                        return (
                                            <td {...cell.getCellProps()}
                                                style={styles.td}>
                                                {// Render the cell contents
                                                    cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}

export default Table;
