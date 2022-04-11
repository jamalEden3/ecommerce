import styled from 'styled-components';
import Product from './Product';
const GridGallery = ({ products }) => {

    return (
        <GridGalleryWrapper>
           {
               products.map((product) => <Product key={product.id} {...product}/>)
           }
        </GridGalleryWrapper>
    );
};

const GridGalleryWrapper = styled.section`

`

export default GridGallery;