import React from "react";
import { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [data, setData] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const getMeaning = () => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
      .then((response) => {
        setData(response.data[0]);
        console.log(data);
      });
  };

  const playAudio = () => {
    const audioUrl = () => {
      let url = "";
      data.phonetics.map((item) => {
        return item.audio !== "" ? (url = item.audio) : "";
      });

      return url;
    };
    console.log(audioUrl());
    let audio = new Audio(audioUrl());
    audio.play();
  };

  return (
    <div className="search-wrapper">
      <div className="search-box">
        <input
          type={"search"}
          className="search-field"
          placeholder="Search"
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
        <div className="search-btn-wrapper">
          <button
            className="search-btn"
            onClick={() => {
              getMeaning();
            }}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>

      {data && (
        <div className="ShownResults">
          <h2>
            {data.word}{" "}
            <button
              className="speaker-btn"
              onClick={() => {
                playAudio();
              }}
            >
              <i className="fa fa-volume-up speakerIcon"></i>
            </button>
          </h2>
          <h4>Part of speech:</h4>
          <p>{data.meanings[0].partOfSpeech}</p>
          <h4>Definition:</h4>
          <p>{data.meanings[0].definitions[0].definition}</p>
          <h4>Examples:</h4>
          <p>{data.meanings[0].definitions[0].example}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
