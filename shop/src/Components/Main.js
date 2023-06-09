import { useState } from 'react';
import data from './../data.js'

function MainPage() {
    let [items] = useState(data);

    return (
        <div>
            <div className='main-bg'></div>
            <br />
            <div className="container">
                <div className="row">
                    {
                        items.map(function (item, i) {
                            return (
                                <Card item={item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function Card(props) {
    return (
        <div className="col-md-4">
            <img src={'/present' + (props.item.id + 1) + '.jpeg'} width="80%" />
            <h4>{props.item.title}</h4>
            <p>{props.item.content}</p>
            <p>{props.item.price}</p>
        </div>
    )
}

export default MainPage;