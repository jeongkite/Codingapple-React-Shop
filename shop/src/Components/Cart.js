import { Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { addStock, subStock } from './../store';

function Cart() {
    let dispatch = useDispatch();
    let a = useSelector((state) => { return state.user })
    let carts = useSelector((state) => { return state.carts })
    console.log(a)

    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {
                    carts && carts.map(function (cart, idx) {
                        return (
                            <tr>
                                <td>{cart.id}</td>
                                <td>{cart.name}</td>
                                <td>{cart.count}</td>
                                <td>
                                    <Button onClick={() => {
                                        dispatch(addStock())
                                    }} className='me-1' variant="outline-primary">+1</Button>
                                    <Button variant="outline-danger">-1</Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default Cart;