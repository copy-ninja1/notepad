import { atom } from "recoil";
const localStorageEffect = (key) => ({ setSelf, onSet }) => {
  const savedValue = localStorage.getItem(key);
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }
  onSet((newValue) => {
    // let _data = JSON.parse(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  });
};
export const __notes = atom({
  key: "noteState",
  default: [],
  effects_UNSTABLE: [localStorageEffect("savedNotes")],
});
export const products = atom({
  key: "products",
  default: [],
});
