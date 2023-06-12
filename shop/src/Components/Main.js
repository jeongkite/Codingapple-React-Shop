import { useState } from 'react';
import data from './../data.js'
import { useNavigate } from 'react-router-dom';

function MainPage() {
    let [items] = useState(data);
    let navigate = useNavigate();

    return (
        <div>
            <div className='main-bg'></div>
            <br />
            <div className="container">
                <div className="row">
                    {
                        items.map(function (item, i) {
                            return (
                                // 이렇게 하고 싶은데 동작하지 않음
                                <Card onClick={()=>{ navigate('/detail/' + i) }} item={item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function Card(props) {
    let navigate = useNavigate();

    return (
        // 여기다 넣어주면 동작함!!
        <div onClick={()=>{ navigate('/detail/' + props.item.id) }} className="col-md-4">
            <img src={'/present' + (props.item.id + 1) + '.jpeg'} width="80%" />
            <h4>{props.item.title}</h4>
            <p>{props.item.content}</p>
            <p>{props.item.price}</p>
        </div>
    )
}

export default MainPage;