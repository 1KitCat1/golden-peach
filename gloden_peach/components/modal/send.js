import React, { useState } from "react";
import styled  from "styled-components";

const Send = () => {
    const [amount, setAmount] = useState()
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