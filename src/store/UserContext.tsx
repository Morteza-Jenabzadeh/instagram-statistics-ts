import React from "react";

const defaultUser = {
  username: "",
  profile_pic_url_hd: "",
  full_name: "",
  edge_owner_to_timeline_media: {},
  edge_followed_by: {},
  edge_follow: {},
};
type Props = {
  children: React.ReactNode;
};
interface IUser {
  // [key: string]: any;
  username: string;
  profile_pic_url_hd: string;
  full_name: string;
  edge_owner_to_timeline_media: { [key: string]: any };
  edge_followed_by: { [key: string]: any };
  edge_follow: { [key: string]: any };
}
type UserContextType = {
  user: IUser;
  setUser: (value: IUser) => void;
};
const UserContext = React.createContext<UserContextType | undefined>(undefined);
export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = React.useState(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => React.useContext(UserContext);
