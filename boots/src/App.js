import React from 'react'
import './App.scss';
// import Cart from './components/Cart/Cart';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header';
import Home from './pages/Home';
import axios from 'axios'

import { Route, Routes } from 'react-router-dom'
import Favorites from './pages/Favorites';
// const arr = [
//   { "name": "Мужские Кроссовки Nike Blazer Mid Suede", "imageUrl": "/img/sneakers/1.jpg", "price": "12999" },
//   { "name": "Мужские Кроссовки Nike Air Max 270", "imageUrl": "/img/sneakers/2.jpg", "price": "15600" },
//   { "name": "Мужские Кроссовки Classic Air Max 270", "imageUrl": "/img/sneakers/3.jpg", "price": "16600" },
//   { "name": "Мужские Кроссовки Classic Air Max 270", "imageUrl": "/img/sneakers/4.jpg", "price": "15200" }
// ];


function App() {

  const [items, setItems] = React.useState([]);

  const [cartItems, setCartItems] = React.useState([]);

  const [cartOpened, setCartOpened] = React.useState(false);

  const [searchValue, setSearchValue] = React.useState('');


  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    // fetch("https://644dee8c1b4567f4d57cb282.mockapi.io/items").then(res => { return (res.json()) }).then((json) => { setItems(json); })

    axios.get("https://644dee8c1b4567f4d57cb282.mockapi.io/items").then((res) => { setItems(res.data) })

    axios.get("https://644dee8c1b4567f4d57cb282.mockapi.io/cart").then((res) => { setCartItems(res.data) })

    axios.get("https://644dee8c1b4567f4d57cb282.mockapi.io/favorites").then((res) => { setFavorites(res.data) })
  }, []);


  // React.useEffect(() => {
  //   async function fetchData() {

  //     const itemsResponse = await axios.get("https://644dee8c1b4567f4d57cb282.mockapi.io/items");

  //     const cartResponse = await axios.get("https://644dee8c1b4567f4d57cb282.mockapi.io/cart");

  //     const favoritesResponse = await axios.get("https://644dee8c1b4567f4d57cb282.mockapi.io/favorites");


  //     setCartItems(cartResponse.data);
  //     setFavorites(favoritesResponse.data);
  //     setItems(itemsResponse.data);
  //   }

  //   fetchData();
  // }, []);

  const onAddToCart = (obj) => {
    console.log(obj);
    axios.delete(`https://644dee8c1b4567f4d57cb282.mockapi.io/cart/${obj.id}`);
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems((prev) => prev.filter((item) => Number(item.id) === Number(obj.id)));

    } else {
      axios.post("https://644dee8c1b4567f4d57cb282.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }

  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://644dee8c1b4567f4d57cb282.mockapi.io/favorites/${obj.id}`);
        // setFavorites((prev) => prev.filter((item) => item.id === obj.id));
      } else {
        const { data } = await axios.post("https://644dee8c1b4567f4d57cb282.mockapi.io/favorites", obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
    }
  }

  const onRemoveCart = (id) => {
    axios.delete(`https://644dee8c1b4567f4d57cb282.mockapi.io/cart/${id}`);


    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }


  return (
    <div className="wrapper clear">


      {cartOpened ? <Drawer items={cartItems} onCloseCart={() => { setCartOpened(false) }} onRemove={onRemoveCart} /> : null}

      <Header onOpenCart={() => { setCartOpened(true) }} />

      <Routes>

        <Route path="/" element={<Home
          items={items}
          cartItems={cartItems}
          searchValue={searchValue}
          onAddToCart={onAddToCart}
          onAddToFavorite={onAddToFavorite}
          onChangeSearchInput={onChangeSearchInput}
        />} />

        <Route path="/favorites" element={<Favorites items={favorites}
          onAddToFavorite={onAddToFavorite}
        />} />
      </Routes>




    </div>



  );
}

export default App;
