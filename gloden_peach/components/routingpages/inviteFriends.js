import {useState, React} from 'react'
import styled from 'styled-components'
import { BiCopy } from 'react-icons/bi'
import { FaCheck } from 'react-icons/fa'

const InviteFriends = ({walletAddress}) => {
    const [copied, setCopied] = useState(false)

    return (
        <Wrapper>
          <ClipBoard>
            <ClipBoardLink>https://goldenpeach.com/{walletAddress}</ClipBoardLink>
                <CopyButton
                        onClick={() => {
                        navigator.clipboard.writeText("https://goldenpeach.com/" + walletAddress)
                        setCopied(true)
                        }}
                    >
                        {copied ? <FaCheck size={25} style={{ color: '#27ad75' }} /> : <BiCopy size={25}/>}
                </CopyButton>
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

const CopyButton = styled.div`
  cursor: pointer;
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
