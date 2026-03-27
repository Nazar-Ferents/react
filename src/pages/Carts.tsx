import {useParams} from "react-router-dom";
import CartsComponent from "../components/AllCartComponents/CartsComponent/CartsComponent.tsx";

const Carts = () => {

    const {userId} = useParams();
    return (
        <div>

            {
                userId && <CartsComponent userId={userId} />
            }


        </div>
    );
};

export default Carts;