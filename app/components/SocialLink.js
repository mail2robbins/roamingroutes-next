"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
const SocialLink = ({ itemClass, href, icon }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
        <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
      </a>
    </li>
  );
};
export default SocialLink;
