import Logo from "@assets/logo_bcw.png";

import { useState, useEffect } from "react";
import { getProducts } from "@api";

function Display() {
    

    const [products, setProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");
    const [sortBy, setSortBy] = useState(null);
    const [selectedCurrency, setSelectedCurrency] = useState("USD");

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response.data);
        });
    }, []);

    // This is sortName function 
    const sortByNames = () => {
        const sortedProducts = [...products].sort((a, b) => {
            return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        });
        setProducts(sortedProducts);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        setSortBy("name");
    };

    // This is sortRank function
    const sortByRank = () => {
        const sortedProducts = [...products].sort((a, b) => {
            return sortOrder === "asc" ? a.id - b.id : b.id - a.id;
        });
        setProducts(sortedProducts);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        setSortBy("rank");
    };

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    return (      
        <div className="main-display">

            <div className="Logo-display">
                <img src={Logo} width='640px'/>
            </div>

            <div className="select-display">
                <select onChange={handleCurrencyChange} value={selectedCurrency}>
                    <option>USD</option>
                    <option>GBP</option>
                    <option>SGD</option>
                    <option>KRW</option>
                </select>

                <button onClick={sortByNames}>
                    Sort by Name
                </button>

                <button onClick={sortByRank}>
                    Sort by Rank
                </button>

            </div>

            <div style={{width: "100%"}} className="data-display">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Rank1</th>
                            <th>name</th>
                            <th>price</th>
                            <th>Volume</th>
                            <th>MarketCap</th>
                            <th>Total Supply</th>
                            <th>URLs</th>
                            <th>Exchange</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => {
                            if (product.currency === selectedCurrency) {
                                return (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.currency}</td>
                                        <td>{product.madeAt}</td>
                                        <td>{product.discount}</td>
                                        <td>{product.productUrl}</td>
                                        <td>{product.rating}</td>
                                    </tr>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Display;