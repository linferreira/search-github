const GET_USERS_SUCESS = "@search/GET_USERS_SUCESS";
const GET_USERS_LOADING = "@search/GET_USERS_LOADING";
const GET_USERS_ERROR = "@search/GET_USERS_ERROR";

interface ISearchInitalState {
  loading: boolean;
  users: any;
  error: boolean;
  total: number;
  username: string;
}

const SEARCH_INITIAL_STATE: ISearchInitalState = {
  loading: false,
  users: [],
  error: false,
  total: 0,
  username: "",
};

function searchUsersReducer(
  state = SEARCH_INITIAL_STATE,
  action: any
): ISearchInitalState {
  switch (action.type) {
    case GET_USERS_SUCESS:
      return {
        ...SEARCH_INITIAL_STATE,
        users: action.payload.users,
        total: action.payload.total,
        username: action.payload.username,
      };

    case GET_USERS_LOADING:
      return {
        ...SEARCH_INITIAL_STATE,
        loading: true,
      };

    case GET_USERS_ERROR:
      return {
        ...SEARCH_INITIAL_STATE,
        error: true,
      };

    default:
      return state;
  }
}

export function getUsersAction(username: string) {
  return async (dispatch: any) => {
    dispatch({
      type: GET_USERS_LOADING,
    });

    try {
      const userURL = `https://api.github.com/search/users?q=${username}`;

      const usersResponse = await fetch(userURL);
      const response = await usersResponse.json();

      const users = response.items;
      const total = response.total_count;

      dispatch({
        type: GET_USERS_SUCESS,
        payload: {
          users,
          total,
          username,
        },
      });
    } catch (err) {
      console.error(err);

      dispatch({
        type: GET_USERS_ERROR,
      });
    }
  };
}

export default searchUsersReducer;
