import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Cards.css'
import CardImage from '../../img/iphone-12.png'

class Card extends React.Component {
    render(){
        return(
            <div class="cardBody">
                <div className="cardImg" 
                style={{
                    backgroundImage:`url(${CardImage})`
                }}
                >
                </div>

                <div class="card mx-auto cardTitle">
                <FontAwesomeIcon icon={faCartShopping} />
            <h5>{this.props.title}</h5>
        </div>
        <div class="cardDescription">
        <h5>{this.props.description}</h5>
        </div>
         </div>
            
        )
    }
}
export default Card;