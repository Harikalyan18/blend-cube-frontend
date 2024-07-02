import { useSpace } from "../../contexts/SpaceContext"

export default function SpaceList() {
    const { spaces } = useSpace()
    return (
        <div>
            <h2>Space List - </h2>
            <ul>
            {spaces.data.map((ele) => {
                return <li key={ele._id}> { ele.name }</li>
            })}
            </ul>
        </div>
    )
}