import styled from 'styled-components';

export const Container = styled.nav`
  height: 40px;
  background: #4a90e2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  input {
    height: 25px;
    width: 300px;
    border: 1px solid #eee;
    border-radius: 2px;
    font-size: 16px;
  }

  svg {
    margin-right: 10px;
    color: #fff;
  }
`;
export const Options = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;

  li {
    color: #fff;
    margin-right: 20px;
    padding-right: 10px;
    border-right: 1px solid #666;
  }
`;
