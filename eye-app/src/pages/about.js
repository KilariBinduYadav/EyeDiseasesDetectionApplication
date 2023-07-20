import React from "react";
import style from "../styles/about.modules.css";
import { useState } from "react";


const About = () => {
    const [Cshow, setCShow] = useState(false);
    const [Gshow, setGShow] = useState(false);
    const [Ashow, setAShow] = useState(false);
    const [Mshow, setMShow] = useState(false);
    return (
        <div class='cardContainer'>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                    {/* <img class="card-img-top" src="../images/normal_left.jpg" alt="Card image"></img> */}
                    <div class="card-body">
                        
                        <h5 class="card-title">Cataract</h5>
                        <p class="card-text">Cataracts are cloudy lens in the eye, whatever the cause. It is clouding of the eye's natural lens.</p>
                        <button class="btn btn-primary" onClick={() => setCShow(!Cshow)}>Know More</button>
                        <div>
                            {Cshow? 
                            <p class="card-text" style={{padding:'10px'}}>A cataract is a cloudy area in the lens of your eye (the clear part of the eye that helps to focus light). Cataracts are very common as you get older. In fact, more than half of all Americans age 80 or older either have cataracts or have had surgery to get rid of cataracts. 
                            Cataracts are difficult to notice in the start. Later it blurs the vision.Most cataracts are related to age. Visit the Link: <a href="https://en.wikipedia.org/wiki/Cataract">Cataract Disease</a></p>
                             : null}
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Glaucoma</h5>
                        <p class="card-text">Glaucoma is an eye disease that irreversibly and permanently affects the optic nerve. </p>
                        <button class="btn btn-primary" onClick={() => setGShow(!Gshow)}>Know More</button>
                        <div>
                            {Gshow? 
                            <p class="card-text" style={{padding:'10px'}}>Glaucoma is an eye disease that irreversibly and permanently affects the optic nerve (structural damage). The optic nerve is the part of the eye through which passes all the visual information captured by the eye. This information travels through the optic nerve and is transmitted to the brain.
                             Glaucoma is a very common disease that affects people of all ages. Visit the Link: <a href="https://en.wikipedia.org/wiki/Glaucoma">Glaucoma Disease</a></p>
                             : null}
                        </div>
                    </div>
                    </div>
                </div> 
            </div>
            <br></br>
            <div class="row" >
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Pathological Myopia</h5>
                        <p class="card-text">Pathologic myopia represents a subgroup of myopia. It is usually an isolated condition with no systemic associations</p>
                        <button class="btn btn-primary" onClick={() => setMShow(!Mshow)}>Know More</button>
                        <div>
                            {Mshow? 
                            <p class="card-text" style={{padding:'10px'}}>Pathologic myopia is highly myopic eyes with degenerative macular changes that present with different patterns and degrees of chorioretinal atrophy and specific findings including lacquer cracks, myopic CNV, and Fuchs' spot. 
                            Vision loss related to pathologic myopia is of great clinical significance as it can be progressive, irreversible and affects individuals during their most productive years. Visit the Link: <a href="https://simple.wikipedia.org/wiki/Myopia">Myopia Disease</a></p>
                             : null}
                        </div>
                    </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Age Related Macular Degeneration</h5>
                        <p class="card-text">Age-related macular degeneration (AMD) is an eye disease that can blur your central vision. It happens when aging causes damage to the macula.</p>
                        <button class="btn btn-primary" onClick={() => setAShow(!Ashow)}>Know More</button>
                        <div>
                            {Ashow? 
                            <p class="card-text" style={{padding:'10px'}}>AMD is a common condition — it’s a leading cause of vision loss for older adults. AMD doesn’t cause complete blindness, but losing your central vision can make it harder to see faces, read, drive, or do close-up work like cooking or fixing things around the house. 
                             AMD happens very slowly in some people and faster in others. If you have early AMD, you may not notice vision loss for a long time. Visit the Link: <a href="https://en.wikipedia.org/wiki/Macular_degeneration">AMD Disease</a></p>
                             : null}
                        </div>
                    </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default About;
