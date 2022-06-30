import { useState } from 'react'
import styled from 'styled-components'
import CoinItem from './CoinItem'

const CoinSelector = ({
    setAction,
    selectedToken,
    setSelectedToken,
    walletAddress,
    coins,
  }) => {
    const [sender] = useState(walletAddress)
  
    return (
      <Wrapper>
        <Title>Select asset</Title>
        <CoinList>
          {coins.map(token => (
            <CoinItem
              token={token}
              sender={sender}
              setAction={setAction}
              selectedToken={selectedToken}
              setSelectedToken={setSelectedToken}
              coins={coins}
            />
          ))}
        </CoinList>
      </Wrapper>
    )
  }
  
export default CoinSelector

const Wrapper = styled.div``

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`
const CoinList = styled.div`
  display: flex;
  flex-direction: column;
`
  