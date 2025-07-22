import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const DonerDataContext = createContext();

const DonerDataContextProvider = (props) => {
  const [donerData, setDonerData] = useState([])
  const copyDonerData = structuredClone(donerData)
  const [filteredData, setFilteredData] = useState(copyDonerData);
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [token, setToken] = useState('')
  const navigate = useNavigate();

  const changeFilteredData = ({ bloodGroup, location }) => {
    const newFilteredData = filteredData.filter((data) => {
      if (data.bloodgroup === bloodGroup && data.location === location) {
        return data;
      }
    });

    setFilteredData(newFilteredData);
  }

  const getDonerData = async () => {
    const response = await axios.get(`${backendUrl}api/donerdetails/donerdata`)
    // console.log(response.data)

    setDonerData(response.data);
    setFilteredData(response.data);
  }

  useEffect(() => {
    getDonerData()
  }, [])

  useEffect(() => {
    if(!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }
  }, [])

  const value = {
    filteredData,
    changeFilteredData,
    navigate,
    backendUrl,
    token, setToken
  };

  return (
    <DonerDataContext.Provider value={value}>
      {props.children}
    </DonerDataContext.Provider>
  );
};

export default DonerDataContextProvider;