const BASE_URL = 'https://strangers-things.herokuapp.com/api'
const COHORT = '2209-FTB-ET-WEB-FT'

export async function getUser(token) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await fetch(`${BASE_URL}/${COHORT}/users/me`, options)
    const result = await response.json()

    return result
}
export async function userLogin(username, password) {
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
    try {
        const response = await fetch(`${BASE_URL}/${COHORT}/posts`)
        const result = await response.json()
        const posts = result.data.posts
        return posts
    }
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



export async function updatePost() {
    try {
        const token = localStorage.getItem("token")
        const response = await fetch(`${BASE_URL}/${COHORT}/posts/POST_ID`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            post: {
                title,
                description,
                price,
                location,
                willDeliver: true
            }
        })
    })
        const data = await response.json()
    } catch (error) {
        console.log(error)
    }
}
