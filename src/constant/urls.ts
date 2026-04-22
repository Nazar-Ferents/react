const baseURL = "https://jsonplaceholder.typicode.com"

export const urls = {

    users: {
        getUsers: baseURL + "/users",
    },
    posts:{
        getPosts: baseURL + "/posts",

    },
    comments: {
        getComments: baseURL + "/comments",
    }
}