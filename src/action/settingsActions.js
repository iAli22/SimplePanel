import {
  DISABEL_BALANCE_ON_ADD,
  DISABEL_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION
} from "./type";

export const setDisableBalanceOnAdd = () => {
  // Get Settings from Localstorge
  const settings = JSON.parse(localStorage.getItem("settings"));

  // Toggel
  settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;
  // set to localstoreg
  localStorage.setItem("settings", JSON.stringify(settings));

  return {
    type: DISABEL_BALANCE_ON_ADD,
    payload: settings.disableBalanceOnAdd
  };
};

export const setDisableBalanceOnEdit = () => {
  // Get Settings from Localstorge
  const settings = JSON.parse(localStorage.getItem("settings"));

  // Toggel
  settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;
  // set to localstoreg
  localStorage.setItem("settings", JSON.stringify(settings));

  return {
    type: DISABEL_BALANCE_ON_EDIT,
    payload: settings.disableBalanceOnEdit
  };
};

export const allowRegistration = () => {
  // Get Settings from Localstorge
  const settings = JSON.parse(localStorage.getItem("settings"));

  // Toggel
  settings.allowRegistration = !settings.allowRegistration;
  // set to localstoreg
  localStorage.setItem("settings", JSON.stringify(settings));
  return {
    type: ALLOW_REGISTRATION,
    payload: settings.allowRegistration
  };
};
