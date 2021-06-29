import React from "react";
import "../css/education.css";
function Education(){
    return (
        <div className="edu-section" name="education">
            <h1>Education</h1>

            <div class="timeline"> 
  <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
    <div class="timeline__event__icon ">
    <i class="fas fa-university"></i>

    </div>
    <div class="timeline__event__date">
      2019-Present
    </div>
    {/* <div class="timeline__event__content ">
      <div class="timeline__event__title">
        Birthday
      </div>
      <div class="timeline__event__description">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
      </div>
    </div> */}
  {/* </div>
  <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-burger"></i>

    </div> */}
    {/* <div class="timeline__event__date">
      20-08-2019
    </div> */}
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        Kalinga Institute of Industrial Technology
      </div>
      <div class="timeline__event__description">
        <p>Bachelor of Technology (B.Tech) in Computer Science and Engineering.
        <br></br>
        CGPA : 9.32 / 10
        <br></br>
        Semester : 5th
        </p>
      </div>
    </div>
  </div>
  <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
    <div class="timeline__event__icon">
    <i class="fas fa-school"></i>

    </div>
    <div class="timeline__event__date">
      2016-2018
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
      Arambagh Vivekananda Academy
      </div>
      <div class="timeline__event__description">
        <p>
        Stream : Science
        <br></br>
        Board : CBSE
        <br></br>
        Senior-Secondary (+2) Exam : 87.2 %
        </p>
      </div>

    </div>
  </div>
  <div class="timeline__event animated fadeInUp timeline__event--type1">
    <div class="timeline__event__icon">
    <i class="fas fa-school"></i>

    </div>
    <div class="timeline__event__date">
      2007-2016
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        Arambagh Vivekananda Academy
      </div>
      <div class="timeline__event__description">
        <p>
        Board : CBSE
        <br></br>
        Secondary Exam : 10 CGPA         
        </p>
      </div>
    </div>
  </div>

</div>


        </div>
    );
}
export default Education;