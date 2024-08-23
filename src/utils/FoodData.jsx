import { useState } from "react";

export default function FoodData() {
  const [foodMenuItems, setFoodMenuItems] = useState({
    all: [
      {
        id: 1,
        image: "./eba-veg.jpeg",
        name: "Eba & Vegetable",
        details:
          "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 2,
        count: 1, // Initial count for the item
      },
      {
        id: 2,
        image: "./eba-veg.jpeg",
        name: "Jollof Rice & Turkey",
        details:
          "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 2,
        count: 1, // Initial count for the item
      },
      {
        id: 3,
        image: "./eba-veg.jpeg",
        name: "Beans & Bread",
        details:
          "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 2,
        count: 1, // Initial count for the item
      },
      {
        id: 4,
        image: "./eba-veg.jpeg",
        name: "Tuwo & Masa",
        details:
          "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 2,
        count: 1, // Initial count for the item
      },
      {
        id: 5,
        image: "./eba-veg.jpeg",
        name: "Gbegiri & Ewedu",
        details:
          "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 2,
        count: 1, // Initial count for the item
      },
      {
        id: 6,
        image: "./eba-veg.jpeg",
        name: "Yam & Egg",
        details:
          "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 2,
        count: 1, // Initial count for the item
      },
    ],

    // Rice Section
    rice: [
      {
        id: 1,
        image: "./eba-veg.jpeg",
        name: "Eba & Vegetable",
        details:
          "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 2,
        count: 1, // Initial count for the item
      },
      {
        id: 2,
        image: "./eba-veg.jpeg",
        name: "Jollof Rice & Turkey",
        details:
          "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 2,
        count: 1, // Initial count for the item
      },
      {
        id: 3,
        image: "./eba-veg.jpeg",
        name: "Beans & Bread",
        details:
          "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 2,
        count: 1, // Initial count for the item
      },
    ],

    // Swallow Section
    swallow: [
      {
        id: 1,
        image: "./eba-veg.jpeg",
        name: "Eba & Vegetable",
        details:
          "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 2,
        count: 1, // Initial count for the item
      },
      {
        id: 2,
        image: "./eba-veg.jpeg",
        name: "Jollof Rice & Turkey",
        details:
          "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 2,
        count: 1, // Initial count for the item
      },
      {
        id: 3,
        image: "./eba-veg.jpeg",
        name: "Beans & Bread",
        details:
          "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 2,
        count: 1, // Initial count for the item
      },
    ],

    // Burger Section
    burger: [
      {
        id: 1,
        image: "./eba-veg.jpeg",
        name: "Eba & Vegetable",
        details:
          "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 2,
        count: 1, // Initial count for the item
      },
      {
        id: 2,
        image: "./eba-veg.jpeg",
        name: "Jollof Rice & Turkey",
        details:
          "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 2,
        count: 1, // Initial count for the item
      },
      {
        id: 3,
        image: "./eba-veg.jpeg",
        name: "Beans & Bread",
        details:
          "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 2,
        count: 1, // Initial count for the item
      },
    ],
  });
  return { foodMenuItems, setFoodMenuItems };
}
