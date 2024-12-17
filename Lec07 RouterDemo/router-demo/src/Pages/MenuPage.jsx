import { useParams } from "react-router-dom";

export default function MenuPage(props) {
    const params = useParams();
    return (
        <div>
            <h3>Menu Page</h3>
            user Id  = {params.userId}
        </div>
    )
}
