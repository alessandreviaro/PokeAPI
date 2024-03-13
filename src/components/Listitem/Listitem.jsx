import "./Listitem.css"

function ListItem({ item }) {
    const { name, sprites } = item;
    const sprite = sprites.other["official-artwork"].front_default;

    return (
        <li className='List-item'>
            <div className='List-item-image-wrapper'>
            <img className='List-item-image' src={sprite} alt="pokemon">
                </img>
            </div>
            <p classname='poke-name'>{name.toUpperCase()}</p>
        </li>
    
    )
}

export default ListItem;