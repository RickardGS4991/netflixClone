export type LoginResponse = {
    username: string | null;
    image_path: string | null;
    accessToken?: string;
    refreshToken?: string
  };