export type LifecycleFunction = () => void;
export declare const createLifecycle: (mount: LifecycleFunction) => LifecycleFunction;
