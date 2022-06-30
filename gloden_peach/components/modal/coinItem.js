import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'
import Image from 'next/image'
import { ethers } from 'ethers'
import { ThirdwebSDK } from '@3rdweb/sdk'

const CoinItem = ({
    token,
    setAction,
    selectedToken,
    setSelectedToken,
    walletAddress,
  }) => {
    const [balance, setBalance] = useState('Fetching...')

    const sdk = new ThirdwebSDK(
        new ethers.Wallet(
          process.env.NEXT_PUBLIC_METAMASK_KEY.toString(),
          ethers.getDefaultProvider('https://rpc-mumbai.maticvigil.com/'),
        ),
    )

    useEffect(() => {
        const getBalance = async () => {
          const balance = await sdk.getTokenModule(token.contractAddress).balanceOf(walletAddress)
          setBalance(balance.displayValue)
        }

        getBalance()
        
      }, [])
    
    return (
      <Wrapper
        style={{
          backgroundColor: selectedToken.name == token.name && '#141519',
        }}
        onClick={() => {
          setSelectedToken(token)
          setAction('send')
        }}
      >
        <Main>
          <Icon>
            <Image src={token.logo} />
          </Icon>
          <NameDetails>
            <Name>{token.name}</Name>
            <Symbol>{token.sign}</Symbol>
          </NameDetails>
        </Main>
        <Balance>
           {balance} {token.sign}
        </Balance>
        <IsSelected>
          {Boolean(selectedToken.contractAddress == token.contractAddress) && (
            <FaCheck />
          )}
        </IsSelected>
      </Wrapper> 
    )
  }

export default CoinItem

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.3rem;
  cursor: pointer;
  &:hover {
    background-color: #0e0f14;
  }
`

const Main = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Icon = styled.div`
  margin-right: 1rem;
  height: 1.8rem;
  width: 1.8rem;
  overflow: hidden;
  display: grid;
  place-items: center;
  & > img {
    /* margin: -0.5rem 1rem; */
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const NameDetails = styled.div``

const Name = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
`

const Symbol = styled.div`
  color: #888f9b;
  font-size: 0.8rem;
`

const Balance = styled.div``

const IsSelected = styled.div`
  margin-left: 0.5rem;
  color: #3773f5;
`