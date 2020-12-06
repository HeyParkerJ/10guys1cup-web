const url = process.env.NODE_ENV === 'production' ? '10guys1cup.com/api' : 'localhost:3001'
export default {
    fetchScoreStats: async () => await fetch(`${url}/api/scores`)
}
