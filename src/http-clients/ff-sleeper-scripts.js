export default {
    fetchScoreStats: async () => await fetch('http://localhost:3001/stats/scores')
        .then(response => response.json())
        .then(resData => resData)
}
