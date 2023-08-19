import React from 'react'
import TopBar from './TopBar';
import ContentWrapper from './ContentWrapper';
import Footer from './Footer';
import PageContainerStyled from './styled/PageContainerStyled';

export default () => {
    return (
        <PageContainerStyled>
            <TopBar />
            <ContentWrapper />
            <Footer />
        </PageContainerStyled>
    );
}
