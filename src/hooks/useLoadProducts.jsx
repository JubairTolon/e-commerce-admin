import { useEffect, useState } from "react";

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://e-commerce-admin-server-2pbg.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return products;
}