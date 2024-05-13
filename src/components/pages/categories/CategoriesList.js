import { useCategory } from "../../contexts/CategoriesContext"

export default function CategoryList() {

    const { category } = useCategory()
 
    return (
        <div>
            <h2>Categoties - </h2>
            <ul>
                {category.data.map((ele) => {
                    return <li key={ele._id}>{ele.name}</li>
                })}
            </ul>
        </div>
    )
}