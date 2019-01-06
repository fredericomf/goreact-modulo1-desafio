import React from 'react';

import { render } from 'react-dom';

import Header from './components/Header';
import Post from './components/posts/Post';

class App extends React.Component {
  shouldComponentUpdate(_nextProps, _nextState) {
    return true;
  }

  render() {
    const posts = [
      {
        avatar:
          'data:image/jpeg;base64,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',
        author: 'Frederico Mottinha de Figueiredo',
        sinceTime: 'há 3 minutos',
        post:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper vel elit id suscipit. Vestibulum ligula eros, imperdiet a elit a, pretium egestas quam. Morbi porta tortor quis bibendum pretium. Quisque tellus augue, tempus sed placerat eget, vulputate vitae libero. Maecenas velit mauris, lacinia sit amet volutpat in, dapibus ut lorem. Nunc sed ipsum sodales, tempor dui id, laoreet risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vulputate auctor posuere. Curabitur vulputate dolor id justo interdum pulvinar. Proin nec rutrum enim, rhoncus molestie dui.',
      },
      {
        avatar:
          'data:image/jpeg;base64,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',
        author: 'Rubia Savolksi',
        sinceTime: 'há 10 minutos',
        post:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper vel elit id suscipit. Vestibulum ligula eros, imperdiet a elit a, pretium egestas quam. Morbi porta tortor quis bibendum pretium. Quisque tellus augue, tempus sed placerat eget, vulputate vitae libero. Maecenas velit mauris, lacinia sit amet volutpat in, dapibus ut lorem. Nunc sed ipsum sodales, tempor dui id, laoreet risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vulputate auctor posuere. Curabitur vulputate dolor id justo interdum pulvinar. Proin nec rutrum enim, rhoncus molestie dui.<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra ante sit amet enim cursus convallis in ut nisi. Morbi et quam non leo dictum viverra. Maecenas vel est libero. Aenean id commodo lacus, vitae consequat est. Fusce placerat ultrices bibendum. Phasellus ligula enim, porttitor in arcu id, semper pellentesque odio. Aenean rhoncus porta arcu, id semper justo ultrices vitae. Curabitur sem mi, posuere at sollicitudin placerat, rutrum eget odio. Nulla facilisi.',
      },
      {
        avatar:
          'data:image/png;base64,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',
        author: 'Mr. Mustache',
        sinceTime: 'há 20 minutos',
        post:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper vel elit id suscipit. Vestibulum ligula eros, imperdiet a elit a, pretium egestas quam. Morbi porta tortor quis bibendum pretium. Quisque tellus augue, tempus sed placerat eget, vulputate vitae libero. Maecenas velit mauris, lacinia sit amet volutpat in, dapibus ut lorem. Nunc sed ipsum sodales, tempor dui id, laoreet risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vulputate auctor posuere. Curabitur vulputate dolor id justo interdum pulvinar. Proin nec rutrum enim, rhoncus molestie dui.<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra ante sit amet enim cursus convallis in ut nisi. Morbi et quam non leo dictum viverra. Maecenas vel est libero. Aenean id commodo lacus, vitae consequat est. Fusce placerat ultrices bibendum. Phasellus ligula enim, porttitor in arcu id, semper pellentesque odio. Aenean rhoncus porta arcu, id semper justo ultrices vitae. Curabitur sem mi, posuere at sollicitudin placerat, rutrum eget odio. Nulla facilisi.',
      },
    ];

    return (
      <React.Fragment>
        <Header />

        {posts.map(data => (
          <Post postData={data} />
        ))}
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
