import React from 'react';
import './Resume1.css';
 import pic from './Me.jpeg';
   import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
  import EmailIcon from '@mui/icons-material/Email';
  import GitHubIcon from '@mui/icons-material/GitHub';
 import { GrLinkedin } from "react-icons/gr";
// import { SiInstagram } from "react-icons/si";
// import { SiFacebook } from "react-icons/si";
// // import { SiTwitter } from "react-icons/si";
//  import { Si1001Tracklists} from "react-icons/si";
// import { GiCricketBat} from "react-icons/gi";
//  import { GiVolleyballBall} from "react-icons/gi";



export default function Resume1() {
  return <React.Fragment>
     <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Responsive HTML5 Resume/CV Template for Developers" />
    <meta name="author" content="Xiaoying Riley at 3rd Wave Media" />    
    <link rel="shortcut icon" href="favicon.ico"  />  
  
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,500,400italic,300italic,300,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css' />
    
	<script defer src="assets/fontawesome/js/all.min.js"></script>
   

    <div className="wrapper mt-lg-5">
     
 
    
        <div className="sidebar-wrapper">
            <div className="profile-container">
                <img className="profile" src={pic} alt="" />
            </div>  <hr/><br/><br/><br/>
            <hr />
            <br />
            
           
            <h2 className="container-block-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FOLLOW ME</h2>
           <div className='vl'><br/>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;< LocalPhoneIcon fontSize='15px'/>&nbsp;&nbsp;+91 8367750724 <br /><br />
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;< EmailIcon fontSize='15px'/>&nbsp;&nbsp;abc@gmail.com <br /><br />
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GitHubIcon fontSize='15px' / >&nbsp;&nbsp;Amitnaresh29<br /><br />
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GrLinkedin fontSize='15px'/>&nbsp;&nbsp;&nbsp;Amit-mandaliya <br /><br />

           &nbsp; &nbsp; &nbsp; <hr className='h' />
           <h2> SKILLS</h2><br/>
			<br/>
         
              HTML<div className="w3-light-grey">
  <div className="w3-black" style={{height:"10px",width:"75%"}}></div>
</div>  <br/>       
                 
              PHP<div className="w3-light-grey">
  <div className="w3-black" style={{height:"10px",width:"90%"}}></div>
</div><br/>
               
              REACT<div className="w3-light-grey">
  <div className="w3-black" style={{height:"10px",width:"85%"}}></div>
</div><br/>
              
ANGULAR<div className="w3-light-grey">
  <div className="w3-black" style={{height:"10px",width:"55%"}}></div>
</div> <br/>
            <div className="education-container container-block">
                <h2 className="container-block-title">Education</h2>
                <div className="item">
                    <h4 className="degree">MSc in Computer Science</h4>
                    <h5 className="meta">University of London</h5>
	                    <div className="time">2016 - 2018</div>
                </div>
                <div className="item">
                    <h4 className="degree">BSc in Applied Mathematics</h4>
                    <h5 className="meta">Bristol University</h5>
                    <div className="time">2012 - 2016</div>
                </div>
            </div>
            <hr />
            
            <div className="languages-container container-block">
                <h2 className="container-block-title">Languages</h2>
                <ul className="list-unstyled interests-list">
                    <li>English </li>
                    <li>French </li>
                    <li>Spanish </li>
                </ul>
            </div>
            <hr />
            
            <div className="interests-container container-block">
                <h2 className="container-block-title">Interests</h2>
                <ul className="list-unstyled interests-list">
                    <li>Climbing</li>
                    <li>Snowboarding</li>
                    <li>Cooking</li>
                </ul>
            </div>
            </div>
            
        </div>
        
        <div className="main-wrapper">
            
            <section className="section summary-section">
                <h6>DAVID </h6>
                <h3>WILLIAMSON</h3><br/>
                <hr /><br/><br/><br/>
                <hr />
               
                <h2 className="section-title">PERSONAL Profile</h2> 
                <div className="summary">
               
                    <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/" >download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/" >download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
              <br />  <br />
                <hr />
                </div>
            </section>
            
            <section className="section experiences-section">
                <h2 className="section-title">WORK Experiences</h2>
                
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Lead Developer</h3>
                            <div className="time">2019 - Present</div>
                        </div>
                        <div className="company">Startup Hubs, San Francisco</div>
                    </div>
                    <div className="details">
                        <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</p>  
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    </div>
                </div>
                
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Senior Software Engineer</h3>
                            <div className="time">2018 - 2019</div>
                        </div>
                        <div className="company">Google, London</div>
                    </div>
                    <div className="details">
                        <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>  
                        
                    </div>
                </div>
                 <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Senior Software Engineer</h3>
                            <div className="time">2018 - 2019</div>
                        </div>
                        <div className="company">Google, London</div>
                    </div>
                    <div className="details">
                        <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>  
    
                    </div>
                </div>
                
            
                
            <hr />
            </section>
            
          
            <section className="skills-section section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
                <div className="skillset">        
                    <div className="item">
                        <h3 className="level-title">Python &amp; Django</h3>
                        <div className="progress level-bar">
						    <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: "99%"}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
						</div>                               
                    </div>
                    
                    <div className="item">
                        <h3 className="level-title">Javascript</h3>
                        <div className="progress level-bar">
						    <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: "98%"}} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
						</div>                              
                    </div>
                    
                    <div className="item">
                        <h3 className="level-title">React &amp; Angular</h3>
                        <div className="progress level-bar">
						    <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: "98%"}} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
						</div>                                 
                    </div>
                    
                    <div className="item">
                        <h3 className="level-title">HTML5 &amp; CSS</h3>
                        <div className="progress level-bar">
							    <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
						</div>                                
                    </div>
                    
                    <div className="item">
                        <h3 className="level-title">Ruby on Rails</h3>
                        <div className="progress level-bar">
						    <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
						</div>                                  
                    </div>
                    
                    <div className="item">
                        <h3 className="level-title">Sketch &amp; Photoshop</h3>
                        <div className="progress level-bar">
						    <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
						</div>                                 
                    </div>
                    
                </div>  
            </section>
        </div>
        </div>
   
 
    
    </React.Fragment>;
};
