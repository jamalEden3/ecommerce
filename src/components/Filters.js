import styled from 'styled-components';
import { useFilteredProductsContext } from '../context/FilteredProductsContext';

const Filters = () => {
    const { filters:{ text, company, colors, categorey, max_price, min_price, price, shipping }, updateFilter, clearFilter } = useFilteredProductsContext();
    
    return (
           <FiltersWrapper>
                <form onSubmit={(e) => e.preventDefault()}>
                    {/* Input field */}
                    <input
                        type= "text"
                        name= "text"
                        value={text}
                        onChange={updateFilter}
                        placeholder="Search products here"
                    />
                </form>
           </FiltersWrapper>
    );
};

const FiltersWrapper = styled.section`

`

export default Filters;