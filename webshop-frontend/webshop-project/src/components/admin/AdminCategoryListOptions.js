export default function AdminCategoryListOptions(categories) {

    const categoryData = categories.categoryList;
   
    return categoryData.map((category) => {
        return <option key={category.name} value={category.id}>{category.name}</option>;
    });
}