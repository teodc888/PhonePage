import React from "react";
import { useSelector } from "react-redux";

function Cards (){

    const phones = useSelector((state) => state.phones );

    console.log(phones)
    return(
        <>
            {
                phones.length &&
                phones.map((phone) =>{
                    return(
                        <>
                            <h1>{phone.brand_name}</h1>
                        </>
                    )
                })
            }
        </>
    )
}

export default Cards;