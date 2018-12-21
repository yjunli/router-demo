import {
    Route,
    Redirect
} from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
    render() {
        let { log, location, ...other } = this.props;
        let component = log ?
            <Route {...other} /> :
            <Redirect
                to={{
                    pathname: "/log"
                }}
            />

        return component;
    }
}

const mapStateToProps = (state) => {
    return state.log
}

export default connect(mapStateToProps, null)(PrivateRoute)