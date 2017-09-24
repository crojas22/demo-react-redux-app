import React from 'react';

const style ={
  width: '20rem'
}

const Users = (props) => (
  <div className="card" style={style}>
    <img src={props.picture} className="card-img-top"/>
    <div className="card-body">
      <h4 className="card-title text-center">{`${props.first} ${props.last}`}</h4>
      <p className="card-text">{`Address: ${props.street} ${props.city}, ${props.state}`}</p>
      <p className="card-text">{`Contact Number: ${props.phone}`}</p>
    </div>
  </div>
)

export default Users;
