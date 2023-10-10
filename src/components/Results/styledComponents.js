import styled from 'styled-components'

export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 400px;
  margin-top: 50px;
  @media screen and (max-width: 576px) {
    width: 260px;
    height: 260px;
    margin-left: 15px;
  }
`
export const GameButton = styled.button`
  width: 150px;
  height: 150px;
  background-color: transparent;
  border: none;
  outline: none;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
    margin-top: 0px;
    margin-right: 20px;
  }
`
export const GameImage = styled.img`
  width: 100px;
  height: 100px;
  @media screen and (min-width: 578px) {
    width: 150px;
    height: 150px;
  }
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40px;
  @media screen and (max-width: 576px) {
    width: 30%;
  }
`
export const ResultName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 26px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const ResultText = styled.p`
  color: #ffffff;
  font-size: 26px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
