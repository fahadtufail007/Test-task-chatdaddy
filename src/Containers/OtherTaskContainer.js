import React, { useState, useCallback, useEffect } from 'react';
import { apiCall } from '../utlis/api';
import { validToken } from '../utlis/api';
import { debounce } from 'debounce';

import OtherTaskScreen from '../Screens/OtherTaskScreen/OtherTaskScreen';

var count = 20;

const OtherTaskContainer = () => {

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleData = useCallback(async () => {
    let response = await apiCall(count, null);
    if(response.status === 403 || response.status === 500){
      validToken();
      response = await apiCall(count, null);
    }
    const data = {
      totalCounts: response?.data.totalCount,
      contacts: response?.data.contacts,
    };
    setLoading(false);
    setContacts(data);
  }, []);

  useEffect(() => {
    handleData();
    validToken();
  }, [handleData]);

  const paneDidMount = (node) => {
    if (node) {
      node.addEventListener('scroll', handleScroll);
    }
  };

  const handleScroll = useCallback(
    async (event) => {
      var node = event.target;
      const bottom = node.scrollHeight - node.scrollTop === node.clientHeight;
      if (bottom) {
        count = count + 5;
        setLoading(true);
        handleData();
      }
    },[handleData]);

  const handleChange = debounce((e) => {
    apiCall(count, e.target.value);
  }, 1000);

  return (
    <OtherTaskScreen
      handleChange={handleChange}
      paneDidMount={paneDidMount}
      contacts={contacts}
      loading={loading}
    />
  );
};
export default OtherTaskContainer;
