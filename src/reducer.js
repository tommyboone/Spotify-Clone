export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    //Remove after finished developing
    "BQDWXMOwi2GePU_nQFr9BClxEeaZ0cekuDzTITnwCT1zh0qtTmWcX9y86s_bYO2tguuTEpwYIjJ_SYIKT_HPSDILTh9KQK4eXXV0jAVvIiszvmYpGhyx5_ueVFG-ToU8YxvsdtlSdmdSP5QWH-VgAPsa3krO",
};

const reducer = (state, action) => {
  console.log("ACTION!!!!!!", action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
