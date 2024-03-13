import "./Listitem.css"

function ListItem({ item }) {
    return (
        <li className='List-item'>
            <div className='List-item-image-wrapper'>
            <img className='List-item-image' src="https://via.placeholder.com/150" alt="pokemon">
                </img>
            </div>
            <p classname='poke-name'>name pokemon</p>
        </li>
    
    )
}

export default ListItem;