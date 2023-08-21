const COHORT = "2306-GHP-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`;

export async function fetchAllPosts() {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}



export const makePost = async (post, token) => {

    try {
        const response = await fetch(`${BASE_URL}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                'post': post
            })
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}


export async function deletePost(token, _id) {
    try {
        const response = await fetch(`${BASE_URL}/posts/${_id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}


// const updatePost = async () => {
//     try {
//         // You will need to insert a variable into the fetch template literal 
//         // in order to make the POST_ID dynamic. 
//         // 5e8d1bd48829fb0017d2233b is just for demonstration.
//         const response = await fetch(`${BASE_URL}/posts/${_id}`, {
//             method: "PATCH",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             },
//             body: JSON.stringify({
//                 post: {
//                     title: { title },
//                     description: { description },
//                     price: { price },
//                     location: { location },
//                     willDeliver: { willDeliver }
//                 }
//             })
//         });
//         const result = await response.json();
//         console.log(result);
//         return result
//     } catch (err) {
//         console.error(err);
//     }
// }