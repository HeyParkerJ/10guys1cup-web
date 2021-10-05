const headers = [
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
Header: 'AVG PF Per Loss',
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
module.exports = {
headers
}
