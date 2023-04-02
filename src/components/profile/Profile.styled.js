import styled from 'styled-components';

export const ContainerProfile = styled.div`
  padding: 30px 0;
  width: 400px;
  margin: 30px auto auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: gray;
  border: 10px solid rosybrown;
  border-radius: 20px;
  img {
    border-radius: 50%;
    height: 120px;
    width: 120px;
    border: 3px solid rosybrown;
    margin-bottom: 10px;
  }
`;

export const UserNameInfo = styled.div`
  p {
    margin: 0;
    font-weight: bold;
    color: #363636;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  gap: 15px;
`;

export const Name = styled.p`
  font-size: 20px;
`;
export const ListInfo = styled.ul`
  display: grid;
  flex-direction: row;
  list-style: none;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  margin: 30px auto auto auto;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  gap: 10px;
  border: 2px solid #363636;
  background-color: #c9c9c9;
  border-top: 2px solid #363636;
  font-weight: bold;
  border-radius: 20px;
`;