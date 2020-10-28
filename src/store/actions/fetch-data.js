import { data } from '../../data';

export const fetchData = () => (dispatch) => {
  dispatch({ type: 'UPDATE_OPTIONS', payload: data.options });
};
