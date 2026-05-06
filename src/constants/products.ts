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

export const productsData: ProductCategory[] = [
    {
        type: "furniture",
        categories: [
            {
                categoryName: "bedding",
                items: [
                    { name: "bed (single)", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item1.jpg" },
                    { name: "bed (semi-double)", size: false, weight: false, optionForSelling: true, price: 5000, imagePreview: "/assets/items-list/item2.jpg" },
                    { name: "bed (double)", size: false, weight: false, optionForSelling: true, price: 7000, imagePreview: "/assets/items-list/item3.jpg" },
                    { name: "queen-size bed", size: false, weight: false, optionForSelling: true, price: 10000, imagePreview: "/assets/items-list/item4.jpg" },
                    { name: "king-size bed", size: false, weight: false, optionForSelling: true, price: 10000, imagePreview: "/assets/items-list/item5.jpg" },
                    { name: "flip-up bed (single)", size: false, weight: false, optionForSelling: true, price: 5000, imagePreview: "/assets/items-list/item6.jpg" },
                    { name: "flip-up bed (semi-double)", size: false, weight: false, optionForSelling: true, price: 5000, imagePreview: "/assets/items-list/item7.jpg" },
                    { name: "flip-up bed (double)", size: false, weight: false, optionForSelling: true, price: 8000, imagePreview: "/assets/items-list/item8.jpg" },
                    { name: "lift-up bed (queen size)", size: false, weight: false, optionForSelling: true, price: 12000, imagePreview: "/assets/items-list/item9.jpg" },
                    { name: "lift-up bed (king size)", size: false, weight: false, optionForSelling: true, price: 12000, imagePreview: "/assets/items-list/item10.jpg" },
                    { name: "baby crib", size: true, weight: true, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item11.jpg" },
                    { name: "folding bed", size: true, weight: true, optionForSelling: false, price: 3000, imagePreview: "/assets/items-list/item12.jpg" },
                    { name: "loft bed", size: false, weight: false, optionForSelling: false, price: 8500, imagePreview: "/assets/items-list/item13.jpg" },
                    { name: "bunk beds", size: false, weight: false, optionForSelling: false, price: 10000, imagePreview: "/assets/items-list/item14.jpg" },
                    { name: "system bed", size: false, weight: false, optionForSelling: false, price: 15000, imagePreview: "/assets/items-list/item15.jpg" },
                    { name: "nursing bed", size: false, weight: false, optionForSelling: false, price: 17000, imagePreview: "/assets/items-list/item16.jpg" },
                    { name: "mattress (single)", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item17.jpg" },
                    { name: "mattress (semi-double)", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item18.jpg" },
                    { name: "mattress (double)", size: false, weight: false, optionForSelling: true, price: 5500, imagePreview: "/assets/items-list/item19.jpg" },
                    { name: "queen-size mattress", size: false, weight: false, optionForSelling: true, price: 9000, imagePreview: "/assets/items-list/item20.jpg" },
                    { name: "mattress (king size)", size: false, weight: false, optionForSelling: true, price: 9000, imagePreview: "/assets/items-list/item21.jpg" },
                    { name: "tri-fold mattress", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item22.jpg" },
                    { name: "waterbed mattress", size: false, weight: false, optionForSelling: false, price: 4000, imagePreview: "/assets/items-list/item23.jpg" }
                ]
            },
            {
                categoryName: "chair",
                items: [
                    { name: "floor chair", size: true, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item24.jpg" },
                    { name: "dining chair", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item25.jpg" },
                    { name: "desk chair", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item26.jpg" },
                    { name: "president's chair", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item27.jpg" },
                    { name: "chair", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item28.jpg" },
                    { name: "bench", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item29.jpg" },
                    { name: "rocking chair", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item30.jpg" },
                    { name: "counter chair", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item31.jpg" },
                    { name: "floor cushion (thick)", size: true, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item32.jpg" }
                ]
            },
            {
                categoryName: "sofa",
                items: [
                    { name: "sofa (single-seater)", size: true, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item33.jpg" },
                    { name: "sofa (2-seater)", size: true, weight: false, optionForSelling: true, price: 5000, imagePreview: "/assets/items-list/item34.jpg" },
                    { name: "sofa (3-seater)", size: true, weight: false, optionForSelling: true, price: 6500, imagePreview: "/assets/items-list/item35.jpg" },
                    { name: "reclining sofa (single-seater)", size: true, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item36.jpg" },
                    { name: "reclining sofa (2-seater)", size: true, weight: false, optionForSelling: true, price: 6500, imagePreview: "/assets/items-list/item37.jpg" },
                    { name: "reclining sofa (3-seater)", size: true, weight: false, optionForSelling: true, price: 8000, imagePreview: "/assets/items-list/item38.jpg" },
                    { name: "corner sectional sofa", size: true, weight: false, optionForSelling: true, price: 11000, imagePreview: "/assets/items-list/item39.jpg" },
                    { name: "sofa bed", size: false, weight: false, optionForSelling: false, price: 7000, imagePreview: "/assets/items-list/item40.jpg" },
                    { name: "ottoman (small)", size: true, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item41.jpg" },
                    { name: "ottoman (large)", size: true, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item42.jpg" }
                ]
            },
            {
                categoryName: "tables and desks",
                items: [
                    { name: "dining set for 2 people", size: false, weight: false, optionForSelling: true, price: 5000, imagePreview: "/assets/items-list/item43.jpg" },
                    { name: "dining set for 4 people", size: false, weight: false, optionForSelling: true, price: 8000, imagePreview: "/assets/items-list/item44.jpg" },
                    { name: "dining set for 6 people", size: false, weight: false, optionForSelling: true, price: 11000, imagePreview: "/assets/items-list/item45.jpg" },
                    { name: "dining table for 2 people", size: true, weight: true, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item46.jpg" },
                    { name: "dining table for 4 people", size: true, weight: true, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item47.jpg" },
                    { name: "dining table for 6 people", size: true, weight: true, optionForSelling: true, price: 5000, imagePreview: "/assets/items-list/item48.jpg" },
                    { name: "study desk (without bookshelf/side table)", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item49.jpg" },
                    { name: "study desk (with bookshelf/side desk)", size: false, weight: false, optionForSelling: true, price: 6500, imagePreview: "/assets/items-list/item50.jpg" },
                    { name: "computer desk", size: true, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item51.jpg" },
                    { name: "side desk", size: true, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item52.jpg" },
                    { name: "dressing table", size: true, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item53.jpg" },
                    { name: "table/desk", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item54.jpg" },
                    { name: "kotatsu", size: true, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item55.jpg" }
                ]
            },
            {
                categoryName: "storage",
                items: [
                    { name: "shelf", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item56.jpg" },
                    { name: "bookshelf", size: true, weight: true, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item57.jpg" },
                    { name: "cupboard", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item58.jpg" },
                    { name: "gap storage", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item59.jpg" },
                    { name: "chest", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item60.jpg" },
                    { name: "chest of drawers", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item61.jpg" },
                    { name: "closet/wardrobe", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item62.jpg" },
                    { name: "fancy case", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item63.jpg" },
                    { name: "rack", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item64.jpg" },
                    { name: "cabinet", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item65.jpg" },
                    { name: "sideboard", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item66.jpg" },
                    { name: "tv stand", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item67.jpg" },
                    { name: "telephone stand", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item68.jpg" },
                    { name: "microwave stand", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item69.jpg" },
                    { name: "kitchen cart", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item70.jpg" },
                    { name: "shoe rack", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item71.jpg" },
                    { name: "clothing storage case (1 tier/with lid)", size: true, weight: true, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item72.jpg" },
                    { name: "3-tier storage case", size: true, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item73.jpg" },
                    { name: "color boxes (3 shelves or less)", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item74.jpg" },
                    { name: "color boxes (4 shelves or more)", size: true, weight: false, optionForSelling: false, price: 0, imagePreview: "/assets/items-list/item75.jpg" },
                    { name: "tea box", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item76.jpg" },
                    { name: "storage shed", size: true, weight: true, optionForSelling: false, price: 0, imagePreview: "/assets/items-list/item77.jpg" },
                    { name: "washing machine rack", size: true, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item78.jpg" }
                ]
            },
            {
                categoryName: "rug",
                items: [
                    { name: "tatami", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item79.jpg" },
                    { name: "mat", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item80.jpg" },
                    { name: "carpet/rug (2 tatami mats)", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item81.jpg" },
                    { name: "carpet/rug (3 tatami mats)", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item82.jpg" },
                    { name: "carpet/rug (4.5 tatami mats)", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item83.jpg" },
                    { name: "carpet/rug (6 tatami mats)", size: false, weight: false, optionForSelling: false, price: 2500, imagePreview: "/assets/items-list/item84.jpg" },
                    { name: "wood carpet (6 tatami mats)", size: false, weight: false, optionForSelling: false, price: 5500, imagePreview: "/assets/items-list/item85.jpg" },
                    { name: "indoor tile carpet (10 pieces)", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item86.jpg" },
                    { name: "outdoor carpet tiles (10 pieces)", size: false, weight: false, optionForSelling: false, price: 3000, imagePreview: "/assets/items-list/item87.jpg" }
                ]
            },
            {
                categoryName: "other furniture",
                items: [
                    { name: "small trash can", size: true, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item88.jpg" },
                    { name: "large trash can", size: true, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item89.jpg" },
                    { name: "shinto altar", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item90.jpg" },
                    { name: "buddhist altar", size: true, weight: false, optionForSelling: false, price: 0, imagePreview: "/assets/items-list/item91.jpg" },
                    { name: "full-length mirror", size: true, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item92.jpg" },
                    { name: "screen/partition", size: true, weight: false, optionForSelling: false, price: 0, imagePreview: "/assets/items-list/item93.jpg" },
                    { name: "blinds/roller screens", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item94.jpg" },
                    { name: "office furniture", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item95.jpg" },
                    { name: "furniture products", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item96.jpg" }
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
                    { name: "Refrigerator (up to 200L)", size: false, weight: false, optionForSelling: true, price: 5500, imagePreview: "/assets/items-list/item97.jpg" },
                    { name: "Refrigerator (201-500L or less)", size: false, weight: false, optionForSelling: true, price: 7000, imagePreview: "/assets/items-list/item98.jpg" },
                    { name: "Refrigerator (501-600L or less)", size: false, weight: false, optionForSelling: true, price: 9000, imagePreview: "/assets/items-list/item99.jpg" },
                    { name: "toaster", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item100.jpg" },
                    { name: "microwave oven", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item101.jpg" },
                    { name: "Oven", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item102.jpg" },
                    { name: "Dish dryer", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item103.jpg" },
                    { name: "Dishwasher", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item104.jpg" },
                    { name: "Gas water heater", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item105.jpg" },
                    { name: "Gas stove (2 burners or more)", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item106.jpg" },
                    { name: "Single burner stove (gas/induction)", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item107.jpg" },
                    { name: "rice cooker", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item108.jpg" },
                    { name: "Electric kettle", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item109.jpg" },
                    { name: "wine cellar", size: true, weight: true, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item110.jpg" },
                    { name: "Refrigerator (601L or more)", size: false, weight: false, optionForSelling: true, price: 12000, imagePreview: "/assets/items-list/item111.png" }
                ]
            },
            {
                categoryName: "washing machines",
                items: [
                    { name: "clothes dryer", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item112.jpg" },
                    { name: "trouser press", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item113.jpg" },
                    { name: "top-loading washing machine", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item114.jpg" },
                    { name: "drum-type washing machine", size: false, weight: false, optionForSelling: true, price: 5500, imagePreview: "/assets/items-list/item115.jpg" }
                ]
            },
            {
                categoryName: "tv/video equipment",
                items: [
                    { name: "Television (up to 25 inches)", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item116.jpg" },
                    { name: "Televisions (26-39 inches)", size: false, weight: false, optionForSelling: true, price: 5500, imagePreview: "/assets/items-list/item117.jpg" },
                    { name: "Television (40-59 inches)", size: false, weight: false, optionForSelling: true, price: 7000, imagePreview: "/assets/items-list/item118.jpg" },
                    { name: "Television (60 inches or larger)", size: false, weight: false, optionForSelling: true, price: 9000, imagePreview: "/assets/items-list/item119.jpg" },
                    { name: "Home theater/speaker set", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item120.jpg" },
                    { name: "DVD player/recorder", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item121.jpg" },
                    { name: "LD player", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item122.jpg" },
                    { name: "projector", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item123.jpg" },
                    { name: "tuner", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item124.jpg" },
                    { name: "CS/BS antenna", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item125.jpg" }
                ]
            },
            {
                categoryName: "acoustic",
                items: [
                    { name: "record player", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item126.jpg" },
                    { name: "open reel deck", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item127.jpg" },
                    { name: "boombox", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item128.jpg" },
                    { name: "mini stereo system", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item129.jpg" },
                    { name: "av amplifier", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item130.jpg" },
                    { name: "speaker set", size: true, weight: true, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item131.jpg" },
                    { name: "audio equipment", size: true, weight: true, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item132.jpg" }
                ]
            },
            {
                categoryName: "air conditioning",
                items: [
                    { name: "air purifier", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item134.jpg" },
                    { name: "humidifier", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item133.jpg" },
                    { name: "dehumidifier", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item135.jpg" },
                    { name: "Ventilation fan", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item136.jpg" },
                    { name: "circulator", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item137.jpg" },
                    { name: "electric fan", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item138.jpg" },
                    { name: "cold fan", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item139.jpg" },
                    { name: "Oil stove", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item140.jpg" },
                    { name: "Electric heater", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item141.jpg" },
                    { name: "Electric heater (small)", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item142.jpg" },
                    { name: "Gas fan heater", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item143.jpg" },
                    { name: "Halogen heater", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item144.jpg" },
                    { name: "oil heater", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item145.jpg" },
                    { name: "Electric blankets, electric throws", size: false, weight: false, optionForSelling: false, price: 2500, imagePreview: "/assets/items-list/item146.jpg" },
                    { name: "Hot carpet", size: false, weight: false, optionForSelling: false, price: 2500, imagePreview: "/assets/items-list/item147.jpg" },
                    { name: "Air conditioner (indoor and outdoor units)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item148.jpg" },
                    { name: "Window air conditioner", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item149.jpg" },
                    { name: "Commercial air conditioners", size: true, weight: true, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item148.jpg" }
                ]
            },
            {
                categoryName: "vacuum cleaners",
                items: [
                    { name: "handheld vacuum cleaner", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item151.jpg" },
                    { name: "robot vacuum cleaner", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item152.jpg" },
                    { name: "vacuum cleaner", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item153.jpg" },
                    { name: "steam cleaner", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item154.jpg" }
                ]
            },
            {
                categoryName: "sewing machine",
                items: [
                    { name: "sewing machine", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item155.jpg" },
                    { name: "foot-operated sewing machine", size: false, weight: false, optionForSelling: true, price: 7000, imagePreview: "/assets/items-list/item156.jpg" }
                ]
            },
            {
                categoryName: "lighting equipment",
                items: [
                    { name: "tabletop stand", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item157.jpg" },
                    { name: "floor stand", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item158.jpg" },
                    { name: "downlights", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item159.jpg" },
                    { name: "ceiling light", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item160.jpg" },
                    { name: "ceiling fan", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item161.jpg" },
                    { name: "chandelier", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item162.jpg" }
                ]
            },
            {
                categoryName: "health equipment",
                items: [
                    { name: "large massage machine", size: false, weight: false, optionForSelling: true, price: 9000, imagePreview: "/assets/items-list/item163.jpg" },
                    { name: "small massage machine", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item164.jpg" },
                    { name: "airy shape", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item165.jpg" },
                    { name: "foot massager", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item166.jpg" },
                    { name: "stepper", size: false, weight: false, optionForSelling: false, price: 2500, imagePreview: "/assets/items-list/item167.jpg" },
                    { name: "leg magic", size: false, weight: false, optionForSelling: false, price: 2500, imagePreview: "/assets/items-list/item168.jpg" },
                    { name: "horse riding machine", size: false, weight: false, optionForSelling: false, price: 4000, imagePreview: "/assets/items-list/item169.jpg" },
                    { name: "exercise bike", size: false, weight: false, optionForSelling: false, price: 4000, imagePreview: "/assets/items-list/item170.jpg" },
                    { name: "treadmill", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item171.jpg" }
                ]
            },
            {
                categoryName: "pcs and peripherals",
                items: [
                    { name: "Mouse and keyboard", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item172.jpg" },
                    { name: "Cables (box with sum of three sides 116cm)", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item173.jpg" },
                    { name: "PC monitor", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item174.jpg" },
                    { name: "Desktop computer unit", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item175.jpg" },
                    { name: "Notebook PC", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item176.jpg" },
                    { name: "All-in-one PC", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item177.jpg" },
                    { name: "Desktop scanner", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item178.jpg" },
                    { name: "Dedicated word processor", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item179.jpg" },
                    { name: "Printer (A4)", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item180.jpg" },
                    { name: "Printer (A3)", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item181.jpg" },
                    { name: "Shredder (small)", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item182.jpg" },
                    { name: "Large shredder", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item183.jpg" },
                    { name: "Office copier", size: false, weight: false, optionForSelling: true, price: 12000, imagePreview: "/assets/items-list/item184.jpg" }
                ]
            },
            {
                categoryName: "other home appliances",
                items: [
                    { name: "small electrical appliances", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item185.jpg" },
                    { name: "electric appliances", size: true, weight: true, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item186.jpg" }
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
                    { name: "Clothing (in 45L bags)", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item187.jpg" },
                    { name: "Books and magazines (box with dimensions totaling 116cm)", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item188.jpg" },
                    { name: "Paper (3 sides total 116cm box)", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item189.jpg" },
                    { name: "Iron", size: true, weight: true, optionForSelling: false, price: 0, imagePreview: "/assets/items-list/item190.jpg" },
                    { name: "Curtains (for one window, including sheer curtains)", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item191.jpg" },
                    { name: "futon", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item192.jpg" },
                    { name: "blanket", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item193.jpg" },
                    { name: "pillow", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item194.jpg" },
                    { name: "Sheets/bed pads", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item195.jpg" },
                    { name: "cushion", size: true, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item196.jpg" },
                    { name: "Japanese cushion", size: true, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item197.jpg" }
                ]
            },
            {
                categoryName: "miscellaneous goods",
                items: [
                    { name: "Miscellaneous goods (box with three sides totaling 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item198.jpg" },
                    { name: "Tableware (box with three sides totaling 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item199.jpg" },
                    { name: "Kitchenware (box with three sides totaling 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item200.jpg" },
                    { name: "Shoes (box with three dimensions totaling 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item201.jpg" },
                    { name: "Bags (box with sum of 3 sides 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item202.jpg" },
                    { name: "Toy (box with three sides totaling 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item203.jpg" },
                    { name: "Stuffed animal (box with three sides totaling 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item204.jpg" }
                ]
            },
            {
                categoryName: "daily necessities",
                items: [
                    { name: "Clothes drying rack (for indoor use)", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item205.jpg" },
                    { name: "Clothes drying rack (for outdoor use)", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item206.jpg" },
                    { name: "Clothes drying pole", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item207.jpg" },
                    { name: "Tension rod", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item208.jpg" },
                    { name: "wheelchair", size: false, weight: false, optionForSelling: false, price: 3000, imagePreview: "/assets/items-list/item209.jpg" },
                    { name: "stroller", size: false, weight: false, optionForSelling: false, price: 2500, imagePreview: "/assets/items-list/item210.jpg" },
                    { name: "Shopping cart", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item211.jpg" },
                    { name: "Washlet (unused)", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item212.jpg" },
                    { name: "Umbrellas (up to 5)", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item213.jpg" },
                    { name: "Dolly", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item214.jpg" },
                    { name: "Step ladders, ladders, scaffolding (small)", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item215.jpg" },
                    { name: "Step ladders, ladders, scaffolding (large)", size: false, weight: false, optionForSelling: false, price: 3000, imagePreview: "/assets/items-list/item216.jpg" }
                ]
            },
            {
                categoryName: "safe",
                items: [
                    { name: "safe (under 60kg)", size: false, weight: false, optionForSelling: false, price: 9000, imagePreview: "/assets/items-list/item217.jpg" },
                    { name: "safe (under 90kg)", size: false, weight: false, optionForSelling: false, price: 12000, imagePreview: "/assets/items-list/item218.jpg" },
                    { name: "safe (120kg or less)", size: false, weight: false, optionForSelling: false, price: 17000, imagePreview: "/assets/items-list/item219.jpg" },
                    { name: "safe (over 120kg)", size: true, weight: true, optionForSelling: false, price: 0, imagePreview: "/assets/items-list/item220.jpg" }
                ]
            },
            {
                categoryName: "hobbies and seasonal items",
                items: [
                    { name: "Small musical instrument", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item221.jpg" },
                    { name: "Musical instrument (medium)", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item221.jpg" },
                    { name: "Electronic keyboard", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item222.jpg" },
                    { name: "Electone", size: false, weight: false, optionForSelling: true, price: 9000, imagePreview: "/assets/items-list/item223.jpg" },
                    { name: "Electronic piano/organ", size: false, weight: false, optionForSelling: true, price: 12000, imagePreview: "/assets/items-list/item224.jpg" },
                    { name: "Upright piano", size: false, weight: false, optionForSelling: true, price: 20000, imagePreview: "/assets/items-list/item225.jpg" },
                    { name: "Grand piano", size: true, weight: true, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item226.jpg" },
                    { name: "Barbells, dumbbells", size: false, weight: true, optionForSelling: false, price: 0, imagePreview: "/assets/items-list/item227.jpg" },
                    { name: "surfboard", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item228.jpg" },
                    { name: "Snowboard", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item229.jpg" },
                    { name: "skis", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item230.jpg" },
                    { name: "Ski wear", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item231.jpg" },
                    { name: "stock", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item232.jpg" },
                    { name: "Ski and snowboard boots", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item233.jpg" },
                    { name: "Golf bag and club set", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item234.jpg" },
                    { name: "Golf clubs (up to 10)", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item235.jpg" },
                    { name: "Golf bag (empty)", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item236.jpg" },
                    { name: "sleeping bag", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item237.jpg" },
                    { name: "tent", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item238.jpg" },
                    { name: "Parasol", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item239.jpg" },
                    { name: "Barbecue grill", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item240.jpg" },
                    { name: "Large suitcase", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item241.jpg" },
                    { name: "Small suitcase", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item242.jpg" },
                    { name: "Hina dolls", size: false, weight: false, optionForSelling: false, price: 4000, imagePreview: "/assets/items-list/item243.jpg" },
                    { name: "May doll", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item244.jpg" },
                    { name: "helmet", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item245.jpg" },
                    { name: "Pachinko and pachislot", size: false, weight: true, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item246.jpg" }
                ]
            },
            {
                categoryName: "garden",
                items: [
                    { name: "lawn mower", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item247.jpg" },
                    { name: "concrete blocks", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item248.jpg" },
                    { name: "flower pots (up to 5)", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item249.jpg" }
                ]
            },
            {
                categoryName: "vehicle",
                items: [
                    { name: "unicycle", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item250.jpg" },
                    { name: "tricycle", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item251.jpg" },
                    { name: "Children's bicycles", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item252.jpg" },
                    { name: "Folding bicycle", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item253.jpg" },
                    { name: "bicycle", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item254.jpg" },
                    { name: "Motorcycles (50cc or less)", size: false, weight: false, optionForSelling: true, price: 12000, imagePreview: "/assets/items-list/item255.jpg" },
                    { name: "Motorcycles (51cc to 250cc)", size: false, weight: false, optionForSelling: true, price: 17000, imagePreview: "/assets/items-list/item255.jpg" },
                    { name: "Motorcycles (251cc to 400cc)", size: false, weight: false, optionForSelling: true, price: 20000, imagePreview: "/assets/items-list/item255.jpg" },
                    { name: "Motorcycles (401cc and above)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item255.jpg" },
                    { name: "child seat", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item256.jpg" },
                    { name: "Wheels only", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item257.jpg" },
                    { name: "Tires only", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item258.jpg" },
                    { name: "Tire and wheel set", size: false, weight: false, optionForSelling: false, price: 3000, imagePreview: "/assets/items-list/item259.jpg" }
                ]
            },
            {
                categoryName: "other daily necessities",
                items: [
                    { name: "daily necessities (small)", size: true, weight: true, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item260.jpg" },
                    { name: "large boxes", size: true, weight: true, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item260.jpg" }
                ]
            }
        ]
    }
];