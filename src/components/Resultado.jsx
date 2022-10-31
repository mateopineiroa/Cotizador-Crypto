import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
  width:100%;
  font-family: "Lato", sans-serif;
  /* padding: 20px; */
  margin-top: 20px;
  border-radius: 15px;
  display:flex;
  align-items: center;
  gap: 1rem;
`
const Texto = styled.p`
  color: #FFF;
  font-size: 18px;
  span {
    font-weight: 700;
  }
`
const Precio = styled.p`
  color: #FFF;
  font-size: 24px;
  span {
    font-weight: 700;
  }
`

const Imagen = styled.img`
  display: block;
  width: 120px;
`

const Resultado = ({resultado}) => {
  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Contenedor>
      <Imagen src={"https://cryptocompare.com/"+IMAGEURL} alt="imagen crypto" />
      <div>

        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>El precio mas alto del dia es de: <span>{HIGHDAY}</span></Texto>
        <Texto>El precio mas bajo del dia es de: <span>{LOWDAY}</span></Texto>
        <Texto>La variacion en las ultimas 24hs es: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última actualizacion: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Contenedor>
  )
}

export default Resultado
