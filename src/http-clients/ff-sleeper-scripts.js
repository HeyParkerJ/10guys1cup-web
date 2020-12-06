const url = process.env.NODE_ENV === 'production' ? '' : 'localhost:3001'
export default {
    fetchScoreStats: async () => await fetch(`${url}/api/scores`)
}
