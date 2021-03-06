import React, { Component } from 'react'
import ChatScreen from './ChatScreen'
import SideBar from '../../components/Sidebar/Sidebar'

class Chat extends Component {
  constructor() {
    super()
    this.state = {
      currentUsername: '',
      currentScreen: 'WhatIsYourUsernameScreen'

    }
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
  }

  onUsernameSubmitted(username) {
    //  fetch('http://localhost:3001/users', {
     fetch('https://querumconselhoapi.herokuapp.com/users', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
      .then(response => {
        this.setState({
          currentUsername: username,
          currentScreen: 'ChatScreen'

        })
      })
      .catch(error => console.error('error', error))
  }
  
  render() {
    //  if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
    //    return <UsernameForm onSubmit={this.onUsernameSubmitted} />
    //  }
    return <ChatScreen currentUsername={'Samanta'}/>
  
  }
}

export default Chat