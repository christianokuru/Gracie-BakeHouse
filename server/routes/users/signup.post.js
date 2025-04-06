import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import User from '@/server/models/User'

export default defineEventHandler(async (event) => {
    // Get the body from the client side (frontend or Thunderclient)
    const body = await readBody(event)  // Ensure you await the body reading

    // Destructure to get the email and password values
    const { email, password } = body

    // Validate or check whether the email and passwords are present in the request
    if (!email || !password) {
        return sendError(event, createError({ statusCode: 400, statusMessage: 'Please provide email and password' }))
    }

    // Check if the user already exists in the database
    const checkExistingUser = await User.findOne({ email })
    if (checkExistingUser) {
        return sendError(event, createError({ statusCode: 409, statusMessage: 'This user already exists' }))
    }

    // Hash the password asynchronously
    const salt = await bcrypt.genSalt(10)  // Await the genSalt call
    const hashedPassword = await bcrypt.hash(password, salt)  // Await the hash call

    // Add user to database
    const addNewUser = new User({ email, password: hashedPassword })
    await addNewUser.save()

    // Return a response to the client
    return {
        message: 'User created successfully',
        userId: addNewUser._id,
    }
})
