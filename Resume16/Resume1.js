import React from 'react';
import './Resume1.css';
import pic from './images.jpg';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { GrLinkedin } from "react-icons/gr";
import { SiInstagram, SiFacebook , Si1001Tracklists } from "react-icons/si";
import { GiCricketBat, GiVolleyballBall} from "react-icons/gi";




export default function Resume1() {
  return <React.Fragment>
         <div className="resume_wrapper">
			
	<div className="resume_left">
		<hr />
	<div className="resume_image " >
			<img src={pic} alt="Resume_image" />
			</div>
		<hr />
  	
		<div className="resume_bottom">
	
			<div className="resume_item resume_contact">
			<br /><div className="resume_title">Contact <hr style={{ borderStyle: "inset", borderWidth : "1px", color: "#26252d"}} /></div>
				<br />
				<div className="resume_info">
                 
				<div className="resume_subinfo"><LocalPhoneIcon  fontSize="5px" /> &nbsp;&nbsp; +62 000 222 333</div>
				</div>
				<div className="resume_info">
					
	<br />	<div className="resume_subinfo">	<EmailIcon  fontSize="5px"/>&nbsp; &nbsp;&nbsp;rosiejack@gmail.com</div>
				</div><br />
				<div className="resume_subinfo"><GitHubIcon  fontSize="5px"/> &nbsp; &nbsp;Amitnaresh29</div> <br />
				<div className="resume_subinfo">< GrLinkedin   Size="5px"/> &nbsp; &nbsp;Amit_mandaliya29</div>
			
			</div>
				<h2> EDUCATION <hr /> </h2><br/>
				<p className='etitle'> ENTER YOUR DEGREE NAME</p>
				<>University Name/ Location /<br />2014-15 </><br /><br />
				<p className='etitle'> ENTER YOUR DEGREE NAME</p>
				<>University Name/ Location /<br />2014-15 </><br /><br />
				<p className='etitle'> ENTER YOUR DEGREE NAME</p>
				<>University Name/ Location /<br />2014-15 </><br /><br />


      <div classNameName="interests-container container-block">
        <br/>
                <h2> SKILLS <hr /> </h2><br/>
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
			
			<h2> INTERESTS<hr /> </h2><br/>
			<Si1001Tracklists fontSize='35px'/> 	&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;     
			<GiCricketBat fontSize='35px' /> &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  
			<GiVolleyballBall fontSize='35px'/>
         
            
            </div>
		</div>
	</div>
	<div className="resume_right">
		<hr />
	<div className="name">DAVID WELIYAM</div>
  <br />
				<div className="role">FREELANCING DESIGNER</div>
        <br /> 
		<hr /><br/>
		
	  <br /><br />	<div className="rolea">	PERSONAL PROFILE 
	  	<hr /></div>
					<br />
					
	
	<>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	</>
					

   <br /><br/>
		
	
		
	
		<div className="resume_item resume_experience">
			<div className="resume_info">
				<div className="resume_data">
				<div className='rolea' >WORK EXPERIENCE</div><br/>
				<hr />

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
			
		<div className="resume_item resmue_interests">
			<div className="resume_title">Social <hr /></div>
			<br/>
			<ul>
           <li><SiInstagram fontSize='medium'/> &nbsp;johndalton</li><br />
		   <li><SiFacebook fontSize='medium' /> &nbsp;johnamela </li><br />
		  
			</ul>
         
			
		</div>
	</div>
</div>
    </React.Fragment>;
};
