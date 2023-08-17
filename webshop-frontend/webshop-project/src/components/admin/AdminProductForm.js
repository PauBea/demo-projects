import AdminCategoryListOptions from '../admin/AdminCategoryListOptions.js';
import { AdminCategoriesContext } from '../../context/AdminContexts.js';
import { useContext, useState} from 'react';

export default function AdminProductForm(props) {
	const handleInputChange = (e) => {
		const { name, value } = e.target;

		if (name === 'id') {
			// Ellenőrizzük, hogy a cikkszám nem lehet üres
			if (value.trim() !== '') {
				props.callback(name, e);
			}
		} else if (name === 'title') {
			// Ellenőrizzük, hogy a megnevezés nem lehet üres és nem csak számokat tartalmazhat
			if (value.trim() !== '' && !/^\d+$/.test(value)) {
				props.callback(name, e);
			}
		} else if (name === 'price') {
			// Ellenőrizzük, hogy az ár nem lehet üres, nem lehet 0 és csak szám lehet
			if (value.trim() !== '' && value !== '0' && !isNaN(value)) {
				props.callback(name, e);
			}
		} else if (name === 'categoryId') {
			console.log(e.target.value);
			props.callback(name, e);
		}
			
	};

	return (
		<>
			<form>
				<label htmlFor='id'>Cikkszám</label>
				<input
					value={props.stateVar.id}
					name='id'
					onChange={handleInputChange}
				/>
				<label htmlFor='title'>Termék megnevezés</label>
				<input
					value={props.stateVar.title}
					name='title'
					onChange={handleInputChange}
				/>
				<label htmlFor='price'>Ár</label>
				<input
					value={props.stateVar.price}
					name='price'
					onChange={handleInputChange}
				/>
				<label htmlFor='categoryId'>Kategória</label>
				<select
                        value={props.stateVar.categoryId}
                        name='categoryId'
                        onChange={handleInputChange}
                    >
                        <option value=''>--</option>
                        <AdminCategoryListOptions categoryList={useContext(AdminCategoriesContext)}/>
                    </select>
			</form>
		</>
	);
}
