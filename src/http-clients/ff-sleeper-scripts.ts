const url = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001'
export default {
    fetchScoreStats: async (season: any): Promise<Response> => {
        const result = await fetch(`${url}/api/scores/${season}`)
        return result;
    }
}
