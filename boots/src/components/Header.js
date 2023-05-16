
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <header className='d-flex justify-between align-center p-40'>
            <Link to="/">
                <div className='d-flex align-center '>
                    <img height="40 px" width="40 px" src="img/logo.png" alt="Logotip" />

                    <div className="ml-10">

                        <h3 className='text-uppercase'>React Boots</h3>

                        <p className="opacity-5">
                            Магазин лучших кросовок
                        </p>
                    </div>
                </div>
            </Link>
            <ul className='d-flex' >
                <li onClick={props.onOpenCart} className='mr-30 d-flex align-center'>
                    <img className="mr-5 cu-p" height="18px" width="18px" src="/img/cart.svg " alt="Корзина" />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img className="mr-20 cu-p" height="18px" width="18px" src="/img/heart.svg" alt="Закладки" />
                    </Link>
                </li>
                <li>

                    <img height="18px" width="18px" src="/img/user.svg" alt="Пользователь" />

                </li>
            </ul>
        </header>
    );
}

export default Header;