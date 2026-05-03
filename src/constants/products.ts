// src/data/products.ts

export interface Item {
    name: string;
    size: boolean;
    weight: boolean;
    optionForSelling: boolean;
    price: number;
    imagePreview: string;
}

export interface Category {
    categoryName: string;
    items: Item[];
}

export interface ProductCategory {
    type: 'furniture' | 'electric appliances' | 'daily necessities';
    categories: Category[];
}

// Helper function to generate image URLs
const getImageUrl = (name: string): string => {
    return `https://via.placeholder.com/300x300?text=${encodeURIComponent(name)}`;
};

export const productsData: ProductCategory[] = [
    {
        type: "furniture",
        categories: [
            {
                categoryName: "bedding",
                items: [
                    { name: "bed (single)", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300&h=300&fit=crop" },
                    { name: "bed (semi-double)", size: false, weight: false, optionForSelling: true, price: 5000, imagePreview: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=300&h=300&fit=crop" },
                    { name: "bed (double)", size: false, weight: false, optionForSelling: true, price: 7000, imagePreview: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=300&h=300&fit=crop" },
                    { name: "queen-size bed", size: false, weight: false, optionForSelling: true, price: 10000, imagePreview: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&h=300&fit=crop" },
                    { name: "king-size bed", size: false, weight: false, optionForSelling: true, price: 10000, imagePreview: "https://images.unsplash.com/photo-1631049552057-403cdb8f4278?w=300&h=300&fit=crop" },
                    { name: "flip-up bed (single)", size: false, weight: false, optionForSelling: true, price: 5000, imagePreview: getImageUrl("flip-up bed single") },
                    { name: "flip-up bed (semi-double)", size: false, weight: false, optionForSelling: true, price: 5000, imagePreview: getImageUrl("flip-up bed semi-double") },
                    { name: "flip-up bed (double)", size: false, weight: false, optionForSelling: true, price: 8000, imagePreview: getImageUrl("flip-up bed double") },
                    { name: "lift-up bed (queen size)", size: false, weight: false, optionForSelling: true, price: 12000, imagePreview: getImageUrl("lift-up bed queen size") },
                    { name: "lift-up bed (king size)", size: false, weight: false, optionForSelling: true, price: 12000, imagePreview: getImageUrl("lift-up bed king size") },
                    { name: "baby crib", size: true, weight: true, optionForSelling: false, price: 2000, imagePreview: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=300&h=300&fit=crop" },
                    { name: "folding bed", size: true, weight: true, optionForSelling: false, price: 3000, imagePreview: getImageUrl("folding bed") },
                    { name: "loft bed", size: false, weight: false, optionForSelling: false, price: 8500, imagePreview: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=300&h=300&fit=crop" },
                    { name: "bunk beds", size: false, weight: false, optionForSelling: false, price: 10000, imagePreview: "https://images.unsplash.com/photo-1598928506311-c55ed91fa163?w=300&h=300&fit=crop" },
                    { name: "system bed", size: false, weight: false, optionForSelling: false, price: 15000, imagePreview: getImageUrl("system bed") },
                    { name: "nursing bed", size: false, weight: false, optionForSelling: false, price: 17000, imagePreview: getImageUrl("nursing bed") },
                    { name: "mattress (single)", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "https://images.unsplash.com/photo-1631049035182-249067d7618e?w=300&h=300&fit=crop" },
                    { name: "mattress (semi-double)", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: getImageUrl("mattress semi-double") },
                    { name: "mattress (double)", size: false, weight: false, optionForSelling: true, price: 5500, imagePreview: getImageUrl("mattress double") },
                    { name: "queen-size mattress", size: false, weight: false, optionForSelling: true, price: 9000, imagePreview: getImageUrl("queen-size mattress") },
                    { name: "mattress (king size)", size: false, weight: false, optionForSelling: true, price: 9000, imagePreview: getImageUrl("mattress king size") },
                    { name: "tri-fold mattress", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: getImageUrl("tri-fold mattress") },
                    { name: "waterbed mattress", size: false, weight: false, optionForSelling: false, price: 4000, imagePreview: getImageUrl("waterbed mattress") }
                ]
            },
            {
                categoryName: "chair",
                items: [
                    { name: "floor chair", size: true, weight: false, optionForSelling: false, price: 1000, imagePreview: getImageUrl("floor chair") },
                    { name: "dining chair", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "https://images.unsplash.com/photo-1503602642458-232111445657?w=300&h=300&fit=crop" },
                    { name: "desk chair", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=300&h=300&fit=crop" },
                    { name: "president's chair", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: getImageUrl("president chair") },
                    { name: "chair", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&h=300&fit=crop" },
                    { name: "bench", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=300&h=300&fit=crop" },
                    { name: "rocking chair", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=300&fit=crop" },
                    { name: "counter chair", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: getImageUrl("counter chair") },
                    { name: "floor cushion (thick)", size: true, weight: false, optionForSelling: false, price: 2000, imagePreview: getImageUrl("floor cushion thick") }
                ]
            },
            {
                categoryName: "sofa",
                items: [
                    { name: "sofa (single-seater)", size: true, weight: false, optionForSelling: true, price: 3000, imagePreview: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop" },
                    { name: "sofa (2-seater)", size: true, weight: false, optionForSelling: true, price: 5000, imagePreview: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=300&h=300&fit=crop" },
                    { name: "sofa (3-seater)", size: true, weight: false, optionForSelling: true, price: 6500, imagePreview: "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=300&h=300&fit=crop" },
                    { name: "reclining sofa (single-seater)", size: true, weight: false, optionForSelling: true, price: 4000, imagePreview: getImageUrl("reclining sofa single-seater") },
                    { name: "reclining sofa (2-seater)", size: true, weight: false, optionForSelling: true, price: 6500, imagePreview: getImageUrl("reclining sofa 2-seater") },
                    { name: "reclining sofa (3-seater)", size: true, weight: false, optionForSelling: true, price: 8000, imagePreview: getImageUrl("reclining sofa 3-seater") },
                    { name: "corner sectional sofa", size: true, weight: false, optionForSelling: true, price: 11000, imagePreview: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=300&h=300&fit=crop" },
                    { name: "sofa bed", size: false, weight: false, optionForSelling: false, price: 7000, imagePreview: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop" },
                    { name: "ottoman (small)", size: true, weight: false, optionForSelling: true, price: 1000, imagePreview: getImageUrl("ottoman small") },
                    { name: "ottoman (large)", size: true, weight: false, optionForSelling: true, price: 2000, imagePreview: getImageUrl("ottoman large") }
                ]
            },
            {
                categoryName: "tables and desks",
                items: [
                    { name: "dining set for 2 people", size: false, weight: false, optionForSelling: true, price: 5000, imagePreview: "https://images.unsplash.com/photo-1523865236454-3ae3358a4eaa?w=300&h=300&fit=crop" },
                    { name: "dining set for 4 people", size: false, weight: false, optionForSelling: true, price: 8000, imagePreview: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop" },
                    { name: "dining set for 6 people", size: false, weight: false, optionForSelling: true, price: 11000, imagePreview: getImageUrl("dining set 6 people") },
                    { name: "dining table for 2 people", size: true, weight: true, optionForSelling: true, price: 3000, imagePreview: getImageUrl("dining table 2 people") },
                    { name: "dining table for 4 people", size: true, weight: true, optionForSelling: true, price: 4000, imagePreview: getImageUrl("dining table 4 people") },
                    { name: "dining table for 6 people", size: true, weight: true, optionForSelling: true, price: 5000, imagePreview: getImageUrl("dining table 6 people") },
                    { name: "study desk (without bookshelf/side table)", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=300&h=300&fit=crop" },
                    { name: "study desk (with bookshelf/side desk)", size: false, weight: false, optionForSelling: true, price: 6500, imagePreview: getImageUrl("study desk with bookshelf") },
                    { name: "computer desk", size: true, weight: false, optionForSelling: true, price: 3000, imagePreview: "https://images.unsplash.com/photo-1619596660806-f0755d461c16?w=300&h=300&fit=crop" },
                    { name: "side desk", size: true, weight: false, optionForSelling: true, price: 2000, imagePreview: getImageUrl("side desk") },
                    { name: "dressing table", size: true, weight: false, optionForSelling: true, price: 3000, imagePreview: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?w=300&h=300&fit=crop" },
                    { name: "table/desk", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("table desk") },
                    { name: "kotatsu", size: true, weight: false, optionForSelling: false, price: 2000, imagePreview: getImageUrl("kotatsu") }
                ]
            },
            {
                categoryName: "storage",
                items: [
                    { name: "shelf", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=300&h=300&fit=crop" },
                    { name: "bookshelf", size: true, weight: true, optionForSelling: true, price: 0, imagePreview: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=300&h=300&fit=crop" },
                    { name: "cupboard", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("cupboard") },
                    { name: "gap storage", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("gap storage") },
                    { name: "chest", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=300&h=300&fit=crop" },
                    { name: "chest of drawers", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("chest of drawers") },
                    { name: "closet/wardrobe", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=300&fit=crop" },
                    { name: "fancy case", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("fancy case") },
                    { name: "rack", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("rack") },
                    { name: "cabinet", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=300&h=300&fit=crop" },
                    { name: "sideboard", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("sideboard") },
                    { name: "tv stand", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=300&h=300&fit=crop" },
                    { name: "telephone stand", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("telephone stand") },
                    { name: "microwave stand", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("microwave stand") },
                    { name: "kitchen cart", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop" },
                    { name: "shoe rack", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("shoe rack") },
                    { name: "clothing storage case (1 tier/with lid)", size: true, weight: true, optionForSelling: false, price: 1000, imagePreview: getImageUrl("clothing storage case 1 tier") },
                    { name: "3-tier storage case", size: true, weight: false, optionForSelling: false, price: 2000, imagePreview: getImageUrl("3-tier storage case") },
                    { name: "color boxes (3 shelves or less)", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: getImageUrl("color boxes 3 shelves") },
                    { name: "color boxes (4 shelves or more)", size: true, weight: false, optionForSelling: false, price: 0, imagePreview: getImageUrl("color boxes 4 shelves") },
                    { name: "tea box", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: getImageUrl("tea box") },
                    { name: "storage shed", size: true, weight: true, optionForSelling: false, price: 0, imagePreview: getImageUrl("storage shed") },
                    { name: "washing machine rack", size: true, weight: false, optionForSelling: false, price: 1500, imagePreview: getImageUrl("washing machine rack") }
                ]
            },
            {
                categoryName: "rug",
                items: [
                    { name: "tatami", size: false, weight: false, optionForSelling: false, price: 2.000, imagePreview: getImageUrl("tatami") },
                    { name: "mat", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: getImageUrl("mat") },
                    { name: "carpet/rug (2 tatami mats)", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=300&h=300&fit=crop" },
                    { name: "carpet/rug (3 tatami mats)", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: getImageUrl("carpet rug 3 tatami") },
                    { name: "carpet/rug (4.5 tatami mats)", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: getImageUrl("carpet rug 4.5 tatami") },
                    { name: "carpet/rug (6 tatami mats)", size: false, weight: false, optionForSelling: false, price: 2500, imagePreview: getImageUrl("carpet rug 6 tatami") },
                    { name: "wood carpet (6 tatami mats)", size: false, weight: false, optionForSelling: false, price: 5500, imagePreview: getImageUrl("wood carpet 6 tatami") },
                    { name: "indoor tile carpet (10 pieces)", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: getImageUrl("indoor tile carpet 10 pieces") },
                    { name: "outdoor carpet tiles (10 pieces)", size: false, weight: false, optionForSelling: false, price: 3000, imagePreview: getImageUrl("outdoor carpet tiles 10 pieces") }
                ]
            },
            {
                categoryName: "other furniture",
                items: [
                    { name: "small trash can", size: true, weight: false, optionForSelling: false, price: 500, imagePreview: getImageUrl("small trash can") },
                    { name: "large trash can", size: true, weight: false, optionForSelling: false, price: 1000, imagePreview: getImageUrl("large trash can") },
                    { name: "shinto altar", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: getImageUrl("shinto altar") },
                    { name: "buddhist altar", size: true, weight: false, optionForSelling: false, price: 0, imagePreview: getImageUrl("buddhist altar") },
                    { name: "full-length mirror", size: true, weight: false, optionForSelling: true, price: 1500, imagePreview: "https://images.unsplash.com/photo-1617698483542-1c4a2f8366bd?w=300&h=300&fit=crop" },
                    { name: "screen/partition", size: true, weight: false, optionForSelling: false, price: 0, imagePreview: getImageUrl("screen partition") },
                    { name: "blinds/roller screens", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("blinds roller screens") },
                    { name: "office furniture", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("office furniture") },
                    { name: "furniture products", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("furniture products") }
                ]
            }
        ]
    },
    {
        type: "electric appliances",
        categories: [
            {
                categoryName: "kitchen",
                items: [
                    { name: "Refrigerator (up to 200L)", size: false, weight: false, optionForSelling: true, price: 5500, imagePreview: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300&h=300&fit=crop" },
                    { name: "Refrigerator (201-500L or less)", size: false, weight: false, optionForSelling: true, price: 7000, imagePreview: getImageUrl("refrigerator 201-500L") },
                    { name: "Refrigerator (501-600L or less)", size: false, weight: false, optionForSelling: true, price: 9000, imagePreview: getImageUrl("refrigerator 501-600L") },
                    { name: "toaster", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=300&h=300&fit=crop" },
                    { name: "microwave oven", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=300&h=300&fit=crop" },
                    { name: "Oven microwave", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: getImageUrl("oven microwave") },
                    { name: "Dish dryer", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: getImageUrl("dish dryer") },
                    { name: "Dishwasher", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "https://images.unsplash.com/photo-1570226665986-1a8037b8c25e?w=300&h=300&fit=crop" },
                    { name: "Gas water heater", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: getImageUrl("gas water heater") },
                    { name: "Gas stove (2 burners or more)", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=300&h=300&fit=crop" },
                    { name: "Single burner stove (gas/induction)", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: getImageUrl("single burner stove") },
                    { name: "rice cooker", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "https://images.unsplash.com/photo-1625244724120-0b1485df2181?w=300&h=300&fit=crop" },
                    { name: "Electric kettle", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "https://images.unsplash.com/photo-1559551552-f08892fcaf3b?w=300&h=300&fit=crop" },
                    { name: "wine cellar", size: true, weight: true, optionForSelling: true, price: 3000, imagePreview: getImageUrl("wine cellar") },
                    { name: "Refrigerator (601L or more)", size: false, weight: false, optionForSelling: true, price: 12000, imagePreview: getImageUrl("refrigerator 601L or more") }
                ]
            },
            {
                categoryName: "washing machines",
                items: [
                    { name: "clothes dryer", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300&h=300&fit=crop" },
                    { name: "trouser press", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: getImageUrl("trouser press") },
                    { name: "top-loading washing machine", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300&h=300&fit=crop" },
                    { name: "drum-type washing machine", size: false, weight: false, optionForSelling: true, price: 5500, imagePreview: getImageUrl("drum-type washing machine") }
                ]
            },
            {
                categoryName: "tv/video equipment",
                items: [
                    { name: "Television (up to 25 inches)", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop" },
                    { name: "Televisions (26-39 inches)", size: false, weight: false, optionForSelling: true, price: 5500, imagePreview: getImageUrl("TV 26-39 inches") },
                    { name: "Television (40-59 inches)", size: false, weight: false, optionForSelling: true, price: 7000, imagePreview: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=300&h=300&fit=crop" },
                    { name: "Television (60 inches or larger)", size: false, weight: false, optionForSelling: true, price: 9000, imagePreview: getImageUrl("TV 60 inches or larger") },
                    { name: "Home theater/speaker set", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: getImageUrl("home theater speaker set") },
                    { name: "DVD player/recorder", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: getImageUrl("DVD player recorder") },
                    { name: "LD player", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: getImageUrl("LD player") },
                    { name: "projector", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=300&h=300&fit=crop" },
                    { name: "tuner", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: getImageUrl("tuner") },
                    { name: "CS/BS antenna", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: getImageUrl("CS BS antenna") }
                ]
            },
            {
                categoryName: "acoustic",
                items: [
                    { name: "record player", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300&h=300&fit=crop" },
                    { name: "open reel deck", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: getImageUrl("open reel deck") },
                    { name: "boombox", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: getImageUrl("boombox") },
                    { name: "mini stereo system", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: getImageUrl("mini stereo system") },
                    { name: "av amplifier", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: getImageUrl("av amplifier") },
                    { name: "speaker set", size: true, weight: true, optionForSelling: true, price: 1500, imagePreview: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300&h=300&fit=crop" },
                    { name: "audio equipment", size: true, weight: true, optionForSelling: true, price: 0, imagePreview: getImageUrl("audio equipment") }
                ]
            },
            {
                categoryName: "air conditioning",
                items: [
                    { name: "air purifier", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop" },
                    { name: "humidifier", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: getImageUrl("humidifier") },
                    { name: "dehumidifier", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: getImageUrl("dehumidifier") },
                    { name: "Ventilation fan", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: getImageUrl("ventilation fan") },
                    { name: "circulator", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: getImageUrl("circulator") },
                    { name: "electric fan", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "https://images.unsplash.com/photo-1585668952522-2b10f6903669?w=300&h=300&fit=crop" },
                    { name: "cold fan", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: getImageUrl("cold fan") },
                    { name: "Oil stove", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: getImageUrl("oil stove") },
                    { name: "Electric heater", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "https://images.unsplash.com/photo-1585348028423-92071ef91248?w=300&h=300&fit=crop" },
                    { name: "Electric heater (small)", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: getImageUrl("electric heater small") },
                    { name: "Gas fan heater", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: getImageUrl("gas fan heater") },
                    { name: "Halogen heater", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: getImageUrl("halogen heater") },
                    { name: "oil heater", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: getImageUrl("oil heater") },
                    { name: "Electric blankets, electric throws", size: false, weight: false, optionForSelling: false, price: 2500, imagePreview: getImageUrl("electric blankets") },
                    { name: "Hot carpet", size: false, weight: false, optionForSelling: false, price: 2500, imagePreview: getImageUrl("hot carpet") },
                    { name: "Air conditioner (indoor and outdoor units)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: "https://images.unsplash.com/photo-1631545805779-51b1ddde5f40?w=300&h=300&fit=crop" },
                    { name: "Window air conditioner", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: getImageUrl("window air conditioner") },
                    { name: "Commercial air conditioners", size: true, weight: true, optionForSelling: true, price: 0, imagePreview: getImageUrl("commercial air conditioners") }
                ]
            },
            {
                categoryName: "vacuum cleaners",
                items: [
                    { name: "handheld vacuum cleaner", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: getImageUrl("handheld vacuum cleaner") },
                    { name: "robot vacuum cleaner", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=300&fit=crop" },
                    { name: "vacuum cleaner", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=300&h=300&fit=crop" },
                    { name: "steam cleaner", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: getImageUrl("steam cleaner") }
                ]
            },
            {
                categoryName: "sewing machine",
                items: [
                    { name: "sewing machine", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "https://images.unsplash.com/photo-1459414152805-baba3e1eb815?w=300&h=300&fit=crop" },
                    { name: "foot-operated sewing machine", size: false, weight: false, optionForSelling: true, price: 7000, imagePreview: getImageUrl("foot-operated sewing machine") }
                ]
            },
            {
                categoryName: "lighting equipment",
                items: [
                    { name: "tabletop stand", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: getImageUrl("tabletop stand") },
                    { name: "floor stand", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=300&h=300&fit=crop" },
                    { name: "downlights", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: getImageUrl("downlights") },
                    { name: "ceiling light", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=300&h=300&fit=crop" },
                    { name: "ceiling fan", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "https://images.unsplash.com/photo-1565073182887-6bcefbe225b1?w=300&h=300&fit=crop" },
                    { name: "chandelier", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=300&h=300&fit=crop" }
                ]
            },
            {
                categoryName: "health equipment",
                items: [
                    { name: "large massage machine", size: false, weight: false, optionForSelling: true, price: 9000, imagePreview: getImageUrl("large massage machine") },
                    { name: "small massage machine", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: getImageUrl("small massage machine") },
                    { name: "airy shape", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: getImageUrl("airy shape") },
                    { name: "foot massager", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: getImageUrl("foot massager") },
                    { name: "stepper", size: false, weight: false, optionForSelling: false, price: 2500, imagePreview: getImageUrl("stepper") },
                    { name: "leg magic", size: false, weight: false, optionForSelling: false, price: 2500, imagePreview: getImageUrl("leg magic") },
                    { name: "horse riding machine", size: false, weight: false, optionForSelling: false, price: 4000, imagePreview: getImageUrl("horse riding machine") },
                    { name: "exercise bike", size: false, weight: false, optionForSelling: false, price: 4000, imagePreview: "https://images.unsplash.com/photo-1591940742878-13f53a1e6a2f?w=300&h=300&fit=crop" },
                    { name: "treadmill", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=300&h=300&fit=crop" }
                ]
            },
            {
                categoryName: "pcs and peripherals",
                items: [
                    { name: "Mouse and keyboard", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop" },
                    { name: "Cables (box with sum of three sides 116cm)", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: getImageUrl("cables box") },
                    { name: "PC monitor", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop" },
                    { name: "Desktop computer unit", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300&h=300&fit=crop" },
                    { name: "Notebook PC", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop" },
                    { name: "All-in-one PC", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: getImageUrl("all-in-one PC") },
                    { name: "Desktop scanner", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: getImageUrl("desktop scanner") },
                    { name: "Dedicated word processor", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: getImageUrl("dedicated word processor") },
                    { name: "Printer (A4)", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=300&h=300&fit=crop" },
                    { name: "Printer (A3)", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: getImageUrl("printer A3") },
                    { name: "Shredder (small)", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: getImageUrl("shredder small") },
                    { name: "Large shredder", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: getImageUrl("large shredder") },
                    { name: "Office copier", size: false, weight: false, optionForSelling: true, price: 12000, imagePreview: getImageUrl("office copier") }
                ]
            },
            {
                categoryName: "other home appliances",
                items: [
                    { name: "small electrical appliances", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: getImageUrl("small electrical appliances") },
                    { name: "electric appliances", size: true, weight: true, optionForSelling: true, price: 0, imagePreview: getImageUrl("electric appliances") }
                ]
            }
        ]
    },
    {
        type: "daily necessities",
        categories: [
            {
                categoryName: "specialized products",
                items: [
                    { name: "Clothing (in 45L bags)", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: getImageUrl("clothing 45L bags") },
                    { name: "Books and magazines (box with dimensions totaling 116cm)", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: getImageUrl("books magazines box") },
                    { name: "Paper (3 sides total 116cm box)", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: getImageUrl("paper box") },
                    { name: "Iron", size: true, weight: true, optionForSelling: false, price: 0, imagePreview: "https://images.unsplash.com/photo-1585155967849-91c736589c84?w=300&h=300&fit=crop" },
                    { name: "Curtains (for one window, including sheer curtains)", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: getImageUrl("curtains one window") },
                    { name: "futon", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: getImageUrl("futon") },
                    { name: "blanket", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "https://images.unsplash.com/photo-1580301762395-21cef70f5c3b?w=300&h=300&fit=crop" },
                    { name: "pillow", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=300&h=300&fit=crop" },
                    { name: "Sheets/bed pads", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: getImageUrl("sheets bed pads") },
                    { name: "cushion", size: true, weight: false, optionForSelling: false, price: 500, imagePreview: getImageUrl("cushion") },
                    { name: "Japanese cushion", size: true, weight: false, optionForSelling: false, price: 500, imagePreview: getImageUrl("japanese cushion") }
                ]
            },
            {
                categoryName: "miscellaneous goods",
                items: [
                    { name: "Miscellaneous goods (box with three sides totaling 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("miscellaneous goods") },
                    { name: "Tableware (box with three sides totaling 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("tableware") },
                    { name: "Kitchenware (box with three sides totaling 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("kitchenware") },
                    { name: "Shoes (box with three dimensions totaling 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("shoes box") },
                    { name: "Bags (box with sum of 3 sides 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("bags box") },
                    { name: "Toy (box with three sides totaling 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("toy box") },
                    { name: "Stuffed animal (box with three sides totaling 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("stuffed animal box") }
                ]
            },
            {
                categoryName: "daily necessities",
                items: [
                    { name: "Clothes drying rack (for indoor use)", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: getImageUrl("clothes drying rack indoor") },
                    { name: "Clothes drying rack (for outdoor use)", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: getImageUrl("clothes drying rack outdoor") },
                    { name: "Clothes drying pole", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: getImageUrl("clothes drying pole") },
                    { name: "Tension rod", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: getImageUrl("tension rod") },
                    { name: "wheelchair", size: false, weight: false, optionForSelling: false, price: 3000, imagePreview: getImageUrl("wheelchair") },
                    { name: "stroller", size: false, weight: false, optionForSelling: false, price: 2500, imagePreview: "https://images.unsplash.com/photo-1599685315640-4a9e0f11fbb2?w=300&h=300&fit=crop" },
                    { name: "Shopping cart", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: getImageUrl("shopping cart") },
                    { name: "Washlet (unused)", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: getImageUrl("washlet unused") },
                    { name: "Umbrellas (up to 5)", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: getImageUrl("umbrellas") },
                    { name: "Dolly", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: getImageUrl("dolly") },
                    { name: "Step ladders, ladders, scaffolding (small)", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: getImageUrl("step ladders small") },
                    { name: "Step ladders, ladders, scaffolding (large)", size: false, weight: false, optionForSelling: false, price: 3000, imagePreview: getImageUrl("step ladders large") }
                ]
            },
            {
                categoryName: "safe",
                items: [
                    { name: "safe (under 60kg)", size: false, weight: false, optionForSelling: false, price: 9000, imagePreview: getImageUrl("safe under 60kg") },
                    { name: "safe (under 90kg)", size: false, weight: false, optionForSelling: false, price: 12000, imagePreview: getImageUrl("safe under 90kg") },
                    { name: "safe (120kg or less)", size: false, weight: false, optionForSelling: false, price: 17000, imagePreview: getImageUrl("safe 120kg or less") },
                    { name: "safe (over 120kg)", size: true, weight: true, optionForSelling: false, price: 0, imagePreview: getImageUrl("safe over 120kg") }
                ]
            },
            {
                categoryName: "hobbies and seasonal items",
                items: [
                    { name: "Small musical instrument", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: getImageUrl("small musical instrument") },
                    { name: "Musical instrument (medium)", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: getImageUrl("musical instrument medium") },
                    { name: "Electronic keyboard", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "https://images.unsplash.com/photo-1520520679835-c7c8e226c6c6?w=300&h=300&fit=crop" },
                    { name: "Electone", size: false, weight: false, optionForSelling: true, price: 9000, imagePreview: getImageUrl("electone") },
                    { name: "Electronic piano/organ", size: false, weight: false, optionForSelling: true, price: 12000, imagePreview: getImageUrl("electronic piano organ") },
                    { name: "Upright piano", size: false, weight: false, optionForSelling: true, price: 20000, imagePreview: "https://images.unsplash.com/photo-1520520679835-c7c8e226c6c6?w=300&h=300&fit=crop" },
                    { name: "Grand piano", size: true, weight: true, optionForSelling: true, price: 0, imagePreview: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=300&h=300&fit=crop" },
                    { name: "Barbells, dumbbells", size: false, weight: true, optionForSelling: false, price: 0, imagePreview: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=300&h=300&fit=crop" },
                    { name: "surfboard", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "https://images.unsplash.com/photo-1612516603051-e64958e633fb?w=300&h=300&fit=crop" },
                    { name: "Snowboard", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: getImageUrl("snowboard") },
                    { name: "skis", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "https://images.unsplash.com/photo-1605540436563-7fca4277545e?w=300&h=300&fit=crop" },
                    { name: "Ski wear", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: getImageUrl("ski wear") },
                    { name: "stock", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: getImageUrl("stock") },
                    { name: "Ski and snowboard boots", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: getImageUrl("ski snowboard boots") },
                    { name: "Golf bag and club set", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: getImageUrl("golf bag club set") },
                    { name: "Golf clubs (up to 10)", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: getImageUrl("golf clubs up to 10") },
                    { name: "Golf bag (empty)", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: getImageUrl("golf bag empty") },
                    { name: "sleeping bag", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "https://images.unsplash.com/photo-1504281892793-62bf2f8f13e4?w=300&h=300&fit=crop" },
                    { name: "tent", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "https://images.unsplash.com/photo-1504281892793-62bf2f8f13e4?w=300&h=300&fit=crop" },
                    { name: "Parasol", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: getImageUrl("parasol") },
                    { name: "Barbecue grill", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "https://images.unsplash.com/photo-1536964125350-f4e1a6b7c650?w=300&h=300&fit=crop" },
                    { name: "Large suitcase", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: getImageUrl("large suitcase") },
                    { name: "Small suitcase", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: getImageUrl("small suitcase") },
                    { name: "Hina dolls", size: false, weight: false, optionForSelling: false, price: 4000, imagePreview: getImageUrl("hina dolls") },
                    { name: "May doll", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: getImageUrl("may doll") },
                    { name: "helmet", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: getImageUrl("helmet") },
                    { name: "Pachinko and pachislot", size: false, weight: true, optionForSelling: true, price: 4000, imagePreview: getImageUrl("pachinko pachislot") }
                ]
            },
            {
                categoryName: "garden",
                items: [
                    { name: "lawn mower", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: getImageUrl("lawn mower") },
                    { name: "concrete blocks", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: getImageUrl("concrete blocks") },
                    { name: "flower pots (up to 5)", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=300&fit=crop" }
                ]
            },
            {
                categoryName: "vehicle",
                items: [
                    { name: "unicycle", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: getImageUrl("unicycle") },
                    { name: "tricycle", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: getImageUrl("tricycle") },
                    { name: "Children's bicycles", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: getImageUrl("children bicycles") },
                    { name: "Folding bicycle", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: getImageUrl("folding bicycle") },
                    { name: "bicycle", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=300&h=300&fit=crop" },
                    { name: "Motorcycles (50cc or less)", size: false, weight: false, optionForSelling: true, price: 12000, imagePreview: getImageUrl("motorcycle 50cc or less") },
                    { name: "Motorcycles (51cc to 250cc)", size: false, weight: false, optionForSelling: true, price: 17000, imagePreview: getImageUrl("motorcycle 51cc to 250cc") },
                    { name: "Motorcycles (251cc to 400cc)", size: false, weight: false, optionForSelling: true, price: 20000, imagePreview: getImageUrl("motorcycle 251cc to 400cc") },
                    { name: "Motorcycles (401cc and above)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: getImageUrl("motorcycle 401cc and above") },
                    { name: "child seat", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: getImageUrl("child seat") },
                    { name: "Wheels only", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: getImageUrl("wheels only") },
                    { name: "Tires only", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: getImageUrl("tires only") },
                    { name: "Tire and wheel set", size: false, weight: false, optionForSelling: false, price: 3000, imagePreview: getImageUrl("tire and wheel set") }
                ]
            },
            {
                categoryName: "other daily necessities",
                items: [
                    { name: "daily necessities (small)", size: true, weight: true, optionForSelling: false, price: 500, imagePreview: getImageUrl("daily necessities small") },
                    { name: "daily necessities", size: true, weight: true, optionForSelling: false, price: 0, imagePreview: getImageUrl("daily necessities") }
                ]
            }
        ]
    }
];