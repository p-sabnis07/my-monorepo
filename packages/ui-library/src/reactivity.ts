// export type UpdateStateFunction = (newState: any) => void;

// export const createReactivity = (): [any, UpdateStateFunction] => {
//   let state: any = { count: 0 }

//   const updateState: UpdateStateFunction = (newState: any) => {
//     state = { ...state, ...newState };
//   };

//   return [state, updateState];
// };



export type UpdateStateFunction<T> = (prevState: T) => T;

export const createReactivity = <T>(initialState: T): [T, UpdateStateFunction<T>] => {
  let state: T = initialState;

  const updateState: UpdateStateFunction<T> = (newState: T) => {
    state = { ...state, ...newState };
    return state; // If needed, you can return the updated state
  };

  return [state, updateState];
};


