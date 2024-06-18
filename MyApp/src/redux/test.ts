import { useState, useCallback, useEffect } from "react";
import { storage } from "@/utils";
import { STORAGE_KEYS } from "@/constants";
import { useStateX, setStateForKey } from "react-native-redux";

const KEY = STORAGE_KEYS.TEST;

export const testForInitialState = {
  [KEY]: {
    count: 0,
  }
};

export const useTest = () => {
  const test: any = useStateX(KEY);

  const setCountAddforTest = () => {
    setStateForKey(KEY, {
      count: test.count + 1,
    });
  }

  const setTest = (data: any) => {
    setStateForKey(KEY, data);
  }

  return {
    test,
    setTest,
    setCountAddforTest,
  };
};
