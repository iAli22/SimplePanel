import {
  DISABEL_BALANCE_ON_ADD,
  ALLOW_REGISTRATION,
  DISABEL_BALANCE_ON_EDIT
} from "../action/type";

export default function(state = {}, action) {
  // Taggle Setting True To False
  switch (action.type) {
    case DISABEL_BALANCE_ON_ADD:
      return {
        ...state,
        disableBalanceOnAdd: action.payload
      };
    case DISABEL_BALANCE_ON_EDIT:
      return {
        ...state,
        disableBalanceOnEdit: action.payload
      };
    case ALLOW_REGISTRATION:
      return {
        ...state,
        allowRegistration: action.payload
      };
    default:
      return state;
  }
}
