import React from 'react'
import styled from 'styled-components'
import { BsClipboard } from 'react-icons/bs'

const InviteFriends = ({walletAddress}) => {

    return (
        <Wrapper>
          <ClipBoard>
            <ClipBoardLink>https://goldenpeach.com/{walletAddress}</ClipBoardLink>
            <Button onClick={() => {navigator.clipboard.writeText(("https://goldenpeach.com/" + walletAddress))}}><BsClipboard size={25}/></Button>
          </ClipBoard>
        </Wrapper>
    )
}

export default InviteFriends

const Wrapper = styled.div`
    display: flex;
    max-height: calc(100vh - 64px);
    overflow: hidden;
    & div {
        border-radius: 0.4rem;
    }
`

const Button = styled.div`
    cursor: pointer;
    display: flex;
    max-height: calc(100vh - 64px);
    overflow: hidden;
    & div {
        border-radius: 0.4rem;
    }
`

const ClipBoard = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const ClipBoardLink = styled.div`
    text-align:center;
    padding: auto 0;
    margin-right: 12px;
    padding: 4px;
    font-size: 18px;
    border: 2px solid #f6da00;
`
