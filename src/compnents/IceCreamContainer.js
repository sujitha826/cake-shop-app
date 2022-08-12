import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux';

export default function IceCreamContainer() {
    const numOfIcecreams = useSelector(state => state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of cakes - {numOfIcecreams} </h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy Cake</button>
        </div>
    )
}