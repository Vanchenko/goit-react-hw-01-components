import React from "react";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/Friendlist";
import { TransactHistory } from "./TransactionHistory/Trasactionhistory";
import user from './Profile/user';
import data from './Statistics/data';
import friends from './FriendList/friends.json'
import transactions from './TransactionHistory/transactions.json'

export const App = () => {
  return (
    <>
      <Profile
        username={ user.username }
        tag={ user.tag }
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} 
         />
      <Statistics title="Upload stats" data={data} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactHistory items={transactions} />
    </>
  );
};
