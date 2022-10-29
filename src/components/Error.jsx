import styled from '@emotion/styled'

const Texto = styled.div`
  background-color: #540300;
  padding: 20px;
  border-radius: 10px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  color: #FFF;
  text-transform: uppercase;
`

const Error = ({children}) => {
  return (
    <div>
      <Texto>
        {children}
      </Texto>
    </div>
  )
}

export default Error
