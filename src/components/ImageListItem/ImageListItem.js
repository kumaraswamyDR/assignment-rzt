import React from "react";
import { Link } from "react-router-dom";
import styles from "../../pages/Home/Home.module.css";

export default function ImageListItem({ media, location }) {
  return (
    <>
      <Link
        key={media.id}
        to={{ pathname: `/media/${media.id}`, state: { background: location } }}
      >
        <img
          alt="media-image"
          className={styles.mediaImage}
          src={media.urls.regular}
        />
        <div className={styles.mediaInfo}>
          <img
            alt="user-avatar"
            className={styles.userAvatar}
            src={media.user.profile_image.medium}
          />
          <p className={styles.imageInfo}>
            Image by{" "}
            <span className={styles.imageUserInfo}>{media.user.username}</span>
          </p>
        </div>
      </Link>
    </>
  );
}
