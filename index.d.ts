

export as namespace ORState;

export function createStateObject<T>(initialState: any): StateService<T>;
export function createStateManager<T, U extends StateService<T>>(stateService: U): [T, U];
export function createSimpleState<T>(stateService: StateService<T>): [T, (nextState: T) => void];

export interface StateService<T> {
    stateObject: BehaviorSubject<T>,
    subscribe: (setState: React.Dispatch<React.SetStateAction<T>>) => Subscription,
    set: (nextState: T) => void
    clear: () => void
}











