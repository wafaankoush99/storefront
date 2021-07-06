# storefront

## Phase 1 ~

In this first phase, our goal is to setup the basic scaffolding of the application with initial styling and basic behaviors. This initial build sets up the file structure and state management so that we can progressively build this application in a scalable manner

- As a user, I expect to see a list of available product categories in the store so that I can easily browse products
- As a user, I want to choose a category and see a list of all available products matching that category
- As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence

### Application Architecture 

- `App` component that serves as the container for all sub-components of this application

     - A `<Header>` component which shows the name of your virtual store
     - A `<Footer>` component which shows your copyright and contact information
     - A `<Categories>` component
                       - Shows a list of all categories
                       - Dispatches an action when one is clicked to “activate” it
             
- A `<Products>` component
         - Displays a list of products associated with the selected category

### [Deployed Link](https://60e2c171f36dd516d1fc7788--hungry-jang-5724fb.netlify.app/)

### UML Diagram 

[Show Full Board](https://miro.com/welcomeonboard/UnVHaE40R05ObzJxdUhJSFhjc0p0WkYxS204a2IyNDNpUlo0NXJHQnJTejBPZmNyWjBKRTd2bnJlQm80Tm9NeHwzMDc0NDU3MzU3MzU4Mjc2Mjk1)

![Untitled (31)](https://user-images.githubusercontent.com/78326110/124442485-75b33600-dd85-11eb-9016-bd3a45d511f5.jpg)

***

## Phase 2 ~

In phase 2, we will be adding the “Add to Cart” feature to our application, which will allow our users to not only browse items in the store, but also select them and have them persist in their “shopping cart” for later purchase.

- As a user, I want to choose from products in the list and add them to my shopping cart
- As a user, I want to see the products that I’ve added to my shopping cart so that
- As a user, I want to change the quantity of items I intend to purchase in my shopping cart
- As a user, I want to be able to remove an item from my shopping cart

### Application Architecture 

- Add a new component to the page: `<SimpleCart />`

     - Displays a short list (title only) of products in the cart
     - This should be present at all times
     - 
- Home Page Operation:
                       - When the user selects (clicks on) a category …
                                  - Identify that category as selected
                                  - Show a list of products associated with the category, that have a quantity > 0
                                  - Add an “add to cart” button to each product

             
- When a user clicks the “add to cart” button add the item to their cart
         - In the `<SimpleCart/>` component, show a running list of the items in the cart (just the titles)
         - Change the (0) indicator in the header to show the actual number of items in the cart
         - Reduce the number in stock for that product


### [Deployed Link](https://60e431b91a292a11488f02c7--lucid-franklin-71fcfe.netlify.app/)

### UML Diagram 

[Show Full Board](https://miro.com/welcomeonboard/UnVHaE40R05ObzJxdUhJSFhjc0p0WkYxS204a2IyNDNpUlo0NXJHQnJTejBPZmNyWjBKRTd2bnJlQm80Tm9NeHwzMDc0NDU3MzU3MzU4Mjc2Mjk1)

![STORE FRONT](https://user-images.githubusercontent.com/78326110/124586988-cd25d480-de5f-11eb-9c55-dbaa4c58e0a9.jpg)







