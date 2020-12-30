import mongoose from 'mongoose'
import bcryptjs from 'bcryptjs'


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

//methods
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcryptjs.compare(enteredPassword,this.password)
}

//middleware
/**
 * to encrypte the password on create only but not in modify
 */
userSchema.pre('save',async function (next) {

  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcryptjs.genSalt(10)
  this.password = await bcryptjs.hash(this.password,salt)
  
})

const User = mongoose.model('User', userSchema)

export default User
