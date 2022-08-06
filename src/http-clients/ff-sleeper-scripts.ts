const url = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001'
export default {
    fetchScoreStats: async (season: any): Promise<Response> => {
        console.log('season in fetchScoreStats is', season)
        console.log('url', url)
        console.log('env', process.env.NODE_ENV)
        return await fetch(`${url}/api/scores/${season}`)
        // return await fetch(`${ url } / api / scores / ${ seasonID }`)
    }
}
