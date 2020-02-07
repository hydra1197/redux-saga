import { SET_GLOBAL_LOADING_STATUS, SET_MODAL_DATA } from './../actionTypes/ui';

const initialState = {
  loading: {
    isLoading: false,
  },
  modal: {
    open: false,
    title: null,
    content: null
  }
};

const ui = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_GLOBAL_LOADING_STATUS:
      return {
        ...state,
        loading: {
          ...state.loading,
          isLoading: actions.payload.status
        }
      };
    case SET_MODAL_DATA:
      return {
        ...state,
        modal: {
          ...state.modal,
          open: actions.payload.status,
          title: actions.payload.title,
          content: actions.payload.content,
        }
      };
    default:
      return state;
  }
};

export default ui;