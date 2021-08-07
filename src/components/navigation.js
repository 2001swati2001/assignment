import React from 'react'
import "./nav.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';


function navigation() {
    return (
        <div >
           <header>
			<div class="wrapper">
				<div class="logo">
					<a class ="bold"href="#">Products<ExpandMoreIcon /></a>
                    <a href="#">Collections</a>
                    <a href="#">Gifts</a>
                    <a href="#">Our magazine</a>
				</div>
				<nav>       
                    <a href="#"><SearchIcon/></a>
                    <a href="#">Log In</a>
                    <a href="#"><button class="button button1">SIGN UP</button></a>
                    
				</nav>
               
                
			</div>
		    </header>
        </div>
    )
}

export default navigation
