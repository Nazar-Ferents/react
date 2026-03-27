const baseUrl = "https://dummyjson.com"

export const dummyURLS = {
    users:{
        allUsers: baseUrl + '/users'
    },
    carts:{
        allCarts: baseUrl + '/carts',
        cartsByUserId: (id: number) => {
            return baseUrl + '/carts/user/' + id;
        }
    }
}