import styled from 'styled-components';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

// stars = 1.6  >> 5 stars [0, 1, 2, 3 4, 5]

const Stars = ({ stars, reviews }) => {
    const productStars = Array.from({length: 5 }, (_, index) => {
        const starNum = index + 0.5;
        return(
            <span key={index}>
                { 
                    stars >= index + 1 ?  
                    <BsStarFill /> 
                        : 
                    stars >= starNum ? 
                    <BsStarHalf /> 
                        : 
                    <BsStar />
                }   
            </span>
        )
    });
    return (
        <StarsWrapper>
            {/* <div className="stars">
                <span>
                    { 
                    stars >=1 ?  <BsStarFill /> : stars >= 0.5 ? <BsStarHalf /> : <BsStar />
                    }   
                </span>
                <span>
                    { 
                    stars >=2 ?  <BsStarFill /> : stars >= 1.5 ? <BsStarHalf /> : <BsStar />
                    }   
                </span>
                <span>
                    { 
                    stars >=3 ?  <BsStarFill /> : stars >= 2.5 ? <BsStarHalf /> : <BsStar />
                    }   
                </span>
                <span>
                    { 
                    stars >=4 ?  <BsStarFill /> : stars >= 3.5 ? <BsStarHalf /> : <BsStar />
                    }   
                </span>
                <span>
                    { 
                    stars >= 5 ?  <BsStarFill /> : stars >= 4.5 ? <BsStarHalf /> : <BsStar />
                    }   
                </span>
            </div> */}
            <div className="stars">
                {productStars}
            </div>
        </StarsWrapper>
    );
};


const StarsWrapper = styled.div`

`
export default Stars;