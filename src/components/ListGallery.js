import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListGallery = ({products}) => {
    return (
        <ListGalleryWrapper>
          {products.map((product) => {
              const {id, image, name, price, description } = product;
              return(
                <article key={id}>
                    <img src={image} />
                    <div>
                        <p>{name}</p>
                        <p>{price}</p>
                        <p>{description.substring(0, 100)}...</p>
                        <Link to={`/products/${id}`}>Go to {name}</Link>
                    </div>
                </article>
              )
          })}
        </ListGalleryWrapper>
    );
};

const ListGalleryWrapper = styled.section`

`

export default ListGallery;