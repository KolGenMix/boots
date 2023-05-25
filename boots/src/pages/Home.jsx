import Cart from "../components/Cart/Cart"

function Home({ items,
    cartItems,
    searchValue,
    onAddToCart,
    onAddToFavorite,
    onChangeSearchInput }) {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between
        mb-40">
                <h1 className="">{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'} </h1>
                <div className="search-block  d-flex">
                    <img src="/img/search.svg" alt="Search" />
                    <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск" />

                </div>
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
                {items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
                    <Cart
                        id={item.id}
                        key={index}
                        name={item.name}
                        imageUrl={item.imageUrl}
                        price={item.price}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        onPlus={(obj) => onAddToCart(obj)}
                        added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
                    />))}

            </div>
        </div>
    )
};

export default Home;