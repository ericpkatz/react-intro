import React from 'react';
import axios from 'axios';
import UserDetail from './UserDetail';
import UserList from './UserList';

class App extends React.Component{
  constructor(){
    super();
    this.state = { users: []};
    this.onRemoveUser = this.onRemoveUser.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }
  componentDidMount(){
    axios.get('/api/users')
    .then( response => response.data)
    .then( users => this.setState({ users }));
  }
  onSelect(user){
    this.setState({ user: user });
  }
  onRemoveUser(user){
    const users = this.state.users.filter( _user => _user.id !== user.id );
    this.setState({ users });
    axios.delete(`/api/users/${user.id}`)
      .then( ()=> console.log('removed'));
  }
  render(){
    let view =  <UserList users={ this.state.users } onSelect={this.onSelect} onRemoveUser={ this.onRemoveUser }></UserList>;
    if(this.state.user)
      view = <UserDetail user={ this.state.user } onSelect={this.onSelect }/>;
    return (
    <div className='container'>
      <h1>Acme Users</h1>
      { view }
    </div>
    );
  }
}

export default App;
