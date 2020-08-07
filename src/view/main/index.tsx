import React from "react";
import axios from "axios";
import { useUser } from "../../store/UserContext";
import AccountInfo from "../../components/accountInfo";
import EngagementChart from "../../components/engagementRate/index";
import LastPosts from "../../components/lastPosts";
import ProfilePic from "../../components/profilePics";
import SearchBox from "../../components/searchBox";
import Snackbar from "../../components/snackbar";
const Main = () => {
  const [openSnack, setOpenSnack] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { user, setUser } = useUser()!;
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };
  const SubmitRequest = async (userId: string) => {
    setLoading(true);
    const data = await axios.get(`https://www.instagram.com/${userId}/?__a=1`);
    if (!data.data.graphql.user.is_private) {
      console.log(data.data);
      setUser({ ...user, ...data.data.graphql.user });
      setLoading(false);
    } else {
      setOpenSnack(true);
      setLoading(false);
    }
  };
  return (
    <div>
      <SearchBox
        title="Enter your Instagram username"
        placeholder="Enter your Instagram username"
        submit={SubmitRequest}
        loading={loading}
      />

      <ProfilePic
        profileApi={user?.profile_pic_url_hd}
        name={user?.full_name}
        userName={user?.username}
        dataSource={user?.edge_owner_to_timeline_media}
      />
      <AccountInfo
        followers={user?.edge_followed_by}
        following={user?.edge_follow}
        post={user?.edge_owner_to_timeline_media}
      />
      <EngagementChart dataSource={user?.edge_owner_to_timeline_media} />
      <LastPosts dataSource={user?.edge_owner_to_timeline_media} />
      <Snackbar open={openSnack} handleClose={handleClose} />
    </div>
  );
};

export default Main;
