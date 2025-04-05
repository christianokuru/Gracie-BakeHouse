import mongoose from 'mongoose'

export default defineNitroPlugin(async (plugin) => {
   mongoose.connect(useRuntimeConfig().MONGO_URI) 
   console.log('connected to the database')
})