const BASE_URL = 'https://strangers-things.herokuapp.com/api'
const COHORT = '2209-FTB-ET-WEB-FT'


    export async function getUser(){
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                user: {
                    username,
                    password
                }
            })
        }
        const response = await fetch(`${BASE_URL}/${COHORT}/users/login`, options)
        const result = await response.json()
        return result.data
    }

    
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
    export async function createUser(username, password) {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                    user: {
                        username,
                        password
                    }
                })
            }
            const response = await fetch(`${BASE_URL}/${COHORT}/users/register`, options)
            const result = await response.json()
            return result.data
    }
