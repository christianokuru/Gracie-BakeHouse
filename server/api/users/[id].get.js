export default defineEventHandler( (event) => {
    const name = getRouterParam(event, 'id')
     return `Your ID is, ${name}`
})

//when you want to make any form of request from inside this function, always add 'async' before the function
// the 'getRouterParams(event)' function gets the current id of the dynamic route