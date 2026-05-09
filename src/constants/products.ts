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
                    { name: "bed (single)", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item1.webp" },
                    { name: "bed (semi-double)", size: false, weight: false, optionForSelling: true, price: 5000, imagePreview: "/assets/items-list/item2.webp" },
                    { name: "bed (double)", size: false, weight: false, optionForSelling: true, price: 7000, imagePreview: "/assets/items-list/item3.webp" },
                    { name: "queen-size bed", size: false, weight: false, optionForSelling: true, price: 10000, imagePreview: "/assets/items-list/item4.webp" },
                    { name: "king-size bed", size: false, weight: false, optionForSelling: true, price: 10000, imagePreview: "/assets/items-list/item5.webp" },
                    { name: "flip-up bed (single)", size: false, weight: false, optionForSelling: true, price: 5000, imagePreview: "/assets/items-list/item6.webp" },
                    { name: "flip-up bed (semi-double)", size: false, weight: false, optionForSelling: true, price: 5000, imagePreview: "/assets/items-list/item7.webp" },
                    { name: "flip-up bed (double)", size: false, weight: false, optionForSelling: true, price: 8000, imagePreview: "/assets/items-list/item8.webp" },
                    { name: "lift-up bed (queen size)", size: false, weight: false, optionForSelling: true, price: 12000, imagePreview: "/assets/items-list/item9.webp" },
                    { name: "lift-up bed (king size)", size: false, weight: false, optionForSelling: true, price: 12000, imagePreview: "/assets/items-list/item10.webp" },
                    { name: "baby crib", size: true, weight: true, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item11.webp" },
                    { name: "folding bed", size: true, weight: true, optionForSelling: false, price: 3000, imagePreview: "/assets/items-list/item12.webp" },
                    { name: "loft bed", size: false, weight: false, optionForSelling: false, price: 8500, imagePreview: "/assets/items-list/item13.webp" },
                    { name: "bunk beds", size: false, weight: false, optionForSelling: false, price: 10000, imagePreview: "/assets/items-list/item14.webp" },
                    { name: "system bed", size: false, weight: false, optionForSelling: false, price: 15000, imagePreview: "/assets/items-list/item15.webp" },
                    { name: "nursing bed", size: false, weight: false, optionForSelling: false, price: 17000, imagePreview: "/assets/items-list/item16.webp" },
                    { name: "mattress (single)", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item17.webp" },
                    { name: "mattress (semi-double)", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item18.webp" },
                    { name: "mattress (double)", size: false, weight: false, optionForSelling: true, price: 5500, imagePreview: "/assets/items-list/item19.webp" },
                    { name: "queen-size mattress", size: false, weight: false, optionForSelling: true, price: 9000, imagePreview: "/assets/items-list/item20.webp" },
                    { name: "mattress (king size)", size: false, weight: false, optionForSelling: true, price: 9000, imagePreview: "/assets/items-list/item21.webp" },
                    { name: "tri-fold mattress", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item22.webp" },
                    { name: "waterbed mattress", size: false, weight: false, optionForSelling: false, price: 4000, imagePreview: "/assets/items-list/item23.webp" }
                ]
            },
            {
                categoryName: "chair",
                items: [
                    { name: "floor chair", size: true, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item24.webp" },
                    { name: "dining chair", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item25.webp" },
                    { name: "desk chair", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item26.webp" },
                    { name: "president's chair", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item27.webp" },
                    { name: "chair", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item28.webp" },
                    { name: "bench", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item29.webp" },
                    { name: "rocking chair", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item30.webp" },
                    { name: "counter chair", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item31.webp" },
                    { name: "floor cushion (thick)", size: true, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item32.webp" }
                ]
            },
            {
                categoryName: "sofa",
                items: [
                    { name: "sofa (single-seater)", size: true, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item33.webp" },
                    { name: "sofa (2-seater)", size: true, weight: false, optionForSelling: true, price: 5000, imagePreview: "/assets/items-list/item34.webp" },
                    { name: "sofa (3-seater)", size: true, weight: false, optionForSelling: true, price: 6500, imagePreview: "/assets/items-list/item35.webp" },
                    { name: "reclining sofa (single-seater)", size: true, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item36.webp" },
                    { name: "reclining sofa (2-seater)", size: true, weight: false, optionForSelling: true, price: 6500, imagePreview: "/assets/items-list/item37.webp" },
                    { name: "reclining sofa (3-seater)", size: true, weight: false, optionForSelling: true, price: 8000, imagePreview: "/assets/items-list/item38.webp" },
                    { name: "corner sectional sofa", size: true, weight: false, optionForSelling: true, price: 11000, imagePreview: "/assets/items-list/item39.webp" },
                    { name: "sofa bed", size: false, weight: false, optionForSelling: false, price: 7000, imagePreview: "/assets/items-list/item40.webp" },
                    { name: "ottoman (small)", size: true, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item41.webp" },
                    { name: "ottoman (large)", size: true, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item42.webp" }
                ]
            },
            {
                categoryName: "tables and desks",
                items: [
                    { name: "dining set for 2 people", size: false, weight: false, optionForSelling: true, price: 5000, imagePreview: "/assets/items-list/item43.webp" },
                    { name: "dining set for 4 people", size: false, weight: false, optionForSelling: true, price: 8000, imagePreview: "/assets/items-list/item44.webp" },
                    { name: "dining set for 6 people", size: false, weight: false, optionForSelling: true, price: 11000, imagePreview: "/assets/items-list/item45.webp" },
                    { name: "dining table for 2 people", size: true, weight: true, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item46.webp" },
                    { name: "dining table for 4 people", size: true, weight: true, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item47.webp" },
                    { name: "dining table for 6 people", size: true, weight: true, optionForSelling: true, price: 5000, imagePreview: "/assets/items-list/item48.webp" },
                    { name: "study desk (without bookshelf/side table)", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item49.webp" },
                    { name: "study desk (with bookshelf/side desk)", size: false, weight: false, optionForSelling: true, price: 6500, imagePreview: "/assets/items-list/item50.webp" },
                    { name: "computer desk", size: true, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item51.webp" },
                    { name: "side desk", size: true, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item52.webp" },
                    { name: "dressing table", size: true, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item53.webp" },
                    { name: "table/desk", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item54.webp" },
                    { name: "kotatsu", size: true, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item55.webp" }
                ]
            },
            {
                categoryName: "storage",
                items: [
                    { name: "shelf", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item56.webp" },
                    { name: "bookshelf", size: true, weight: true, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item57.webp" },
                    { name: "cupboard", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item58.webp" },
                    { name: "gap storage", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item59.webp" },
                    { name: "chest", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item60.webp" },
                    { name: "chest of drawers", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item61.webp" },
                    { name: "closet/wardrobe", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item62.webp" },
                    { name: "fancy case", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item63.webp" },
                    { name: "rack", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item64.webp" },
                    { name: "cabinet", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item65.webp" },
                    { name: "sideboard", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item66.webp" },
                    { name: "tv stand", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item67.webp" },
                    { name: "telephone stand", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item68.webp" },
                    { name: "microwave stand", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item69.webp" },
                    { name: "kitchen cart", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item70.webp" },
                    { name: "shoe rack", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item71.webp" },
                    { name: "clothing storage case (1 tier/with lid)", size: true, weight: true, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item72.webp" },
                    { name: "3-tier storage case", size: true, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item73.webp" },
                    { name: "color boxes (3 shelves or less)", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item74.webp" },
                    { name: "color boxes (4 shelves or more)", size: true, weight: false, optionForSelling: false, price: 0, imagePreview: "/assets/items-list/item75.webp" },
                    { name: "tea box", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item76.webp" },
                    { name: "storage shed", size: true, weight: true, optionForSelling: false, price: 0, imagePreview: "/assets/items-list/item77.webp" },
                    { name: "washing machine rack", size: true, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item78.webp" }
                ]
            },
            {
                categoryName: "rug",
                items: [
                    { name: "tatami", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item79.webp" },
                    { name: "mat", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item80.webp" },
                    { name: "carpet/rug (2 tatami mats)", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item81.webp" },
                    { name: "carpet/rug (3 tatami mats)", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item82.webp" },
                    { name: "carpet/rug (4.5 tatami mats)", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item83.webp" },
                    { name: "carpet/rug (6 tatami mats)", size: false, weight: false, optionForSelling: false, price: 2500, imagePreview: "/assets/items-list/item84.webp" },
                    { name: "wood carpet (6 tatami mats)", size: false, weight: false, optionForSelling: false, price: 5500, imagePreview: "/assets/items-list/item85.webp" },
                    { name: "indoor tile carpet (10 pieces)", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item86.webp" },
                    { name: "outdoor carpet tiles (10 pieces)", size: false, weight: false, optionForSelling: false, price: 3000, imagePreview: "/assets/items-list/item87.webp" }
                ]
            },
            {
                categoryName: "other furniture",
                items: [
                    { name: "small trash can", size: true, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item88.webp" },
                    { name: "large trash can", size: true, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item89.webp" },
                    { name: "shinto altar", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item90.webp" },
                    { name: "buddhist altar", size: true, weight: false, optionForSelling: false, price: 0, imagePreview: "/assets/items-list/item91.webp" },
                    { name: "full-length mirror", size: true, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item92.webp" },
                    { name: "screen/partition", size: true, weight: false, optionForSelling: false, price: 0, imagePreview: "/assets/items-list/item93.webp" },
                    { name: "blinds/roller screens", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item94.webp" },
                    { name: "office furniture", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item95.webp" },
                    { name: "furniture products", size: true, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item96.webp" }
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
                    { name: "Refrigerator (up to 200L)", size: false, weight: false, optionForSelling: true, price: 5500, imagePreview: "/assets/items-list/item97.webp" },
                    { name: "Refrigerator (201-500L or less)", size: false, weight: false, optionForSelling: true, price: 7000, imagePreview: "/assets/items-list/item98.webp" },
                    { name: "Refrigerator (501-600L or less)", size: false, weight: false, optionForSelling: true, price: 9000, imagePreview: "/assets/items-list/item99.webp" },
                    { name: "toaster", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item100.webp" },
                    { name: "microwave oven", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item101.webp" },
                    { name: "Oven", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item102.webp" },
                    { name: "Dish dryer", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item103.webp" },
                    { name: "Dishwasher", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item104.webp" },
                    { name: "Gas water heater", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item105.webp" },
                    { name: "Gas stove (2 burners or more)", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item106.webp" },
                    { name: "Single burner stove (gas/induction)", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item107.webp" },
                    { name: "rice cooker", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item108.webp" },
                    { name: "Electric kettle", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item109.webp" },
                    { name: "wine cellar", size: true, weight: true, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item110.webp" },
                    { name: "Refrigerator (601L or more)", size: false, weight: false, optionForSelling: true, price: 12000, imagePreview: "/assets/items-list/item111.webp" }
                ]
            },
            {
                categoryName: "washing machines",
                items: [
                    { name: "clothes dryer", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item112.webp" },
                    { name: "trouser press", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item113.webp" },
                    { name: "top-loading washing machine", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item114.webp" },
                    { name: "drum-type washing machine", size: false, weight: false, optionForSelling: true, price: 5500, imagePreview: "/assets/items-list/item115.webp" }
                ]
            },
            {
                categoryName: "tv/video equipment",
                items: [
                    { name: "Television (up to 25 inches)", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item116.webp" },
                    { name: "Televisions (26-39 inches)", size: false, weight: false, optionForSelling: true, price: 5500, imagePreview: "/assets/items-list/item117.webp" },
                    { name: "Television (40-59 inches)", size: false, weight: false, optionForSelling: true, price: 7000, imagePreview: "/assets/items-list/item118.webp" },
                    { name: "Television (60 inches or larger)", size: false, weight: false, optionForSelling: true, price: 9000, imagePreview: "/assets/items-list/item119.webp" },
                    { name: "Home theater/speaker set", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item120.webp" },
                    { name: "DVD player/recorder", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item121.webp" },
                    { name: "LD player", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item122.webp" },
                    { name: "projector", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item123.webp" },
                    { name: "tuner", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item124.webp" },
                    { name: "CS/BS antenna", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item125.webp" }
                ]
            },
            {
                categoryName: "acoustic",
                items: [
                    { name: "record player", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item126.webp" },
                    { name: "open reel deck", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item127.webp" },
                    { name: "boombox", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item128.webp" },
                    { name: "mini stereo system", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item129.webp" },
                    { name: "av amplifier", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item130.webp" },
                    { name: "speaker set", size: true, weight: true, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item131.webp" },
                    { name: "audio equipment", size: true, weight: true, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item132.webp" }
                ]
            },
            {
                categoryName: "air conditioning",
                items: [
                    { name: "air purifier", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item134.webp" },
                    { name: "humidifier", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item133.webp" },
                    { name: "dehumidifier", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item135.webp" },
                    { name: "Ventilation fan", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item136.webp" },
                    { name: "circulator", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item137.webp" },
                    { name: "electric fan", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item138.webp" },
                    { name: "cold fan", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item139.webp" },
                    { name: "Oil stove", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item140.webp" },
                    { name: "Electric heater", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item141.webp" },
                    { name: "Electric heater (small)", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item142.webp" },
                    { name: "Gas fan heater", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item143.webp" },
                    { name: "Halogen heater", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item144.webp" },
                    { name: "oil heater", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item145.webp" },
                    { name: "Electric blankets, electric throws", size: false, weight: false, optionForSelling: false, price: 2500, imagePreview: "/assets/items-list/item146.webp" },
                    { name: "Hot carpet", size: false, weight: false, optionForSelling: false, price: 2500, imagePreview: "/assets/items-list/item147.webp" },
                    { name: "Air conditioner (indoor and outdoor units)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item148.webp" },
                    { name: "Window air conditioner", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item149.webp" },
                    { name: "Commercial air conditioners", size: true, weight: true, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item148.webp" }
                ]
            },
            {
                categoryName: "vacuum cleaners",
                items: [
                    { name: "handheld vacuum cleaner", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item151.webp" },
                    { name: "robot vacuum cleaner", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item152.webp" },
                    { name: "vacuum cleaner", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item153.webp" },
                    { name: "steam cleaner", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item154.webp" }
                ]
            },
            {
                categoryName: "sewing machine",
                items: [
                    { name: "sewing machine", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item155.webp" },
                    { name: "foot-operated sewing machine", size: false, weight: false, optionForSelling: true, price: 7000, imagePreview: "/assets/items-list/item156.webp" }
                ]
            },
            {
                categoryName: "lighting equipment",
                items: [
                    { name: "tabletop stand", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item157.webp" },
                    { name: "floor stand", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item158.webp" },
                    { name: "downlights", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item159.webp" },
                    { name: "ceiling light", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item160.webp" },
                    { name: "ceiling fan", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item161.webp" },
                    { name: "chandelier", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item162.webp" }
                ]
            },
            {
                categoryName: "health equipment",
                items: [
                    { name: "large massage machine", size: false, weight: false, optionForSelling: true, price: 9000, imagePreview: "/assets/items-list/item163.webp" },
                    { name: "small massage machine", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item164.webp" },
                    { name: "airy shape", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item165.webp" },
                    { name: "foot massager", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item166.webp" },
                    { name: "stepper", size: false, weight: false, optionForSelling: false, price: 2500, imagePreview: "/assets/items-list/item167.webp" },
                    { name: "leg magic", size: false, weight: false, optionForSelling: false, price: 2500, imagePreview: "/assets/items-list/item168.webp" },
                    { name: "horse riding machine", size: false, weight: false, optionForSelling: false, price: 4000, imagePreview: "/assets/items-list/item169.webp" },
                    { name: "exercise bike", size: false, weight: false, optionForSelling: false, price: 4000, imagePreview: "/assets/items-list/item170.webp" },
                    { name: "treadmill", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item171.webp" }
                ]
            },
            {
                categoryName: "pcs and peripherals",
                items: [
                    { name: "Mouse and keyboard", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item172.webp" },
                    { name: "Cables (box with sum of three sides 116cm)", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item173.webp" },
                    { name: "PC monitor", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item174.webp" },
                    { name: "Desktop computer unit", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item175.webp" },
                    { name: "Notebook PC", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item176.webp" },
                    { name: "All-in-one PC", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item177.webp" },
                    { name: "Desktop scanner", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item178.webp" },
                    { name: "Dedicated word processor", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item179.webp" },
                    { name: "Printer (A4)", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item180.webp" },
                    { name: "Printer (A3)", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item181.webp" },
                    { name: "Shredder (small)", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item182.webp" },
                    { name: "Large shredder", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item183.webp" },
                    { name: "Office copier", size: false, weight: false, optionForSelling: true, price: 12000, imagePreview: "/assets/items-list/item184.webp" }
                ]
            },
            {
                categoryName: "other home appliances",
                items: [
                    { name: "small electrical appliances", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item185.webp" },
                    { name: "electric appliances", size: true, weight: true, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item186.webp" }
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
                    { name: "Clothing (in 45L bags)", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item187.webp" },
                    { name: "Books and magazines (box with dimensions totaling 116cm)", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item188.webp" },
                    { name: "Paper (3 sides total 116cm box)", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item189.webp" },
                    { name: "Iron", size: true, weight: true, optionForSelling: false, price: 0, imagePreview: "/assets/items-list/item190.webp" },
                    { name: "Curtains (for one window, including sheer curtains)", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item191.webp" },
                    { name: "futon", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item192.webp" },
                    { name: "blanket", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item193.webp" },
                    { name: "pillow", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item194.webp" },
                    { name: "Sheets/bed pads", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item195.webp" },
                    { name: "cushion", size: true, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item196.webp" },
                    { name: "Japanese cushion", size: true, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item197.webp" }
                ]
            },
            {
                categoryName: "miscellaneous goods",
                items: [
                    { name: "Miscellaneous goods (box with three sides totaling 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item198.webp" },
                    { name: "Tableware (box with three sides totaling 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item199.webp" },
                    { name: "Kitchenware (box with three sides totaling 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item200.webp" },
                    { name: "Shoes (box with three dimensions totaling 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item201.webp" },
                    { name: "Bags (box with sum of 3 sides 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item202.webp" },
                    { name: "Toy (box with three sides totaling 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item203.webp" },
                    { name: "Stuffed animal (box with three sides totaling 116cm)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item204.webp" }
                ]
            },
            {
                categoryName: "daily necessities",
                items: [
                    { name: "Clothes drying rack (for indoor use)", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item205.webp" },
                    { name: "Clothes drying rack (for outdoor use)", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item206.webp" },
                    { name: "Clothes drying pole", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item207.webp" },
                    { name: "Tension rod", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item208.webp" },
                    { name: "wheelchair", size: false, weight: false, optionForSelling: false, price: 3000, imagePreview: "/assets/items-list/item209.webp" },
                    { name: "stroller", size: false, weight: false, optionForSelling: false, price: 2500, imagePreview: "/assets/items-list/item210.webp" },
                    { name: "Shopping cart", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item211.webp" },
                    { name: "Washlet (unused)", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item212.webp" },
                    { name: "Umbrellas (up to 5)", size: false, weight: false, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item213.webp" },
                    { name: "Dolly", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item214.webp" },
                    { name: "Step ladders, ladders, scaffolding (small)", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item215.webp" },
                    { name: "Step ladders, ladders, scaffolding (large)", size: false, weight: false, optionForSelling: false, price: 3000, imagePreview: "/assets/items-list/item216.webp" }
                ]
            },
            {
                categoryName: "safe",
                items: [
                    { name: "safe (under 60kg)", size: false, weight: false, optionForSelling: false, price: 9000, imagePreview: "/assets/items-list/item217.webp" },
                    { name: "safe (under 90kg)", size: false, weight: false, optionForSelling: false, price: 12000, imagePreview: "/assets/items-list/item218.webp" },
                    { name: "safe (120kg or less)", size: false, weight: false, optionForSelling: false, price: 17000, imagePreview: "/assets/items-list/item219.webp" },
                    { name: "safe (over 120kg)", size: true, weight: true, optionForSelling: false, price: 0, imagePreview: "/assets/items-list/item220.webp" }
                ]
            },
            {
                categoryName: "hobbies and seasonal items",
                items: [
                    { name: "Small musical instrument", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item221.webp" },
                    { name: "Musical instrument (medium)", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item221.webp" },
                    { name: "Electronic keyboard", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item222.webp" },
                    { name: "Electone", size: false, weight: false, optionForSelling: true, price: 9000, imagePreview: "/assets/items-list/item223.webp" },
                    { name: "Electronic piano/organ", size: false, weight: false, optionForSelling: true, price: 12000, imagePreview: "/assets/items-list/item224.webp" },
                    { name: "Upright piano", size: false, weight: false, optionForSelling: true, price: 20000, imagePreview: "/assets/items-list/item225.webp" },
                    { name: "Grand piano", size: true, weight: true, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item226.webp" },
                    { name: "Barbells, dumbbells", size: false, weight: true, optionForSelling: false, price: 0, imagePreview: "/assets/items-list/item227.webp" },
                    { name: "surfboard", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item228.webp" },
                    { name: "Snowboard", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item229.webp" },
                    { name: "skis", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item230.webp" },
                    { name: "Ski wear", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item231.webp" },
                    { name: "stock", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item232.webp" },
                    { name: "Ski and snowboard boots", size: false, weight: false, optionForSelling: true, price: 1500, imagePreview: "/assets/items-list/item233.webp" },
                    { name: "Golf bag and club set", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item234.webp" },
                    { name: "Golf clubs (up to 10)", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item235.webp" },
                    { name: "Golf bag (empty)", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item236.webp" },
                    { name: "sleeping bag", size: false, weight: false, optionForSelling: true, price: 500, imagePreview: "/assets/items-list/item237.webp" },
                    { name: "tent", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item238.webp" },
                    { name: "Parasol", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item239.webp" },
                    { name: "Barbecue grill", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item240.webp" },
                    { name: "Large suitcase", size: false, weight: false, optionForSelling: true, price: 2000, imagePreview: "/assets/items-list/item241.webp" },
                    { name: "Small suitcase", size: false, weight: false, optionForSelling: true, price: 1000, imagePreview: "/assets/items-list/item242.webp" },
                    { name: "Hina dolls", size: false, weight: false, optionForSelling: false, price: 4000, imagePreview: "/assets/items-list/item243.webp" },
                    { name: "May doll", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item244.webp" },
                    { name: "helmet", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item245.webp" },
                    { name: "Pachinko and pachislot", size: false, weight: true, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item246.webp" }
                ]
            },
            {
                categoryName: "garden",
                items: [
                    { name: "lawn mower", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item247.webp" },
                    { name: "concrete blocks", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item248.webp" },
                    { name: "flower pots (up to 5)", size: false, weight: false, optionForSelling: false, price: 1000, imagePreview: "/assets/items-list/item249.webp" }
                ]
            },
            {
                categoryName: "vehicle",
                items: [
                    { name: "unicycle", size: false, weight: false, optionForSelling: false, price: 2000, imagePreview: "/assets/items-list/item250.webp" },
                    { name: "tricycle", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item251.webp" },
                    { name: "Children's bicycles", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item252.webp" },
                    { name: "Folding bicycle", size: false, weight: false, optionForSelling: true, price: 3000, imagePreview: "/assets/items-list/item253.webp" },
                    { name: "bicycle", size: false, weight: false, optionForSelling: true, price: 4000, imagePreview: "/assets/items-list/item254.webp" },
                    { name: "Motorcycles (50cc or less)", size: false, weight: false, optionForSelling: true, price: 12000, imagePreview: "/assets/items-list/item255.webp" },
                    { name: "Motorcycles (51cc to 250cc)", size: false, weight: false, optionForSelling: true, price: 17000, imagePreview: "/assets/items-list/item255.webp" },
                    { name: "Motorcycles (251cc to 400cc)", size: false, weight: false, optionForSelling: true, price: 20000, imagePreview: "/assets/items-list/item255.webp" },
                    { name: "Motorcycles (401cc and above)", size: false, weight: false, optionForSelling: true, price: 0, imagePreview: "/assets/items-list/item255.webp" },
                    { name: "child seat", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item256.webp" },
                    { name: "Wheels only", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item257.webp" },
                    { name: "Tires only", size: false, weight: false, optionForSelling: false, price: 1500, imagePreview: "/assets/items-list/item258.webp" },
                    { name: "Tire and wheel set", size: false, weight: false, optionForSelling: false, price: 3000, imagePreview: "/assets/items-list/item259.webp" }
                ]
            },
            {
                categoryName: "other daily necessities",
                items: [
                    { name: "daily necessities (small)", size: true, weight: true, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item260.webp" },
                    { name: "large boxes", size: true, weight: true, optionForSelling: false, price: 500, imagePreview: "/assets/items-list/item260.webp" }
                ]
            }
        ]
    }
];