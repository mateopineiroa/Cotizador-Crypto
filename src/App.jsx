import styled from '@emotion/styled'
import ImagenCripto from "./assets/imagen-criptos.png"
import Formulario from './components/Formulario'


const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color:#FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px; 
  margin-bottom: 50px;
  font-size: 34px;
  &::after {
    content:"";
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 6px auto 0 auto;
  }
`
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {                   /* active while width > 992px */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0px auto;
  display: block;
`

function App() {

  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt="Imagen ilustrativa de criptomonedas"/>
      <div>
        <Heading>Cotiza criptomonedas al instante!</Heading>
        <Formulario />
      </div>
    </Contenedor>
  )
}

export default App
