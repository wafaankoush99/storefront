let productState = {
  products: [
    {
      category: "Flowers",
      name: "Tulip",
      price: 45,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/819zhtPix4L._SY450_.jpg",
    },
    {
      category: "Bags",
      name: "CHANEL",
      price: 900,
      image:
        "https://katiesbliss.com/wp-content/uploads/2019/03/CHANEL-Classic-Medium-Flap-Bag-Black-1.jpg",
    },
    {
      category: "Bags",
      name: "GUCCI",
      price: 890,
      image:
        "https://i.pinimg.com/736x/c5/2f/f7/c52ff779d1d27112253dd26d4de74c45.jpg",
    },
    {
      category: "Bags",
      name: "SHEIN",
      price: 700,
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/05/20/16214837686737b3ebc80a993f3d45ef0ced5d3b7b_thumbnail_405x552.webp",
    },
    {
      category: "Flowers",
      name: "Sun Flowers",
      price: 60,
      image:
        "https://ae01.alicdn.com/kf/HTB1NV92XijrK1RjSsplq6xHmVXaR/50cm-long-fall-silk-artificial-sunflowers-DIY-flowers-branch-for-home-wedding-autumn-decoration-fake-plastic.jpg_Q90.jpg_.webp",
    },
    {
      category: "Flowers",
      name: "Jasmin",
      price: 63,
      image:
        "https://image.freepik.com/free-photo/jasmine-flowers-glasse-vase-stillife-with-jasmine-cup-coffee_230497-2054.jpg",
    },
  ],

  listOfProducts: [],
};

const ProductReducer = (state = productState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "ACTIVE":
      state.listOfProducts = [];
      let stateProducts = state.products
      stateProducts.forEach((prod) => {
        if (prod.category === payload.categoryNormalizedName) {
          state.listOfProducts.push(prod);
        }
      });
      return {
        products: state.products,
        listOfProducts: state.listOfProducts
      };

    default:
      return state;
  }
};

export default ProductReducer;
