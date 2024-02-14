import { createContext } from "react";

export type ContextProductCountType = {
  contextProductCount: number;
  setContextProductCount: (ContextProductCount: number) => void;
};

export const ContextProductCount = createContext<ContextProductCountType>({
  contextProductCount: 0,
  setContextProductCount: () => {},
});