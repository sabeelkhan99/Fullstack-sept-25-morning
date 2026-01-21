## Principles of Redux

1. Single source of truth
    You can only have one store in whole application . We can have multiple slices.
2. State is read only -
    When you want to update the state, then you have to dispatch an 'action' (an object that describes what happened.)
3. Changes are made by pure reducer function
    To specify how to changes the state action is passed to the Reducer.