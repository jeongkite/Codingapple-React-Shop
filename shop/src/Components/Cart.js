import { Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { addStock, subStock, changeName, changeAge } from './../store';

function Cart() {
    let dispatch = useDispatch();
    let user = useSelector((state) => { return state.user })
    let carts = useSelector((state) => { return state.carts })

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
                                        dispatch(addStock(idx))
                                    }} className='me-1' variant="outline-primary">+1</Button>
                                    <Button variant="outline-danger">-1</Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>

            <Button onClick={() => {
                dispatch(changeAge(1))
            }} variant="outline-dark">{ `${user.name}님, ${user.age}세` }</Button>
        </Table>
    )
}

export default Cart;