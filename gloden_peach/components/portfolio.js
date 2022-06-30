import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import styled from 'styled-components'
import { coins } from '../static/coins'
import Coin from './coin'
import BalanceChart from './balance'
import News from './newsbar'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { ethers } from 'ethers'

const getBalance = async(walletAddress) => {
  let totalBalance = 0
  const sdk = new ThirdwebSDK(
    new ethers.Wallet(
      process.env.NEXT_PUBLIC_METAMASK_KEY.toString(),
      ethers.getDefaultProvider('https://rpc-mumbai.maticvigil.com/'),
    ),
  )
  for(let i = 0; i < coins.length; i += 1){
    const currentToken = sdk.getTokenModule(coins[i].contractAddress)
    const currentBal = currentToken.balanceOf(walletAddress).displayValue;
    // console.log(currentBal, coins[i].name)
    totalBalance += parseInt(currentBal) * coins[i].priceUsd
  }
  return totalBalance
}

const Portfolio = (walletAddress) => {
  const [address] = useState(walletAddress)
  const [balance, setBalance] = useState('Fetching...')
  // setBalance(getBalance())
  
  useEffect(() => {
    const getBalance = async () => {
      let balance = 0;
      const sdk = new ThirdwebSDK(
        new ethers.Wallet(
          process.env.NEXT_PUBLIC_METAMASK_KEY.toString(),
          ethers.getDefaultProvider('https://rpc-mumbai.maticvigil.com/'),
        ),
      )
      for(let i = 0; i < coins.length; i += 1){
        const currentToken = sdk.getTokenModule(coins[i].contractAddress)
        const currentBal = await currentToken.balanceOf(address.walletAddress.walletAddress);
        console.log(currentBal, coins[i].name)
        balance += parseInt(currentBal.displayValue) * coins[i].priceUsd
      }
      setBalance("$" + balance)
    }
    getBalance();
  })
    return ( 
    <Wrapper>
      <Content>
        <Chart>
          <div>
            <Balance>
              <BalanceTitle>My Balance</BalanceTitle>
              <BalanceValue>
                {balance}
              </BalanceValue>
            </Balance>
          </div>
          <BalanceChart/>
        </Chart>
        <PortfolioTable>
            <TableItem>
                <Title>Your Assets</Title>
            </TableItem>
            <Divider/>
            <Table>
                <TableItem>
                    <TableRow>
                        <div style={{ flex: 3 }}>Name</div>
                        <div style={{ flex: 2 }}>Balance</div>
                        <div style={{ flex: 1 }}>Price</div>
                        <div style={{ flex: 1 }}>Allocation</div>
                        <div style={{ flex: 0, color: '#0a0b0d' }}>
                            <BsThreeDotsVertical />
                        </div>
                    </TableRow>
                </TableItem>
                <Divider/>
                <div>
                    {coins.map(coin => (
                        <div key={coin.name}>
                            <Coin coin={coin} />
                            {/* <h2>{coin.name}</h2> */}
                            <Divider />
                        </div>
                    ))}    
                </div>
            </Table>
        </PortfolioTable>
      </Content>
    </Wrapper>
    )
}

export default Portfolio

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 100%;
`

const Content = styled.div`
  width: 100%;
  max-width: 98%;
  padding: 2rem 1rem;
`

const Chart = styled.div`
  border: 1px solid #282b2f;
  padding: 1rem 2rem;
`

const Balance = styled.div``

const BalanceTitle = styled.div`
  color: #8a919e;
  font-size: 0.9rem;
`

const BalanceValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0;
`

const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`

const Table = styled.div`
  width: 100%;
`

const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > th {
    text-align: left;
  }
`

const TableItem = styled.div`
  padding: 1rem 2rem;
`

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`