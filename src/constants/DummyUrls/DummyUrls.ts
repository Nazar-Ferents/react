const baseURL = 'https://dummyjson.com/';

export const DummyUrls = {
    users:{
        allUsers: baseURL + 'users'
    },
    posts:{
        allPosts: baseURL + 'posts',
        postsByUserID: (id:number) => {
            return baseURL + 'posts/user/' + id;
        }
    },
    comments:{
        allComments: baseURL + 'comments',
        commentsByPostID: (id:number) => {
            return baseURL + 'comments/post/' + id;
        }
    }
}