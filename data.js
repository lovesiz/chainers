// data.js
const seedData = [
    // --- KLASİK TOHUMLAR ---
    { name: "Strawberry", time: "2 Dakika", rates: { common: 0.5, uncommon: 1, rare: 1.5, epic: 3.5, legendary: 6.5 } },
    { name: "Peas", time: "4 Dakika", rates: { common: 0.25, uncommon: 0.5, rare: 0.75, epic: 1, legendary: 1.75 } },
    { name: "Corn", time: "6 Dakika", rates: { common: 0.33, uncommon: 0.5, rare: 0.67, epic: 0.83, legendary: 1.5 } },
    { name: "Radish", time: "8 Dakika", rates: { common: 0.25, uncommon: 0.5, rare: 0.75, epic: 1.25, legendary: 2 } },
    { name: "Cabbage", time: "13 Dakika", rates: { common: 0.23, uncommon: 0.38, rare: 0.62, epic: 1, legendary: 1.62 } },
    { name: "Onion", time: "15 Dakika", rates: { common: 0.47, uncommon: 0.87, rare: 1.73, epic: 3.47, legendary: 7.2 } },
    { name: "Eggplant", time: "17 Dakika", rates: { common: 0.47, uncommon: 1.06, rare: 1.76, epic: 3.59, legendary: 7.59 } },
    { name: "Cauliflower", time: "32 Dakika", rates: { common: 0.47, uncommon: 0.84, rare: 1.91, epic: 3.53, legendary: 6.84 } },
    { name: "Bell Pepper", time: "1 Saat 3 Dakika", rates: { common: 0.46, uncommon: 0.92, rare: 1.89, epic: 3.71, legendary: 5.32 } },
    { name: "Garlic", time: "1 Saat 18 Dakika", rates: { common: 0.46, uncommon: 0.76, rare: 1.5, epic: 2.97, legendary: 5.19 } },
    { name: "Watermelon", time: "1 Saat 52 Dakika", rates: { common: 0.46, uncommon: 0.89, rare: 1.75, epic: 3.68, legendary: 7.37 } },
    { name: "Chili Pepper", time: "3 Saat 1 Dakika", rates: { common: 0.45, uncommon: 0.88, rare: 1.77, epic: 3.52, legendary: 7.1 } },
    { name: "Sweet Potato", time: "4 Saat 4 Dakika", rates: { common: 0.44, uncommon: 0.88, rare: 1.73, epic: 3.47, legendary: 6.97 } },
    { name: "Broccoli", time: "5 Saat 28 Dakika", rates: { common: 0.43, uncommon: 0.85, rare: 1.73, epic: 3.47, legendary: 6.96 } },
    { name: "Ginger", time: "7 Saat 49 Dakika", rates: { common: 0.42, uncommon: 0.86, rare: 1.69, epic: 3.38, legendary: 6.74 } },

    // --- ÖZEL TOHUMLAR ---
    { name: "Black Lotus", time: "12 Saat", rates: { common: 0.56, uncommon: 1.25, rare: 2.92, epic: 6.67, legendary: 13.96 } },
    { name: "Sunflower", time: "1 Saat", rates: { common: 0.53, uncommon: 1.17, rare: 2.77, epic: 6.27, legendary: 14.57 } },
    { name: "Holly", time: "3 Saat", rates: { common: 0.51, uncommon: 1.02, rare: 2.07, epic: 4.15, legendary: 8.32 } },
    { name: "White Lily", time: "5 Saat", rates: { common: 0.63, uncommon: 1.33, rare: 3.23, epic: 7.23, legendary: 15.32 } },

    // --- ÖZEL (SÜRESİ DEĞİŞENLER) ---
    // Jack Pumpkin
    { name: "Jack Pumpkin", time: "24 Saat", rates: { common: 0.52, uncommon: 0, rare: 0, epic: 0, legendary: 0 } },
    { name: "Jack Pumpkin", time: "20 Saat", rates: { common: 0, uncommon: 1.21, rare: 0, epic: 0, legendary: 0 } },
    { name: "Jack Pumpkin", time: "16 Saat", rates: { common: 0, uncommon: 0, rare: 3.19, epic: 0, legendary: 0 } },
    { name: "Jack Pumpkin", time: "12 Saat", rates: { common: 0, uncommon: 0, rare: 0, epic: 7.24, legendary: 0 } },
    { name: "Jack Pumpkin", time: "8 Saat", rates: { common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 15.33 } },
    // Patisson
    { name: "Patisson", time: "4 Saat", rates: { common: 0.1, uncommon: 0, rare: 0, epic: 0, legendary: 0 } },
    { name: "Patisson", time: "3 Saat 50 Dakika", rates: { common: 0, uncommon: 0.5, rare: 0, epic: 0, legendary: 0 } },
    { name: "Patisson", time: "3 Saat 40 Dakika", rates: { common: 0, uncommon: 0, rare: 2.4, epic: 0, legendary: 0 } },
    { name: "Patisson", time: "3 Saat 30 Dakika", rates: { common: 0, uncommon: 0, rare: 0, epic: 7.5, legendary: 0 } },
    { name: "Patisson", time: "3 Saat 20 Dakika", rates: { common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 15.45 } },
    // Star Anise
    { name: "Star Anise", time: "12 Dakika", rates: { common: 0.17, uncommon: 0, rare: 0, epic: 0, legendary: 0 } },
    { name: "Star Anise", time: "28 Dakika 20 Saniye", rates: { common: 0, uncommon: 0.56, rare: 0, epic: 0, legendary: 0 } },
    { name: "Star Anise", time: "1 Saat 23 Dakika 20 Saniye", rates: { common: 0, uncommon: 0, rare: 1.70, epic: 0, legendary: 0 } },
    { name: "Star Anise", time: "4 Saat 10 Dakika", rates: { common: 0, uncommon: 0, rare: 0, epic: 5.16, legendary: 0 } },
    { name: "Star Anise", time: "12 Saat 30 Dakika", rates: { common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 15.50 } },
    // Dragon Fruit
    { name: "Dragon Fruit", time: "25 Saat", rates: { common: 0.90, uncommon: 0, rare: 0, epic: 0, legendary: 0 } },
    { name: "Dragon Fruit", time: "21 Saat", rates: { common: 0, uncommon: 1.83, rare: 0, epic: 0, legendary: 0 } },
    { name: "Dragon Fruit", time: "17 Saat", rates: { common: 0, uncommon: 0, rare: 3.68, epic: 0, legendary: 0 } },
    { name: "Dragon Fruit", time: "13 Saat", rates: { common: 0, uncommon: 0, rare: 0, epic: 7.69, legendary: 0 } },
    { name: "Dragon Fruit", time: "9 Saat", rates: { common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 15.56 } },

    // --- BAHAR TOHUMLARI ---
    { name: "Spinach", time: "23 Dakika", rates: { common: 0.48, uncommon: 0.96, rare: 2, epic: 3.87, legendary: 7.78 } },
    { name: "Leek", time: "45 Dakika", rates: { common: 0.47, uncommon: 0.96, rare: 1.82, epic: 3.67, legendary: 7.49 } },
    { name: "Mangold", time: "1 Saat 30 Dakika", rates: { common: 0.46, uncommon: 0.89, rare: 1.81, epic: 3.61, legendary: 7.18 } },
    { name: "Snowdrop", time: "2 Saat 36 Dakika", rates: { common: 0.45, uncommon: 0.9, rare: 1.77, epic: 3.59, legendary: 7.15 } },
    { name: "Daikon", time: "3 Saat 35 Dakika", rates: { common: 0.44, uncommon: 0.88, rare: 1.75, epic: 3.53, legendary: 7.13 } },

    // --- YAZ TOHUMLARI (SÜRESİ DEĞİŞENLER) ---
    // Cucumber
    { name: "Cucumber", time: "15 Dakika", rates: { common: 0.73, uncommon: 0, rare: 0, epic: 0, legendary: 0 } },
    { name: "Cucumber", time: "14 Dakika", rates: { common: 0, uncommon: 1.14, rare: 0, epic: 0, legendary: 0 } },
    { name: "Cucumber", time: "13 Dakika", rates: { common: 0, uncommon: 0, rare: 2.46, epic: 0, legendary: 0 } },
    { name: "Cucumber", time: "12 Dakika", rates: { common: 0, uncommon: 0, rare: 0, epic: 5.42, legendary: 0 } },
    { name: "Cucumber", time: "10 Dakika", rates: { common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 10.7 } },
    // Mint
    { name: "Mint", time: "60 Dakika", rates: { common: 0.5, uncommon: 0, rare: 0, epic: 0, legendary: 0 } },
    { name: "Mint", time: "55 Dakika", rates: { common: 0, uncommon: 1.35, rare: 0, epic: 0, legendary: 0 } },
    { name: "Mint", time: "50 Dakika", rates: { common: 0, uncommon: 0, rare: 2.8, epic: 0, legendary: 0 } },
    { name: "Mint", time: "40 Dakika", rates: { common: 0, uncommon: 0, rare: 0, epic: 6.25, legendary: 0 } },
    { name: "Mint", time: "30 Dakika", rates: { common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 12 } },
    // Blueberry
    { name: "Blueberry", time: "1 Saat 30 Dakika", rates: { common: 0.52, uncommon: 0, rare: 0, epic: 0, legendary: 0 } },
    { name: "Blueberry", time: "1 Saat 25 Dakika", rates: { common: 0, uncommon: 0.98, rare: 0, epic: 0, legendary: 0 } },
    { name: "Blueberry", time: "1 Saat 20 Dakika", rates: { common: 0, uncommon: 0, rare: 3.13, epic: 0, legendary: 0 } },
    { name: "Blueberry", time: "1 Saat 10 Dakika", rates: { common: 0, uncommon: 0, rare: 0, epic: 6.79, legendary: 0 } },
    { name: "Blueberry", time: "1 Saat", rates: { common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 13.78 } },
    // Purple Carrot
    { name: "Purple Carrot", time: "3 Saat", rates: { common: 0.53, uncommon: 0, rare: 0, epic: 0, legendary: 0 } },
    { name: "Purple Carrot", time: "2 Saat 30 Dakika", rates: { common: 0, uncommon: 1.04, rare: 0, epic: 0, legendary: 0 } },
    { name: "Purple Carrot", time: "2 Saat 20 Dakika", rates: { common: 0, uncommon: 0, rare: 2, epic: 0, legendary: 0 } },
    { name: "Purple Carrot", time: "2 Saat 10 Dakika", rates: { common: 0, uncommon: 0, rare: 0, epic: 7.23, legendary: 0 } },
    { name: "Purple Carrot", time: "2 Saat", rates: { common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 14.44 } },
    // Melon
    { name: "Melon", time: "5 Saat", rates: { common: 0.57, uncommon: 0, rare: 0, epic: 0, legendary: 0 } },
    { name: "Melon", time: "4 Saat 50 Dakika", rates: { common: 0, uncommon: 1.1, rare: 0, epic: 0, legendary: 0 } },
    { name: "Melon", time: "4 Saat 40 Dakika", rates: { common: 0, uncommon: 0, rare: 2.36, epic: 0, legendary: 0 } },
    { name: "Melon", time: "4 Saat 20 Dakika", rates: { common: 0, uncommon: 0, rare: 0, epic: 4.62, legendary: 0 } },
    { name: "Melon", time: "4 Saat", rates: { common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 15 } },
    // Pineapple
    { name: "Pineapple", time: "7 Saat", rates: { common: 0.6, uncommon: 0, rare: 0, epic: 0, legendary: 0 } },
    { name: "Pineapple", time: "6 Saat 30 Dakika", rates: { common: 0, uncommon: 1.28, rare: 0, epic: 0, legendary: 0 } },
    { name: "Pineapple", time: "6 Saat", rates: { common: 0, uncommon: 0, rare: 2.78, epic: 0, legendary: 0 } },
    { name: "Pineapple", time: "5 Saat 30 Dakika", rates: { common: 0, uncommon: 0, rare: 0, epic: 6.06, legendary: 0 } },
    { name: "Pineapple", time: "5 Saat", rates: { common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 15.03 } },

    // --- GEÇİCİ TOHUMLAR ---
    // Marigold
    { name: "Marigold", time: "3 Dakika", rates: { common: 0.33, uncommon: 0, rare: 0, epic: 0, legendary: 0 } },
    { name: "Marigold", time: "2 Dakika 30 Saniye", rates: { common: 0, uncommon: 0.8, rare: 0, epic: 0, legendary: 0 } },
    { name: "Marigold", time: "2 Dakika", rates: { common: 0, uncommon: 0, rare: 3.5, epic: 0, legendary: 0 } },
    { name: "Marigold", time: "1 Dakika 30 Saniye", rates: { common: 0, uncommon: 0, rare: 0, epic: 8.67, legendary: 0 } },
    { name: "Marigold", time: "1 Dakika", rates: { common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 22 } },
    // Hyacinth
    { name: "Hyacinth", time: "4 Saat", rates: { common: 0.15, uncommon: 0, rare: 0, epic: 0, legendary: 0 } },
    { name: "Hyacinth", time: "3 Saat 20 Dakika", rates: { common: 0, uncommon: 0.45, rare: 0, epic: 0, legendary: 0 } },
    { name: "Hyacinth", time: "2 Saat 5 Dakika", rates: { common: 0, uncommon: 0, rare: 3.05, epic: 0, legendary: 0 } },
    { name: "Hyacinth", time: "3 Saat 20 Dakika", rates: { common: 0, uncommon: 0, rare: 0, epic: 8.2, legendary: 0 } },
    { name: "Hyacinth", time: "3 Saat", rates: { common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 21.1 } },
    // Bamboo
    { name: "Bamboo", time: "13 Saat", rates: { common: 0.11, uncommon: 0, rare: 0, epic: 0, legendary: 0 } },
    { name: "Bamboo", time: "12 Saat 50 Dakika", rates: { common: 0, uncommon: 0.25, rare: 0, epic: 0, legendary: 0 } },
    { name: "Bamboo", time: "12 Saat 40 Dakika", rates: { common: 0, uncommon: 0, rare: 2.85, epic: 0, legendary: 0 } },
    { name: "Bamboo", time: "12 Saat 20 Dakika", rates: { common: 0, uncommon: 0, rare: 0, epic: 7.8, legendary: 0 } },
    { name: "Bamboo", time: "12 Saat", rates: { common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 20.6 } },
    // Tomato
    { name: "Tomato", time: "5 Saat 40 Dakika", rates: { common: 0.17, uncommon: 0, rare: 0, epic: 0, legendary: 0 } },
    { name: "Tomato", time: "5 Saat 35 Dakika", rates: { common: 0, uncommon: 0.6, rare: 0, epic: 0, legendary: 0 } },
    { name: "Tomato", time: "5 Saat 30 Dakika", rates: { common: 0, uncommon: 0, rare: 3.75, epic: 0, legendary: 0 } },
    { name: "Tomato", time: "5 Saat 25 Dakika", rates: { common: 0, uncommon: 0, rare: 0, epic: 8.05, legendary: 0 } },
    { name: "Tomato", time: "5 Saat 20 Dakika", rates: { common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 22.1 } },

    // --- ESKİ TOHUMLAR ---
    { name: "Carrot", time: "6 Dakika", rates: { common: 0.33, uncommon: 0.67, rare: 1.33, epic: 3.33, legendary: 9.67 } },
    { name: "Potato", time: "30 Dakika", rates: { common: 0.17, uncommon: 0.33, rare: 0.73, epic: 1.83, legendary: 5.33 } },
    { name: "Pumpkin", time: "3 Saat 20 Dakika", rates: { common: 0.16, uncommon: 0.32, rare: 0.7, epic: 1.76, legendary: 5.12 } },
    { name: "Rose", time: "5 Saat", rates: { common: 0.22, uncommon: 0.43, rare: 0.95, epic: 2.38, legendary: 6.91 } },
    { name: "Tulip", time: "3 Dakika", rates: { common: 0.33, uncommon: 0.67, rare: 1.33, epic: 3, legendary: 7.67 } },
    { name: "Wheat", time: "18 Dakika", rates: { common: 0.22, uncommon: 0.44, rare: 1, epic: 2.5, legendary: 7.28 } }

];
