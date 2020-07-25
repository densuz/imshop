import React, { useReducer } from 'react';
import { Row, Container, Col, Card, CardImg, Button } from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../CartContex';
import { keranjangContext } from '../../App';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


//untuk deklarasi fungsi jumlah dan tambah
const initialState = {
    jumlah: 0,
    hargasatuan: 1000,
    hargatotal: 0,
    stock: 35

}

const reducer = (state, action) => {

    switch (action.type) {
        case 'tambah': return {
            ...state,
            jumlah: state.jumlah + 1,
            hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah)
        }
        case 'kurangi': return {
            ...state,
            jumlah: state.jumlah - 1,
            hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan
        }
        default:
            return state

    }
}

//TANDA HEADER KOMPONEN
export default function HookReducer(props) {

    const countContext = useContext(keranjangContext)
    const { value, setValue } = useContext(CartContext)

    return (
        <Container>
            <br />
            <Row>
                <Col xs="6">
                    <div className="carousel-wrapper">
                        <div class="row">
                            <div class="col-lg">
                                <Carousel infiniteLoop useKeyboardArrows autoPlay />
                                <Carousel>
                                    <div>
                                        <img src="https://i0.wp.com/gizmologi.id/wp-content/uploads/2019/10/Realme-xt-spesifikasi-500x500.jpeg" />
                                    </div>
                                    <div>
                                        <img src="https://images-na.ssl-images-amazon.com/images/I/71muFgw3oPL._SX679_.jpg" />
                                    </div>
                                    <div>
                                        <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/11/1/122961/122961_9ce372cf-39b2-448d-a932-08b37bba9d66_1080_1080.jpg" />
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col xs="6">
                    <h3>Realme 5 Pro{props.item}</h3>

                    <h3>Rp.{countContext.keranjangState.hargatotal}</h3>
                    <br />
                    <p><b>Qity :{countContext.keranjangState.jumlah}</b></p>
                    <Row>
                        <Col><Button onClick={() => countContext.keranjangdispatch({ type: 'kurangi' })} color="danger">-</Button></Col>
                        <Col>{countContext.keranjangState.jumlah}</Col>
                        <Col><Button onClick={() => countContext.keranjangdispatch({ type: 'tambah' })} color="primary">+</Button></Col>

                    </Row>

                    <br />
                    <h5>Total Rp. {countContext.keranjangState.hargatotal}</h5>
                    <br />
                    <Button onClick={() => setValue(countContext.keranjangState.jumlah + value)} color="success" size="md" className="fa fa-cart-plus">Tambahkan Keranjang</Button>
                    <br />
                    <hr />
                    <Container>
                        <br />
                        <h5 className="text-justify"><b>Deskripsi</b></h5>
                        <hr />
                        <p className="text-justify">and instance of type Instance.Instance is optional and is mixed by default.A class or function component with config Config may be used in places that expect</p>
                        <br />
                    </Container>
                </Col>

            </Row>
        </Container>

    );

}

