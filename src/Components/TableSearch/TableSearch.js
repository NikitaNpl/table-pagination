import React from 'react';

export default (props) => {

    const valueChangeHandler = (event) => {
      props.searchHandler(event.target.value);
    }
 
    return (
        <div className="input-group mb-3 mt-3">
        <input 
            type="text" 
            placeholder="search"
            className="form-control"
            onChange={valueChangeHandler}
        />
        </div>
    )
}