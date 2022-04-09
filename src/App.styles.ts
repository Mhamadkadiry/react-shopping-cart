import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'

export const Wrapper = styled.div`
    margin: 40px;
    @media screen and (max-width:500px){
        margin: 20px;
    }
`;

export const StyledButton = styled(IconButton)`
position: fixed;
z-index: 100;
right: 20px;
top: 20px;
`