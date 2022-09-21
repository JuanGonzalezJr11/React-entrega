import './ItemListContainer.css'

const ItemListContainer = ({mensaje}) => {
    return (
        <div className='div-ItemListContainer'>
            <h1>
                {mensaje}
            </h1>
            <p>
                Encontrá los productos que buscas acá. 🔥
            </p>
        </div>
    )
}

export default ItemListContainer;