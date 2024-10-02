const initialState = {
  categories: [
    { id: 1, category: "copieurs,imprimantes && multifonctions" },
    { id: 2, category: "Smartphone,tablette,PC ,Laptop,PDA" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_categorie":
      return { ...state, categories: [...state.categories, action.payload] };
    case "delete_categorie":
      const newList = state.categories.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        categories: [...newList],
      };
    default:
      return state;
  }
};

export default reducer;
