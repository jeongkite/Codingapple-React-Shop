import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

let Btn = styled.button`
    background: ${ props => props.bg };
    color: ${ props => props.bg == 'blue' ? 'white' : 'black' };
    padding: 10px;
    border: none;
`
let RoundBtn = styled(Btn)`
    border-radius: 30%;
`
let Textarea = styled.textarea`
    color: red;
`
let YellowBox = styled.div`
    background: yellow;
    width: 100px;
    height: 100px;
`

function DetailPage(props) {
    let {itemId} = useParams();
    let item = props.items.find((item)=> item.id == itemId )

    let [isBosHidden, setIsBoxHidden] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsBoxHidden(true), 2000 )
    });

    return (
        <div className="container">
            { !isBosHidden && <YellowBox></YellowBox> }
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes" + (item.id + 1) + ".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{ item.title }</h4>
                    <p>{ item.content }</p>
                    <p>{ item.price }</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default DetailPage;