import React, { Component } from 'react';

import { Container } from './styles';

import PostItem from '../PostItem/PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Dalida Saad',
          avatar: 'https://i.pravatar.cc/150?img=5'
        },
        date: '10 Jul 2019',
        content:
          'Pessoal, vocês sabem me informar se a Rocketseat está contratando? :D',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            date: '11 Jul 2019',
            content:
              'Opa, estamos sempre em busca de desenvolvedores para o nosso time!'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Fernando Costa',
          avatar: 'https://i.pravatar.cc/150?img=8'
        },
        date: '11 Jul 2019',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 1,
            author: {
              name: 'Dalida Saad',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '12 Jul 2019',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 5,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            date: '12 Jul 2019',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <Container>
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </Container>
    );
  }
}

export default PostList;
