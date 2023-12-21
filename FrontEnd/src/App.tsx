import React, { useEffect, useState } from 'react';
import AuthenticationRouter from './Router/AuthenticationRouter';
import UnAuthenticatedRouter from './Router/UnAuthenticatedRouter';
import { DashBoardDetails } from "./APIService/APIService.js"

const App: React.FC = () => {
  const [Token, setToken] = useState(true);


  if (Token === true) {

    useEffect(() => {

      DashBoardDetails().then((res) => {


        const Logo = res.data.data[0].Logo;
        const Title = res.data.data[0].Title;
        const Title_One = res.data.data[0].Title_One;
        const Title_Two = res.data.data[0].Title_Two;
        const Title_Three = res.data.data[0].Title_Three;
        const Title_Four = res.data.data[0].Title_Four;
        const Title_Five = res.data.data[0].Title_Five;
        const Section_One = res.data.data[0].Section_One;
        const Section_Two = res.data.data[0].Section_Two;
        const Section_Three = res.data.data[0].Section_Three;
        const Section_Four = res.data.data[0].Section_Four;
        const Section_Five = res.data.data[0].Section_Five;

        localStorage.setItem('Logo', Logo);
        localStorage.setItem('Title', Title);
        localStorage.setItem('Title_One', Title_One);
        localStorage.setItem('Title_Two', Title_Two);
        localStorage.setItem('Title_Three', Title_Three);
        localStorage.setItem('Title_Four', Title_Four);
        localStorage.setItem('Title_Five', Title_Five);
        localStorage.setItem('Section_One', Section_One);
        localStorage.setItem('Section_Two', Section_Two);
        localStorage.setItem('Section_Three', Section_Three);
        localStorage.setItem('Section_Four', Section_Four);
        localStorage.setItem('Section_Five', Section_Five);

      });
    }, []);


    return (
      <AuthenticationRouter />
    )

  } else {

    return (
      <UnAuthenticatedRouter />
    )

  }
};

export default App;
