import { useOffice } from "../../contexts/OfficeContext"

export default function OfficeList() {
    const { office }  = useOffice()
    return (
        <div>
            <h2>Office List - {office.data.length}</h2>
            <ul>
                { office.data.map((ele) => {
                    return <li key={ele._id}>{ele.name}</li>
                })}
            </ul>
        </div>
    )
}