interface Document {
  _id: string;
}

export interface User extends Document {
  username: string;
  password?: string;
}