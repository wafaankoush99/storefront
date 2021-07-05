let initialState = {
  categories: [
    {
      categoryNormalizedName: "Flowers",
      displayName: "Flowers",
    },
    {
      categoryNormalizedName: "Bags",
      displayName: "Bags",
    },
  ],
  activeCategory: "",
};

export default (state = initialState, action) => {

  let { type, payload } = action;

  switch (type) {
    case "ACTIVE":
      return {
        
        categories: state.categories,
        activeCategory: payload.categoryNormalizedName,
      };

    default:
      return state;
  }
};

export const activeCatFun = (Categories) => {
  return {
    type: "ACTIVE",
    payload: Categories,
  };
};
