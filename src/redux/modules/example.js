const initialState = {

}

const EXAMPLE_ACTION = 'project/module/EXAMPLE_ACTION'

export default function reducer(state = initialState, action = {}) {

  switch (action.type) {
    case EXAMPLE_ACTION:
        return state

    default:
      return state;
  }
}

export function exampleAction(payload) {
  return {
    type: EXAMPLE_ACTION,
    payload
  }
}
