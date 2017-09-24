import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {itemsFetchData} from '../actions/users';
import Users from './Users';

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchData('https://randomuser.me/api/?results=10');
    }

    render(){
      return(
        <div className="album text-muted">
          <div className="container fluid">
            <div className="row">
              {this.props.items.map((item, index) => {
                return <Users key={index}
                              index={index}
                              first={item.name.first}
                              last={item.name.last}
                              picture={item.picture.large}
                              phone={item.phone}
                              street={item.location.street}
                              city={item.location.city}
                              state={item.location.state}
                />
              })}
            </div>
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchData: itemsFetchData}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
