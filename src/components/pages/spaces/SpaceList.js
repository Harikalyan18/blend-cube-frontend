import { useSpace } from "../../contexts/SpaceContext"

export default function SpaceList() {
    const { space } = useSpace()
    return (
        <div>
            <h2>Space List - </h2>
            <ul>
            {space.data.map((ele) => {
                return <li key={ele._id}> { ele.name }</li>
            })}
            </ul>
        </div>
    )
}