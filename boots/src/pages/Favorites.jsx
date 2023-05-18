
import Cart from "../components/Cart/Cart";


function Favorites({ items, onAddToFavorite }) {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between
        mb-40">
                <h1 className="">{"Мои закладки"} </h1>

            </div>
            <div className="d-flex flex-wrap ">
                {/* {arr.map(obj =>
            <Cart
              name={obj.name}
              imageUrl={obj.imageUrl}
              price={obj.price}
              onFavorite={() => alert('Добавили в закладки')}
              onPlus={() => alert('Нажали на плюс')}
            />)} */}
                {items.map((item, index) => (
                    <Cart
                        id={item.id}
                        key={index}
                        name={item.name}
                        imageUrl={item.imageUrl}
                        price={item.price}
                        // onFavorite={(obj) => onAddToFavorite(obj)}
                        // onPlus={(obj) => onAddToCart(obj)}
                        favorited={true}
                        onFavorite={onAddToFavorite}
                    />))}

            </div>
        </div>
    )
};

export default Favorites;