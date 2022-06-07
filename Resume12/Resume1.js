import React from 'react';
import './Resume1.css';
import pic from './Me.jpeg';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { GrLinkedin } from "react-icons/gr";
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { Si1001Tracklists} from "react-icons/si";
import { GiCricketBat} from "react-icons/gi";
import { GiVolleyballBall} from "react-icons/gi";



export default function Resume1() {
  return <React.Fragment>
         <div className="resume_wrapper">
	<div className="resume_left">
  	<div className="resume_image">
			<img src={pic} alt="Resume_image" />
		</div>
		<div className="resume_bottom">
	
			<div className="resume_item resume_contact">
				<div className="resume_title">Contact</div>
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
				<hr  style={{color : "gray"}}/><br/>
				<h2> EDUCATION </h2><br/>
				<p className='etitle'> ENTER YOUR DEGREE NAME</p>
				<>University Name/ Location /<br />2014-15 </><br /><br />
				<p className='etitle'> ENTER YOUR DEGREE NAME</p>
				<>University Name/ Location /<br />2014-15 </><br /><br />
				<p className='etitle'> ENTER YOUR DEGREE NAME</p>
				<>University Name/ Location /<br />2014-15 </><br /><br />


      <div classNameName="interests-container container-block">
        <br/>
                <h2> SKILLS</h2><br/>
			<br/>
         
              HTML<div class="w3-light-grey">
  <div class="w3-black" style={{height:"10px",width:"75%"}}></div>
</div>  <br/>       
                 
              PHP<div class="w3-light-grey">
  <div class="w3-black" style={{height:"10px",width:"90%"}}></div>
</div><br/>
               
              REACT<div class="w3-light-grey">
  <div class="w3-black" style={{height:"10px",width:"85%"}}></div>
</div><br/>
              
ANGULAR<div class="w3-light-grey">
  <div class="w3-black" style={{height:"10px",width:"55%"}}></div>
</div> <br/>

                  
				  <br />
			<hr/>
			<h2> INTERESTS</h2><br/>
			<Si1001Tracklists fontSize='35px'/> 	&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;     
			<GiCricketBat fontSize='35px' /> &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  
			<GiVolleyballBall fontSize='35px'/>
         
            
            </div>
		</div>
	</div>
	<div className="resume_right">
	<div className="name">ROSEN  <br /><br />ANDERSON</div>
  <br />
				<div className="role">GRAPHIC DESIGNER</div>
        <br />
		<hr  style={{color : "gray"}}/><br/>
		
		<div className="rolea">	PERSONAL PROFILE </div>
					<br />
					
	
	<>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	</>
					

   <br /><br/>
		
	<hr  style={{color : "gray"}}/>

		
	
		<div className="resume_item resume_experience">
			<div className="resume_info">
				<div className="resume_data">
				<div className='rolea' >WORK EXPERIENCE</div><br/>

					<div className="content"><br/>
						<p className='rolea'>POSITION TITLE HERE<p className='roleaa'>Company Name/Location test here/2014-2015</p></p>
						<p >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					    
					</div>
				</div>
				<div className="resume_data">
					<div className="content"><br/>
					<p className='rolea'>POSITION TITLE HERE<p className='roleaa'>Company Name/Location test here/2014-2015</p></p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div className="resume_data">
						<div className="content"><br/>
						<p className='rolea'>POSITION TITLE HERE<p className='roleaa'>Company Name/Location test here/2014-2015</p></p>
					
					

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				
				
			</div>
		</div>
			<hr  style={{color : "gray"}}/><br/>
		<div className="resume_item resmue_interests">
			<div className="resume_title">Social </div>
			<br/>
			<ul>
           <li><SiInstagram fontSize='medium'/> &nbsp;johndalton</li><br />
		   <li><SiFacebook fontSize='medium' /> &nbsp;johnamela </li><br />
		   <li><SiTwitter fontSize='medium' /> &nbsp;johnroy </li>

			</ul>
         
			
		</div>
	</div>
</div>
    </React.Fragment>;
};
