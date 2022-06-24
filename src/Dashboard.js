// //1.
// import React from 'react';
// import Amplify from 'aws-amplify';
// //2.
// import awsExports from '../aws-exports';
// //3.
// import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'
// //4.
// Amplify.configure(awsExports)
// function Dashboard() {
//  return(
    
//     <div>
//         <AmplifySignOut/> 
//         <h1>This is your logged in dashboard.</h1>
//     </div>
//  )
// }
// //6.
// export default withAuthenticator(Dashboard)




// Second version
import React from 'react';
import './App.css';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function Dashboard() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <p>
            Hey {user.username}, welcome to my channel, with auth!
          </p>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default Dashboard;


// import { Amplify } from 'aws-amplify';

// import { Authenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';

// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

// export default function App() {
//   return (
//     <Authenticator>
//       {({ signOut, user }) => (
//         <main>
//           <h1>Hello {user.username}</h1>
//           <button onClick={signOut}>Sign out</button>
//         </main>
//       )}
//     </Authenticator>
//   );
// }
// React Authenticator