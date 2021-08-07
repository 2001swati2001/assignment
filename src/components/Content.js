import React from 'react'
import lady from "./files/Rectangle19.png"
import bag from "./files/bag.png"

function Content() {
    return (
        <div>
            <div class="content-area">
			    <div class="wrapper">

                    <div class="Content">
                        <div class="row">
                            <div class="col">
                            <div class="card" className="cards">
                                <div class="cardbody">
                                    <h5 class="card-title">Ready for autumn collection</h5>
                                    <p class="cardtext">Treat yourself to some of our brand new autumn collection - 
                                    all with wonderful colours surrounding you.</p>
                                    <a href="#" class="buttons buttons-card">PURCHASE NOW</a>
                                </div>
                                <img class="card-img-top" src={bag} alt="Card image cap"/>

                            </div>
                            </div>
                            <div class="col">
                            <div class="card" className="cards">
                                <div class="cardbody">
                                    <h5 class="card-title">Ready for autumn collection</h5>
                                    <p class="cardtext">Treat yourself to some of our brand new autumn collection - 
                                    all with wonderful colours surrounding you. </p>
                                    <a href="#" class="buttons buttons-card">PURCHASE NOW</a>
                                </div>
                                <img class="card-img-top" src={lady} alt="Card image cap"/>

                            </div>
                            
                            </div>
                        </div>
                    </div>

			</div>
		</div>
        </div>
    )
}

export default Content
