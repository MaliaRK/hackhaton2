import React from 'react'

interface Params {
    params: {
        id: string;
    }
}

interface ProductsDetail {
    id: number;
    name: string;
    description: string;
}

const productsDetail: ProductsDetail[] = [
    {
        id: 1,
        name: "prduct1",
        description: "this is product 1"
    },
    {
        id: 2,
        name: "prduct2",
        description: "this is product 2"
    },
    {
        id: 3,
        name: "prduct3",
        description: "this is product 3"
    },     
]
const ProductsDetail = ({params}: Params) => {
    const {id} = params;
    console.log('product id: ', id);

    const product = productsDetail.find((product) => product.id.toString() === id); 
    
    if(!product) {
        return <div>product not found malia</div>;
    }
    console.log(product.description);
  return (
    <div>
        <h3><u><strong>Description of {product.name}:</strong></u></h3>
        <p>{product.description}</p>
    </div>
  )
}

export default ProductsDetail
