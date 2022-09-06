import { NextApiRequest, NextApiResponse } from "next";

const UserList = (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Igor" },
    { id: 2, name: "Polyane" },
    { id: 3, name: "Maria" },
  ];

  return response.json(users);
};

export default UserList;
