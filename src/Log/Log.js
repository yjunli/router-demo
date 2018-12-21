import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLogState } from './actions'
import { withRouter } from "react-router-dom";

const LOGIN = '登录';
const LOGOUT = '退出';

class Login extends Component {
    render() {
        let { log, changeLogState } = this.props;
        console.log(this.props)
        let text = log ? LOGOUT : LOGIN;
        return (
            <button onClick={changeLogState}>{text}</button>
        )
    }
}

const mapStateToProps = (state) => {
    return state.log
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLogState: () => dispatch(changeLogState())
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))