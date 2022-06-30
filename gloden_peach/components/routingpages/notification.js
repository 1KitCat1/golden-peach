import React from 'react'
import styled from 'styled-components'
import { coins } from '../../static/coins'
import CoinNotification from '../coinNotification'


const Notification = ({}) => {
    return (
        <Wrapper>
            <PortfolioTable>
            <Table>
                <div>
                    {coins.map(coin => (
                        <div key={coin.name}>
                            <CoinNotification coin={coin} />
                            <Divider />
                        </div>
                    ))}    
                    {coins.map(coin => (
                        <div key={coin.name}>
                            <CoinNotification coin={coin} />
                            <Divider />
                        </div>
                    ))}  
                    {coins.map(coin => (
                        <div key={coin.name}>
                            <CoinNotification coin={coin} />
                            <Divider />
                        </div>
                    ))} 
                    {coins.map(coin => (
                        <div key={coin.name}>
                            <CoinNotification coin={coin} />
                            <Divider />
                        </div>
                    ))}   
                </div>
            </Table>
        </PortfolioTable>
        </Wrapper>
    )
}

export default Notification

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    max-height: calc(100vh - 64px);
    overflow: hidden;
    overflow-y: scroll;
    :: -webkit-scrollbar {
    display: none;
    }
    & div {
    border-radius: 0.4rem;
    }
`

const PortfolioTable = styled.div`
    width: 100%;
    // margin-top: 1rem;
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