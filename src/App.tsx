import React, { useState } from 'react';
import Header from './components/header';
import './App.css';
import SearchBox from "./components/searchBox";
import axios from "axios";
import ProfilePic from "./components/profilePics";
import AccountInfo from "./components/accountInfo";
import EngagementChart from "./components/engagementRate/index";
import LastPosts from './components/lastPosts';
import Footer from "./components/footer";
import Snackbar from "./components/snackbar";





function App() {
  interface IUser {
    [key: string]: any
  }
  const [userData, SetUserData] = useState<IUser>({ user: {} });
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { user } = userData;
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }
  const SubmitRequest = (async (userId: string) => {
    setLoading(true);
    // SetUserData({ ...userData, id: userId });
    const data = await axios.get(`https://www.instagram.com/${userId}/?__a=1`);
    if (!data.data.graphql.user.is_private) {
      SetUserData({ ...userData, user: data.data.graphql.user });
      setLoading(false);

    } else {
      setOpen(true);
      setLoading(false);

    }
  })
  return (
    <div className="App">
      <Header />
      <SearchBox title="Enter your Instagram username" placeholder="Enter your Instagram username"
        submit={SubmitRequest}
        loading={loading} />
      <ProfilePic
        profileApi={user?.profile_pic_url_hd}
        name={user && user.full_name}
        userName={user && user.username}
        dataSource={user && user.edge_owner_to_timeline_media}
      />
      <AccountInfo followers={user && user.edge_followed_by}
        following={user && user.edge_follow}
        post={user && user.edge_owner_to_timeline_media} />
      <EngagementChart dataSource={user && user.edge_owner_to_timeline_media} />
      <LastPosts dataSource={user && user.edge_owner_to_timeline_media} />
      <Snackbar open={open} handleClose={handleClose} />
      <Footer />
    </div>
  );
}

export default App;
