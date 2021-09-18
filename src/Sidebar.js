import React from 'react';
import "./sidebar.css";
import LanguageIcon from '@material-ui/icons/Language';
import SecurityIcon from '@material-ui/icons/Security';
import FlagIcon from '@material-ui/icons/Flag';
import PublicIcon from '@material-ui/icons/Public';
import RoomIcon from '@material-ui/icons/Room';
import BusinessIcon from '@material-ui/icons/Business';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import TheatersIcon from '@material-ui/icons/Theaters';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';


function Sidebar() {

    const[{user}] = useStateValue();

    return (
        <div className="sidebar">

                <p className="userName">
                hello , {user?.displayName}
                </p>

            <div className="sidebar_up">
                <ul>
               <Link to="/topStories" style={{ textDecoration: 'none' }} className="active_link"> <li> <LanguageIcon /> <span >Top Stories</span> </li>  </Link>
               <Link to="/covid" style={{ textDecoration: 'none' }}>  <li><SecurityIcon /> <span>COVID-19</span> </li> </Link>
                </ul>
            </div>

            <div className="sidebar_mid">
                <ul>
                <Link to="/india" style={{ textDecoration: 'none' , fontSize:'3rem' }}>  <li><FlagIcon /> <span>India</span> </li> </Link>
                <Link to="/world" style={{ textDecoration: 'none' }}>   <li><PublicIcon /> <span>World</span> </li> </Link>
                <Link to="/localnews" style={{ textDecoration: 'none' }}>   <li><RoomIcon /> <span>Your local News</span> </li> </Link>
                <Link to="/business" style={{ textDecoration: 'none' }}>   <li><BusinessIcon /> <span>Business</span> </li> </Link>
                <Link to="/technology" style={{ textDecoration: 'none' }}>   <li><PhoneAndroidIcon /> <span>Technology</span> </li> </Link>
                <Link to="/entertainment" style={{ textDecoration: 'none' }}>   <li><TheatersIcon /> <span>Entertainment</span> </li> </Link>
                <Link to="/sports" style={{ textDecoration: 'none' }}>   <li><DirectionsBikeIcon /> <span>Sports</span> </li> </Link>
                <Link to="/science" style={{ textDecoration: 'none' }}>   <li> <i class="fas fa-flask"></i> <span>Science</span> </li> </Link>
                <Link to="/health" style={{ textDecoration: 'none' }}>   <li><FitnessCenterIcon /> <span>Health</span> </li> </Link>

                </ul>
            </div>


            <p className="footer_data"> 2021 &copy; Lavlesh Singh | All rights reserved  </p>
                     

        </div>
    )
}

export default Sidebar
