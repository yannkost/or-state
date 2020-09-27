

export as namespace ORState;

export function createStateObject<T>(initialState: any): StateService<T>;
export function createStateManager<T, U extends StateService<T>>(stateService: U): [T, U];
export function createSimpleState<T>(stateService: StateService<T>): [T, (nextState: T) => void];
export function createStateObjectStore<T>(initialState: T): StateObjectStore<T>;

export interface StateService<T> {
    stateObject: BehaviorSubject<T>,
    subscribe: (setState: React.Dispatch<React.SetStateAction<T>>) => Subscription,
    set: (nextState: T) => void
    clear: () => void
}

export interface StoreStateService<T> {
    id: string,
    state: StateService<T>
}

export interface StateObjectStore<T> {
    store: StoreStateService<T>[]
    get: (id: string) => StateService<T> | undefined
    add: (stateObject: StateService<T>, id: string) => void,
    remove: (id: string) => void
}











