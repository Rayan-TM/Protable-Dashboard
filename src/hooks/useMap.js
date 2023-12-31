import React, {useState} from "react";

export default function useMap() {
    const [countryName, setCountryName] = useState("");
    const [mapTitle, setMapTitle] = useState({})
  
    function getData(e) {
      setCountryName(e.target.getAttribute("title"));
      setMapTitle({
        top: e.pageY - 1470,
        left: e.pageX - 610,
      })
    }
  
    function removeData() {
      setCountryName("")
    }

    return {countryName, mapTitle, getData, removeData}
}
