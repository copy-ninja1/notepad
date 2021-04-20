import faker from "faker";
import { selector, useRecoilState, useRecoilValue } from "recoil";
import { __notes } from "./state";

const genaratefakeNotes = () => {
  let notes = [];
  for (let note = 0; note < 10; note++) {
    notes.push({
      title: faker.lorem.words(3),
      message: faker.lorem.words(50),
    });
  }
  return notes;
};

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
