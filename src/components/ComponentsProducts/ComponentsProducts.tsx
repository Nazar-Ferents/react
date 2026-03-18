import {useEffect, useState} from "react";
import type {IProducts} from "../../modules/IProducts.ts";
import {getProducts} from "../../service/service-dummyJSON.ts";
import ComponentProducts from "../ComponentProducts/ComponentProducts.tsx";
import './ComponentsProducts.css'

const ComponentsProducts = () => {

    const [products, setProducts] = useState<IProducts[]>([])

    useEffect(() => {

        getProducts()
            .then(res => setProducts(res))

    },[])

    return (

            <div className='table'>
                {
                    products.map((product,index) =>
                        (<ComponentProducts key={index} product={product}/>))
                }
            </div>
    );
};

export default ComponentsProducts;