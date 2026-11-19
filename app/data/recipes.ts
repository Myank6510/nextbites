
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
    description: "A delicious Italian pizza with cheese and tomatoes.",
    cuisine: "Italian",
    minutes: 30,
    servings: 2,
    difficulty: "Easy",
    emoji: "🍕",
    ingredients: [
      "Pizza base",
      "Tomato sauce",
      "Mozzarella cheese",
      "Fresh basil",
      "Olive oil"
    ],
    steps: [
      "Preheat the oven.",
      "Spread tomato sauce over the pizza base.",
      "Add mozzarella cheese and basil.",
      "Bake until the cheese melts.",
      "Serve hot."
    ]
  },
  {
    id: 2,
    title: "Vegetable Fried Rice",
    description: "A tasty rice dish with fresh vegetables.",
    cuisine: "Chinese",
    minutes: 20,
    servings: 2,
    difficulty: "Easy",
    emoji: "🍚",
    ingredients: [
      "Cooked rice",
      "Carrot",
      "Capsicum",
      "Onion",
      "Soy sauce",
      "Salt"
    ],
    steps: [
      "Heat oil in a pan.",
      "Add chopped vegetables.",
      "Cook for a few minutes.",
      "Add cooked rice and soy sauce.",
      "Mix well and serve."
    ]
  },
  {
    id: 3,
    title: "Paneer Butter Masala",
    description: "Creamy Indian curry made with paneer.",
    cuisine: "Indian",
    minutes: 35,
    servings: 3,
    difficulty: "Medium",
    emoji: "🍛",
    ingredients: [
      "Paneer",
      "Tomatoes",
      "Butter",
      "Cream",
      "Ginger garlic paste",
      "Indian spices"
    ],
    steps: [
      "Heat butter in a pan.",
      "Add ginger garlic paste.",
      "Add tomato puree and spices.",
      "Add paneer cubes.",
      "Add cream and cook for a few minutes."
    ]
  },
  {
    id: 4,
    title: "Chocolate Pancakes",
    description: "Soft and fluffy pancakes with chocolate.",
    cuisine: "American",
    minutes: 15,
    servings: 2,
    difficulty: "Easy",
    emoji: "🥞",
    ingredients: [
      "Flour",
      "Milk",
      "Sugar",
      "Cocoa powder",
      "Baking powder",
      "Chocolate syrup"
    ],
    steps: [
      "Mix flour, sugar, cocoa powder and baking powder.",
      "Add milk and prepare the batter.",
      "Heat a pan.",
      "Pour batter and cook both sides.",
      "Add chocolate syrup and serve."
    ]
  },
  {
    id: 5,
    title: "Vegetable Pasta",
    description: "Italian-style pasta with fresh vegetables.",
    cuisine: "Italian",
    minutes: 25,
    servings: 2,
    difficulty: "Easy",
    emoji: "🍝",
    ingredients: [
      "Pasta",
      "Tomato sauce",
      "Capsicum",
      "Onion",
      "Garlic",
      "Cheese"
    ],
    steps: [
      "Boil pasta until cooked.",
      "Heat oil in a pan.",
      "Add garlic and vegetables.",
      "Add tomato sauce.",
      "Mix pasta with sauce and add cheese."
    ]
  },
  {
    id: 6,
    title: "Fresh Fruit Salad",
    description: "A refreshing salad made with seasonal fruits.",
    cuisine: "Healthy",
    minutes: 10,
    servings: 2,
    difficulty: "Easy",
    emoji: "🥗",
    ingredients: [
      "Apple",
      "Banana",
      "Mango",
      "Grapes",
      "Pomegranate"
    ],
    steps: [
      "Wash all the fruits.",
      "Cut fruits into small pieces.",
      "Add them to a bowl.",
      "Mix gently and serve fresh."
    ]
  }
];

export function getRecipe(id: string) {
  return recipes.find(
    (recipe) => String(recipe.id) === id
  );
}
