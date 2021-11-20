
import React, { useState, useEffect } from 'react';

let view_url = "http://localhost/php-coding-test/Views.php/ViewSavingsController";

function ViewDatabaseData() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch(view_url)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(result)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
	let table;
	for ( let index = 0; index < items.length ; index++) {
		// console.log(items[index]);
		<tr><td>items[index</td></tr>
	}

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } 
	

	else {
      return (
            <div>

                
                {/* <ul>{items.map(item => (<li key={item.SNAME}>{item.SAMOUNT} {item.price}</li>))}  </ul> */}

                {/* <ul>{items.map(item => <li key={item}>{item.SNAME}</li>)}</ul> */}
                <ul>{items.map(item => <li className="list-view-lists">{Object.keys(item)}</li>)}</ul>
				

            </div>
          
       
      );
    }
  }



export default ViewDatabaseData;