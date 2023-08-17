import { useContext, useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlineFavorite } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AnonymCartContext, UserCartContext } from '../../context/CartContext';
import { AuthContext, FavoritesContext } from '../../context/UserContexts';
import { addToCart } from '../../services/cartServices';
import { read } from '../../services/productServices';
import './productDetails.css';

export default function ProductDetails() {
	const { termekID } = useParams();
	const [productDetail, setProductDetail] = useState({});

	const { anonymCart, setAnonymCart } = useContext(AnonymCartContext);
	const { userCartFromDB, setUserCartFromDB } = useContext(UserCartContext);
	const { favorites, setFavorites } = useContext(FavoritesContext);
	const { users } = useContext(AuthContext);
	const loggedInUser = users.find((user) => user.isLoggedIn);

	useEffect(() => {
		try {
			read(`/termekek/${termekID}`)
				.then((res) => res.json())
				.then((json) => {
					try {
						let obj = {
							...json,
							item: termekID,
						};
						setProductDetail(obj);
					} catch (error) { }
				});
		} catch (error) { }
	}, []);

	function addToCartHandler() {
		if (!loggedInUser) {
			addToCart(productDetail, anonymCart, setAnonymCart);
		} else {
			try {
				addToCart(productDetail, userCartFromDB, setUserCartFromDB);
			} catch (error) { }
		}

		toast.success('A termék a kosárba került!', {
			position: 'top-center',
		});
	}

	function favoritesHandler() {
		if (!loggedInUser) {
			toast.warning('A kedvencekhez való hozzáadás csak bejelentkezés után lehetséges!', {
				position: 'top-center',
			});
			return;
		} else {
			if (favorites == null) {
				setFavorites({ [productDetail.item]: productDetail.item });
				toast.success('A termék a kedvencekhez került!', {
					position: 'top-center',
				});
			} else {
				const same = Object.keys(favorites).some((i) => i == productDetail.item);
				if (!same) {
					setFavorites({ ...favorites, [productDetail.item]: productDetail.item });
					toast.success('A termék a kedvencekhez került!', {
						position: 'top-center',
					});
				} else {
					toast.info('A termék már szerepel a kedvencei között!', {
						position: 'top-center',
					});
				}
			}
		}
	}

	return (
		<>
			<h2 className='product-name-details'>{productDetail.title}</h2>
			{Object.keys(productDetail).length !== 0 ? (
				<div className='productContainer'>
					<div className='container-left'>
						<img
							src={productDetail.image}
							alt={productDetail.title}
						/>
					</div>
					<div className='container-right'>
						{/* <h3>A termék neve: {productDetail.title}</h3> */}
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien eget mi proin sed. Orci dapibus ultrices in iaculis nunc sed augue lacus. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Sit amet luctus venenatis lectus. Auctor augue mauris augue neque gravida. Hendrerit dolor magna eget est lorem ipsum. Pellentesque diam volutpat commodo sed. Sed egestas egestas fringilla phasellus faucibus. Consectetur lorem donec massa sapien faucibus et molestie ac. Et netus et malesuada fames ac turpis egestas.  {productDetail.description}</p>
						<p className='product-price'>A termék ára: {productDetail.price} Ft</p>
						<div id='product-bottom'>
							<span className='fav'>
								<MdOutlineFavorite onClick={favoritesHandler} />
							</span>
							<span className="shopping-cart-icon">
								<FaShoppingCart onClick={addToCartHandler} />
							</span>
						</div>
					</div>
				</div>
			) : (
				<h2>Termék nem található</h2>
			)}
		</>
	);
}
