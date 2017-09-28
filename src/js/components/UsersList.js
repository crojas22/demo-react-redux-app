import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {itemsFetchData} from '../actions/users';
import Users from './Users';
import '../../css/style.css';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchData('https://randomuser.me/api/?results=10');
  }

  render(){
    return(
      // will add loading icon while waiting for item to be loaded
      this.props.isLoading ? <div className="loaderContainer">
        <div className='loader mx-auto'></div></div> :
        <div className="album text-muted">
          <div className="container">
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
                  items={this.props.items}
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
  return bindActionCreators({fetchData: itemsFetchData}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
