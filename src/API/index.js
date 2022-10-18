// const BASE = 'https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT'

    export async function getUser(){
      try {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT')
        console.log('data', response)
        const result = await response.json()
    } catch (err) {
        throw err
    }  
    }

// try {
//     const response = await fetch(
//       'https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players'
//     );
//     const result = await response.json();
//     console.log(result);
//   } catch (err) {
//     console.error(err);
//   }

// export async function getPosts() {
//     try {
//         const { data } = await getPosts(`${BASE}/posts`)
//         return data
//     } catch (err) {
//         throw err
//     }
// }