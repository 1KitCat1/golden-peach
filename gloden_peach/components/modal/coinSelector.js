import { useState } from 'react'
import styled from 'styled-components'
// import CoinItem from './CoinItem'

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
              key={token.name}
              token={token}
              sender={sender}
              selectedToken={selectedToken}
              setAction={setAction}
              setSelectedToken={setSelectedToken}
              sanityTokens={coins}
            />
          ))}
        </CoinList>
      </Wrapper>
    )
  }
  
  export default CoinSelector
  