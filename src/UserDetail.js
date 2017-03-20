import React from 'react';

const UserDetail = ({ user, onSelect })=> <div className='well' onClick={()=> onSelect(null) }>{ user.name }</div>;

export default UserDetail;
