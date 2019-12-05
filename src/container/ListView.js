import { connect } from 'react-redux';
import { fetchProperty } from '../actions';
import ListView from '../components/ListView';


export const mapStateToProps = (state) => {
    return {
        list: state.propertyReducer.data
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        fetchProperty: () => {
            return dispatch(fetchProperty.getPropertyList());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListView);