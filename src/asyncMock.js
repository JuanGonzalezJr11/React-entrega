const products = [
    {
        id: '1',
        name: 'Old Skool',
        color: 'black/white',
        price: 20000,
        category: 'shoes',
        img: 'https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2021/10_2/0/108/78/7097954.jpg',
        stock: 25,
    },
    {
        id: '2',
        name: 'Old Skool',
        color: 'red/white',
        price: 20000,
        category: 'shoes',
        img: 'https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2016/12_2/0/21/189/1424645.jpg',
        stock: 32,
    },
    {
        id: '3',
        name: 'Old Skool',
        color: 'blue navy',
        price: 20000,
        category: 'shoes',
        img: 'https://do2padres.com/img/Producto/1592/02-1629548222-617c58289f52a.jpeg',
        stock: 20,
    },
    {
        id: '4',
        name: 'Sk8 low',
        color: 'black/white',
        price: 21500,
        category: 'shoes',
        img: 'https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2020/11_5/0/90/32/5906470.jpg',
        stock: 16,
    },
    {
        id: '5',
        name: 'Sk8 low',
        color: 'white',
        price: 21500,
        category: 'shoes',
        img: 'https://http2.mlstatic.com/D_NQ_NP_690488-MLA51072648609_082022-W.jpg',
        stock: 22,
    },
    {
        id: '6',
        name: 'Slip On',
        color: 'white/black',
        price: 17000,
        category: 'shoes',
        img: 'https://celadasa.vtexassets.com/arquivos/ids/210286-800-auto?v=637895979579930000&width=800&height=auto&aspect=true',
        stock: 23,
    },
    {
        id: '7',
        name: 'Vans Off The Wall Classic Tee SS',
        color: 'white',
        price: 8000,
        category: 'shirts',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/139/501/products/b896ab9d-0034-41de-84fb-5c45e6163765-80c3a72a7dc418523b16516123060481-1024-1024.jpg',
        stock: 10,
    },
    {
        id: '8',
        name: 'Vans Classic T-Shirt',
        color: 'black',
        price: 8800,
        category: 'shirts',
        img: 'https://images.vans.com/is/image/Vans/YQVDJ2-HERO?$583x583$',
        stock: 8,
    },
    {
        id: '9',
        name: 'Vans Four Elements',
        color: 'white',
        price: 7800,
        category: 'shirts',
        img: 'https://4elementos.com/173542-medium_default/vans-mt-vans-tee-vn0a7s663ks1.jpg',
        stock: 15,
    },
    {
        id: '10',
        name: 'Property of Vans',
        color: 'bordeaux/gray',
        price: 8000,
        category: 'hats',
        img: 'https://media.kohlsimg.com/is/image/kohls/4550807_Ryl_Gray?wid=600&hei=600&op_sharpen=1',
        stock: 3,
    },
    {
        id: '11',
        name: 'Village Vans',
        color: 'gray/black',
        price: 7500,
        category: 'hats',
        img: 'https://cdn.shopify.com/s/files/1/0567/9798/7010/products/204815_39602d95-0613-4c86-85c7-81aa380f3b92_530x530@2x.jpg?v=1632203075',
        stock: 5,
    },
    {
        id: '12',
        name: 'Pants Guide',
        color: 'black',
        price: 12000,
        category: 'pants',
        img: 'https://images.vans.com/is/image/VansBrand/220810_lp_pants-guide_vn000005blk_slide4?$SCALE%2DORIGINAL$',
        stock: 2,
    },
]

/* Export nombrado: */
// export const getProducts = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(products);
//         }, 5000)
//     })
// }

// export const getProduct = (id) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products.find(prod => prod.id === id))
//         }, 1000)
//     })
// }

// export const getProductsByCategory = (categoryId) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products.filter(prod => prod.category === categoryId))
//         }, 1000)
//     })
// }