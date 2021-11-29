import axios from 'axios';

export const validToken = async () => {
    const header = {
      'Content-Type': 'application/json',
    };
    const bodyParameters = {
      refreshToken: '059c420e-7424-431f-b23b-af0ecabfe7b8',
      teamId: 'a001994b-918b-4939-8518-3377732e4e88',
    };
    const response = await axios.post(
      'https://api-teams.chatdaddy.tech/token',
      bodyParameters,
      header
    );
     localStorage.setItem('token', response.data.access_token);
  };

  export const apiCall = async (count, value = null) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    };

    const searchContacts = `q=${value}&count=${count}&returnTotalCount=true`;
    const loadData = `count=${count}&returnTotalCount=true`;

    let searchParams = new URLSearchParams(value ? searchContacts : loadData);

    const response = await axios.get(
      `https://api-im.chatdaddy.tech/contacts?${searchParams}`,
      config
    );
    return response;
  };
