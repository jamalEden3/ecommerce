import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useParams, useHistory} from 'react-router-dom';
import { selected_product_url as url } from '../utils/constants';

import { useProductsContext } from '../context/ProductsContext';
import Loadign from '../components/Loading';
import Error from '../components/Error';
import BreadCrumbs from '../components/BreadCrumbs';
import ProductImage from '../components/ProductImage';
import Stars from '../components/Stars';
import AddToCart from '../components/AddToCart';

import { formatPrice } from '../utils/helpers';

const SelectedProductPage = () => {
    const { id } = useParams();
    const { fetchSelectedProduct,
            selectedProductLoading: loading,
            selectedProductError: errors,
            selectedProduct} = useProductsContext();
    
    useEffect(() => {
        fetchSelectedProduct(`${url}${id}`);
    }, [id])


    // wait 3 second if there is an error, then redirect page to home page
    useEffect(() => {
        if(errors) {
            setTimeout(()=> {
                useHistory.push('/')
            },3000)
        }
    }, [errors]);

    if(loading) {
        return <Loadign />
    }
    if(errors) {
        return <Error />
    }

    const { name, price, description, stock, stars, reviews, id:sku, company, images } = selectedProduct;
    return (
        <SelcProductWrapper>
            <BreadCrumbs title={name} product/>
            <Link to="/products" className="btn">Back to products</Link>
            <div>
                <ProductImage images={images} />
                <div>
                    <h2>{name}</h2>
                    <Stars stars={stars} reviews={reviews} />
                    <h5>{formatPrice(price)}</h5>
                    <p>{description}</p>
                    <p className="selcProduct-info">
                        <span>
                            {stock > 0 ? "available": "not available"}
                        </span>
                    </p>
                    <p className="selcProduct-info">{sku}</p>
                    <p className="selcProduct-info">Brand: {company}</p>
                </div>
                {stock > 0 ? <AddToCart product={selectedProduct}/> : ''}
            </div>
        </SelcProductWrapper>
    );
};

export default SelectedProductPage;

const SelcProductWrapper = styled.section`
    margin-top: 5rem;

    
`