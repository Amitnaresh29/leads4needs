import React from 'react';
import './Resume1.css';
 import pic from './Me.jpeg';
   import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
  import EmailIcon from '@mui/icons-material/Email';
  import GitHubIcon from '@mui/icons-material/GitHub';
 //import { GrLinkedin } from "react-icons/gr";
//import { SiInstagram } from "react-icons/si";
//import { SiFacebook } from "react-icons/si";
// import { SiTwitter } from "react-icons/si";
 import { Si1001Tracklists} from "react-icons/si";
import { GiCricketBat} from "react-icons/gi";
import { MdFiberManualRecord } from "react-icons/md";

 import { GiVolleyballBall} from "react-icons/gi";



export default function Resume1() {
  return <React.Fragment>
             <div className="resume_wrapper">
	<div className="resume_left">
  
	
		<div className="resume_image">
			<img src={pic} alt="Resume_image" />
		</div><br/>
		<div className="resume_bottom">
	
			
				<hr /><br/>
				<h2> EDUCATION </h2><br/>
				<p className='etitle'> ENTER YOUR DEGREE NAME</p>
				<>University Name/ Location /<br />2014-15 </><br /><br />
				<p className='etitle'> ENTER YOUR DEGREE NAME</p>
				<>University Name/ Location /<br />2014-15 </><br /><br />
				<p className='etitle'> ENTER YOUR DEGREE NAME</p>
				<>University Name/ Location /<br />2014-15 </><br /><br />
   

      <div classNameName="interests-container container-block">
        <br/>
		<hr />
         
            <h2> SKILLS</h2><br/>
				
         
                <ul>
                    <li><MdFiberManualRecord fontSize='10px' />&nbsp;&nbsp;Reading</li><br/>
                    <li><MdFiberManualRecord fontSize='10px' />&nbsp;&nbsp;Snowboarding</li><br/>
                    <li><MdFiberManualRecord fontSize='10px'/>&nbsp;&nbsp;Cooking</li><br/>
                    <li><MdFiberManualRecord fontSize='10px'/>&nbsp;&nbsp;Dance</li><br/>
                    <li><MdFiberManualRecord fontSize='10px' />&nbsp;&nbsp;English</li><br/>
                    <li><MdFiberManualRecord fontSize='10px'/>&nbsp;&nbsp;French</li><br/>
                    <li><MdFiberManualRecord fontSize='10px' />&nbsp;&nbsp;Coding</li><br/>

                  </ul>
				  <hr />
				  
				  <h2> INTERESTS</h2><br/>
			<Si1001Tracklists fontSize='35px'/> 	&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;     
			<GiCricketBat fontSize='35px' /> &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  
			<GiVolleyballBall fontSize='35px'/>
         
            
            </div>
		</div>
	</div>
	<div className="resume_right">
    <div className='vl'>
	<div className="name"><b style={{letterSpacing : '2px'}}>&nbsp;&nbsp;LUES </b><b style={{color : 'gray', letterSpacing :'2px'}}>BROKER </b></div>
  <br />
				<div className="role">&nbsp;&nbsp;&nbsp;&nbsp;GRAPHIC DESIGNER</div>
        
        <div className="resume_item resume_contact">
					
				<div className="resume_info">
                 
				<div className="resume_subinfo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<LocalPhoneIcon  fontSize="5px"/> &nbsp;&nbsp; +62 000 222 333</div>
				</div>
				<div className="resume_info">
					
	<br />	<div className="resume_subinfo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<EmailIcon  fontSize="5px"/>&nbsp; &nbsp;&nbsp;rosiejack@gmail.com</div>
				</div><br />
				<div className="resume_subinfo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GitHubIcon  fontSize="5px"/> &nbsp; &nbsp;Amitnaresh29</div><br/>
					</div>
			</div>
		<hr /><br/>
		<div className='vla' >
		<div className="rolea">	 PROFILE </div>
					<br />
					
	
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	</p>
					

   <br /><br/>
		
	<hr  />

		
	
		<div className="resume_item resume_experience">
			<div className="resume_info">
				<div className="resume_data">
				<div className='rolea' >WORK EXPERIENCE</div><br/>

					<div className="content"><br/>
						<p className='rolea'>POSITION TITLE HERE <br/> Company Name/Location test here/2014-2015</p>
						<p ><MdFiberManualRecord/> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						<MdFiberManualRecord/>  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur.<br></br>
						<MdFiberManualRecord/>  adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					    
					</div>
				</div>
				<div className="resume_data">
					<div className="content"><br/>
					<p className='rolea'>POSITION TITLE HERE <br />Company Name/Location test here/2014-2015</p>
					<p ><MdFiberManualRecord/> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						<MdFiberManualRecord/>  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur.<br></br>
						<MdFiberManualRecord/>  adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					    	</div>
				</div>
				<div className="resume_data">
						<div className="content"><br/>
						<p className='rolea'>POSITION TITLE HERE <br />Company Name/Location test here/2014-2015</p>
						<p ><MdFiberManualRecord/> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						<MdFiberManualRecord/>  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur.<br></br>
						<MdFiberManualRecord/>  adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					    	</div>
				</div>
				
				</div>
			</div>
		
		
	</div>
	</div>
</div>
        </React.Fragment>;
};
