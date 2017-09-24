import React from 'react';

const AddDayForm = ({country, date, vacation, work, onNewDay}) => {

  let _location, _date, _vacation, _work

  const submit = (e) => {
    e.preventDefault()
    onNewDay({
      location: _location.value,
      date: _date.value,
      vacation: _vacation.checked,
      work: _work.checked
    })
    _location.value = ''
    _date.value = ''
    _vacation.value = false
    _work.value = false
  }

  return (
    <form onSubmit={submit.bind(this)}>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input ref={input => _location = input} className="form-control" id="location"type='text' defaultValue={country} required />
        <label htmlFor="date">Date</label>
        <input ref={input => _date = input} id="date" className="form-control" type='date' defaultValue={date} required />
        <label htmlFor="vacation" className="form-check-label">
          <input ref={input => _vacation = input} className="form-check-input" name="example" type='radio' id="vacation" defaultChecked={vacation} /> Vacation
        </label>
        <br />
        <label htmlFor="work" className="form-check-label">
          <input ref={input => _work = input} className="form-check-input" name="example" type='radio' id="work" defaultChecked={work} /> Work
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Add Day</button>
    </form>
  );
}

AddDayForm.defaultProps = {
  country: "Miami",
  date: new Date().toISOString().slice(0, 10),
  vacation: false,
  work: true
}

export default AddDayForm;
