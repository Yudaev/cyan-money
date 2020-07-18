import {handleActions} from 'redux-actions';

import { failureItem, failureOperations, successItem, successOperations } from "../actions/operations";


const initialState = {
  items: [],
  loadOperationsError: '',
  itemError: '',
};

export default handleActions({
  [successOperations]: (store, { payload: items }) => {
    return {
      ...store,
      items,
      loadOperationsError: null,
    }
  },
  [failureOperations]: (store, { payload }) => {
    return {
      ...store,
      loadOperationsError: payload,
    }
  },
  [successItem]: (store, { payload }) => {
    return {
      ...store,
      items: [ ...store.items, payload],
      itemError: null,
    }
  },
  [failureItem]: (store, { payload }) => {
    return {
      ...store,
      itemError: payload,
    }
  },
}, initialState);
