import { useState } from 'react';
import data from './../data.js'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Button from 'react-bootstrap/Button';

function MainPage() {
    let [items, setItems] = useState(data);

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
            <Button onClick={() => {
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                    let newItems = [...items];
                    result.data.forEach(element => {
                        newItems.push(element)
                    });
                    setItems(newItems);
                })
                .catch(() => {
                    console.log("🚨 네트워크 통신 실패!")
                })
            }} variant="outline-secondary" className='my-5'>더 보기</Button>

        </div>
    )
}

function Card(props) {
    let navigate = useNavigate();
    // console.log(props.item)
    return (
        <div onClick={()=>{ navigate('/detail/' + props.item.id) }} className="col-md-4">
            <img src={'/present' + (props.item.id + 1) + '.jpeg'} width="80%" />
            <h4>{props.item.title}</h4>
            <p>{props.item.content}</p>
            <p>{props.item.price}</p>
        </div>
    )
}

export default MainPage;