import React from 'react';

const AddPlayerForm = (props) => {
  let _name;

  const submit = (e) => {
    e.preventDefault();
    props.addPlayer({
      name: _name.value
    })
    _name.value = ''
  }

  return(
    <form onSubmit={submit.bind(this)}>
      <h4>Add Players</h4>
      <div className="form-group">
        <label htmlFor="name">Player Name</label>
        <input ref={input => _name = input} className="form-control" id="name" type='text' required />
        <button type="submit" className="btn btn-primary">Add Player</button>
      </div>
    </form>
  );
}

export default AddPlayerForm;
