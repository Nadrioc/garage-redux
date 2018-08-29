import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCars } from '../actions'

class CarsIndex extends Component {

  componentDidMount() {
    this.props.fetchCars();
  }

  renderCars(){
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="post-item">
            <h3>{car.brand} {car.model}</h3>
            <p>{car.owner}</p>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderCars()}
        <Link className="btn btn-primary btn-cta" to="/cars/new">
          Add a Car Mr Bond
        </Link>
      </div>
    );
  }

}

function mapStateToProps(reduxState) {
  return {
    cars: reduxState.cars
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
