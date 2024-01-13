type Action = {
  type: string;
  payload: object | string | number;
};

const createActionName = (actionName: string) => `app/posts${actionName}`;

const postsReducer = (statePart: [] = [], action: Action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default postsReducer;
