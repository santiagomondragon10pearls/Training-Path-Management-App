/// <reference types="react-scripts" />

declare module 'CustomTypes' {
  export interface AlertType {
    id?: string;
    msg: string;
    alertType: string;
    timeout: number;
  }

  export interface UserType {
    _id: string;
    role: string;
    email: string;
    firstName: string;
    middleName: string;
    lastName: string;
  }

  export interface AuthType {
    token: string | null;
    user: UserType | null;
    isAuthenticated: boolean | null;
    isLoading: boolean | null;
  }

  export interface StateType {
    // Alert State Expected Parameter's type
    alert: AlertType[];

    // Auth State Expected Parameter's type
    auth: AuthType;
  }
}
