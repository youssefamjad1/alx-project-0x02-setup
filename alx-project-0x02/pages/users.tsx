import React, { useEffect, useState } from 'react';
import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container mx-auto p-8">
      <Header />
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
