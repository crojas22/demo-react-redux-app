import React from 'react';
import Row from './Row';
import {Link} from 'react-router-dom';
import { removeDay } from '../actions/calendar';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const List = (props) => {
  const filteredDays = (!props.filter || !props.filter.match(/vacation|work/)) ?
    props.days :
    props.days.filter(day => day[props.filter])
  return(
    <table className="table">
      <thead className="thead-default">
        <tr>
          <th>Date</th>
          <th>Location</th>
          <th>Vacation</th>
          <th>Work</th>
        </tr>
        <tr>
          <td colSpan={4}>
            <Link to="/list-days">
              All Days/
            </Link>
            <Link to="/list-days/vacation">
              Vacation Days/
            </Link>
            <Link to="/list-days/work">
              Work Days
            </Link>
          </td>
        </tr>
      </thead>
      <tbody>
        {filteredDays.map((day, index) => (
          <Row  key={index}
            {...day}
            index={index}
            remove={props.removeDay}
          />
        ))}
      </tbody>
    </table>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({removeDay: removeDay}, dispatch);
};


export default connect(null, mapDispatchToProps)(List);
