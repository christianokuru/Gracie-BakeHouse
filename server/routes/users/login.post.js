import User from '@/server/models/User' 
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  try {
    // 1. Read the body of the request
    const body = await readBody(event)

    const { email, password } = body

    const config = useRuntimeConfig()
    const secret = config.JWT_SECRET

    // 2. Check if email and password are provided
    if (!email || !password) {
      return {
        error: true,
        message: 'Email and password are required',
      }
    }

    // 3. Find the user by email
    const user = await User.findOne({ email })
    console.log(user.password)
    
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

    // 5. Generate a JWT token and return the detials
    const token = jwt.sign({ email: user.email }, secret, { expiresIn: '1H' })
    return {
      success: true,
      message: 'Login successful!',
      user: {
        email: user.email,
      },
      token,
    }

  } catch (err) {
    // 6. Handle any errors that happen during the process
    return {
      error: true,
      message: err.message,
    }
  }
})
