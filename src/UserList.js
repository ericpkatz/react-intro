import React from 'react';

const UserItem = ({ user, onRemoveUser, onSelect }) => (
  <li className='list-group-item' onClick={()=> onSelect(user)}>{ user.name } <a onClick={ ()=> onRemoveUser(user) }>x</a></li>);

const UserList = ({ users, onRemoveUser, onSelect })=> (
  <ul className='list-group'>
    { users.map( user => <UserItem onSelect={onSelect} key={user.id} user={ user} onRemoveUser={ onRemoveUser }/>) }
  </ul>
); 

export default UserList;
