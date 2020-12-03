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
}

export async function postNewPostLike(postID , newLike , likeOwner) {
    await DataService.patch(`facebook-post/${postID}/${newLike}`, likeOwner)
}

export async function updateExistPost(postID , msgValue) {
    const updatedData = await DataService.patch(`facebook-post/${postID}`, msgValue)
    return updatedData
}

//friend frquests 
export async function dealWithFriendRequest(requestType, currentUser , profile) {
    await DataService.patch(`facebook-profile/send-request?request=${requestType}`,
    {
     userPath: currentUser,
     profilePath: profile,
   });
   await DataService.patch(`facebook-profile/get-request?request=${requestType}`, 
   {
     userPath: currentUser,
     profilePath: profile,
   });
}

export async function approveFriendRequest(userPath , profileToUpdate) {
    await DataService.patch(`facebook-profile/getFriendRequest`, {
        userPath: userPath,
        profilePath: profileToUpdate,
    })
}

export async function requestFriendRequest(userPath , profileToUpdate) {
    await DataService.patch(`facebook-profile/rejectFriendRequest`, {
        userPath: userPath,
        profilePath: profileToUpdate,
    })
}