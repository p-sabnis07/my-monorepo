export type LifecycleFunction = () => void;

export const createLifecycle = (mount: LifecycleFunction) => mount;
