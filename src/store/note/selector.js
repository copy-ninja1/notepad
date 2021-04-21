import { selector } from "recoil";
import { __notes } from "./state";

export const getAllNotes = selector({
  key: "_newNote",
  get: ({ get }) => {
    const response = get(__notes);
    return response;
  },
});
// export const getNoteByID = selector({
//   key: "noteId",
//   get: ({ get }) => {
//     const allNotes = get(__notes);

//     if (allNotes) {
//       const note = allNotes.find((val, index) => {
//         return val.id === id;
//       });
//       console.log("note>>", note);

//       return note;
//     }
//   },
// });

export default getAllNotes;
