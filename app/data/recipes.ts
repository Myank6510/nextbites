
export type Recipe = {
  id: number;
  title: string;
  description: string;
  cuisine: string;
  minutes: number;
  servings: number;
  difficulty: string;
  emoji: string;
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
  },
];
