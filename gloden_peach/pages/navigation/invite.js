import React from 'react'
import Header from '../../components/header'
import styled from 'styled-components'
import Sidebar from '../../components/sidebar'
import { useRouter } from 'next/router'
import InviteFriends from '../../components/routingpages/inviteFriends'

const Invite = () => {
    const [copied, setCopied] = useState(false)

    const router = useRouter();
    const data = router.query;
    return (
    <Wrapper>
        <Sidebar walletAddress={data.walletAddress}/>
        <MainContainer>
            <Header walletAddress={data.walletAddress}/>
            <InviteFriends walletAddress={data.walletAddress}/>
        </MainContainer>
    </Wrapper>
    )
}

export default Invite;   

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: #0a0b0d;
    color: white;
    overflow: hidden;
`

const MainContainer = styled.div`
    flex: 1;
`