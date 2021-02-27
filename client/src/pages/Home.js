import React from "react";
import Header from "../components/Header/Header";
import SubscribeBar from "../components/SubscribeBar/SubscribeBar";
// import InfoSection from "../components/infoSection";
import ParallaxSection from "../components/ParallaxSection/ParallaxSection";
import Footer from "../components/Footer/Footer";
import CardSection from "../components/CardSection/CardSection";
import CardContent from '../components/CardSection/CardContent'
import BottomSecHome from "../components/BottomSec/BottomSecHome";
import ParallaxContent from '../components/ParallaxSection/ParallaxContent'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar/Navbar';

function home() {
  return (
    <div>
    <Navbar />
    <Header />
    <ParallaxSection
    Header = {ParallaxContent[0].Header}
    Paragraph = {ParallaxContent[0].Paragraph}
    ButtonText = {ParallaxContent[0].ButtonText}
    ButtonIcon = {ParallaxContent[0].ButtonIcon}
    />
    <CardSection/>
    <BottomSecHome/>
    <SubscribeBar />
    <Footer />
    </div>
  );
}

export default home;