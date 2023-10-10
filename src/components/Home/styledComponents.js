import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
export const RulesView = styled.div`
  margin-top: auto;
  align-self: flex-end;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`
export const PopupView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  height: 70vh;
  @media screen and (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
`
export const PopupImage = styled.img`
  width: 100%;
  height: 90%;
  margin-top: auto;
`
