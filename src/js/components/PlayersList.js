import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
import Stopwatch from './Stopwatch';
import { addPlayer, removePlayer, updatePlayerScore, editPlayerName } from '../actions/players';

const PlayersList = (props) => {
  return(
    <div>
      <Stopwatch />
      <AddPlayerForm addPlayer={props.addPlayer.bind(this)} />
      {props.players.map((player, index) => {
        return <Player
                  index={index}
                  name={player.name}
                  score={player.score}
                  key={player.name}
                  isEditing={player.isEditing}
                  updatePlayerScore={props.updatePlayerScore.bind(this)}
                  removePlayer={props.removePlayer.bind(this)}
                  editPlayerName={props.editPlayerName}
                />
      })}
    </div>
  );
}

const mapStateToProps = state => (
  {
    players: state.players
  }
);

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addPlayer: addPlayer, removePlayer: removePlayer, updatePlayerScore:
      updatePlayerScore, editPlayerName: editPlayerName}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersList);
