import mongoose from 'mongoose'

export default defineEventHandler(async () => {
  // Optional safety check to avoid crash if not connected
  if (mongoose.connection.readyState === 0) {
    return {
      error: true,
      message: 'MongoDB is not connected yet.',
    }
  }

  // List all collections in the connected DB
  const collections = await mongoose.connection.db.listCollections().toArray()

  return {
    message: '✅ Mongo is working fine!',
    collections: collections.map((col) => col.name),
  }
})


// The 'event' contains information about the request if you like
// use $fetch to fetch data on the server and not useFetch.. useFetch is for the front end
//when you want to make any form of request from inside this function, always add 'async' before the function
// If you want to set a specific HTTP Method in your server API, rename the file using that http method e.g test.get.js or users.post.js
// 