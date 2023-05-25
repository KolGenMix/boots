import React from 'react';
import styles from './Cart.module.scss'


function Cart({ id, imageUrl, name, price, onFavorite, onPlus, favorited = false, added = false }) {

    const [isAdded, setIsAdded] = React.useState(added);

    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickFavorite = () => {
        onFavorite({ id, name, imageUrl, price });
        setIsFavorite(!isFavorite);
    }

    const onClickPlus = () => {
        onPlus({ id, imageUrl, name, price });
        setIsAdded(!isAdded);
    }
    return (
        <div className={styles.cart}>
            <div onClick={onClickFavorite} className="favorite cu-p">
                <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="UnLiked" />
            </div>

            <img width={133} height={112} src={imageUrl} alt="sneakers" />


            <h5>{name}</h5>

            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />


            </div>
        </div>
    );
}

export default Cart;