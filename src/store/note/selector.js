import { selector } from "recoil";
import { __notes } from "./state";

export const getAllNotes = selector({
  key: "_newNote",
  get: ({ get }) => {
    const response = get(__notes);
    if (response.error) {
      throw response.error;
    }
    console.log("response: ", response);
    return response;
  },
});

export default getAllNotes;
