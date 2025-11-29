/**
 * Vegetable data for the AI School Nutritionist application
 */

import { VegetableData } from '../types/index';

export const vegetablesData: Record<string, VegetableData> = {
    'butterhead-lettuce': {
        id: 'butterhead-lettuce',
        name_zh: '牛油生菜',
        name_en: 'Butterhead Lettuce',
        emoji: '🥬',
        color: '#7CB342',
        image: '/images/butterhead_lettuce.png',
        introduction_zh: '牛油生菜的葉子柔軟細嫩，就像牛油一樣滑順！它的葉片呈圓形，顏色是淺綠色的，看起來很可愛。牛油生菜的味道清甜爽口，口感特別嫩滑，很適合做沙律。它含有豐富的維他命和礦物質，能幫助小朋友健康成長！',
        introduction_en: 'Butterhead lettuce has soft and tender leaves, as smooth as butter! Its leaves are round and light green in color, looking very cute. Butterhead lettuce tastes sweet and refreshing with an especially tender texture, perfect for salads. It contains rich vitamins and minerals that help children grow healthy!',
        growing_methods: [
            { step_zh: '選擇陽光充足、排水良好的地方種植', step_en: 'Choose a sunny location with good drainage' },
            { step_zh: '在泥土中撒下種子，輕輕覆蓋一層薄土', step_en: 'Sow seeds in soil and cover lightly with thin layer of soil' },
            { step_zh: '每天澆水，保持泥土濕潤但不要太濕', step_en: 'Water daily, keep soil moist but not too wet' },
            { step_zh: '大約7-10天後，小苗就會發芽了', step_en: 'Seedlings will sprout in about 7-10 days' },
            { step_zh: '45-55天後就可以收成，摘取外層葉子食用', step_en: 'Ready to harvest in 45-55 days, pick outer leaves to eat' }
        ],
        nutrition: [
            {
                name_zh: '熱量',
                name_en: 'Calories',
                amount: '13',
                unit: 'kcal',
                benefit_zh: '提供身體基本能量',
                benefit_en: 'Provides basic energy for body'
            },
            {
                name_zh: '碳水化合物',
                name_en: 'Carbohydrates',
                amount: '2.2',
                unit: 'g',
                benefit_zh: '提供能量，讓你有力氣活動',
                benefit_en: 'Provides energy for activities'
            },
            {
                name_zh: '蛋白質',
                name_en: 'Protein',
                amount: '1.4',
                unit: 'g',
                benefit_zh: '幫助肌肉生長和修復',
                benefit_en: 'Helps muscle growth and repair'
            },
            {
                name_zh: '膳食纖維',
                name_en: 'Dietary Fiber',
                amount: '1.1',
                unit: 'g',
                benefit_zh: '幫助消化，讓肚子更舒服',
                benefit_en: 'Aids digestion and keeps tummy comfortable'
            },
            {
                name_zh: '維他命A',
                name_en: 'Vitamin A',
                amount: '370',
                unit: 'μg',
                benefit_zh: '保護眼睛健康，讓視力更好',
                benefit_en: 'Protects eye health and improves vision'
            },
            {
                name_zh: '維他命C',
                name_en: 'Vitamin C',
                amount: '4',
                unit: 'mg',
                benefit_zh: '增強免疫力，不容易生病',
                benefit_en: 'Boosts immunity and prevents illness'
            },
            {
                name_zh: '維他命K',
                name_en: 'Vitamin K',
                amount: '102',
                unit: 'μg',
                benefit_zh: '幫助骨骼生長，讓你長得更高',
                benefit_en: 'Helps bone growth and makes you taller'
            },
            {
                name_zh: '葉酸',
                name_en: 'Folate',
                amount: '73',
                unit: 'μg',
                benefit_zh: '幫助身體製造新細胞，保持健康',
                benefit_en: 'Helps body make new cells and stay healthy'
            },
            {
                name_zh: '鉀質',
                name_en: 'Potassium',
                amount: '238',
                unit: 'mg',
                benefit_zh: '調節身體水分，保持活力',
                benefit_en: 'Regulates body fluids and maintains vitality'
            },
            {
                name_zh: '鈣質',
                name_en: 'Calcium',
                amount: '36',
                unit: 'mg',
                benefit_zh: '讓骨骼和牙齒更強壯',
                benefit_en: 'Makes bones and teeth stronger'
            }
        ],
        fun_facts: [
            { fact_zh: '🌟 牛油生菜的名字來自它柔軟如牛油的質感！', fact_en: '🌟 Butterhead lettuce gets its name from its buttery-soft texture!' },
            { fact_zh: '💧 牛油生菜含有95%的水分，是天然的補水食物', fact_en: '💧 Butterhead lettuce is 95% water - a natural hydration food' },
            { fact_zh: '🌙 古羅馬人相信生菜可以幫助睡眠，會在晚餐時吃', fact_en: '🌙 Ancient Romans believed lettuce helps sleep and ate it at dinner' },
            { fact_zh: '🎨 牛油生菜的葉子可以用來做天然的綠色染料', fact_en: '🎨 Butterhead lettuce leaves can be used as natural green dye' },
            { fact_zh: '🚀 太空人在國際太空站也種植生菜作為新鮮食物！', fact_en: '🚀 Astronauts grow lettuce on the International Space Station for fresh food!' }
        ],
        recipe: {
            name_zh: '彩虹牛油生菜沙律配烤雞肉',
            name_en: 'Rainbow Butterhead Salad with Grilled Chicken',
            ingredients: [
                { item_zh: '牛油生菜', item_en: 'Butterhead lettuce', amount: '1個' },
                { item_zh: '雞胸肉', item_en: 'Chicken breast', amount: '100克' },
                { item_zh: '小番茄', item_en: 'Cherry tomatoes', amount: '8粒' },
                { item_zh: '紅蘿蔔', item_en: 'Carrot', amount: '半條' },
                { item_zh: '粟米粒', item_en: 'Corn kernels', amount: '3湯匙' },
                { item_zh: '紫椰菜絲', item_en: 'Purple cabbage', amount: '少許' },
                { item_zh: '熟雞蛋', item_en: 'Boiled egg', amount: '1隻' },
                { item_zh: '橄欖油', item_en: 'Olive oil', amount: '1湯匙' },
                { item_zh: '檸檬汁', item_en: 'Lemon juice', amount: '1茶匙' },
                { item_zh: '黑芝麻', item_en: 'Black sesame', amount: '少許' }
            ],
            steps: [
                { step_zh: '雞胸肉用少許鹽和黑胡椒醃製，煎至金黃色，切片備用（補充蛋白質）', step_en: 'Marinate chicken with salt and pepper, pan-fry until golden, slice (adds protein)' },
                { step_zh: '牛油生菜洗淨撕小片，小番茄切半，紅蘿蔔刨絲（增加橙色和維他命A）', step_en: 'Wash and tear lettuce, halve tomatoes, shred carrot (adds orange color and vitamin A)' },
                { step_zh: '雞蛋切片，紫椰菜切絲（增加紫色和抗氧化物）', step_en: 'Slice egg, shred purple cabbage (adds purple color and antioxidants)' },
                { step_zh: '把所有蔬菜和粟米放入大碗，加入雞肉和雞蛋（色彩繽紛，營養全面）', step_en: 'Mix all vegetables and corn in bowl, add chicken and egg (colorful and nutritious)' },
                { step_zh: '淋上橄欖油和檸檬汁，撒上黑芝麻（補充健康脂肪和鈣質）', step_en: 'Drizzle with olive oil and lemon juice, sprinkle sesame (adds healthy fats and calcium)' },
                { step_zh: '輕輕拌勻即成！色香味全的彩虹沙律完成', step_en: 'Mix gently and done! A colorful, aromatic, and delicious rainbow salad' }
            ]
        }
    },
    'big-leaf-lettuce': {
        id: 'big-leaf-lettuce',
        name_zh: '大葉生菜',
        name_en: 'Big Leaf Lettuce',
        emoji: '🥬',
        color: '#558B2F',
        image: '/images/bigleaflettuce.png',
        introduction_zh: '大葉生菜有著又大又寬的葉子，就像一把把小扇子！它的葉片顏色深綠，質地爽脆，咬起來很有口感。大葉生菜營養豐富，含有很多維他命和纖維，能幫助消化，讓肚子更舒服。它也很適合用來包肉吃，非常美味！',
        introduction_en: 'Big Leaf Lettuce has large and wide leaves, like little fans! Its leaves are dark green with a crispy texture and satisfying crunch. Big Leaf Lettuce is nutritious, containing lots of vitamins and fiber that aid digestion and keep your tummy comfortable. It\'s also great for wrapping meat - very delicious!',
        growing_methods: [
            { step_zh: '準備肥沃的泥土，加入有機肥料', step_en: 'Prepare fertile soil and add organic fertilizer' },
            { step_zh: '種子間隔15-20厘米播種，不要種得太密', step_en: 'Sow seeds 15-20cm apart, not too close together' },
            { step_zh: '早晚各澆水一次，保持泥土濕潤', step_en: 'Water twice daily (morning and evening), keep soil moist' },
            { step_zh: '定期除草，讓生菜有足夠空間生長', step_en: 'Remove weeds regularly to give lettuce enough space to grow' },
            { step_zh: '50-60天後收成，整棵拔起或摘取葉片', step_en: 'Harvest in 50-60 days, pull up whole plant or pick leaves' }
        ],
        nutrition: [
            {
                name_zh: '熱量',
                name_en: 'Calories',
                amount: '15',
                unit: 'kcal',
                benefit_zh: '提供身體基本能量',
                benefit_en: 'Provides basic energy for body'
            },
            {
                name_zh: '碳水化合物',
                name_en: 'Carbohydrates',
                amount: '2.9',
                unit: 'g',
                benefit_zh: '提供能量，讓你有力氣活動',
                benefit_en: 'Provides energy for activities'
            },
            {
                name_zh: '蛋白質',
                name_en: 'Protein',
                amount: '1.4',
                unit: 'g',
                benefit_zh: '幫助肌肉生長和修復',
                benefit_en: 'Helps muscle growth and repair'
            },
            {
                name_zh: '膳食纖維',
                name_en: 'Dietary Fiber',
                amount: '1.3',
                unit: 'g',
                benefit_zh: '幫助消化，讓肚子更舒服',
                benefit_en: 'Aids digestion and keeps tummy comfortable'
            },
            {
                name_zh: '維他命A',
                name_en: 'Vitamin A',
                amount: '740',
                unit: 'μg',
                benefit_zh: '保護眼睛健康，讓視力更好',
                benefit_en: 'Protects eye health and improves vision'
            },
            {
                name_zh: '維他命C',
                name_en: 'Vitamin C',
                amount: '9',
                unit: 'mg',
                benefit_zh: '增強免疫力，不容易生病',
                benefit_en: 'Boosts immunity and prevents illness'
            },
            {
                name_zh: '維他命K',
                name_en: 'Vitamin K',
                amount: '126',
                unit: 'μg',
                benefit_zh: '幫助骨骼生長，讓你長得更高',
                benefit_en: 'Helps bone growth and makes you taller'
            },
            {
                name_zh: '葉酸',
                name_en: 'Folate',
                amount: '38',
                unit: 'μg',
                benefit_zh: '幫助身體製造新細胞，保持健康',
                benefit_en: 'Helps body make new cells and stay healthy'
            },
            {
                name_zh: '鐵質',
                name_en: 'Iron',
                amount: '0.9',
                unit: 'mg',
                benefit_zh: '製造血液，讓你更有精神',
                benefit_en: 'Makes blood and keeps you energetic'
            },
            {
                name_zh: '鈣質',
                name_en: 'Calcium',
                amount: '36',
                unit: 'mg',
                benefit_zh: '讓牙齒和骨頭更強壯',
                benefit_en: 'Makes teeth and bones stronger'
            }
        ],
        fun_facts: [
            { fact_zh: '🌍 大葉生菜在亞洲特別受歡迎，韓國人每年吃超過30公斤！', fact_en: '🌍 Big leaf lettuce is especially popular in Asia - Koreans eat over 30kg per year!' },
            { fact_zh: '🎭 在韓國，用生菜包肉吃叫「쌈」(Ssam)，是傳統飲食文化', fact_en: '🎭 In Korea, wrapping meat in lettuce is called "Ssam" - a traditional food culture' },
            { fact_zh: '🏆 大葉生菜的葉子可以長到30厘米長，像小扇子一樣大！', fact_en: '🏆 Big leaf lettuce leaves can grow up to 30cm long - as big as a small fan!' },
            { fact_zh: '🧊 生菜放在冰水中浸泡會變得更爽脆，這是餐廳的秘密技巧', fact_en: '🧊 Soaking lettuce in ice water makes it crispier - a restaurant secret trick' },
            { fact_zh: '🌱 大葉生菜是最容易在家種植的蔬菜之一，60天就能收成', fact_en: '🌱 Big leaf lettuce is one of the easiest vegetables to grow at home - harvest in 60 days' }
        ],
        recipe: {
            name_zh: '韓式生菜包肉配五色蔬菜',
            name_en: 'Korean-style Lettuce Wraps with Five-Color Vegetables',
            ingredients: [
                { item_zh: '大葉生菜', item_en: 'Big Leaf Lettuce', amount: '8片' },
                { item_zh: '豬肉片', item_en: 'Pork slices', amount: '150克' },
                { item_zh: '紅蘿蔔絲', item_en: 'Carrot strips', amount: '50克' },
                { item_zh: '黃椒絲', item_en: 'Yellow pepper strips', amount: '50克' },
                { item_zh: '紫洋蔥絲', item_en: 'Purple onion strips', amount: '30克' },
                { item_zh: '白蘿蔔絲', item_en: 'White radish strips', amount: '30克' },
                { item_zh: '蒜蓉', item_en: 'Minced garlic', amount: '2瓣' },
                { item_zh: '芝麻油', item_en: 'Sesame oil', amount: '1茶匙' },
                { item_zh: '韓式辣醬', item_en: 'Korean chili paste', amount: '1湯匙' },
                { item_zh: '白芝麻', item_en: 'White sesame', amount: '少許' }
            ],
            steps: [
                { step_zh: '豬肉片用蒜蓉、芝麻油醃製10分鐘，煎至金黃（補充蛋白質和維他命B12）', step_en: 'Marinate pork with garlic and sesame oil for 10 min, pan-fry until golden (adds protein and B12)' },
                { step_zh: '準備五色蔬菜：紅蘿蔔、黃椒、紫洋蔥、白蘿蔔切絲，快炒1分鐘（五色代表五行，營養均衡）', step_en: 'Prepare five colors: carrot, yellow pepper, purple onion, white radish, stir-fry 1 min (five colors = balanced nutrition)' },
                { step_zh: '大葉生菜洗淨瀝乾，鋪平在碟上', step_en: 'Wash and drain lettuce, lay flat on plate' },
                { step_zh: '在生菜上放豬肉片，加入五色蔬菜絲（色彩繽紛，增加視覺食慾）', step_en: 'Place pork on lettuce, add five-color vegetables (colorful and appetizing)' },
                { step_zh: '加一點韓式辣醬，撒上白芝麻（辣醬增香，芝麻補鈣）', step_en: 'Add Korean chili paste, sprinkle sesame (paste adds aroma, sesame adds calcium)' },
                { step_zh: '捲起來即可享用！香辣爽脆，色香味全', step_en: 'Roll up and enjoy! Spicy, crispy, with perfect color, aroma and taste' }
            ]
        }
    },
    'kale': {
        id: 'kale',
        name_zh: '羽衣甘藍',
        name_en: 'Kale',
        emoji: '🥬',
        color: '#2E7D32',
        image: '/images/kale.png',
        introduction_zh: '羽衣甘藍的葉子有著美麗的波浪邊，就像穿著漂亮的羽衣一樣！它的葉片顏色深綠，有些品種還會帶點紫色，非常特別。羽衣甘藍是超級食物，含有超多營養，能讓身體變得更強壯。雖然它的味道有點特別，但煮熟後會變得很美味！',
        introduction_en: 'Kale has beautiful wavy edges on its leaves, like wearing a pretty feathered coat! Its leaves are dark green, and some varieties have a purple tint - very special. Kale is a superfood packed with nutrients that make your body stronger. Though it has a unique taste, it becomes delicious when cooked!',
        growing_methods: [
            { step_zh: '選擇涼爽的季節種植，羽衣甘藍喜歡冷天氣', step_en: 'Plant in cool season, kale loves cold weather' },
            { step_zh: '在泥土中挖小洞，每個洞放2-3粒種子', step_en: 'Dig small holes in soil, put 2-3 seeds in each hole' },
            { step_zh: '保持泥土濕潤，但不要積水', step_en: 'Keep soil moist but avoid waterlogging' },
            { step_zh: '當小苗長出4-5片葉子時，選最強壯的留下', step_en: 'When seedlings have 4-5 leaves, keep the strongest one' },
            { step_zh: '55-75天後可以收成，從外層開始摘葉子', step_en: 'Harvest in 55-75 days, pick leaves from outer layer first' }
        ],
        nutrition: [
            {
                name_zh: '熱量',
                name_en: 'Calories',
                amount: '49',
                unit: 'kcal',
                benefit_zh: '提供身體基本能量',
                benefit_en: 'Provides basic energy for body'
            },
            {
                name_zh: '碳水化合物',
                name_en: 'Carbohydrates',
                amount: '8.8',
                unit: 'g',
                benefit_zh: '提供能量，讓你有力氣活動',
                benefit_en: 'Provides energy for activities'
            },
            {
                name_zh: '蛋白質',
                name_en: 'Protein',
                amount: '4.3',
                unit: 'g',
                benefit_zh: '幫助肌肉生長和修復',
                benefit_en: 'Helps muscle growth and repair'
            },
            {
                name_zh: '膳食纖維',
                name_en: 'Dietary Fiber',
                amount: '3.6',
                unit: 'g',
                benefit_zh: '幫助消化，讓肚子更舒服',
                benefit_en: 'Aids digestion and keeps tummy comfortable'
            },
            {
                name_zh: '維他命A',
                name_en: 'Vitamin A',
                amount: '500',
                unit: 'μg',
                benefit_zh: '保護眼睛健康，讓視力更好',
                benefit_en: 'Protects eye health and improves vision'
            },
            {
                name_zh: '維他命C',
                name_en: 'Vitamin C',
                amount: '120',
                unit: 'mg',
                benefit_zh: '增強免疫力，對抗病菌',
                benefit_en: 'Boosts immunity and fights germs'
            },
            {
                name_zh: '維他命K',
                name_en: 'Vitamin K',
                amount: '704',
                unit: 'μg',
                benefit_zh: '幫助血液凝固，保護身體',
                benefit_en: 'Helps blood clot and protects body'
            },
            {
                name_zh: '葉酸',
                name_en: 'Folate',
                amount: '141',
                unit: 'μg',
                benefit_zh: '幫助身體製造新細胞，保持健康',
                benefit_en: 'Helps body make new cells and stay healthy'
            },
            {
                name_zh: '鈣質',
                name_en: 'Calcium',
                amount: '150',
                unit: 'mg',
                benefit_zh: '讓骨骼和牙齒更健康',
                benefit_en: 'Makes bones and teeth healthier'
            },
            {
                name_zh: '鐵質',
                name_en: 'Iron',
                amount: '1.5',
                unit: 'mg',
                benefit_zh: '製造血液，讓你更有精神',
                benefit_en: 'Makes blood and keeps you energetic'
            }
        ],
        fun_facts: [
            { fact_zh: '👑 羽衣甘藍被稱為「蔬菜之王」，是營養密度最高的蔬菜之一！', fact_en: '👑 Kale is called the "King of Vegetables" - one of the most nutrient-dense foods!' },
            { fact_zh: '❄️ 羽衣甘藍經過霜凍後會變得更甜，冬天是最佳食用季節', fact_en: '❄️ Kale becomes sweeter after frost - winter is the best season to eat it' },
            { fact_zh: '🎨 羽衣甘藍有超過50個品種，有綠色、紫色、甚至黑色的！', fact_en: '🎨 There are over 50 varieties of kale - green, purple, even black!' },
            { fact_zh: '🏛️ 古希臘和羅馬人種植羽衣甘藍已經超過2000年了', fact_en: '🏛️ Ancient Greeks and Romans have been growing kale for over 2000 years' },
            { fact_zh: '💪 100克羽衣甘藍的維他命C含量比橙還要多！', fact_en: '💪 100g of kale has more vitamin C than an orange!' }
        ],
        recipe: {
            name_zh: '羽衣甘藍炒三菇配蒜香牛肉',
            name_en: 'Stir-fried Kale with Three Mushrooms and Garlic Beef',
            ingredients: [
                { item_zh: '羽衣甘藍', item_en: 'Kale', amount: '200克' },
                { item_zh: '牛肉片', item_en: 'Beef slices', amount: '100克' },
                { item_zh: '香菇', item_en: 'Shiitake mushroom', amount: '3朵' },
                { item_zh: '金菇', item_en: 'Enoki mushroom', amount: '50克' },
                { item_zh: '蠔菇', item_en: 'Oyster mushroom', amount: '50克' },
                { item_zh: '紅椒', item_en: 'Red bell pepper', amount: '半個' },
                { item_zh: '蒜頭', item_en: 'Garlic', amount: '4瓣' },
                { item_zh: '薑片', item_en: 'Ginger slices', amount: '3片' },
                { item_zh: '蠔油', item_en: 'Oyster sauce', amount: '1湯匙' },
                { item_zh: '芝麻油', item_en: 'Sesame oil', amount: '1茶匙' }
            ],
            steps: [
                { step_zh: '牛肉片用蠔油和薑片醃製（補充蛋白質和維他命B12，羽衣甘藍缺乏）', step_en: 'Marinate beef with oyster sauce and ginger (adds protein and B12, which kale lacks)' },
                { step_zh: '三種菇類切片，紅椒切條（菇類補充維他命D，紅椒增加顏色和維他命C）', step_en: 'Slice three mushrooms, cut red pepper (mushrooms add vitamin D, red pepper adds color and vitamin C)' },
                { step_zh: '蒜頭切片爆香，先炒牛肉至七成熟，盛起（蒜香四溢，刺激食慾）', step_en: 'Sauté sliced garlic, stir-fry beef until 70% done, set aside (garlic aroma stimulates appetite)' },
                { step_zh: '用同一鍋炒三菇至軟身，加入羽衣甘藍快炒（菇類鮮味配搭羽衣甘藍）', step_en: 'In same pan, stir-fry mushrooms until soft, add kale (mushroom umami complements kale)' },
                { step_zh: '加入紅椒和牛肉，淋上芝麻油，快炒1分鐘（紅綠配色，色香味全）', step_en: 'Add red pepper and beef, drizzle sesame oil, stir-fry 1 min (red-green color, perfect aroma and taste)' },
                { step_zh: '完成！營養豐富，有肉有菜有菇，蛋白質、維他命、礦物質齊全', step_en: 'Done! Nutritious with meat, vegetables and mushrooms - complete protein, vitamins and minerals' }
            ]
        }
    },
    'red-sorrel': {
        id: 'red-sorrel',
        name_zh: '紅酸膜',
        name_en: 'Red Sorrel',
        emoji: '🌿',
        color: '#C62828',
        image: '/images/RedSorrel.png',
        introduction_zh: '紅酸膜有著美麗的紅色葉脈，看起來就像藝術品一樣！它的葉子帶有獨特的酸味，就像檸檬一樣清新。紅酸膜含有豐富的維他命C和抗氧化物，能幫助身體保持健康。它的味道特別，可以為食物增添不同的風味！',
        introduction_en: 'Red Sorrel has beautiful red veins on its leaves, looking like a work of art! Its leaves have a unique sour taste, as refreshing as lemon. Red Sorrel is rich in Vitamin C and antioxidants that help keep the body healthy. Its special taste adds different flavors to food!',
        growing_methods: [
            { step_zh: '選擇半陰半陽的地方，紅酸膜不喜歡太強的陽光', step_en: 'Choose partially shaded area, red sorrel dislikes strong sunlight' },
            { step_zh: '播種後輕輕壓實泥土，保持濕潤', step_en: 'After sowing, gently press soil and keep moist' },
            { step_zh: '每2-3天澆水一次，避免泥土過乾', step_en: 'Water every 2-3 days, avoid soil drying out' },
            { step_zh: '小苗長到5厘米高時，可以開始施肥', step_en: 'When seedlings reach 5cm tall, start fertilizing' },
            { step_zh: '40-50天後可以收成，摘取嫩葉食用', step_en: 'Harvest in 40-50 days, pick tender leaves to eat' }
        ],
        nutrition: [
            {
                name_zh: '熱量',
                name_en: 'Calories',
                amount: '22',
                unit: 'kcal',
                benefit_zh: '提供身體基本能量',
                benefit_en: 'Provides basic energy for body'
            },
            {
                name_zh: '碳水化合物',
                name_en: 'Carbohydrates',
                amount: '3.2',
                unit: 'g',
                benefit_zh: '提供能量，讓你有力氣活動',
                benefit_en: 'Provides energy for activities'
            },
            {
                name_zh: '蛋白質',
                name_en: 'Protein',
                amount: '2',
                unit: 'g',
                benefit_zh: '幫助肌肉生長和修復',
                benefit_en: 'Helps muscle growth and repair'
            },
            {
                name_zh: '膳食纖維',
                name_en: 'Dietary Fiber',
                amount: '2.9',
                unit: 'g',
                benefit_zh: '幫助消化，讓肚子更舒服',
                benefit_en: 'Aids digestion and keeps tummy comfortable'
            },
            {
                name_zh: '維他命A',
                name_en: 'Vitamin A',
                amount: '200',
                unit: 'μg',
                benefit_zh: '保護眼睛，讓視力更好',
                benefit_en: 'Protects eyes and improves vision'
            },
            {
                name_zh: '維他命C',
                name_en: 'Vitamin C',
                amount: '48',
                unit: 'mg',
                benefit_zh: '增強免疫力，幫助傷口癒合',
                benefit_en: 'Boosts immunity and helps wounds heal'
            },
            {
                name_zh: '維他命K',
                name_en: 'Vitamin K',
                amount: '120',
                unit: 'μg',
                benefit_zh: '幫助血液凝固，保護身體',
                benefit_en: 'Helps blood clot and protects body'
            },
            {
                name_zh: '葉酸',
                name_en: 'Folate',
                amount: '13',
                unit: 'μg',
                benefit_zh: '幫助身體製造新細胞，保持健康',
                benefit_en: 'Helps body make new cells and stay healthy'
            },
            {
                name_zh: '鐵質',
                name_en: 'Iron',
                amount: '2.4',
                unit: 'mg',
                benefit_zh: '製造紅血球，讓你更有活力',
                benefit_en: 'Makes red blood cells and gives you energy'
            },
            {
                name_zh: '鉀質',
                name_en: 'Potassium',
                amount: '390',
                unit: 'mg',
                benefit_zh: '調節身體水分，保持活力',
                benefit_en: 'Regulates body fluids and maintains vitality'
            }
        ],
        fun_facts: [
            { fact_zh: '🎨 紅酸膜的紅色葉脈含有花青素，是天然的抗氧化物！', fact_en: '🎨 Red sorrel\'s red veins contain anthocyanins - natural antioxidants!' },
            { fact_zh: '🍋 紅酸膜的酸味來自草酸，跟檸檬的酸味很相似', fact_en: '🍋 Red sorrel\'s sour taste comes from oxalic acid - similar to lemon' },
            { fact_zh: '🌈 紅酸膜在不同季節會變色，春天是綠色，秋天變成深紅色', fact_en: '🌈 Red sorrel changes color with seasons - green in spring, deep red in autumn' },
            { fact_zh: '🧪 廚師用紅酸膜的酸味代替醋或檸檬汁來調味', fact_en: '🧪 Chefs use red sorrel\'s sourness to replace vinegar or lemon juice in cooking' },
            { fact_zh: '🦋 紅酸膜的花朵會吸引蝴蝶和蜜蜂，是花園的好朋友', fact_en: '🦋 Red sorrel flowers attract butterflies and bees - a garden friend' }
        ],
        recipe: {
            name_zh: '紅酸膜三文魚藜麥沙律碗',
            name_en: 'Red Sorrel Salmon Quinoa Bowl',
            ingredients: [
                { item_zh: '紅酸膜葉', item_en: 'Red sorrel leaves', amount: '50克' },
                { item_zh: '三文魚', item_en: 'Salmon', amount: '100克' },
                { item_zh: '藜麥', item_en: 'Quinoa', amount: '50克' },
                { item_zh: '牛油果', item_en: 'Avocado', amount: '半個' },
                { item_zh: '車厘茄', item_en: 'Cherry tomatoes', amount: '6粒' },
                { item_zh: '紫薯', item_en: 'Purple sweet potato', amount: '100克' },
                { item_zh: '橙', item_en: 'Orange', amount: '半個' },
                { item_zh: '南瓜籽', item_en: 'Pumpkin seeds', amount: '1湯匙' },
                { item_zh: '橄欖油', item_en: 'Olive oil', amount: '1湯匙' },
                { item_zh: '檸檬汁', item_en: 'Lemon juice', amount: '1茶匙' }
            ],
            steps: [
                { step_zh: '三文魚煎至金黃（補充Omega-3和維他命D，紅酸膜缺乏）', step_en: 'Pan-fry salmon until golden (adds Omega-3 and vitamin D, which red sorrel lacks)' },
                { step_zh: '藜麥煮熟備用（補充完整蛋白質和維他命B群）', step_en: 'Cook quinoa (adds complete protein and B vitamins)' },
                { step_zh: '紫薯蒸熟切塊，牛油果切片（紫色增色，牛油果補充健康脂肪）', step_en: 'Steam purple sweet potato and cube, slice avocado (purple adds color, avocado adds healthy fats)' },
                { step_zh: '車厘茄切半，橙切片（紅橙色彩，增加維他命C和甜味）', step_en: 'Halve cherry tomatoes, slice orange (red-orange color, adds vitamin C and sweetness)' },
                { step_zh: '碗底鋪藜麥，放上紅酸膜葉、三文魚、紫薯、牛油果、車厘茄和橙（五顏六色，營養全面）', step_en: 'Layer quinoa in bowl, top with red sorrel, salmon, purple potato, avocado, tomatoes and orange (colorful and nutritious)' },
                { step_zh: '撒上南瓜籽，淋上橄欖油和檸檬汁（南瓜籽補鋅，檸檬提鮮）', step_en: 'Sprinkle pumpkin seeds, drizzle olive oil and lemon juice (seeds add zinc, lemon enhances flavor)' },
                { step_zh: '完成！色香味全的超級食物碗，蛋白質、碳水化合物、健康脂肪、維他命、礦物質應有盡有', step_en: 'Done! A superfood bowl with perfect color, aroma and taste - complete with protein, carbs, healthy fats, vitamins and minerals' }
            ]
        }
    }
};
