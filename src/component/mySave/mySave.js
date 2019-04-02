import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
class MySave extends Component {
    render() {
        return (
            <div className="col-md-9 col-sm-8 top-tabs comment-tabs">
                <Tabs defaultActiveKey="Searches" transition={false} id="noanim-tab-example" className="tabs-home">
                    <Tab eventKey="Searches" title="Saved Searches">
                        <div className="tab-pane active" id="saved-search">
                            <div className="main-tab">
                                <div className="sorting-bar">
                                    <h5>6 Saved Searches</h5>
                                    <div className="bars pull-right">
                                        <div className="order">
                                            <select className="" name="sand">
                                                <option value="other">New Results</option>
                                                <option value="2013">New Results</option>
                                                <option value="2014">New Results</option>
                                                <option value="2015">New Results</option>
                                                <option value="2016">New Results</option>
                                                <option value="2017">New Results</option>
                                            </select>
                                            <h5 style={{ "color": "#333" }}>Sort By:</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="clearfix"></div>

                                <div className="main-tab-inner-boxes">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-6">
                                            <div className="main-tab-inner-box">
                                                <div className="main-tab-inner-box-top">
                                                    <div className="main-tab-inner-box-top-head">
                                                        <h4>Pacemaker</h4>
                                                        <a href="#"><i className="fa fa-external-link" aria-hidden="true"></i></a>
                                                    </div>
                                                    <div className="clearfix"></div>

                                                    <div className="tooltip1">
                                                        <p><i className="fa fa-filter" aria-hidden="true"></i> &nbsp;2 filters</p>
                                                        <span className="tooltiptext">Risk Classification: <b>Class III</b><br></br>
                                                            Review Time: <b>&lt;90 days</b><br></br>
                                                            Medical Specialties: <b>Cardiovascular, Nuerology, Orthoscopy</b></span>
                                                    </div>
                                                </div>

                                                <div className="main-tab-inner-box-middle">
                                                    <p style={{ "marginBottom": "0" }}>14 Regulation Numbers</p>
                                                    <ul>
                                                        <li className="contain-list">
                                                            <p>29 <a href="#">Product Codes</a> </p>
                                                            <ul>
                                                                <li>
                                                                    <p>308 <a href="#">510 Applications</a></p>
                                                                </li>
                                                                <li>
                                                                    <p>71 <a href="#">PMA Applications</a></p>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="main-tab-inner-box-footer">
                                                    <h6>Saved on Apr 5, 2019</h6>
                                                    <div className="main-tab-inner-box-footer-icon">
                                                        <ul className="list-inline">
                                                            <li><a href="#"><i className="fa fa-upload" aria-hidden="true"></i></a></li>

                                                            <li><a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="main-tab-inner-box">
                                                <div className="main-tab-inner-box-top">
                                                    <div className="main-tab-inner-box-top-head">
                                                        <h4>Catheter Ablation</h4>
                                                        <a href="#"><i className="fa fa-external-link" aria-hidden="true"></i></a>
                                                    </div>

                                                    <div className="clearfix"></div>

                                                    <div className="tooltip1">
                                                        <p><i className="fa fa-filter" aria-hidden="true"></i> &nbsp;0 filters</p>
                                                        <span className="tooltiptext">Risk Classification: <b>Class III</b><br></br>
                                                            Review Time: <b>&lt;90 days</b><br></br>
                                                            Medical Specialties: <b>Cardiovascular, Nuerology, Orthoscopy</b></span>
                                                    </div>
                                                </div>

                                                <div className="main-tab-inner-box-middle">
                                                    <p style={{ "marginBottom": "0" }}>11 Regulation Numbers</p>
                                                    <ul>
                                                        <li className="contain-list">
                                                            <p>47 <a href="#">Product Codes</a> </p>
                                                            <ul>
                                                                <li>
                                                                    <p>136 <a href="#">510 Applications</a></p>
                                                                </li>
                                                                <li>
                                                                    <p>23 <a href="#">PMA Applications</a></p>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="main-tab-inner-box-footer">
                                                    <h6>Saved on Apr 4, 2019</h6>
                                                    <div className="main-tab-inner-box-footer-icon">
                                                        <ul className="list-inline">
                                                            <li><a href="#"><i className="fa fa-upload" aria-hidden="true"></i></a></li>

                                                            <li><a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="main-tab-inner-box">
                                                <div className="main-tab-inner-box-top">
                                                    <div className="main-tab-inner-box-top-head">
                                                        <h4>Bilateral Lumbar Fusion…</h4>
                                                        <a href="#"><i className="fa fa-external-link" aria-hidden="true"></i></a>
                                                    </div>

                                                    <div className="clearfix"></div>

                                                    <div className="tooltip1">
                                                        <p><i className="fa fa-filter" aria-hidden="true"></i> &nbsp;6 filters</p>
                                                        <span className="tooltiptext">Risk Classification: <b>Class III</b><br></br>
                                                            Review Time: <b>&lt;90 days</b><br></br>
                                                            Medical Specialties: <b>Cardiovascular, Nuerology, Orthoscopy</b></span>
                                                    </div>
                                                </div>

                                                <div className="main-tab-inner-box-middle">
                                                    <p style={{ "marginBottom": "0" }}>1 Regulation Numbers</p>
                                                    <ul>
                                                        <li className="contain-list">
                                                            <p>1 <a href="#">Product Codes</a> </p>
                                                            <ul>
                                                                <li>
                                                                    <p>2 <a href="#">510 Applications</a></p>
                                                                </li>
                                                                <li>
                                                                    <p>0 <a href="#">PMA Applications</a></p>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="main-tab-inner-box-footer">
                                                    <h6>Saved on Oct 22, 2018</h6>
                                                    <div className="main-tab-inner-box-footer-icon">
                                                        <ul className="list-inline">
                                                            <li><a href="#"><i className="fa fa-upload" aria-hidden="true"></i></a></li>

                                                            <li><a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="main-tab-inner-box">
                                                <div className="main-tab-inner-box-top">
                                                    <div className="main-tab-inner-box-top-head">
                                                        <h4>Knee Replacement</h4>
                                                        <a href="#"><i className="fa fa-external-link" aria-hidden="true"></i></a>
                                                    </div>

                                                    <div className="clearfix"></div>

                                                    <div className="tooltip1">
                                                        <p><i className="fa fa-filter" aria-hidden="true"></i> &nbsp;Decision Year: 2014-2017</p>
                                                        <span className="tooltiptext">Risk Classification: <b>Class III</b><br></br>
                                                            Review Time: <b>&lt;90 days</b><br></br>
                                                            Medical Specialties: <b>Cardiovascular, Nuerology, Orthoscopy</b></span>
                                                    </div>
                                                </div>

                                                <div className="main-tab-inner-box-middle">
                                                    <p style={{ "marginBottom": "0" }}>8 Regulation Numbers</p>
                                                    <ul>
                                                        <li className="contain-list">
                                                            <p>18 <a href="#">Product Codes</a> </p>
                                                            <ul>
                                                                <li>
                                                                    <p>67 <a href="#">510 Applications</a></p>
                                                                </li>
                                                                <li>
                                                                    <p>5 <a href="#">PMA Applications</a></p>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="main-tab-inner-box-footer">
                                                    <h6>Saved on Jul 9, 2018</h6>
                                                    <div className="main-tab-inner-box-footer-icon">
                                                        <ul className="list-inline">
                                                            <li><a href="#"><i className="fa fa-upload" aria-hidden="true"></i></a></li>

                                                            <li><a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="main-tab-inner-box">
                                                <div className="main-tab-inner-box-top">
                                                    <div className="main-tab-inner-box-top-head">
                                                        <h4>Heart Valve</h4>
                                                        <a href="#"><i className="fa fa-external-link" aria-hidden="true"></i></a>
                                                    </div>

                                                    <div className="clearfix"></div>

                                                    <div className="tooltip1">
                                                        <p><i className="fa fa-filter" aria-hidden="true"></i> &nbsp;3 filters</p>
                                                        <span className="tooltiptext">Risk Classification: <b>Class III</b><br></br>
                                                            Review Time: <b>&lt;90 days</b><br></br>
                                                            Medical Specialties: <b>Cardiovascular, Nuerology, Orthoscopy</b></span>
                                                    </div>
                                                </div>

                                                <div className="main-tab-inner-box-middle">
                                                    <p style={{ "marginBottom": "0" }}>8 Regulation Numbers</p>
                                                    <ul>
                                                        <li className="contain-list">
                                                            <p>18 <a href="#">Product Codes</a> </p>
                                                            <ul>
                                                                <li>
                                                                    <p>67 <a href="#">510 Applications</a></p>
                                                                </li>
                                                                <li>
                                                                    <p>5 <a href="#">PMA Applications</a></p>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="main-tab-inner-box-footer">
                                                    <h6>Saved on May 5, 2019</h6>
                                                    <div className="main-tab-inner-box-footer-icon">
                                                        <ul className="list-inline">
                                                            <li><a href="#"><i className="fa fa-upload" aria-hidden="true"></i></a></li>

                                                            <li><a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="Items" title="Saved Items">
                        <div className="tab-pane" id="saved-item">
                            <div className="main-tab">
                                <div className="sorting-bar">
                                    <h5>5 Saved Items</h5>
                                    <div className="bars pull-right">
                                        <div className="order">
                                            <select className="" name="sand">
                                                <option value="other">New Results</option>
                                                <option value="2013">New Results</option>
                                                <option value="2014">New Results</option>
                                                <option value="2015">New Results</option>
                                                <option value="2016">New Results</option>
                                                <option value="2017">New Results</option>
                                            </select>
                                            <h5 style={{ "color": "#333" }}>Sort By:</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="clearfix"></div>

                                <div className="main-tab-inner-boxes">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <div className="main-tab-inner-box tab-second-box yellow-box">
                                                <div className="main-tab-inner-box-top">
                                                    <div className="main-tab-inner-box-top-head">
                                                        <h4>Model 5600B Programmer, Pacemaker</h4>
                                                        <span className="label label-warning">510k</span>
                                                    </div>

                                                    <div className="clearfix"></div>
                                                </div>

                                                <div className="main-tab-inner-box-middle">
                                                    <p style={{ "marginBottom": "0" }}><span>870.3700</span> Pacemaker Repair or Replacement Material</p>
                                                    <ul>
                                                        <li className="contain-list">
                                                            <p><a href="#">KRG  Programmer, Pacemaker</a> </p>
                                                            <ul>

                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="main-tab-inner-box-footer">
                                                    <h6>Saved on Apr 5, 2019</h6>
                                                    <div className="main-tab-inner-box-footer-icon">
                                                        <ul className="list-inline">
                                                            <li><a href="#"><i className="fa fa-upload" aria-hidden="true"></i></a></li>

                                                            <li><a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-sm-12">
                                            <div className="main-tab-inner-box tab-second-box yellow-box">
                                                <div className="main-tab-inner-box-top">
                                                    <div className="main-tab-inner-box-top-head">
                                                        <h4>Pacemakers, Vitatron's</h4>
                                                        <span className="label label-warning">510k</span>
                                                    </div>

                                                    <div className="clearfix"></div>
                                                </div>

                                                <div className="main-tab-inner-box-middle">
                                                    <p style={{ "marginBottom": "0" }}><span>870.3610</span> Pacemaker pulse generator </p>
                                                    <ul>
                                                        <li className="contain-list">
                                                            <p><a href="#">DXY  Implantable Pacemaker Pulse-Generator</a> </p>
                                                            <ul>

                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="main-tab-inner-box-footer">
                                                    <h6>Saved on Mar 28, 2019</h6>
                                                    <div className="main-tab-inner-box-footer-icon">
                                                        <ul className="list-inline">
                                                            <li><a href="#"><i className="fa fa-upload" aria-hidden="true"></i></a></li>

                                                            <li><a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="clearfix"></div>

                                        <div className="col-md-6 col-sm-12">
                                            <div className="main-tab-inner-box tab-second-box blue-box">
                                                <div className="main-tab-inner-box-top">
                                                    <div className="main-tab-inner-box-top-head">
                                                        <h4>870.3640  Indirect Pacemaker Generator Function Analyzer</h4>
                                                        <span className="label label-info">REG</span>
                                                    </div>

                                                    <div className="clearfix"></div>
                                                </div>

                                                <div className="main-tab-inner-box-middle">
                                                    <p style={{ "marginBottom": "0", "fontSize": "13px" }}>An indirect pacemaker generator function analyzer is an electrically powered device that is used to determine pacemaker function or pacemaker battery function by periodically monitor…</p>

                                                </div>

                                                <div className="main-tab-inner-box-footer">
                                                    <h6>Saved on Apr 5, 2019</h6>
                                                    <div className="main-tab-inner-box-footer-icon">
                                                        <ul className="list-inline">
                                                            <li><a href="#"><i className="fa fa-upload" aria-hidden="true"></i></a></li>

                                                            <li><a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-sm-12">
                                            <div className="main-tab-inner-box tab-second-box voilet-box">
                                                <div className="main-tab-inner-box-top">
                                                    <div className="main-tab-inner-box-top-head">
                                                        <h4>DXY  Implantable Pacemaker Pulse-Generator</h4>
                                                        <span className="label label-primary">PROD</span>
                                                    </div>

                                                    <div className="clearfix"></div>
                                                </div>

                                                <div className="main-tab-inner-box-middle">
                                                    <p style={{ "marginBottom": "0" }}><span>870.3610</span> Pacemaker pulse generator</p>
                                                    <ul className="list-inline list-generator">
                                                        <li>
                                                            <h6>Classification</h6>
                                                            <h5>Class III</h5>
                                                        </li>

                                                        <li>
                                                            <h6>Medical Specialty</h6>
                                                            <h5>CV</h5>
                                                        </li>

                                                        <li>
                                                            <h6>Review Panel</h6>
                                                            <h5>CV</h5>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="main-tab-inner-box-footer">
                                                    <h6>Saved on Mar 28, 2019</h6>
                                                    <div className="main-tab-inner-box-footer-icon">
                                                        <ul className="list-inline">
                                                            <li><a href="#"><i className="fa fa-upload" aria-hidden="true"></i></a></li>

                                                            <li><a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="clearfix"></div>

                                        <div className="col-md-6 col-sm-12">
                                            <div className="main-tab-inner-box main-tab-inner-box tab-second-box pink-box">
                                                <div className="main-tab-inner-box-top">
                                                    <div className="main-tab-inner-box-top-head">
                                                        <h4>Model 5600B Programmer, Pacemaker</h4>
                                                        <span className="label label-danger">PMA</span>
                                                    </div>

                                                    <div className="clearfix"></div>
                                                </div>

                                                <div className="main-tab-inner-box-middle">
                                                    <p style={{ "marginBottom": "0" }}><span>870.3700</span> Pacemaker Repair or Replacement Material</p>
                                                    <ul>
                                                        <li className="contain-list">
                                                            <p><a href="#">LWP  Implantable Pulse Generator, Pacemaker (Non-Crt)</a> </p>
                                                            <ul>

                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="main-tab-inner-box-footer">
                                                    <h6>Saved on Mar 28, 2019</h6>
                                                    <div className="main-tab-inner-box-footer-icon">
                                                        <ul className="list-inline">
                                                            <li><a href="#"><i className="fa fa-upload" aria-hidden="true"></i></a></li>

                                                            <li><a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>

                </Tabs>
                {/* <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="tab1">
                        <div className="comment-tabs">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="active">
                                    <a href="#saved-search" role="tab" data-toggle="tab" aria-expanded="true">
                                        <h4 className="reviews text-capitalize">Saved Searches</h4>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#saved-item" role="tab" data-toggle="tab" aria-expanded="false">
                                        <h4 className="reviews text-capitalize">Saved Items</h4>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content"> */}
                                {/* <div className="tab-pane active" id="saved-search">
                                    <div className="main-tab">
                                        <div className="sorting-bar">
                                            <h5>6 Saved Searches</h5>
                                            <div className="bars pull-right">
                                                <div className="order">    
                                                    <select className="" name="sand">
                                                        <option value="other">New Results</option>
                                                        <option value="2013">New Results</option>
                                                        <option value="2014">New Results</option>
                                                        <option value="2015">New Results</option>
                                                        <option value="2016">New Results</option>
                                                        <option value="2017">New Results</option>    
                                                    </select>
                                                      <h5 style={{"color":"#333"}}>Sort By:</h5>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="clearfix"></div>
                                        
                                        <div className="main-tab-inner-boxes">
                                            <div className="row">
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="main-tab-inner-box">
                                                        <div className="main-tab-inner-box-top">
                                                            <div className="main-tab-inner-box-top-head">
                                                                <h4>Pacemaker</h4>
                                                                <a href="#"><i className="fa fa-external-link" aria-hidden="true"></i></a>
                                                            </div>
                                                            
                                                            <div className="clearfix"></div>
                                                            
                                                            <div className="tooltip1">
                                                                <p><i className="fa fa-filter" aria-hidden="true"></i> &nbsp;2 filters</p>
                                                                <span className="tooltiptext">Risk Classification: <b>Class III</b><br></br>
                                                                    Review Time: <b>&lt;90 days</b><br></br>
                                                                    Medical Specialties: <b>Cardiovascular, Nuerology, Orthoscopy</b></span>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="main-tab-inner-box-middle">
                                                            <p style={{"marginBottom": "0"}}>14 Regulation Numbers</p>
                                                            <ul>
                                                                <li className="contain-list">
                                                                    <p>29 <a href="#">Product Codes</a> </p>
                                                                    <ul>
                                                                        <li>
                                                                            <p>308 <a href="#">510 Applications</a></p>
                                                                        </li>
                                                                        <li>
                                                                            <p>71 <a href="#">PMA Applications</a></p>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        
                                                        <div className="main-tab-inner-box-footer">
                                                            <h6>Saved on Apr 5, 2019</h6>
                                                            <div className="main-tab-inner-box-footer-icon">
                                                                <ul className="list-inline">
                                                                    <li><a href="#"><i className="fa fa-upload" aria-hidden="true"></i></a></li>
                                                                    
                                                                    <li><a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="main-tab-inner-box">
                                                        <div className="main-tab-inner-box-top">
                                                            <div className="main-tab-inner-box-top-head">
                                                                <h4>Catheter Ablation</h4>
                                                                <a href="#"><i className="fa fa-external-link" aria-hidden="true"></i></a>
                                                            </div>
                                                            
                                                            <div className="clearfix"></div>
                                                            
                                                            <div className="tooltip1">
                                                                <p><i className="fa fa-filter" aria-hidden="true"></i> &nbsp;0 filters</p>
                                                                <span className="tooltiptext">Risk Classification: <b>Class III</b><br></br>
                                                                    Review Time: <b>&lt;90 days</b><br></br>
                                                                    Medical Specialties: <b>Cardiovascular, Nuerology, Orthoscopy</b></span>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="main-tab-inner-box-middle">
                                                            <p style={{"marginBottom": "0"}}>11 Regulation Numbers</p>
                                                            <ul>
                                                                <li className="contain-list">
                                                                    <p>47 <a href="#">Product Codes</a> </p>
                                                                    <ul>
                                                                        <li>
                                                                            <p>136 <a href="#">510 Applications</a></p>
                                                                        </li>
                                                                        <li>
                                                                            <p>23 <a href="#">PMA Applications</a></p>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        
                                                        <div className="main-tab-inner-box-footer">
                                                            <h6>Saved on Apr 4, 2019</h6>
                                                            <div className="main-tab-inner-box-footer-icon">
                                                                <ul className="list-inline">
                                                                    <li><a href="#"><i className="fa fa-upload" aria-hidden="true"></i></a></li>
                                                                    
                                                                    <li><a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="main-tab-inner-box">
                                                        <div className="main-tab-inner-box-top">
                                                            <div className="main-tab-inner-box-top-head">
                                                                <h4>Bilateral Lumbar Fusion…</h4>
                                                                <a href="#"><i className="fa fa-external-link" aria-hidden="true"></i></a>
                                                            </div>
                                                            
                                                            <div className="clearfix"></div>
                                                            
                                                            <div className="tooltip1">
                                                                <p><i className="fa fa-filter" aria-hidden="true"></i> &nbsp;6 filters</p>
                                                                <span className="tooltiptext">Risk Classification: <b>Class III</b><br></br>
                                                                    Review Time: <b>&lt;90 days</b><br></br>
                                                                    Medical Specialties: <b>Cardiovascular, Nuerology, Orthoscopy</b></span>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="main-tab-inner-box-middle">
                                                            <p style={{"marginBottom": "0"}}>1 Regulation Numbers</p>
                                                            <ul>
                                                                <li className="contain-list">
                                                                    <p>1 <a href="#">Product Codes</a> </p>
                                                                    <ul>
                                                                        <li>
                                                                            <p>2 <a href="#">510 Applications</a></p>
                                                                        </li>
                                                                        <li>
                                                                            <p>0 <a href="#">PMA Applications</a></p>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        
                                                        <div className="main-tab-inner-box-footer">
                                                            <h6>Saved on Oct 22, 2018</h6>
                                                            <div className="main-tab-inner-box-footer-icon">
                                                                <ul className="list-inline">
                                                                    <li><a href="#"><i className="fa fa-upload" aria-hidden="true"></i></a></li>
                                                                    
                                                                    <li><a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="main-tab-inner-box">
                                                        <div className="main-tab-inner-box-top">
                                                            <div className="main-tab-inner-box-top-head">
                                                                <h4>Knee Replacement</h4>
                                                                <a href="#"><i className="fa fa-external-link" aria-hidden="true"></i></a>
                                                            </div>
                                                            
                                                            <div className="clearfix"></div>
                                                            
                                                            <div className="tooltip1">
                                                                <p><i className="fa fa-filter" aria-hidden="true"></i> &nbsp;Decision Year: 2014-2017</p>
                                                                <span className="tooltiptext">Risk Classification: <b>Class III</b><br></br>
                                                                    Review Time: <b>&lt;90 days</b><br></br>
                                                                    Medical Specialties: <b>Cardiovascular, Nuerology, Orthoscopy</b></span>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="main-tab-inner-box-middle">
                                                            <p style={{"marginBottom": "0"}}>8 Regulation Numbers</p>
                                                            <ul>
                                                                <li className="contain-list">
                                                                    <p>18 <a href="#">Product Codes</a> </p>
                                                                    <ul>
                                                                        <li>
                                                                            <p>67 <a href="#">510 Applications</a></p>
                                                                        </li>
                                                                        <li>
                                                                            <p>5 <a href="#">PMA Applications</a></p>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        
                                                        <div className="main-tab-inner-box-footer">
                                                            <h6>Saved on Jul 9, 2018</h6>
                                                            <div className="main-tab-inner-box-footer-icon">
                                                                <ul className="list-inline">
                                                                    <li><a href="#"><i className="fa fa-upload" aria-hidden="true"></i></a></li>
                                                                    
                                                                    <li><a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="main-tab-inner-box">
                                                        <div className="main-tab-inner-box-top">
                                                            <div className="main-tab-inner-box-top-head">
                                                                <h4>Heart Valve</h4>
                                                                <a href="#"><i className="fa fa-external-link" aria-hidden="true"></i></a>
                                                            </div>
                                                            
                                                            <div className="clearfix"></div>
                                                            
                                                            <div className="tooltip1">
                                                                <p><i className="fa fa-filter" aria-hidden="true"></i> &nbsp;3 filters</p>
                                                                <span className="tooltiptext">Risk Classification: <b>Class III</b><br></br>
                                                                    Review Time: <b>&lt;90 days</b><br></br>
                                                                    Medical Specialties: <b>Cardiovascular, Nuerology, Orthoscopy</b></span>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="main-tab-inner-box-middle">
                                                            <p style={{"margin-bottom" :"0"}}>8 Regulation Numbers</p>
                                                            <ul>
                                                                <li className="contain-list">
                                                                    <p>18 <a href="#">Product Codes</a> </p>
                                                                    <ul>
                                                                        <li>
                                                                            <p>67 <a href="#">510 Applications</a></p>
                                                                        </li>
                                                                        <li>
                                                                            <p>5 <a href="#">PMA Applications</a></p>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        
                                                        <div className="main-tab-inner-box-footer">
                                                            <h6>Saved on May 5, 2019</h6>
                                                            <div className="main-tab-inner-box-footer-icon">
                                                                <ul className="list-inline">
                                                                    <li><a href="#"><i className="fa fa-upload" aria-hidden="true"></i></a></li>
                                                                    
                                                                    <li><a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div className="tab-pane" id="saved-item">
                                    <div className="main-tab">
                                        <div className="sorting-bar">
                                            <h5>5 Saved Items</h5>
                                            <div className="bars pull-right">
                                                <div className="order">    
                                                    <select className="" name="sand">
                                                        <option value="other">New Results</option>
                                                        <option value="2013">New Results</option>
                                                        <option value="2014">New Results</option>
                                                        <option value="2015">New Results</option>
                                                        <option value="2016">New Results</option>
                                                        <option value="2017">New Results</option>    
                                                    </select>
                                                      <h5 style={{"color":"#333"}}>Sort By:</h5>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="clearfix"></div>
                                        
                                        <div className="main-tab-inner-boxes">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="main-tab-inner-box tab-second-box yellow-box">
                                                        <div className="main-tab-inner-box-top">
                                                            <div className="main-tab-inner-box-top-head">
                                                                <h4>Model 5600B Programmer, Pacemaker</h4>
                                                                <span className="label label-warning">510k</span>
                                                            </div>
                                                            
                                                            <div className="clearfix"></div>
                                                        </div>
                                                        
                                                        <div className="main-tab-inner-box-middle">
                                                            <p style={{"marginBottom": "0"}}><span>870.3700</span> Pacemaker Repair or Replacement Material</p>
                                                            <ul>
                                                                <li className="contain-list">
                                                                    <p><a href="#">KRG  Programmer, Pacemaker</a> </p>
                                                                    <ul>
                                                                       
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        
                                                        <div className="main-tab-inner-box-footer">
                                                            <h6>Saved on Apr 5, 2019</h6>
                                                            <div className="main-tab-inner-box-footer-icon">
                                                                <ul className="list-inline">
                                                                    <li><a href="#"><i className="fa fa-upload" aria-hidden="true"></i></a></li>
                                                                    
                                                                    <li><a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="main-tab-inner-box tab-second-box yellow-box">
                                                        <div className="main-tab-inner-box-top">
                                                            <div className="main-tab-inner-box-top-head">
                                                                <h4>Pacemakers, Vitatron's</h4>
                                                                <span className="label label-warning">510k</span>
                                                            </div>
                                                            
                                                            <div className="clearfix"></div>
                                                        </div>
                                                        
                                                        <div className="main-tab-inner-box-middle">
                                                            <p style={{"marginBottom": "0"}}><span>870.3610</span> Pacemaker pulse generator </p>
                                                            <ul>
                                                                <li className="contain-list">
                                                                    <p><a href="#">DXY  Implantable Pacemaker Pulse-Generator</a> </p>
                                                                    <ul>
                                                                       
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        
                                                        <div className="main-tab-inner-box-footer">
                                                            <h6>Saved on Mar 28, 2019</h6>
                                                            <div className="main-tab-inner-box-footer-icon">
                                                                <ul className="list-inline">
                                                                    <li><a href="#"><i className="fa fa-upload" aria-hidden="true"></i></a></li>
                                                                    
                                                                    <li><a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="clearfix"></div>
                                                
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="main-tab-inner-box tab-second-box blue-box">
                                                        <div className="main-tab-inner-box-top">
                                                            <div className="main-tab-inner-box-top-head">
                                                                <h4>870.3640  Indirect Pacemaker Generator Function Analyzer</h4>
                                                                <span className="label label-info">REG</span>
                                                            </div>
                                                            
                                                            <div className="clearfix"></div>
                                                        </div>
                                                        
                                                        <div className="main-tab-inner-box-middle">
                                                            <p style={{"marginBottom": "0", "fontSize":"13px"}}>An indirect pacemaker generator function analyzer is an electrically powered device that is used to determine pacemaker function or pacemaker battery function by periodically monitor…</p>
                                                            
                                                        </div>
                                                        
                                                        <div className="main-tab-inner-box-footer">
                                                            <h6>Saved on Apr 5, 2019</h6>
                                                            <div className="main-tab-inner-box-footer-icon">
                                                                <ul className="list-inline">
                                                                    <li><a href="#"><i className="fa fa-upload" aria-hidden="true"></i></a></li>
                                                                    
                                                                    <li><a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="main-tab-inner-box tab-second-box voilet-box">
                                                        <div className="main-tab-inner-box-top">
                                                            <div className="main-tab-inner-box-top-head">
                                                                <h4>DXY  Implantable Pacemaker Pulse-Generator</h4>
                                                                <span className="label label-primary">PROD</span>
                                                            </div>
                                                            
                                                            <div className="clearfix"></div>
                                                        </div>
                                                        
                                                        <div className="main-tab-inner-box-middle">
                                                            <p style={{"marginBottom": "0"}}><span>870.3610</span> Pacemaker pulse generator</p>
                                                            <ul className="list-inline list-generator">
                                                                <li>
                                                                    <h6>Classification</h6>
                                                                    <h5>Class III</h5>
                                                                </li>
                                                                
                                                                <li>
                                                                    <h6>Medical Specialty</h6>
                                                                    <h5>CV</h5>
                                                                </li>
                                                                
                                                                <li>
                                                                    <h6>Review Panel</h6>
                                                                    <h5>CV</h5>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        
                                                        <div className="main-tab-inner-box-footer">
                                                            <h6>Saved on Mar 28, 2019</h6>
                                                            <div className="main-tab-inner-box-footer-icon">
                                                                <ul className="list-inline">
                                                                    <li><a href="#"><i className="fa fa-upload" aria-hidden="true"></i></a></li>
                                                                    
                                                                    <li><a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="clearfix"></div>
                                                
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="main-tab-inner-box main-tab-inner-box tab-second-box pink-box">
                                                        <div className="main-tab-inner-box-top">
                                                            <div className="main-tab-inner-box-top-head">
                                                                <h4>Model 5600B Programmer, Pacemaker</h4>
                                                                <span className="label label-danger">PMA</span>
                                                            </div>
                                                            
                                                            <div className="clearfix"></div>
                                                        </div>
                                                        
                                                        <div className="main-tab-inner-box-middle">
                                                            <p style={{"marginBottom": "0"}}><span>870.3700</span> Pacemaker Repair or Replacement Material</p>
                                                            <ul>
                                                                <li className="contain-list">
                                                                    <p><a href="#">LWP  Implantable Pulse Generator, Pacemaker (Non-Crt)</a> </p>
                                                                    <ul>
                                                                       
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        
                                                        <div className="main-tab-inner-box-footer">
                                                            <h6>Saved on Mar 28, 2019</h6>
                                                            <div className="main-tab-inner-box-footer-icon">
                                                                <ul className="list-inline">
                                                                    <li><a href="#"><i className="fa fa-upload" aria-hidden="true"></i></a></li>
                                                                    
                                                                    <li><a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            {/* </div>
                        </div>
                    </div>

                    <div role="tabpanel" className="tab-pane" id="tab2">
                        <p>
                            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.
                            Summus brains sit, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.
                            Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.
                            Qui animated corpse, cricket bat max brucks terribilem incessu zomby.
                            </p>
                        <p>
                            The voodoo sacerdos flesh eater, suscitat mortuos comedere
                            carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies.
                            Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
                            </p>
                    </div>

                    <div role="tabpanel" className="tab-pane" id="tab3">
                        <p>
                            Lorem ipsizzle dolor away amizzle, consectetuer pizzle elizzle. Nullizzle yo velizzle, check it out volutpizzle, quis, gravida vel, yo.
                            Ma nizzle eget tortor. Sizzle eros. My shizz izzle dolizzle gizzle turpis tempizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle.
                            Maurizzle pellentesque nibh izzle own yo'. Check it out in tortor. Pellentesque fizzle rhoncizzle nisi.
                            </p>
                        <p>
                            In hac habitasse platea dictumst. Shizzlin dizzle dapibus. You son of a bizzle tellizzle urna, pretizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle,
                            ghetto ac, check it out vitae, nunc. Shizzlin dizzle suscipizzle. Integizzle sempizzle velit sizzle dizzle.
                            </p>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default MySave; 