import React from 'react';
import FaCheck from 'react-icons/lib/fa/check';

const Row = ({location, date, vacation, work, remove, index}) => (
  <tr>
    <td>
      {date}
    </td>
    <td>
      {location}
    </td>
    <td>
      {(vacation) ? <FaCheck /> : null}
    </td>
    <td>
      {(work) ? <FaCheck /> : null}
    </td>
    <td>
      <button onClick={() => remove(index)} className="btn btn-primary">x</button>
    </td>
  </tr>
)

export default Row;
