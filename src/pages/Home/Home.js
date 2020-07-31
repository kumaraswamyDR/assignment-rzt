import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getMediaFiles } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Home.module.css";
import ImageListItem from "../../components/ImageListItem/ImageListItem";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Home() {
  const [queryText, setQueryText] = useState("");

  const dispatch = useDispatch();
  let location = useLocation();
  const { mediaFiles, currentPage } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getMediaFiles({ query: queryText, currentPage: currentPage }));
  }, []);

  const onSearch = (queryText) => {
    dispatch(getMediaFiles({ query: queryText, currentPage: 1 }));
    setQueryText(queryText);
  };

  const loadMore = () => {
    dispatch(getMediaFiles({ query: queryText, currentPage: currentPage }));
  };

  return (
    <div>
      <div className={styles.searchBarContainer}>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className={styles.row}>
        {mediaFiles &&
          mediaFiles.length > 0 &&
          mediaFiles.map((media) => {
            return (
              <div key={media.id} className={styles.mediaLayout}>
                <ImageListItem media={media} location={location} />
              </div>
            );
          })}
      </div>
      <button onClick={loadMore} className={styles.loadMore}>
        Load more
      </button>
    </div>
  );
}
