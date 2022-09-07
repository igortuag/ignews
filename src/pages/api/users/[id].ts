import { NextApiRequest, NextApiResponse } from "next";

const UserList = (request: NextApiRequest, response: NextApiResponse) => {
  const id = request.query.id;

  const users = [
    { id: 1, name: "Igor" },
    { id: 2, name: "Polyane" },
    { id: 3, name: "Maria" },
  ];

  const user = users.find((user) => user.id === Number(id));

  return response.json(user);
};

export default UserList;
