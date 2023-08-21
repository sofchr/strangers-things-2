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
