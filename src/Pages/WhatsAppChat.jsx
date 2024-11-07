import React from 'react';
import Header from '../Components/Header';
import CommentBox from '../Components/CommentBox';
import MessageBoxFooter from '../Components/MessageBoxFooter';
import NameBox from '../Components/NameBox';

const WhatsAppChat = () => {
    return (
        <>

            <Header />
            <NameBox />
            <CommentBox />
            <MessageBoxFooter />
        </>
    );
};

export default WhatsAppChat;