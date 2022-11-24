import { Note } from "../modal/note";

const storage = {
  get: (key:string) => {
    const item: string | null = localStorage.getItem(key);
    try {
      return JSON.parse(item || "");
    } catch (e) {
      return item;
    }
  },
  set: (key:string, value:Note[]) => localStorage.setItem(key, JSON.stringify(value) || ""),
  remove: (key:string) => localStorage.removeItem(key),

};

export default storage;