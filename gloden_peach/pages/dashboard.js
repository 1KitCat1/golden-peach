import React, { useEffect, useState } from "react";
import Header from '../components/header'
import styled from 'styled-components'
import Main from '../components/main'
import Sidebar from '../components/sidebar'
import InviteFriends from '../components/routingpages/inviteFriends'
import Notification from '../components/routingpages/notification'
import ForYou from '../components/routingpages/foryou'
import { useRouter } from 'next/router'
import { ThirdwebSDK } from '@3rdweb/sdk'
import Pay from '../components/routingpages/pay'
import Trade from '../components/routingpages/trade'
import { coins } from '../static/coins'

const getContent = (router, address) => {
    if(router.query.page == 'invite'){
        return <InviteFriends walletAddress={address}/>
    } else if(router.query.page == 'foryou'){
        return <ForYou/>
    } else if(router.query.page == 'notification'){
        return <Notification/>
    } else if(router.query.page == 'pay'){
        return <Pay/>
    } else if(router.query.page == 'trade'){
        return <Trade/>
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