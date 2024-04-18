import db from '../models'
import bcrypt from 'bcrypt'

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8))

export const register = ({fullname, username, password}) => new Promise( async (resolve, reject) => {
    try {
        const response = await db.User.findOrCreate({
            where : { username: username },
            defaults: {
                fullname,
                username,
                password: hashPassword(password)
            }
        })
        resolve({
            err: response[1] ? 0 : 1,
            message: response[1] ? 'Register is successfully' : 'Email is used'
        })
        console.log('after resolve')
    } catch (error) {
        reject(error)
    }
})