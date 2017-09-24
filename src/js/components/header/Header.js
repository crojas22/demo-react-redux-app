import React from 'react';

const style ={
  color: 'blue'
}

let Header = (props) => (
  <h1 className="text-center" style={style}>{props.title}</h1>
)


export default Header;
