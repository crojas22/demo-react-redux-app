import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from './header/Header';
import List from './List';
import Count from './Count';
import AddDayForm from './AddDayForm';
import Menu from './Menu';
import UsersList from './UsersList';
import PlayersList from './PlayersList';
import { addDay } from '../actions/calendar';

class Main extends Component {
  countDays(filter) {
    return this.props.days.filter((day) =>
      (filter) ? day[filter] : day).length
  }

  // addDay(newDay) {
  //   this.setState({
  //     days: [
  //       ...this.state.days,
  //       newDay
  //     ]
  //   })
  // }

  render() {
    const totalPoints = this.props.players.reduce((total, player) => {
      return total + player.score;
    }, 0);

    return (
      <div className="container">
        <Header title="React/Redux"/>
        <Menu />
        {
          (this.props.location.pathname === "/") ?
              <Count total={this.countDays()}
                   vacation={this.countDays('vacation')}
                   work={this.countDays('work')}
                   playersLength={this.props.players.length}
                   totalPoints={totalPoints}
              /> :
          (this.props.location.pathname === "/add-day") ?
              <AddDayForm onNewDay={this.props.addDay.bind(this)}
              /> :
          (this.props.location.pathname === "/users") ?
              <UsersList
              /> :
          (this.props.location.pathname === "/players") ?
              <PlayersList
              /> :
              <List days={this.props.days}
                    filter={this.props.match.params.filter}
              />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    days: state.calendar,
    players: state.players
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addDay: addDay}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
