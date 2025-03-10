import { Actions, ActionType } from '@paljs/ui/Actions';
import { Card, CardBody } from '@paljs/ui/Card';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Link from 'next/link';
import Layout from 'Layouts';
import { useQuery } from '@tanstack/react-query';
import { fetchTodo } from 'redux/react-query/lib/testApi';
import { Button } from '@paljs/ui';

const QueryTest = () => {
  const {
    data: todos,
    isLoading: isTodosLoadig,
    error: todosError,
    refetch: todosRefetch,
  } = useQuery({
    queryKey: ['testTodo'],
    queryFn: fetchTodo,
  });
  const items: ActionType[] = [
    {
      icon: 'home',
      disabled: true,
      badge: {
        status: 'Primary',
        title: '22',
        position: 'topStart',
      },
    },
    {
      icon: 'star-outline',
      badge: {
        status: 'Info',
        title: '55+',
        position: 'topStart',
      },
    },
    {
      icon: 'toggle-right-outline',
      badge: {
        status: 'Success',
        title: '34',
        position: 'topStart',
      },
    },
    {
      icon: 'browser-outline',
      link: { href: '/' },
      badge: {
        status: 'Danger',
        title: '34',
        position: 'topStart',
      },
    },
    {
      content: 'Action',
      badge: {
        status: 'Primary',
        title: '23',
        position: 'topStart',
      },
    },
  ];
  return (
    <Layout title="Actions">
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card>
            <CardBody>
              <Actions Link={Link} size="Large" actions={items} />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Actions Link={Link} size="Medium" actions={items} />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Actions Link={Link} size="Small" actions={items} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>{JSON.stringify(todos)} </Row>
      <Button
        onClick={() => {
          todosRefetch();
        }}
      >
        refresh
      </Button>
    </Layout>
  );
};
export default QueryTest;
