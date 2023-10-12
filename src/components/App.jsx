import React from 'react';
import user from '../components/all-json/user';
import data from '../components/all-json/data';
// import friends from '../components/all-json/friends';
import transactions from '../components/all-json/transactions';
import { Profiler } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
// import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';




export const App = () => {
  return (
    <div>
  <Profiler
username={user.username}
tag={user.tag}
location={user.location}
avatar={user.avatar}
stats={user.stats}
/>

<Statistics title="Upload stats" stats={data}/>

{/* <FriendList friends={friends} />; */}

<TransactionHistory items={transactions} />;

</div>
  );
};

