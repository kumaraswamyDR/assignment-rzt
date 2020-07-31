import React from 'react'
import styles from './ImageModal.module.css'
import {useHistory, useParams} from "react-router";
import {useSelector} from "react-redux";
import close from '../../assets/icons/close.svg'
import {downloadImage} from "../../utils/utils";

export default function ImageModal() {

    const mediaFiles = useSelector(state => state.mediaFiles);
    let history = useHistory();

    let { id } = useParams();
    let media = mediaFiles.find(media=> media.id === id);

    const closeModal = () => {
        history.goBack()
    };

    const download = (url,fileName) =>{
        downloadImage(url,fileName)
    };

    return (
        <div className={styles.modal}onScroll={()=> {}} onClick={closeModal}>
            {media &&
            <div className={styles.modalContent} onClick={(event)=> event.stopPropagation()}>
                <img className={styles.close} alt={"close"} src={close} onClick={closeModal}/>
                <div className={styles.userInfoLayoutContainer}>
                    <img className={styles.userAvatar} alt="user-avatar" src={media.user.profile_image.medium}/>
                    <div className={styles.userInfoLayout}>
                        <p className={styles.imageUserInfo}>{media.user.name}</p>
                        <p className={styles.twitterInfo}>@{media.user.username}</p>
                    </div>
                </div>
                <img alt={"media-url"} className={styles.media} src={media.urls.full}/>
                <a onClick={()=>download(media.urls.full,media.id)} className={styles.download} href={media.urls.full} download="AwesomeImage.png" >Download</a>
            </div>}
        </div>
    )
}
