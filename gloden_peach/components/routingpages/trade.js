import React from 'react'
import styled from 'styled-components'
import { BsClipboard, BsThreeDotsVertical } from 'react-icons/bs'
import Coin from '../coin'
import { coins } from '../../static/coins'

const Trade = () => {
  
    return (
        <Wrapper>
          <PortfolioTable>
            <TableItem>
                <Title>Your Assets</Title>
            </TableItem>
            <Divider/>
            <Table>
                <TableItem>
                    <TableRow>
                        <div style={{ flex: 3 }}>Name</div>
                        <div style={{ flex: 2 }}>Balance</div>
                        <div style={{ flex: 1 }}>Price</div>
                        <div style={{ flex: 1 }}>Allocation</div>
                        <div style={{ flex: 0, color: '#0a0b0d' }}>
                            <BsThreeDotsVertical />
                        </div>
                    </TableRow>
                </TableItem>
                <Divider/>
                <div>
                    {coins.map(coin => (
                        <div key={coin.name}>
                            <Coin coin={coin} />
                            {/* <h2>{coin.name}</h2> */}
                            <Divider />
                        </div>
                    ))}    
                </div>
            </Table>
        </PortfolioTable>
        </Wrapper>
    )
}

export default Trade

const Wrapper = styled.div`
    display: flex;
    max-height: calc(100vh - 64px);
    overflow: hidden;
    & div {
        border-radius: 0.4rem;
    }
    flex: 1;
    width: 100%;
    justify-content: center;
    height: 100%;
`

const PortfolioTable = styled.div`
  width: 98%;
  margin-top: 1rem;
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

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`