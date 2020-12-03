import DataService from '../db-connection/DataService'

export async function getUserData(token) {
    const user = await DataService.getAuth("users/me", token)
    return user
}

export async function createNewPost(data) {
    await DataService.create("facebook-post", data)
}

export async function getUserFeedProfile(userPath) {
    const postToShow = await DataService.get(`facebook-post/feed/${userPath}`)
    return postToShow
}

export async function getUserProfile(userPath) {
    const postToShow = await DataService.get(`facebook-post/profile/${userPath}`)
    return postToShow
}


export async function getPostData(postID) {
    const postData = await DataService.get(`facebook-post/get-post/${postID}`);
    const postCommentsArr = await DataService.get(`facebook-post/post/${postID}`);
    return {postData , postComments:postCommentsArr}
}

export async function postNewPostComment(postID , commentData) {
    await DataService.patch(`facebook-comment/${postID}`, commentData);
    return
}

export async function postNewPostLike(postID , newLike , likeOwner) {
    await DataService.patch(`facebook-post/${postID}/${newLike}`, likeOwner)
    return
}

export async function updateExistPost(postID , msgValue) {
    const updatedData = await DataService.patch(`facebook-post/${postID}`, msgValue)
    return updatedData
}