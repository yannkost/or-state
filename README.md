# or-state
 Observable React State-Management for functionnal components. It is not intended to extend this package for class based components.
 
 ## Installation
 
 `npm i or-state`
 
  
 ## Usage
 This module gives you acces to three methods. To use the package follow the following principle: 
 
 1. Create a state object with the **createStateObject** method. The parameter for this method is the **initial state** which can be any state.(string, number, boolean, object etc..)
 
 `const stateObject = createStateObject(false)`
 
 2. In your functionnal component, use one of the two methods **createSimpleState** or **createStateManager** to add the state to your react component. Use array destructuring to gain access to your state and state methods. 
 
 `const [myState, setMyState] = createSimpleState(stateObject)`
 or
 `const [myState, stateManager] = createStateManager(extendedStateObject)`
 
 In the case of the **createStateManager** method, you can extends the previously created stateObject with its own methods. You will then have accces to the normal state object methods plus your additional methods.
 
 ```
 const createExtendedStateObject = (state) => {
    return {
        ...stateObject,
        setFalse: () => { state.set(false) }
        setTrue: () => { state.set(true) }
    }
}
const extendedStateObject = createExtendedStateObject(stateObject)```

Typescript types are included. With generic parameters you can create strongly typed stateManagers that are accessible everywhere.
