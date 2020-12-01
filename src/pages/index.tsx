import {FiShoppingCart} from 'react-icons/fi'

import {Main, Header, Container, CardProduct}  from '../styles/Home';

export default function Home() {
  return (
    <Main>
      <Header>
        <h1>Wow Commerce</h1>
        <input type="text" placeholder="Search Product"/>
      </Header>

      <Container>
        <CardProduct>
          <img 
            src="https://cdn.dooca.store/292/products/camiseta-one-piece-luffy-aberta.jpg?v=1585747520" 
            alt="Camisa One Piece"
          />

          <div>
            <p>
              Product Name
            </p>

            <strong>
              R$ 150,00
            </strong>

            <div>
              <button>
                Comprar Agora
              </button>
              
              <button>
                <FiShoppingCart />
              </button>
            </div>
          </div>
        </CardProduct>
      </Container>
    </Main>
  )
}
