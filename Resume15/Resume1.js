import React from 'react';
import './Resume1.css';
 import pic from './Me.jpeg';
 import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';



export default function Resume1() {
  return <React.Fragment>
	  
             <article className="resume-wrapper text-center position-relative">
			 <div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
		    <header className="resume-header pt-4 pt-md-0">
			    <div className="row">
				    <div className="col-block col-md-auto resume-picture-holder text-center text-md-start">
				        <img className="picture" src={pic} alt="" />
				    </div>
				    <div className="col">
					    <div className="row p-4 justify-content-center justify-content-md-between">
						    <div className="primary-info col-auto">
								
							<h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase ">DIANE WATSON</h1>
							    <div className="title mb-3" style={{fontSize : "15px", letterSpacing:"1px"}}>GRAPHIC DESIGNER</div>
							
						    </div>
						    <div className="secondary-info col-auto mt-0">
							    <ul className="resume-social list-unstyled">
					                <li className="mb-3"><LocalPhoneIcon/>&nbsp;linkedin.com/in/stevedoe</li>
					                <li className="mb-3"><EmailIcon/>&nbsp;Email.com/username</li>
					                <li className="mb-3"><GitHubIcon/>&nbsp;Github.com/username/</li>
					     
							    </ul>
						    </div>
					    </div>
					    
				    </div>
			    </div>
		    </header>
		    <div className="resume-body p-5">
			    <section className="resume-section summary-section mb-5">
				    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3" style={{fontSize :"15px", letterSpacing:"1px"}}>PROFILE</h2>
					    <p className="mb-0" style={{width :"100%"}}>Summarise your career here. <a className="text-reset text-link" href="https://themes.3rdwavemedia.com/resources/sketch-template/pillar-sketch-sketch-resume-template-for-developers/" >You can make a PDF version of your resume using our free Sketch template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
						
			    </section>
			    <div className="row">
				    <div className="col-lg-9">
					    <section className="resume-section experience-section mb-5">
						    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
						    <div className="resume-section-content">
							    <div className="resume-timeline position-relative">
				                 <article className="resume-timeline-item position-relative pb-5">
									    
									    <div className="resume-timeline-item-header mb-2">
										    <div className="d-flex flex-column flex-md-row">
										        <h3 className="resume-position-title font-weight-bold mb-1">Co-Founder & Lead Developer</h3>
										        <div className="resume-company-name ms-auto" style={{color : 'black'}}>To-do Lists</div>
										    </div>
										       </div>
									    <div className="resume-timeline-item-desc">
										    <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.</p>
										    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
										    
									    </div>

								    </article>
								    
								    <article className="resume-timeline-item position-relative">
									    
									    <div className="resume-timeline-item-header mb-2">
										    <div className="d-flex flex-column flex-md-row">
										        <h3 className="resume-position-title font-weight-bold mb-1">Web Developer <small className="text-muted" style={{color :"black"}} >(Intern)</small></h3>
										        <div className="resume-company-name ms-auto" style={{color :"black"}}>Amazon</div>
										    </div>
									    </div>
									    <div className="resume-timeline-item-desc">
										    <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum.</p>
										  
									    </div>

								    </article>
								    
								    
							    </div>
							    
							    
							    
							    
							    
							    
						    </div>
					    </section>
						<section className="resume-section experience-section mb-5">
						    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">EDUCATION</h2>
						    <div className="resume-section-content">
							    <div className="resume-timeline position-relative">
								    <article className="resume-timeline-item position-relative pb-5">
									    
									    <div className="resume-timeline-item-header mb-2" style={{color:'orange'}}>
										    <div className="d-flex flex-column flex-md-row" style={{color : 'orange '}} >
											<h3 className="resume-position-title font-weight-bold mb-1" style={{color : 'black '}}>Lead Developer</h3>
										     
										           <div className="resume-company-name ms-auto" style={{color : 'black'}}>Startup Hub</div>
										    </div>
									    </div>
									    <div className="resume-timeline-item-desc">
										    <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.</p>
									 
				
									    </div>

								    </article>
								    
							
							
								    
								    <article className="resume-timeline-item position-relative">
									    
									    <div className="resume-timeline-item-header mb-2">
										    <div className="d-flex flex-column flex-md-row">
										        <h3 className="resume-position-title font-weight-bold mb-1">Web Developer <small className="text-muted" style={{color :"black"}} >(Intern)</small></h3>
										        <div className="resume-company-name ms-auto" style={{color :"black"}}>Amazon</div>
										    </div>
									    </div>
									    <div className="resume-timeline-item-desc">
										    <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum.</p>
										  
									    </div>

								    </article>
								    
								    
							    </div>
							    
							    
							    
							    
							    
							    
						    </div>
					    </section>
	
				    </div>
					
				    <div className="col-lg-3">
					
					    <section className="resume-section  mb-5">
							
						    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3" style={{marginLeft :'15px'}}>Skills </h2>
							 <div className='vl'>		 
						    <div className="resume-section-content">
						        <div className="resume-skill-item">
							        <ul className="list-unstyled mb-4">
								        <li className="mb-2">
								            <div className="resume-skill-name">Angular</div>
									        <div className="progress resume-progress">
											    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "98%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
								        </li>
								        <li className="mb-2">
								            <div className="resume-skill-name">React</div>
									        <div className="progress resume-progress">
											    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "94%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
								        </li>
								        <li className="mb-2">
								            <div className="resume-skill-name">JavaScript</div>
									        <div className="progress resume-progress">
											    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "96%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
								        </li>
								        
								        <li className="mb-2">
								            <div className="resume-skill-name">Node.js</div>
									        <div className="progress resume-progress">
											    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "92%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
								        </li>
								        <li className="mb-2">
								            <div className="resume-skill-name">HTML/CSS/SASS/LESS</div>
									        <div className="progress resume-progress">
											    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "96%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
								        </li>
							        </ul>
									</div>
						        </div>
								<br />   <br />
						        
						        <div className="resume-skill-item">
						            <h4 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3" style={{marginLeft :'15px'}}>LANGUAGE</h4>
							   
								 
								    <ul className="list-unstyled">
								        <li className="mb-2">
								            <div className="resume-skill-name">Python/Django</div>
									        <div className="progress resume-progress">
											    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
								        </li>
								        <li className="mb-2">
								            <div className="resume-skill-name">Ruby/Rails</div>
									        <div className="progress resume-progress">
											    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "92%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
								        </li>
								        <li className="mb-2">
								            <div className="resume-skill-name">PHP</div>
									        <div className="progress resume-progress">
											    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "86%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
								        </li>
								        <li className="mb-2">
								            <div className="resume-skill-name">WordPress/Shopify</div>
									        <div className="progress resume-progress">
											    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "82%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
								        </li>
							        </ul>
						        </div>
                              </div>
					    </section>
						<br />   <br />
					   
					    <section className="resume-section reference-section mb-5">
							<div className='vl'>
						    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3" style={{marginLeft :"15px"}}>Awards</h2>
						    <div className="resume-section-content">
							    <ul className="list-unstyled resume-awards-list">
								    <li className="mb-2 ps-4 position-relative">
								        <i className="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
								        <div className="resume-award-name">Award Name Lorem</div>
								        <div className="resume-award-desc">Award desc goes here, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</div>
								    </li>
								    <li className="mb-0 ps-4 position-relative">
								        <i className="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
								        <div className="resume-award-name">Award Name Ipsum</div>
								        <div className="resume-award-desc">Award desc goes here, ultricies nec, pellentesque.</div>
								    </li>
							    </ul>
						    </div>
							</div>
					    </section>
					    				    </div>
			    </div>
		    </div>
	
		    
		    
	    </div>
    </article> 
        </React.Fragment>;
};
