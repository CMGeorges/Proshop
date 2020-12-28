
import bcrypt from 'bcryptjs'



const  users = [
    {
        name:'Admin User',
        email: 'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Flouflou flu',
        email: 'flouflou@example.com',
        password:bcrypt.hashSync('123456',10)
    },
    {
        name:'ClairClair clu',
        email: 'clairclair@example.com',
        password:bcrypt.hashSync('123456',10)
    },
]


export default users