import React from 'react';
import './productListing.styles.css';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
import { BookData } from '../../../util/BookData';
/* code to show some books on homepage  */
const ProductListing = () => {
    return(
        <div className="product-listing-container">
            <div className="container">
                <h2 className="h2-content">Here are some <span className="text-primary">books</span> that you might like</h2>

                <div className="listing-container">
                    {BookData.slice(0,4).map((book) => (
                         <ProductListingCard key={book.id} bookData={book} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ProductListing;