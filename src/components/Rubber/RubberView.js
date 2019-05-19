import React from 'react';
import '../../scss/docs.css';
import { HashLink as Link } from 'react-router-hash-link';
import RubberType from './RubberType';
import RubberThickness from './RubberThickness';
import strings from './../../assets/locales/index';

const RubberView = (props) => {
  return (
    <div className="RubberView docs col-md-6 offset-md-2">
      <div className="breadcrumbs">{strings.rubber.guide}</div>
      <div className="title">{strings.rubber.title}</div>
      <div className="links">
        <Link smooth to="/rubbers#rubber-type">{strings.rubber.link1}</Link>
        <Link smooth to="/rubbers#rubber-thickness">{strings.rubber.link2}</Link>
        <Link smooth to="/rubbers#edges-thickness">{strings.rubber.link3}</Link>
      </div>
      <div className="common-text anchor-text-padding">
        {strings.rubber.intro.part1}
        <ul>
          <li>{strings.rubber.intro.part2}
          </li>
          <li>{strings.rubber.intro.part3}
          </li>
          <li>{strings.rubber.intro.part4}
          </li>
          <li>{strings.rubber.part5}
          </li>
        </ul>


      </div>
      <div className="anchor-title" id="rubber-type">
        {strings.rubber.ad1.title}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.rubber.ad1.desc}
      </div>
      <RubberType
        index={1}
        name={strings.rubber.rubberTypes.name1}
        description={strings.rubber.rubberTypes.desc1}
        thickness={50}
        friction={20}
        edge={60}
      />
      <RubberType
        name={strings.rubber.rubberTypes.name1}
        description={strings.rubber.rubberTypes.desc1}
        thickness={50}
        friction={20}
        edge={60}
      />
      <div className="anchor-title" id="rubber-thickness">
        {strings.rubber.ad2.title}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.rubber.ad1.desc}
      </div>
      <RubberThickness
        name={strings.rubber.rubberThickness.name1}
        description={strings.rubber.rubberThickness.desc1}
      />
      <RubberThickness
        name={strings.rubber.rubberThickness.name2}
        description={strings.rubber.rubberThickness.desc2}
      />
      <RubberThickness
        name={strings.rubber.rubberThickness.name2}
        description={strings.rubber.rubberThickness.desc2}
      />
      <div className="anchor-title" id="edges-thickness">
        {strings.rubber.ad3.title}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.rubber.ad3.desc}
      </div>
      <div className="rubber-type">
        <div className="row">
          <div className="col-3 rubber-name ">
            {strings.rubber.ad3.standard}
          </div>
          <div className="col-9">
            <div className="common-text anchor-text-padding">
              {strings.rubber.ad3.desc}

              <div style={{fontWeight: 600, color: 'black', paddingTop: 30}}>
                {strings.rubber.ad3.standardHint}
              </div>

            </div>
          </div>
        </div>
        <div className="rubber-type" style={{borderBottom: 'none'}}>
          <div className="row">
            <div className="col-3 rubber-name ">
              {strings.rubber.ad3.plus}
            </div>
            <div className="col-9">
              <div className="common-text anchor-text-padding">
                {strings.rubber.ad3.plusDesc}

                <div style={{fontWeight: 600, color: 'black', paddingTop: 30}}>
                  {strings.rubber.ad3.plusHint1}
                  <ul>
                    <li>
                      {strings.rubber.ad3.plusHint2}
                    </li>
                    <li>
                      {strings.rubber.ad3.plusHint3}
                    </li>
                    <li>
                      {strings.rubber.ad3.plusHint4}
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RubberView;
