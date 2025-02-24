import { atom } from "recoil";

export const todoListState = atom({
   key: "todoListState",
   default: [],
});

export const todoPopupState = atom({
   key: "todoPopupState",
   default: false,
});

export const todoInput = atom({
   key: "todoInput",
   default: {
      todo: "",
      priority: "별로 안급해",
   },
});
