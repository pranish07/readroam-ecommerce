export const initialState = {
    address: [
      {
        id: "1",
        name: "Pranish Shrestha",
        street: "bhairhawa- anchalpur",
        city: "Siddharthanagar",
        state: "Lumbini",
        country: "Nepal",
        postalCode: "32900",
        MobileNum: "9866583306",
      },
    ],
    updatedId: null,
  };
  
  export const AddressReducer = (state, action) => {
    switch (action.type) {
      case "ADD_NEW_ADDRESS":
        return {
          ...state,
          address: [...state.address, action.payload],
          updatedId: null,
        };
      case "REMOVE_ADDRESS":
        return {
          ...state,
          address: state.address.filter(({ id }, i) => action.payload !== id),
        };
      case "EDIT_ADDRESS":
        return {
          ...state,
          updatedId: action.payload,
        };
      case "UPDATE_ADDRESS":
        return {
          ...state,
          address: action.payload,
          updatedId: null,
        };
      default:
        return state;
    }
  };
  