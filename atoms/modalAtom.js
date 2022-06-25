import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const postIdState = atom({
  key: "postIdState",
  default: "",
});

const defaultUserState = {};

export const userState = atom({
  key: "userState",
  default: null,
});