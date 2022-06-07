import React from 'react';
import './Resume1.css';
import pic from './images.jpg';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { GrLinkedin } from "react-icons/gr";
import { Si1001Tracklists } from "react-icons/si";
import { GiCricketBat, GiVolleyballBall} from "react-icons/gi";
import { MdFiberManualRecord } from "react-icons/md";
 



export default function Resume1() {
  return <React.Fragment>
         <div className="resume_wrapper">
			
	<div className="resume_left">
	<div className="name" style={{marginLeft : "5px"}}><b style={{ color:"gray",marginLeft : "0px"}} >DAVID</b> <br/> <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WELIYAMS</div>
  
				<div className="role">&nbsp;&nbsp;&nbsp;&nbsp;GRAPHIC DESIGNER</div>
				<br />  <br /> 
		<hr />
  	
		<div className="resume_bottom">
	
			<div className="resume_item resume_contact">
			<br /><div className="resume_title"><div className='vl'>&nbsp;&nbsp;Contact</div> </div>
				<br />
				<div className="resume_info">
                 
				<div className="resume_subinfo"><LocalPhoneIcon  fontSize="5px" /> &nbsp;&nbsp; +62 000 222 333</div>
				</div>
				<div className="resume_info">
					
	<br />	<div className="resume_subinfo">	<EmailIcon  fontSize="5px"/>&nbsp; &nbsp;&nbsp;rosiejack@gmail.com</div>
				</div><br />
				<div className="resume_subinfo"><GitHubIcon  fontSize="5px"/> &nbsp; &nbsp;Amitnaresh29</div> <br />
				<div className="resume_subinfo">< GrLinkedin   Size="5px"/> &nbsp; &nbsp;Amit_mandaliya29</div>
			
				<hr /></div><div>
			<div className="resume_item resume_contact">
			<div className="resume_title" style={{color: "#26252d", marginTop: "0%"}}> <div className='vl'>&nbsp;&nbsp;EDUCATION</div></div><br/>
				<p className='etitle'> ENTER YOUR DEGREE NAME</p>
				<>University Name/ Location /<br />2014-15 </><br /><br />
				<p className='etitle'> ENTER YOUR DEGREE NAME</p>
				<>University Name/ Location /<br />2014-15 </><br /><br />
				<p className='etitle'> ENTER YOUR DEGREE NAME</p>
				<>University Name/ Location /<br />2014-15 </><br /><br />
				</div>
				<hr />
				</div>


      <div classNameName="interests-container container-block">
        <br/> 
                <div className='resume_title'>  <div className='vl'>&nbsp;&nbsp;SKILLS</div>  </div><br/>
			
         
               <ul>
				<li><MdFiberManualRecord fontSize='10px' />&nbsp;&nbsp;Reading</li><br/>
                    <li><MdFiberManualRecord fontSize='10px' />&nbsp;&nbsp;Snowboarding</li><br/>
                    <li><MdFiberManualRecord fontSize='10px'/>&nbsp;&nbsp;Cooking</li><br/>
                 
					</ul> <br/>
					<hr />
				  <br /> 
			
				  <div className='resume_title'>  <div className='vl'>&nbsp;&nbsp;INTERESTS</div>  </div><br/>
	<br/>
			<Si1001Tracklists fontSize='35px'/> 	&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;     
			<GiCricketBat fontSize='35px' /> &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  
			<GiVolleyballBall fontSize='35px'/>
         
            
            </div>
		</div>
	</div>
	<div className="resume_right">
	<div className="resume_image " >
			<img src={pic} alt="Resume_image" />
			</div><br />
			<hr />
	
		
			<br /><br />	

		
		<div className="resume_item ">
			<div className='vl'>
			<div className="resume_info">
				
				<div className="resume_data">
				<div className='rolea' ><div className='vl' style={{marginLeft : "10px"}}>&nbsp;&nbsp;WORK EXPERIENCE</div></div><br/>
				<div className="content"><br/>
						<p className='rolea' style={{marginLeft : "10px"}}>POSITION TITLE HERE<p className='roleaa'>Company Name/Location test here/2014-2015</p></p>
						<p style={{marginLeft : "10px"}} >Lorem ipsum dolor sit amet, consectetur adipisicing elit<br/><MdFiberManualRecord fontSize='10px' /> sed do eiusmod tempor incididunt ut labore et dolore <br/><MdFiberManualRecord fontSize='10px' />magna aliqua.Lorem ipsum dolor sit amet, consectetur <br/><MdFiberManualRecord fontSize='10px' />adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					    
					</div>
				</div>
				<div className="resume_data">
					<div className="content"><br/>
					<p className='rolea' style={{marginLeft : "10px"}}>POSITION TITLE HERE<p className='roleaa'>Company Name/Location test here/2014-2015</p></p>
					<p style={{marginLeft : "10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit<br/><MdFiberManualRecord fontSize='10px' /> sed do eiusmod tempor incididunt ut labore et dolore <br/><MdFiberManualRecord fontSize='10px' />magna aliqua.Lorem ipsum dolor sit amet, consectetur <br/><MdFiberManualRecord fontSize='10px' />adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div className="resume_data">
						<div className="content"><br/>
						<p className='rolea' style={{marginLeft : "10px"}}>POSITION TITLE HERE<p className='roleaa'>Company Name/Location test here/2014-2015</p></p>
				
						<p style={{marginLeft : "10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit<br/><MdFiberManualRecord fontSize='10px' /> sed do eiusmod tempor incididunt ut labore et dolore <br/><MdFiberManualRecord fontSize='10px' />magna aliqua.Lorem ipsum dolor sit amet, consectetur <br/><MdFiberManualRecord fontSize='10px' />adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div className="resume_data">
						<div className="content"><br/>
						<p className='rolea'style={{marginLeft : "10px"}} >POSITION TITLE HERE<p className='roleaa'>Company Name/Location test here/2014-2015</p></p>
				
						<p style={{marginLeft : "10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit<br/><MdFiberManualRecord fontSize='10px' /> sed do eiusmod tempor incididunt ut labore et dolore <br/><MdFiberManualRecord fontSize='10px' />magna aliqua.Lorem ipsum dolor sit amet, consectetur <br/><MdFiberManualRecord fontSize='10px' />adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<br/></div>
				</div>
				
				
			</div>
		
		</div>
			
		
		</div>
	</div>
</div>
    </React.Fragment>;
};
