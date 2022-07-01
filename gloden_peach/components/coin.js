import styled from 'styled-components'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { ethers } from 'ethers'

const Coin = ({ coin, address }) => {
    const [balanceToken, setBalanceToken] = useState('Fetching...')
    const [balanceUsd, setBalanceUsd] = useState('Fetching...')
    
    useEffect(() => {
      const getBalance = async () => {
        const sdk = new ThirdwebSDK(
          new ethers.Wallet(
            process.env.NEXT_PUBLIC_METAMASK_KEY.toString(),
            ethers.getDefaultProvider('https://rpc-mumbai.maticvigil.com/'),
          ),
        )
        const currentToken = sdk.getTokenModule(coin.contractAddress)
        const currentBal = await currentToken.balanceOf(address.walletAddress.walletAddress)
        setBalanceUsd(parseInt(currentBal.displayValue) * coin.priceUsd)
        setBalanceToken(parseInt(currentBal.displayValue))
        
      }
      getBalance();
    })

    return (
        <Wrapper>
            <div>
                <div style={{ flex: 3 }}>
                <NameCol>
                    <CoinIcon>
                    <Image src={coin.logo} alt={coin.name} />
                    </CoinIcon>
                    <div>
                    <Primary>{coin.name}</Primary>
                    <Secondary>{coin.sign}</Secondary>
                    </div>
                </NameCol>
                </div>
                <div style={{ flex: 2 }}>
                <Primary>
                    {'$'}
                    {balanceUsd}
                </Primary>
                <Secondary>
                    {balanceToken} {coin.sign}
                </Secondary>
                </div>
                <div style={{ flex: 1 }}>
                <Primary>
                    {'$'}
                    {coin.priceUsd}
                </Primary>
                <div style={{ color: coin.change < 0 ? '#f0616d' : '#26ad75' }}>
                    {coin.change > 0 && '+'}
                    {coin.change}%
                </div>
                </div>
                <div style={{ flex: 1 }}>{coin.allocation}%</div>
                <div style={{ flex: 0 }}>
                <BsThreeDotsVertical />
                </div>
            </div>
        </Wrapper>
    )
}

export default Coin

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }
`

const NameCol = styled.div`
  display: flex;
  align-items: center;
`

const CoinIcon = styled.div`
  width: 1.8rem;
  margin-right: 1rem;
`

const Primary = styled.div`
  margin-bottom: 0.1rem;
`

const Secondary = styled.div`
  color: #8a919e;
  font-size: 0.8rem;
`