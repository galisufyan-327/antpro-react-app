import { customList, postList } from './service';
const Model = {
  namespace: 'listAndbasicList',
  state: {
    list: [],
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(customList, payload);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response) ? response : [],
      });
    },
    *fetch({ payload }, { call, put }) {
    const response = yield call(postList, payload);
      yield put({
      type: 'queryList',
      payload: Array.isArray(response) ? response : [],
    });
    },
  },
  reducers: {
    queryList(state, action) {
      return { ...state, list: action.payload };
    }
  },
};
export default Model;
