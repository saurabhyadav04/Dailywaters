import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'

const AllProducts = () => {
    const {products, searchQuery } = useAppContext()
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(()=>{
        if(searchQuery.length > 0){
            setFilteredProducts(products.filter(
                product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
            ))}else{
                setFilteredProducts(products)
            }
    },[products, searchQuery])

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 sm:mt-20 mb-20 mt-10">
      <div className='flex flex-col items-end w-max'>
          <p className='text-2xl font-medium uppercase'>All products</p>
        <div className='w-16 h-0.5 bg-[#073b61] rounded-full'></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-4 mt-6 w-full place-items-center sm:place-items-start">
           {filteredProducts.filter((product)=> product.inStock).map((product, index)=>(
            <ProductCard key={index} product={product}/>
           ))}
        </div>

    </div>
  )
}

export default AllProducts
