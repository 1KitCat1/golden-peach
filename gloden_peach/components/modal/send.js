import { useEffect, useState } from "react";
import styled  from "styled-components";
import { FaWallet } from "react-icons/fa"
import Image from 'next/image'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { ethers } from 'ethers'
import { BigNumber } from "ethers";

const Send = ({
  selectedToken,
  setAction, 
  thirdWebTokens, 
  walletAddress
}) => {
    const [sender] = useState(walletAddress)
    const [balance, setBalance] = useState('Fetching...')
    const [amount, setAmount] = useState('')
    const [recipient, setRecipient] = useState('')

    const sdk = new ThirdwebSDK(
      new ethers.Wallet(
        process.env.NEXT_PUBLIC_METAMASK_KEY.toString(),
        ethers.getDefaultProvider('https://rpc-mumbai.maticvigil.com/'),
      ),
    )
    const currentToken = sdk.getTokenModule(selectedToken.contractAddress)

    useEffect(() => {
      const getBalance = async () => {
        const balance = await currentToken.balanceOf(sender)
        setBalance(balance.displayValue)
      }
  
      if (currentToken) {
        getBalance()
      }
    }, [currentToken])

    async function sendCrypto() {
      console.log('sending crypto')
  
      if (currentToken && amount && recipient) {
        setAction('transferring')
        const result = await currentToken.transfer(
          recipient,
          BigNumber.from(amount).mul(BigNumber.from(10).pow(18)),
        )
        console.log(result)
        setAction('transferred')
      } else {
        console.error('missing data')
      }
    }
    
    return (
    <Wrapper>
        <Amount> 
            <FlexInputContainer>
              <FlexInput
                placeholder='0'
                type='number'
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
              <span style={{ color: '#f6da00' }}>{selectedToken.sign}</span>
            </FlexInputContainer>
          
        <Warning style={{opacity: amount && '0'}}>
          Enter amount
        </Warning> 
        </Amount>
        <TransferLine>
            <Row>
                <FieldName>To</FieldName>
                <Icon><FaWallet/></Icon>
                <Recipient
                placeholder='Address'
                value={recipient}
                onChange={e => setRecipient(e.target.value)}
                />
            </Row>
            <Divider />
            <Row>
                <FieldName>Token</FieldName>
                <CoinSelectList>
                    <Icon>
                        <Image src={selectedToken.logo} alt={""}></Image>
                    </Icon>
                    <CoinName>{selectedToken.name}</CoinName>
                </CoinSelectList>
            </Row>
        </TransferLine>
        <Row>
            <SendButton onClick={() => {sendCrypto()}}>Send</SendButton>
        </Row>
        <Row>
          <BalanceTitle>{selectedToken.sign} Balance</BalanceTitle>
          <Balance>{balance} {selectedToken.sign}</Balance>
        </Row>
    </Wrapper>
    )
}

export default Send

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`
const Amount = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const FlexInputContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  & > span {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: #3773f5;
  }
`

const FlexInput = styled.input`
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  text-wrap: wrap;
  text-align: right;
  max-width: 45%;
  margin-right: 1rem;
  font-size: 4rem;
  color: gainsboro;
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

const Warning = styled.div`
  padding: 1rem 0 2rem 0;
  text-align: center;
  color: #8a919e;
`
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #8a919e;
  padding: 1rem 0;
  font-size: 1.2rem;
`
const FieldName = styled.div`
  flex: 0.5;
  padding-left: 2rem;
`
const Icon = styled.div`
  margin-right: 1rem;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;
  & > img {
    /* margin: -0.5rem 1rem; */
    height: 120%;
    width: 120%;
    object-fit: cover;
  }
`
const Recipient = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  text-wrap: wrap;
  margin-right: 0.5rem;
`

const SendButton = styled.button`
  color: 1a1b1d;
  width: 100%;
  background-color: #f6da00;
  padding: 1rem;
  text-align: center;
  border-radius: 0.4rem;
  font-size: 1.25rem;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: #f0ca00;
  }
`
const TransferLine = styled.div`
  border: 1px solid #282b2f;
  border-radius: 0.4rem;
`
const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`
const CoinSelectList = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`
const CoinName = styled.div`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  text-wrap: wrap;
  margin-right: 0.5rem;
`

const BalanceTitle = styled.div``

const Balance = styled.div``