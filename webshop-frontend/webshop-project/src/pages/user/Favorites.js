import FavoritesRender from '../../components/user/Favorites/FavoritesRender';
import "./home.css"

const Favorites = () => {
    return (
			<>
            <h1 className="favorites-title">Kedvenc Termékek</h1>
            <FavoritesRender />
			</>
		);
}

export default Favorites