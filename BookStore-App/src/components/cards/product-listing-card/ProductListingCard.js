import React from "react";
import './productListingCard.styles.css';
import { Link } from 'react-router-dom';

/* code to show product details on card */
const ProductListingCard = ({ bookData }) => {
    return (
        <div className="product-listing-card">
            <div className="product-listing-img-container">
                <img src={bookData.book_url} alt="product-listing" className="product-listing-image" />
            </div>
            <div className="product-listing-details-container">
                <h3>{bookData.book_name}</h3>
                <p className="author-name"><b>Author Name:</b> {bookData.author_name}</p>
                <p className="lang"><b>Language:</b> {bookData.language}</p>
                <p className='pricing'><b>Price:</b> &#8377; {bookData.price}</p>
                <p className='printlngth'><b>Pages:</b> {bookData.print_length}</p>
            </div>
            <div className="card-btn-container">
                <Link to={`/book-details/${bookData.id}`} className="product-listing-button">Add To Cart</Link>
            </div>
        </div>
    )
}

export default ProductListingCard;