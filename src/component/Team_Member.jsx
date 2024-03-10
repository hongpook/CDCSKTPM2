
import { memo } from 'react';

import team_1 from '../assets/imgs/about/team-1.jpg';
import team_2 from '../assets/imgs/about/team-2.jpg';
import team_3 from '../assets/imgs/about/team-3.jpg';
import team_4 from '../assets/imgs/about/team-4.jpg';

const TeamMember = () =>{
    return (
        <>
            <section class="team spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <span>Our Team</span>
                                <h2>Meet Our Team</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="team__item">
                                <img src={team_1} alt=""/>
                                <h4>John Smith</h4>
                                <span>Fashion Design</span>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="team__item">
                                <img src={team_2} alt=""/>
                                <h4>Christine Wise</h4>
                                <span>C.E.O</span>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="team__item">
                                <img src={team_3} alt=""/>
                                <h4>Sean Robbins</h4>
                                <span>Manager</span>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="team__item">
                                <img src={team_4} alt=""/>
                                <h4>Lucy Myers</h4>
                                <span>Delivery</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(TeamMember);