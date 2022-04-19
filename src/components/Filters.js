import styled from 'styled-components';
import { useFilteredProductsContext } from '../context/FilteredProductsContext';
import { getUniqueSections } from '../utils/helpers';
import { AiOutlineCheck } from "react-icons/ai";
import { formatPrice } from '../utils/helpers';


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
                    {/* Colors */}

                    <div className="colors">
                        <h2>colors</h2>
                        {
                            color.map((clr, index) => {
                                if(clr === 'all') {
                                    return(
                                        <button
                                            key={index}
                                            name="colors"
                                            onClick={updateFilter}
                                            data-color='all'
                                            className={`${colors === 'all'} ? 'active btn' : 'btn'`}
                                        >
                                            all
                                        </button>
                                    )
                                }
                                return (
                                    <button 
                                        key={index} 
                                        style={{backgroundColor: clr}}
                                        className={`${colors === clr ? 'active btn' : 'btn'}`}
                                        onClick={updateFilter}
                                        data-color={clr}
                                        name="colors"
                                        >
                                            {colors === clr ? <AiOutlineCheck /> : null}
                                    </button>
                                )
                            })
                        }
                    </div>

                    {/* Price */}
                    <div>
                        <h2>Price</h2>
                        <p>{formatPrice(price)}</p>
                        <input 
                            type='range'
                            name='price'
                            value={price}
                            onChange={updateFilter}
                            min={min_price}
                            max={max_price} 
                            />
                    </div>

                    {/* Shipping */}
                    <div>
                        <label htmlFor="shipping">Shipping</label>
                        <input 
                            type="checkbox"
                            name="shipping"
                            id="shipping"
                            onChange={updateFilter}
                            checked={shipping}
                        />
                    </div>
                </form>
                <button type='button' onClick={clearFilter}>Clear filters</button>
           </FiltersWrapper>
    );
};

const FiltersWrapper = styled.section`
    .colors {
        button {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 3px;
            opacity: .5;
            cursor: pointer;
        }
    }
`

export default Filters;