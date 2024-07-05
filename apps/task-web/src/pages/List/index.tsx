import { Box, Stack, ListItemAvatar, Avatar, Typography } from '@mui/material';

import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import { DataTable } from '../../components/DataTable';
import { UserProfile, useUserList } from '../../hook/useUserList';
import { useCreateUser } from '../../hook/useCreateUser';
import AddUserModal from '../../components/AddUserModal';
import { useState } from 'react';

const columns = [
  {
    Header: 'ID',
    accessor: 'Id',
  },
  {
    Header: 'Usuario',
    accessor: 'Usuario',
    Cell: ({ row }: { row: any }) => {
      const { Avatar: avatarUrl, Username: username } = row.original;

      return (
        <Box display="flex" alignItems="center">
          <ListItemAvatar>
            <Avatar src={avatarUrl} alt="User Avatar" />
          </ListItemAvatar>
          <Typography>{username}</Typography>
        </Box>
      );
    },
  },
  {
    Header: 'Email',
    accessor: 'Email',
  },
];

const ListManager = () => {
  const { data, isPending, isError, refetch } = useUserList();
  const [isModalOpen, setModalOpen] = useState(false);

  if (isError) {
    return <div>An unexpected error occurred.</div>;
  }

  if (!data) {
    return null;
  }


  const mockData = data?.map((user: UserProfile) => {
    return {
      Id: user.Id,
      Username: user.Username,
      Email: user.Email,
      Avatar: user.ImagenPerfilSrc,
    };
  });

  const handleAddClick = () => {
    setModalOpen(true);
  };


  return (
    <Layout>
      <Navbar title={'List'} />

      <Box
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack
          direction="column"
          justifyContent={'center'}
          sx={{
            width: '100%',
            height: '100%',
            gap: '20px',
            padding: '20px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '100px',
            }}
          >
            <DataTable
              data={mockData || []}
              columns={columns}
              loading={isPending}
              paginated={true}
              paginatedPosition="center"
              pageSize={5}
              tableTitle="Lista de usuarios"
              onClickButtonAdd={handleAddClick}
            />
          </Box>
        </Stack>
      </Box>
      <AddUserModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        refetch={refetch}
      />
    </Layout>
  );
};

export default ListManager;
