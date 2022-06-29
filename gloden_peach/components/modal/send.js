import React, { useState } from "react";
import styled  from "styled-components";
import { FaWallet } from "react-icons/fa"
import Image from "next/image"
import PeachLogo from '../../crypto_assets/peach1.png'

const Send = () => {
    const [amount, setAmount] = useState()
    const [recipientAddress, setRecipientAddress] = useState()
    const imgageA = '../../crypto_assets/peach1.png'
    return (
    <Wrapper>
        <Warning style={{opacity: amount && '0'}}>
            Enter amount
        </Warning> 
        <Amount> 
            <FlexInputContainer>
                <FlexInput 
                    type='number'
                    placeholder="0"
                    value={amount} 
                    onChange={val => setAmount(val.target.value)}
                />
                <span>ETH</span>
            </FlexInputContainer>
        </Amount>
        <TransferLine>
            <Row>
                <FieldName>To</FieldName>
                <Icon><FaWallet/></Icon>
                <RecipientAddress
                placeholder='Address'
                value={recipientAddress}
                onChange={val => setRecipientAddress(val.target.value)}
                />
            </Row>
            <Divider />
            <Row>
                <FieldName>Token</FieldName>
                <CoinSelectList>
                    <Icon>
                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUY--qh08i0znO3w4uwOuwIr2f1PqVFpTuA&usqp=CAU'} alt={""}></img>
                    </Icon>
                    <CoinName>Bitcoin</CoinName>
                </CoinSelectList>
            </Row>
        </TransferLine>
        <Row>
            <SendButton>Send</SendButton>
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
    overflow: hidden;
`
const Amount = styled.div`
    display: flex;
    flex-direction: cloumn;
    flex: 1;
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
  max-width: 18%;
  margin-right: 0.2rem;
  font-size: 4rem;
  color: #3773f5;
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
const RecipientAddress = styled.input`
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