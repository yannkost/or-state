# or-state
 Observable React State-Management for functionnal components. It is not intended to extend this package for class based components.
 
 Any state created with the methods contained in this package are accessible for all functionnal components.
 
 ## Installation
 
 `npm i or-state`
 
  
 ## Usage
 This package allows you to manage state and it's related methods in an external file(s). Meaning that all 
 state definitions, methods can be in it's own file and must no longer be contained in the react component.
 This module gives you acces to three methods. To use the package follow the following principle: 
 
 1. Create a state object with the **createStateObject** method. The parameter for this method is the **initial state** which can be any state.(string, number, boolean, object etc..)
 
 `const stateObject = createStateObject(false)`
 
 2. In your functionnal component, use one of the two methods **createSimpleState** or **createStateManager** to add the state to your react component. Use array destructuring to gain access to your state and state methods. 
 
 `const [myState, setMyState] = createSimpleState(stateObject)`
 or
 `const [myState, stateManager] = createStateManager(extendedStateObject)`
 
 In the case of the **createStateManager** method, you can extends the previously created stateObject with its own methods. You will then have accces to the normal state object methods plus your additional methods.
 The actual state is contained in the stateObject accessible like this: 
 `myStateObject.stateObject.getValue()`  
 
 
## Example extending our stateObject through a method
    const createExtendedStateObject = (state) => {
        return {
            ...state,
            setFalse: () => { state.set(false) }
            setTrue: () => { state.set(true) }
        }
    }
    //Export this object as you want to import it into your components
    export const extendedStateObject = createExtendedStateObject(stateObject)


Typescript types are included. With generic parameters you can create strongly typed stateManagers that are accessible everywhere.

 ## Full example simpleState js
 This example shows a simple state object (string) implementation.
 
 File StringState.js
 
    const initialState = ''
    export const myStringState = createStateObject(initialState)
    
File MyComponent.js

    import myStringState from './StringState.js'
    
    const MyComponent = () =>{
        
        const [myState, setMyState] = createSimpleState(myStringState)
        
        return (
            <div>
                <p>{myState}</p>
                <button onClick={()=>{setMyState('New state Text')}}>Set new state</button>
            </div>
        )
    }
    

## Full example stateManager js
    
File StringState.js
 
    const initialState = ''
    const simpleStateObject = createStateObject(initialState)
    
    const createExtendedState = (simpleState) =>{
        
        return {
            ...simpleState,
            sayGreeting = () => {
                simpleState.set('Hello world')
            },
            sayGoodBye = () => {
                simpleState.set('Good bye')
            },
            appendText = (toAppend) => {
                // Previous text
                const newText = simpleState.stateObject.getValue()
                newText = newText + ' ' + toAppend
                simpleState.set(newText)
            }
        }
    } 
    export myStringState = createExtendedState(simpleStateObject)
    
    
    
    
File MyComponent.js

    import myStringState from './StringState.js'
    
    const MyComponent = () =>{
        
        const [myState, myStateManager] = createStateManager(myStringState)
        
        return (
            <div>
                <p>{myState}</p>
                <button onClick={()=>{myStateManager.sayGreeting()}}>Say Hello</button>
                <button onClick={()=>{myStateManager.sayGoodBye()}}>Say Good Bye</button>
                <button onClick={()=>{myStateManager.appendText('This is some pseudo text')}}>Append text</button>
            </div>
        )
    }
 
 
 
