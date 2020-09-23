import React from 'react'
import { BehaviorSubject, Subscription } from 'rxjs'

///////////////////////////////////////////////////////
// Create Basic Subscription State Object
//////////////////////////////////////////////////////
export function createStateObject(initialState) {
    const myState = new BehaviorSubject(initialState)
    
    return {
        stateObject: myState,
        subscribe: (setState)  => {
            const subscription = myState.subscribe(setState)
            return subscription
        },
        set: (nextState) => {
            myState.next(nextState)
            
        },
        clear: () => {
            myState.next(initialState)
        }
    }
}

///////////////////////////////////////////////////////
// Create React Subscription State Manager with
// additional methods
//////////////////////////////////////////////////////
export function createStateManager(stateService) {

    const [myState, setMyState] = React.useState(stateService.stateObject.getValue())
    React.useEffect(() => {
        const subscription = stateService.subscribe(setMyState)
        return () => {
            subscription.unsubscribe()
        }
    }, [])
    return [myState, stateService]
}

///////////////////////////////////////////////////////
// Create basic React Subscription State
//////////////////////////////////////////////////////
export function createSimpleState(stateService) {

    const [myState, setMyState] = React.useState(stateService.stateObject.getValue())
    React.useEffect(() => {
        const subscription = stateService.subscribe(setMyState)
        return () => {
            subscription.unsubscribe()
        }
    }, [])
    return [myState, stateService.set]
}