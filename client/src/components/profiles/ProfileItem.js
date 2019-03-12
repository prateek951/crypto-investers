import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="card border-primary card-body bg-blue mb-3">
        <div className="row card-body">
          <div className="col-2">
            <img
              src={profile.user.avatar}
              alt={profile.user.name}
              className="square"
            />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h1 className="card-title">
              {profile.user.name}
            </h1>
            <p>
              {profile.status}{" "}
              {isEmpty(profile.company) ? null : (
                <span>at {profile.company}</span>
              )}
            </p>
            <p>
              {isEmpty(profile.location) ? null : (
                <span>{profile.location}</span>
              )}
            </p>
            <Link
              type="button"
              to={`/profile/${profile.handle}`}
              className="btn btn-info"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="Tooltip on bottom"
            >
              View Profile
            </Link>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <h4>Skill Set</h4>
            <ul className="list-group">
              {profile.skills.slice(0, 4).map((skill, index) => (
                <li key={index} className="list-group-item">
                  <i className="fa fa-star pr-1" aria-hidden="true" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
