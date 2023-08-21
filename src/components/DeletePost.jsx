export async function deletePost(token, _id) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
    //try return result.error.message
  } catch (err) {
    console.error(err);
  }
}
