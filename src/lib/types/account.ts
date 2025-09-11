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

export type AuthResponseType = {
  access: string;
  refresh: string;
  user: UserProfile;
};

export interface LoginRequest {
  data: {
    email: string;
    password: string;
  };
}

export interface RegisterRequest {
  data: {
    username?: string;
    first_name: string;
    last_name?: string;
    email: string;
    password1: string;
    password2: string;
  };
}
