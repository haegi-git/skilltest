import { atom } from "recoil";

export const todoListState = atom({
    key: 'todoListState',
    default: ["똥싸기","양치하기"],
  });