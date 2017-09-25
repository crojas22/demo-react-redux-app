import React from 'react';

const Player = (props) => {
  let _name;

  const changeName = () => {
    console.log(_name.value);
    props.editPlayerName({
      index: props.index,
      name: _name.value
    })
  }

  return(
    <div>
      <h4>
        {(!props.isEditing) ? <span>{props.name.toUpperCase()}</span> :
          <input ref={input => _name = input} placeholder={props.name.toUpperCase()}></input>}
          <button onClick={() => props.removePlayer(props.index)}
          className="btn btn-danger"> x </button>

        {(!props.isEditing) ? <button onClick={() => props.editPlayerName(props.index, props.name)}
          className="btn btn-primary">Edit</button> :
          <button onClick={() => props.editPlayerName(props.index, _name.value)}
          className="btn btn-success">Save</button>}
      </h4>
      <div>
        <button onClick={() => props.updatePlayerScore(props.index, -1)}
          className="btn btn-warning"> - </button>
        <button className="btn btn-light">{props.score}</button>
        <button onClick={() => props.updatePlayerScore(props.index, 1)}
          className="btn btn-success"> + </button>
      </div>
    </div>
  );
}

export default Player;
