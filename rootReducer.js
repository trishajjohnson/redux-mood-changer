const INITIAL_STATE = { mood: "(一一)" };

const moodReducer = (state = INITIAL_STATE, action) => {
  // no way to update state yet,
  // let's just return it.
  switch (action.type) {
    case "ANGRY":
      return { ...state, mood: "ಠ╭╮ಠ" };

    case "HAPPY":
      return { ...state, mood: "ʘ‿ʘ" };
      
    case "SAD":
      return { ...state, mood: ";_;" };

    case "SHOCKED":
      return { ...state, mood: "°O°" };

    default:
      return state;
  }
}


