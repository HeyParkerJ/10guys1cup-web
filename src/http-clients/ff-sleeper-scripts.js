// const url = process.env.NODE_ENV === 'production' ? 'https://10guys1cup.com/api' : 'localhost:3001'
const url = 'http://localhost:3001'
export default {
    fetchScoreStats: async (seasonID) => {
        console.log('url', url)
        console.log('env', process.env.NODE_ENV)
        return await fetch(`${url}/stats/scores/${seasonID}`)
        // return await fetch(`${ url } / api / scores / ${ seasonID }`)
    }
}
