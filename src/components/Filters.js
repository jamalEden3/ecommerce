import styled from 'styled-components';
import { useFilteredProductsContext } from '../context/FilteredProductsContext';
import { getUniqueSections } from '../utils/helpers';

const Filters = () => {
    const { 
        filters:
        { text, company, colors, category, max_price, min_price, price, shipping }, 
        updateFilter, 
        clearFilter, 
        allProducts
    } = useFilteredProductsContext();
    

    const categories = getUniqueSections(allProducts, 'category');
    const companies = getUniqueSections(allProducts, 'company');
    const color = getUniqueSections(allProducts, 'colors');


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

                    {/* category */}
                    <div>
                        <h2>Categories</h2>
                        {
                            categories.map((cat, index) => 
                                <button 
                                    key={index}
                                    onClick={updateFilter}
                                    name="category"
                                    className={`${category === cat.toLowerCase() ? 'active' : null}`}
                                    >
                                    {cat}
                                </button>)
                        }
                    </div>

                    {/* company */}
                    <div>
                        <h2>Company</h2>
                        <select name="company" value={company} onChange={updateFilter}>
                        {
                            companies.map((company, index) => {
                                return(
                                   <option key={index} value={company}>{company}</option>
                                )
                            })
                        }
                        </select>
                    </div>
                </form>
           </FiltersWrapper>
    );
};

const FiltersWrapper = styled.section`

`

export default Filters;