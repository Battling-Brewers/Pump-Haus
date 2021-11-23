import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Navbar = () => {

    return (
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input placeholder="Search" />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>PUMP HAUS</Logo>
                </Center>
                <Right>
                    <MenuItem>SIGNUP</MenuItem>
                    <MenuItem>LOGIN</MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;