import React from "react";
import MenuItem from "../menu-item/menu_item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {selectDirectorySections} from '../../redux/directory/directory.selector'

import "../../styles/components/directory/directory.styles.scss";

//Create a class to get the products and display in the page
const Directory = ({sections}) => (

  // render the products using map
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );

    const mapStateToProps =  createStructuredSelector({
      sections:selectDirectorySections
    })



export default connect(mapStateToProps) (Directory);

//every other key value will be get by the otherSectionProps
