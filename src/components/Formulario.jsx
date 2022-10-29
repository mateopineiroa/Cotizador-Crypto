import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import {monedas} from '../data/monedas'
import Error from './Error'

const InputSubmit = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 30px;
  color: #FFF;
  text-transform: uppercase;
  font-weight: 700;
  
  font-size: 20px;
  font-style: "Lato", sans-serif;
  background-color: #9497FF;
  border: 0px;
  border-radius: 10px;
  transition: background-color .3s ease;
  &:hover {
    cursor: pointer;
    background-color: #7A7DFE
  }

`


const Formulario = () => {
  const [ criptos, setCriptos ] = useState([])
  const [ error, setError ] = useState(false)
  useEffect(() => {               /* Calls api when Formulario component is ready */
    const consultarAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      console.log(resultado.Data)
      const arrayCriptos = resultado.Data.map( (element) => ({id: element.CoinInfo.Name, nombre: element.CoinInfo.FullName}) )
      console.log("El arreglo es:", arrayCriptos)
      setCriptos(arrayCriptos)
    }
    consultarAPI()
  }, [])

  /* Si hago simplemente useSelectMonedas(), se ejecuta la funcion del componente del hook.   */
  const [ moneda, SelectMonedas, Testing ] = useSelectMonedas("Elige tu moneda", monedas)      /* It asigns names in order of the useSelectMonedas's return's array. NOT OBJECT DESTRUCTURING! */
  const [ criptomoneda, SelectCriptos ] = useSelectMonedas("Elige tu cripto", criptos)
  //Testing()

  const handleSubmit = e => {
    e.preventDefault()
    if ([ moneda, criptomoneda].includes("")) {
      console.log("ERROR")
      setError(true)
    } else {
      setError(false)
    }
  }

  return (
    <>
    {error && <Error>Hay que rellenar todos los campos flaquito <u>no te hagas el pillo por que te emboco</u> (de chill 🤙 )</Error>}
    <form onSubmit={handleSubmit}>
      <SelectMonedas />                           {/* Also can be a function {SelectMonedas()} */}
      <SelectCriptos />
      
      <InputSubmit type="submit" value="Cotizar" />
    </form>
    </>
  )
}

export default Formulario
