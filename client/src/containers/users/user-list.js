import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectUser } from './../../actions/'
import { bindActionCreators } from 'redux'

class UserList extends Component {
    constructor() {
        super()
        this.state = {
            userlist: null
        }
    }

    componentDidMount() {
         this.props.users.then(userlist => this.setState({userlist}))
    }
    getUserslist() {
        return (this.state.userlist ? this.state.userlist.map(user => <li onClick={()=> this.props.selectUser()} key={user.id}>{user.name}</li>) : <li>Loading ...</li>)
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

function mapStateToProps(state) {

    return {
        users: state.users
    };

}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectUser:selectUser},dispatch)

}

export default connect(mapStateToProps,mapDispatchToProps)(UserList)