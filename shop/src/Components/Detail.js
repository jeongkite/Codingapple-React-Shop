import { useParams } from "react-router-dom";
import styled from "styled-components";

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

function DetailPage(props) {
    let {itemId} = useParams();
    let item = props.items.find((item)=> item.id == itemId )

    return (
        <div className="container">
            <Btn bg="green">버튼</Btn>
            <Btn bg="blue">버튼</Btn>
            <RoundBtn bg="pink">둥글게둥글게</RoundBtn>
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