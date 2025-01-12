import { Injectable } from '@nestjs/common';
import { users } from 'db';

@Injectable()
export class UserService {
    private usersDB = users
    getAllUsers(quereis:any){
        let userList  = this.usersDB
        if(quereis.email){
            userList = users.filter(user => user.email == quereis.email)
        }
        if(quereis.name){
            userList = users.filter(user => user.name == quereis.name)
        }
        if(quereis.age){
            userList = users.filter(user => user.age == quereis.age)
        }

        return userList
    }

    createUser (payload: any){
        this.usersDB.push({...payload , id: this.usersDB.length + 1})
        return payload
    }
    getUserById(id: number){
        return this.usersDB.find(user => user.id === id)
    }

    deleteUserById(id: number){
        this.usersDB = this.usersDB.filter(user => user.id !== id)
        return users.find(user => user.id == id)
    }

    updateUserById(id: number , payload: any){
        let user = this.usersDB.find(user => user.id == id)
        user = {...user , ...payload}   
        this.usersDB = this.usersDB.map(item => (item.id === id) ? user : item)

        return user
    }
}
