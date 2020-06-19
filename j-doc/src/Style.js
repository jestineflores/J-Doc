import React, {Component} from 'react'

// export default function Bold(){ 
//     return(

//     )

export default class Bold extends Component{
    render {
        return (
            <div>
                <button className={bold} style={{ fontWeight: 'bold' }}>B</button>
            </div>
        )
    }
}