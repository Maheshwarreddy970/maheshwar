import { atom } from "recoil";


export const Navbartab = atom({
    key: 'currtab', // unique ID (with respect to other atoms/selectors)
    default: 'home', // default value (aka initial value)
  });