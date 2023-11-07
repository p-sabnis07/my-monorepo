export type UpdateStateFunction = (newState: any) => void;
export declare const createReactivity: () => [any, UpdateStateFunction];
