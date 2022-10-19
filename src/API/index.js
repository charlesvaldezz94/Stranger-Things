// const BASE = 'https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT'

    export async function getUser(){
      try {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT')
        const result = await response.json()
    } catch (err) {
        throw err
    }  
    }

    const BASE_URL = 'https://strangers-things.herokuapp.com/api'
    const COHORT = '2209-FTB-ET-WEB-FT'
    export async function getPost() {
        try{
            const response = await fetch(`${BASE_URL}/${COHORT}/posts`)
            const result = await response.json()
            const posts = result.data.posts
            return posts}
            catch (err) {
                console.error(err);
            }

    }
    const test = getPost()
