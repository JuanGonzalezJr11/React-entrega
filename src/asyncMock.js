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
]

/* Export nombrado: */
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })
}