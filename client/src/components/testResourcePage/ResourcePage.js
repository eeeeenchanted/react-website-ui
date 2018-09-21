import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ResourceList from './ResourceList';
import {fetchResources} from '../../actions/testResourceAction';
import {NavLink} from "react-router-dom";

class ResourcePage extends Component {
    componentDidMount() {
        const {user} = this.props.userLogin;
        this.props.fetchResources(user.id);
    }

    render() {
        return (
            <div>
                <div className="ui secondary menu">
                    <NavLink exact activeClassName="active" to="/resources"
                                 className="link item">所有权下的资源</NavLink>
                    <NavLink exact activeClassName="active" to="/testResources"
                                 className="link active item">阅读权下的资源</NavLink>
                </div>
                <div className="container mb-3">
                    
                    <ResourceList testResources={this.props.testResources} />
                </div>
            </div>
        );
    }
}

ResourcePage.propTypes = {
    testResources: PropTypes.array.isRequired,
    fetchResources: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        userLogin: state.userLogin,
        testResources: state.testResources
    };
};

export default connect(mapStateToProps, {fetchResources})(ResourcePage);
