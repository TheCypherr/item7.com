import { useState } from "react";

export default function MenuPageData() {
  const [menuItems, setMenuItems] = useState({
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
      {
        id: 7,
        image: "./eba-veg.jpeg",
        name: "Beans & Plantain",
        details:
          "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 2,
        count: 1, // Initial count for the item
      },
      {
        id: 8,
        image: "./eba-veg.jpeg",
        name: "Pap & Akara",
        details:
          "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 2,
        count: 1, // Initial count for the item
      },
      {
        id: 9,
        image: "./eba-veg.jpeg",
        name: "Yam & Fish Sauce",
        details:
          "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 2,
        count: 1, // Initial count for the item
      },
      {
        id: 10,
        image: "./eba-veg.jpeg",
        name: "Egg Sauce & Rice",
        details:
          "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 2,
        count: 1, // Initial count for the item
      },
      {
        id: 11,
        image: "./eba-veg.jpeg",
        name: "Native Rice",
        details:
          "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 2,
        count: 1, // Initial count for the item
      },
      {
        id: 12,
        image: "./eba-veg.jpeg",
        name: "Ewa Agoyin",
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
  });
  return { menuItems, setMenuItems };
}
