import React from 'react';
import { Container, Button } from 'reactstrap';
import { useContext } from 'react';
import { keranjangContext } from '../../App';


function Tagihan(props) {

  const countContext = useContext(keranjangContext)
  return (
    <Container>
      <br />
      <div class="card text-left">
        <div class="card-header">
          Keranjang Belanja
  </div>
        <div class="card-body">
          <h5 class="card-title">Realme XT{props.item}</h5>
          <p class="card-text"></p>
          <Container fluid>
            <p className="lead">qity:{countContext.keranjangState.jumlah}</p>
            <p className="lead">Rp {countContext.keranjangState.hargatotal}</p>
            
          </Container>
        </div>
        
      </div>
      <br/>
      <Button type="button" className="float-right" color="primary ">Lanjutkan Pembayaran</Button>
    </Container>
  )
}

export default Tagihan;