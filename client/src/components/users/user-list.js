import React, { Component } from 'react'
import userService from './../../util/user.service'

export default class UserList extends Component {
    constructor() {
        super()
        this.state = {
            userlist: null
        }
    }
    getUserslist() {
        userService('https://jsonplaceholder.typicode.com/users', (userlist) => {
            this.setState({ userlist: userlist.data })
        }, (err) => console.log(err))

        return (this.state.userlist ? this.state.userlist.map(user => <li key={user.id}>{user.name}</li>) : <li>Loading ...</li>)
    }
    render() {
        return (
            <div>
                <ul>
                    {this.getUserslist()}
                </ul>
            </div>
        )
    }
}