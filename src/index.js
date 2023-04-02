import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Profile } from 'components/profile/Profile';
import user from './components/profile/user.json';
import data from './components/statistics/data.json'
import friends from './components/friendList/friends.json'
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friendList/FriendList';
import { TransactionHistory } from 'components/transactionHistory/TransactionHistory';
import transaction from './components/transactionHistory/transaction.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
 </App> 
  </React.StrictMode>
);