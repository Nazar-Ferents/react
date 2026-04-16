const baseURL = "https://jsonplaceholder.typicode.com/";

export const JSONUrls = {
    users:{
        allUsers: baseURL + 'users'
    },
    posts:{
        allPosts: baseURL + 'posts',
        postsByUserID: (id:number) => {
            return baseURL + 'posts/' + id +'/comments';
        }
    },
    comments:{
        allComments: baseURL + 'comments',
        commentsByPostID: (id:number) => {
            return baseURL + 'comments?postId=' + id;
        }
    }
}