import User from '@/server/models/User' 
import bcrypt from 'bcryptjs'

export default defineEventHandler(async (event) => {
  try {
    // 1. Read the body of the request
    const body = await readBody(event)

    const { email, password } = body

    // 2. Check if email and password are provided
    if (!email || !password) {
      return {
        error: true,
        message: 'Email and password are required',
      }
    }

    // 3. Find the user by email
    const user = await User.findOne({ email })

    if (!user) {
      return {
        error: true,
        message: 'No user with this email',
      }
    }

    // 4. compare and check if the password matches the hash in the database
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
      return {
        error: true,
        message: 'Incorrect password',
      }
    }

    // 5. Respond with a success message (return a token in a real app)
    return {
      success: true,
      message: 'Login successful!',
      user: {
        email: user.email,
      },
    }
  } catch (err) {
    // 6. Handle any errors that happen during the process
    return {
      error: true,
      message: err.message,
    }
  }
})
