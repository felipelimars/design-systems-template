import { ChakraBaseProvider } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import SocialProfileSimple from "./components/card";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response)
      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  return (
    <ChakraBaseProvider>
      {users.map((user) => {
        return <SocialProfileSimple key={users.name} user={user}/>
      })}
    </ChakraBaseProvider>
  );
}
