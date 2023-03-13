import React from 'react'
import { useParams } from 'react-router';

const CryptoDetails = (props) => {
    const { cryptoSymbol, id } = useParams();
    return (
        <div>
            <h1>CryptoDetails</h1>
            <p>Symbol: {cryptoSymbol}</p>
            <p>ID: {id}</p>
        </div>
    )
}

export default CryptoDetails;
