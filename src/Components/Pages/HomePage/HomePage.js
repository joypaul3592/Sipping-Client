import React from 'react';
import Card from './Card/Card';
import CommonWay from './CommonWay/CommonWay';
import GetStart from './GetStart/GetStart';
import Hero from './Hero/Hero';
import HowToWork from './HowToWork/HowToWork';
import LoockingFor from './LoockingFor/LoockingFor';
import Quality from './Quality/Quality';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <Card></Card>
            <CommonWay></CommonWay>
            <HowToWork></HowToWork>
            <Quality></Quality>
            <LoockingFor></LoockingFor>
            <GetStart></GetStart>
        </div>
    );
};

export default HomePage;