import React from 'react'
import MainContent from '../../components/Main/Content';
import MainHeader from '../../components/Main/Header';
import MainInfo from '../../components/Main/Info';

export default function Board() {
    return (
        <div className="main">
            <MainHeader />
            <h3>Main Board</h3>
            <MainInfo />
            <MainContent />
        </div>
    );
}
