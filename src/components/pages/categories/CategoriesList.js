import { useCategory } from "../../contexts/CategoriesContext"

export default function CategoryList() {

    const { categories } = useCategory()
 
    return (
        <div>
            <h2>Categoties - {categories.data.length}</h2>
            <ul>
                {categories.data.map((ele) => {
                    return <li key={ele._id}>{ele.name}</li>
                })}
            </ul>
        </div>
    )
}