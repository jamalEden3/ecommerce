import { useState } from 'react';
import styled from 'styled-components';

// if images is undefined, it will be []
const ProductImage = ({ images = [{url:''}] }) => {
    const [currentImage, setCurrentImage] = useState(images[0]);
    return (
        <ProductImageWrapper>
            <img src={currentImage.url} />
            <div className="gallery">
                { 
                    images.map((img, index) => 
                        <img src={img.url} 
                             key={index} 
                             alt={img.filename} 
                             onClick={() => setCurrentImage(images[index])} 
                             className={`${img.url === currentImage.url ? 'active' : null}`}
                             />) 
                }
            </div>
        </ProductImageWrapper>
    );
};

export default ProductImage;

const ProductImageWrapper = styled.article`
    .gallery {
        width: 100%;
        border: 2px solid #000;
        display: flex;

        img {
            width: 150px;

            &.active {
                border: 2px solid red;
            }
        }
    }
`