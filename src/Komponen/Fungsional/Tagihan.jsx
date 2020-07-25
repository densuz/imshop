import React from 'react';
import { Container ,Jumbotron, Button} from 'reactstrap';
import { useContext } from 'react';
import { keranjangContext } from '../../App';


function Tagihan() {

    const countContext = useContext(keranjangContext)
    return(
    <Container>
      <br/>
      <h2> Keranjang Belanja</h2>
        <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Realme 5 Pro</h1>
          <p className="lead">qity:{countContext.keranjangState.jumlah}</p>
          <p className="lead">Rp {countContext.keranjangState.hargatotal}</p>
        <Button color="primary">Lanjutkan Pembayaran</Button>
        </Container>
      </Jumbotron>
    </Container>
    )
}

export default Tagihan;