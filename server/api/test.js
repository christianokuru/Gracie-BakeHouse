export default defineEventHandler(() => {
    return{
        message: `hello backend`
    }
})

// The 'event' contains information about the request if you like
// use $fetch to fetch data on the server and not useFetch.. useFetch is for the front end
//when you want to make any form of request from inside this function, always add 'async' before the function
// If you want to set a specific HTTP Method in your server API, rename the file using that http method e.g test.get.js or users.post.js
// 