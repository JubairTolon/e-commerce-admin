import React, { useContext } from 'react';
import { ProductContext } from '../../App';

const AdminProducts = () => {
    const products = useContext(ProductContext);

    return (
        <div className='mx-10 mt-5'>
            <h1 className='text-lg font-bold mb-2'>Total Product: {products.length}</h1>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-2 px-2">
                                product Id
                            </th>
                            <th scope="col" className="py-2 px-2">
                                Product
                            </th>
                            <th scope="col" className="py-2 px-2">
                                Name
                            </th>
                            <th scope="col" className="py-2 px-2">
                                Color
                            </th>
                            <th scope="col" className="py-2 px-2">
                                Available
                            </th>
                            <th scope="col" className="py-2 px-2">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map(product =>
                                <tr
                                    key={product._id}
                                    className="bg-white border-b h-11 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th className="py-2 px-2">
                                        {product._id}
                                    </th>
                                    <th className="py-2 px-2">
                                        <img className='w-16' width='25%' src={product.picture} alt="" />
                                    </th>
                                    <td className="py-2 px-2">
                                        {product.name}
                                    </td>
                                    <td className="py-2 px-2">
                                        {product.color}
                                    </td>
                                    <td className="py-2 px-2">
                                        {product.available === true ? <p>available</p> : <p>Not available</p>}
                                    </td>
                                    <td className="py-2 px-2">
                                        {`$ ${product.balance}`}
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminProducts;