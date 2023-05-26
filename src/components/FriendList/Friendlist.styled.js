import styled from 'styled-components';

export const Status = styled.span`
    padding-left: 10px;
    margin-left: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => (props.stat ? 'green' : 'red')};
`