import React from 'react';
import './Resume1.css';
import pic from './Me.jpeg';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import GitHubIcon from '@mui/icons-material/GitHub';
import { GrLinkedin } from "react-icons/gr";
import { MdFiberManualRecord } from "react-icons/md";

import { GiCricketBat } from "react-icons/gi";



export default function Resume1() {
  return <React.Fragment>
         <div className="resume_wrapper">
	<div className="resume_left">
  <div className="name">Amit <br /><br />Mandaliya</div>
  <br />
				<div className="role">FASHION BLOGER</div>
        <br />
	
		<div className="resume_image">
			<img src={pic} alt="Resume_image" />
		</div>
		<div className="resume_bottom">
	
			<div className="resume_item resume_contact">
				<div className="resume_title">Contact</div>
				<hr />
				<br />
				<div className="resume_info">
                 
				<div className="resume_subinfo"><LocalPhoneIcon  fontSize="5px"/> &nbsp;&nbsp; +62 000 222 333</div>
				</div>
				<div className="resume_info">
					
	<br />	<div className="resume_subinfo">	<EmailIcon  fontSize="5px"/>&nbsp; &nbsp;&nbsp;rosiejack@gmail.com</div>
				</div><br />
				<div className="resume_subinfo"><GitHubIcon  fontSize="5px"/> &nbsp; &nbsp;Amitnaresh29</div> <br />
				<div className="resume_subinfo">< GrLinkedin   Size="5px"/> &nbsp; &nbsp;Amit_mandaliya29</div>
			
			</div>
      <div classNameName="interests-container container-block">
        <br/>
                <h2> SKILLS</h2><br/>
				<hr  style={{color : "gray"}}/><br/>
         
                <ul>
                    <li><MdFiberManualRecord fontSize='10px' />&nbsp;&nbsp;Reading</li><br/>
                    <li><MdFiberManualRecord fontSize='10px' />&nbsp;&nbsp;Snowboarding</li><br/>
                    <li><MdFiberManualRecord fontSize='10px'/>&nbsp;&nbsp;Cooking</li><br/>
                    <li><MdFiberManualRecord fontSize='10px'/>&nbsp;&nbsp;Dance</li><br/>
                    <li><MdFiberManualRecord fontSize='10px' />&nbsp;&nbsp;English</li><br/>
                    <li><MdFiberManualRecord fontSize='10px'/>&nbsp;&nbsp;French</li><br/>
                    <li><MdFiberManualRecord fontSize='10px' />&nbsp;&nbsp;Coding</li><br/>

                  </ul>
				  <br />
				  <br />
				  <h2>BUSINESS SKILLS</h2><br/>
				<hr  style={{color : "gray"}}/><br/>
				<ul>
				<li><MdFiberManualRecord fontSize='10px' />&nbsp;&nbsp;Marketing</li><br/>
                    <li><MdFiberManualRecord fontSize='10px' />&nbsp;&nbsp;Telly</li><br/>
                    <li><MdFiberManualRecord fontSize='10px'/>&nbsp;&nbsp;Report Building </li><br/>
                    <li><MdFiberManualRecord fontSize='10px'/>&nbsp;&nbsp;Self Awarness</li><br/>
                    <li><MdFiberManualRecord fontSize='10px' />&nbsp;&nbsp;Leading</li><br/>
                    <li><MdFiberManualRecord fontSize='10px'/>&nbsp;&nbsp;French</li><br/>
                    <li><MdFiberManualRecord fontSize='10px' />&nbsp;&nbsp;Caching</li><br/>



				</ul>

         
            
            </div>
		</div>
	</div>
	<div className="resume_right">
	
		<div className="resume_item resume_education">
			<div className="resume_title">Education</div>
			<hr /><br/>
         
			<div className="resume_info">
				<div className="resume_data">
					<div className="year">2000 - 2010</div>
					<div className="content">
						<p>Title</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div className="resume_data">
					<div className="year">2010 - 2013</div>
					<div className="content">
						<p>Title</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div className="resume_data">
					<div className="year">2013 - 2015</div>
					<div className="content">
						<p>Title</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
			</div>
		</div>
		<div className="resume_item resume_experience">
			<div className="resume_title">Experience</div>
      <hr />
			<div className="resume_info">
				<div className="resume_data">
					<div className="year">2000 - 2010</div>
					<div className="content">
						<p>Title</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div className="resume_data">
					<div className="year">2010 - 2013</div>
					<div className="content">
						<p>Title</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div className="resume_data">
					<div className="year">2013 - 2015</div>
					<div className="content">
						<p>Title</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div className="resume_data">
					<div className="year">2013 - 2015</div>
					<div className="content">
						<p>Title</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div className="resume_data">
					<div className="year">2013 - 2015</div>
					<div className="content">
						<p>Title</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
			</div>
		</div>
		<div className="resume_item resmue_interests">
			<div className="resume_title">Interests</div>
			<hr  style={{color : "gray"}}/><br/>
			<ul>
           <li> <SportsVolleyballIcon fontSize='10px'/> &nbsp;VolleyBall</li><br />
		   <li><GiCricketBat fontSize='15px'/> &nbsp;Cricket </li>

			</ul>
         
			
		</div>
	</div>
</div>
    </React.Fragment>;
};
