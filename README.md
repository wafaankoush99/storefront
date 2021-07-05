# storefront

Virtual Store Phase 1: For this assignment, you will be starting the process of creating an e-Commerce storefront using React with Redux, coupled with your live API server

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

### [Deployed Link] (https://60e2c171f36dd516d1fc7788--hungry-jang-5724fb.netlify.app/)

### UML Diagram 

[Show Full Board](https://miro.com/welcomeonboard/UnVHaE40R05ObzJxdUhJSFhjc0p0WkYxS204a2IyNDNpUlo0NXJHQnJTejBPZmNyWjBKRTd2bnJlQm80Tm9NeHwzMDc0NDU3MzU3MzU4Mjc2Mjk1)

![Untitled (31)](https://user-images.githubusercontent.com/78326110/124442485-75b33600-dd85-11eb-9016-bd3a45d511f5.jpg)




