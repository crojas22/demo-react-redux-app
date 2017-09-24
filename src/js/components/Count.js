import React from 'react';

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal)
}

const Count = ({total=10, vacation=4, work=15, goal=100, playersLength, totalPoints}) => (
  <div>
    <div>
      <div>
        <h3> Total Days: {total}</h3>
      </div>
      <div>
        <span> Vacation: {vacation}</span>
      </div>
      <div>
        <span> Work: {work}</span>
      </div>
      <div>
        <span> Goal: {calcGoalProgress(total, goal)} </span>
      </div>
    </div>
    <div>
      <h3>Total Players: {playersLength}</h3>
      <div>
        <span>Total Points: {totalPoints}</span>
      </div>
    </div>
  </div>
)

export default Count;
