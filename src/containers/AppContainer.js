import { connect } from 'react-redux';
import { fetchData } from '../actions/DataActions';
import AppWrapper from '../components/App/AppWrapper';

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, state, ownProps);
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: id => dispatch(fetchData(id))
    }
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppWrapper);

export default AppContainer;