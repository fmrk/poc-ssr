import { RECEIVE_API_DATA, REQUEST_API_DATA } from "../actions";

export default (state = { comics: [], id: 0, isFetching: false }, { type, payload }) => {
  switch (type) {
    case RECEIVE_API_DATA:
        const { comic, id } = payload;
        return { comics: [...state.comics, comic], id, isFetching: false };
    case REQUEST_API_DATA:
        return { ...state, isFetching: true };
    default:
      return state;
  }
};
