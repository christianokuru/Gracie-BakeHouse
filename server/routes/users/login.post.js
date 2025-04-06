// import mongoose from 'mongoose'

// // Optional: define a sample user model (if you haven't yet)
// const UserSchema = new mongoose.Schema({
//   email: String,
//   password: String, // Note: this should be hashed in real apps!
// })

// const User = mongoose.models.User || mongoose.model('User', UserSchema)

// export default defineEventHandler(async (event) => {
//   try {
//     const body = await readBody(event)

//     const { email, password } = body

//     if (!email || !password) {
//       return {
//         error: true,
//         message: 'Email and password are required',
//       }
//     }

//     // 💡 In real life, you'd hash & compare passwords securely.
//     const user = await User.findOne({ email })

//     if (!user) {
//       return {
//         error: true,
//         message: 'No user with this email',
//       }
//     }

//     if (user.password !== password) {
//       return {
//         error: true,
//         message: 'Incorrect password',
//       }
//     }

//     // You'd return a token here, but for now:
//     return {
//       success: true,
//       message: 'Login successful!',
//       user: {
//         email: user.email,
//       },
//     }
//   } catch (err) {
//     return {
//       error: true,
//       message: err.message,
//     }
//   }
// })
