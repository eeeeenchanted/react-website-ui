import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './wallet.css';

class MyWalletPage extends Component {
    state = {
        balance: this.props.userLogin ? this.props.userLogin.user.balance : ''
    };

    componentDidMount() {
        const {user} = this.props.userLogin;
        console.log(user);
        console.log("money", user.id);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            balance: nextProps.balance,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('充值');
        this.props.history.push('/recharge');
    };

    render() {
        return (
            <div className="container wallet-container" align="center">
                <h1>我的钱包</h1>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <p>余额：{this.state.balance}$</p>
                    <button className="btn btn-outline-primary btn-lg">充值</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userLogin: state.userLogin,
        testResources: state.testResources
    };
};

export default connect(mapStateToProps, {})(MyWalletPage);