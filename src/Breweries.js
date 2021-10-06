import React from 'react';
import './Breweries.css';
import first from './first.jpg';
import second from './second.jpg';
import fourth from './fourth.jpg';

const Breweries = () => {
    return (
        <div className= "breweries" id="breweries">
            <ul>
                <li>
                    <figure>
                        <img src={first} alt="first" />
                        <figcaption><h3>Billions upon billions</h3></figcaption>
                    </figure>
                    <p>Made in the interiors of collapsing star stuff harvesting star light venture billions Drake Equation brain is the seed of real intelligence</p>
                    <a href="!#">Visit Website</a>

                    <figure>
                        <img src={second} alt="second" />
                        <figcaption><h3>Billions upon billions</h3></figcaption>
                    </figure>
                    <p>Made in the interiors of collapsing star stuff harvesting star light venture billions Drake Equation brain is the seed of intelligence?</p>
                    <a href="!#">Visit Website</a>

                    <figure>
                        <img src={fourth} alt="fourth" />
                        <figcaption><h3>Billions upon billions</h3></figcaption>
                    </figure>
                    <p>Made in the interiors of collapsing star stuff harvesting star light venture billions Drake Equation brain is the seed of intelligence?</p>
                    <a href="!#">Visit Website</a>
                </li>
            </ul>
        </div>
    )
}

export default Breweries;
