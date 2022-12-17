import { useParams } from "react-router-dom";

function UserPages() {

    const params = useParams()

    return (
        <>
            <p>
                User <span>{params.id}</span>
            </p>
        </>
    );
}

export default UserPages;
