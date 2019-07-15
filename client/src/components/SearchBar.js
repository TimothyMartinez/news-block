import React from 'react';
import '../App.css';


class SearchBar extends React.Component{
    render(){
        return(
    <form id="resize" action=""> 
        <input id="navsrch" type="search"/>
        <i className="fa fa-search"></i>
    </form>
        )
    }
}

export default SearchBar;