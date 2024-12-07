import React from 'react'
import Link from 'next/link'

interface Products {
    id: number;
    name: string;
}

const products: Products[] = [
    {
        id: 1,
        name: "prduct1",
    },
    {
        id: 2,
        name: "prduct2",
    },
    {
        id: 3,
        name: "prduct3",
    },     
]

const ProductsList = () => {
  return (
    <div className='mx-[10%] py-[10%] '>
        <h2><u><strong>Products:</strong></u></h2>
        <ul>
            {products.map((product) => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`} target='_blank'>
                        {product.name}</Link>
                    </li>
                )
            )}         
        </ul>
    </div>
  )
}

export default ProductsList