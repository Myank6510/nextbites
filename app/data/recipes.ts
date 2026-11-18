
export type Recipe = {
  id: number;
  title: string;
  description: string;
  cuisine: string;
  minutes: number;
  servings: number;
  difficulty: string;
  emoji: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Margherita Pizza",
    description: "A classic pizza with tomato, mozzarella, and fresh basil.",
    cuisine: "Italian",
    minutes: 25,
    servings: 2,
    difficulty: "Easy",
    emoji: "🍕",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella cheese",
      "Fresh basil",
      "Olive oil",
    ],
    steps: [
      "Prepare and roll out the pizza dough.",
      "Spread tomato sauce over the dough.",
      "Add mozzarella cheese and fresh basil.",
      "Bake until the crust is golden.",
      "Drizzle with olive oil and serve.",
    ],
  },
  {
    id: 2,
    title: "Creamy Alfredo Pasta",
    description: "Rich and creamy pasta tossed in a smooth Alfredo sauce.",
    cuisine: "Italian",
    minutes: 20,
    servings: 2,
    difficulty: "Easy",
    emoji: "🍝",
    ingredients: [
      "Pasta",
      "Butter",
      "Fresh cream",
      "Garlic",
      "Parmesan cheese",
      "Black pepper",
    ],
    steps: [
      "Boil the pasta until cooked.",
      "Melt butter in a pan.",
      "Add garlic and cook briefly.",
      "Add cream and Parmesan cheese.",
      "Mix in pasta and season with pepper.",
      "Serve warm.",
    ],
  },
  {
    id: 3,
    title: "Veggie Burger",
    description: "A delicious veggie patty with lettuce and a fresh bun.",
    cuisine: "American",
    minutes: 30,
    servings: 1,
    difficulty: "Medium",
    emoji: "🍔",
    ingredients: [
      "Burger bun",
      "Vegetable patty",
      "Lettuce",
      "Tomato",
      "Cheese slice",
      "Mayonnaise",
    ],
    steps: [
      "Prepare the vegetable patty.",
      "Cook the patty until golden.",
      "Toast the burger bun.",
      "Spread mayonnaise on the bun.",
      "Add lettuce, tomato, cheese, and patty.",
      "Close the burger and serve.",
    ],
  },
  {
    id: 4,
    title: "Masala Dosa",
    description: "Crispy dosa served with a flavourful potato masala.",
    cuisine: "Indian",
    minutes: 35,
    servings: 2,
    difficulty: "Medium",
    emoji: "🥞",
    ingredients: [
      "Dosa batter",
      "Boiled potatoes",
      "Onion",
      "Mustard seeds",
      "Turmeric powder",
      "Curry leaves",
    ],
    steps: [
      "Prepare the potato masala with onions and spices.",
      "Heat a dosa pan.",
      "Spread dosa batter into a thin circle.",
      "Cook until crispy.",
      "Add potato masala in the centre.",
      "Fold the dosa and serve with chutney.",
    ],
  },
  {
    id: 5,
    title: "Fresh Garden Salad",
    description: "A refreshing mix of vegetables with a light dressing.",
    cuisine: "Healthy",
    minutes: 10,
    servings: 2,
    difficulty: "Easy",
    emoji: "🥗",
    ingredients: [
      "Cucumber",
      "Tomatoes",
      "Carrots",
      "Lettuce",
      "Lemon juice",
      "Salt",
    ],
    steps: [
      "Wash all the vegetables.",
      "Chop cucumber, tomatoes, and carrots.",
      "Add lettuce to a bowl.",
      "Mix all the vegetables together.",
      "Add lemon juice and salt.",
      "Toss and serve fresh.",
    ],
  },
  {
    id: 6,
    title: "Chocolate Pancakes",
    description: "Soft pancakes topped with chocolate and fresh fruit.",
    cuisine: "Dessert",
    minutes: 15,
    servings: 2,
    difficulty: "Easy",
    emoji: "🥞",
    ingredients: [
      "All-purpose flour",
      "Milk",
      "Cocoa powder",
      "Sugar",
      "Baking powder",
      "Chocolate sauce",
    ],
    steps: [
      "Mix flour, cocoa powder, sugar, and baking powder.",
      "Add milk and make a smooth batter.",
      "Heat a non-stick pan.",
      "Pour batter into small circles.",
      "Cook both sides until done.",
      "Add chocolate sauce and serve.",
    ],
  },
];

export function getRecipe(id: string | number) {
  return recipes.find((recipe) => recipe.id === Number(id));
}
