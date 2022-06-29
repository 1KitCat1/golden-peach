import React from 'react'
import Header from '../components/header'
import styled from 'styled-components'
import Main from '../components/main'
import Sidebar from '../components/sidebar'
import InviteFriends from '../components/inviteFriends'
import { useRouter } from 'next/router'
import Link from 'next/link'

const getContent = (router, address) => {
    if(router.query.invite){
        return <InviteFriends walletAddress={address}/>
    }
    return <Main/>
}

const Dashboard = ({address}) => {
    const router = useRouter()
    return (
    <Wrapper>
        <Sidebar walletAddress={address}/>
        <MainContainer>
            <Header walletAddress={address}/>
            {getContent(router, address)}
        </MainContainer>
    </Wrapper>
    )
}

export default Dashboard;   

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: #0a0b0d;
    color: white;
    overflow:hidden;
`

const MainContainer = styled.div`
    flex: 1;
    background: linear-gradient(45deg, #1a1a1a, #000000);
`