export type UserAccessToken = {
  access: string;
  refresh: string;
};


export type UserProfile = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  follower_count: string;
  following_count: string;
  is_following: string;
  is_active: boolean;
  
};

export type FinalizeGoogleLoginType = {
  access: string;
  refresh: string;
  user: UserProfile;
};