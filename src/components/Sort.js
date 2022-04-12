import styled from 'styled-components';
import { useFilteredProductsContext } from '../context/FilteredProductsContext';
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";

const Sort = () => {
    const { filteredProducts: products, gridGallery, displayInGrid, displayInList,sort, getCurrntSort } = useFilteredProductsContext();
    return (
        <SortWrapper>
          <div className="btn-container">
            <button className={`${!gridGallery ? 'active btn' : 'btn'}`} onClick={displayInList}>
                <AiOutlineUnorderedList />
            </button>
            <button className={`${gridGallery ? 'active btn' : 'btn'}`} onClick={displayInGrid}>
                <BsFillGridFill />
            </button>
            <p>{products.length}</p>
            <hr />
          </div>

          <form >
              <label htmlFor="sort">sort by</label>
              <select 
                name="sort" 
                id="sort" 
                onChange={getCurrntSort}
                value={sort}
                className="sort-btn">
                <option value="price-lowest">price (lowest)</option>
                <option value="price-highest">price (lowest)</option>
                <option value="name-a">name (a-z)</option>
                <option value="name-z">price (z-a)</option>
              </select>
          </form>
        </SortWrapper>
    );
};

const SortWrapper = styled.section`
    btn {
        background-color: transparent;
    }

    .active {
        background-color: yellow
    }
`

export default Sort;