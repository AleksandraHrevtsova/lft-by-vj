import React, { Component } from 'react';
import Modal from './components/Modal/Modal';
// import shortid from 'shortid';
// import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
// import Header from './components/Header/Header';
// import Counter from './components/Counter/Counter';
// import Dropdown from './components/Dropdown/Dropdown';
// import MessageUpdater from './components/MessageUpdater/MessageUpdater';
// import Input from './components/Input/Input';
// import SignUpForm from './components/SignUpForm/SignUpForm';
import PostEditor from './components/Posts/PostEditor';
import PostFilter from './components/Posts/PostFilter';
import PostsList from './components/Posts/PostsList';
import Legend from './components/Legend/Legend';
import Priority from './utils/Priority';
import * as PostAPI from '../';
// import classes from './App.css';

const containerStyles = {
  maxWidth: 1200,
  minWidth: 800,
  marginLeft: 'auto',
  marginRight: 'auto',
};

const headerStyles = { display: 'flex', justifyContent: 'space-between' };

const filterPosts = (posts, filter) => {
  return posts.filter(post =>
    post.text.toLowerCase().includes(filter.toLowerCase()),
  );
};

const legendOptions = [
  { priority: Priority.LOW, color: '#4caf50' },
  { priority: Priority.NORMAL, color: '#2196f3' },
  { priority: Priority.HIGH, color: '#f44336' },
];

export default class App extends Component {
  state = {
    posts: [],
    filter: '',
    isCreating: false,
    isEditing: false,
    selectedPostId: null,
  };

  /*
   * Get posts
   */
  componentDidMount() {
    PostAPI.fetchPosts().then(posts => {
      this.setState({ posts });
    });
  }

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  /*
   * Create post
   */
  openCreatePostModal = () => {
    this.setState({ isCreating: true });
  };

  closeCreatePostModal = () => {
    this.setState({ isCreating: false });
  };

  addPost = post => {
    const postToAdd = {
      ...post,
      completed: false,
    };

    PostAPI.postPost(postToAdd)
      .then(addedPost => {
        this.setState(state => ({
          posts: [...state.posts, addedPost],
        }));
      })
      .finally(this.closeCreatePostModal);
  };

  /*
   * Delete post
   */
  deletePost = id => {
    PostAPI.deletePost(id).then(() => {
      this.setState(state => ({
        posts: state.posts.filter(post => post.id !== id),
      }));
    });
  };

  /*
   * Update post
   */
  openEditPostModal = id => {
    this.setState({
      isEditing: true,
      selectedPostId: id,
    });
  };

  closeEditPostModal = () => {
    this.setState({
      isEditing: false,
      selectedPostId: null,
    });
  };

  updatePost = ({ text, priority }) => {
    PostAPI.updatePost(this.state.selectedPostId, { text, priority }).then(
      udpatedPost => {
        this.setState(
          state => ({
            posts: state.posts.map(post =>
              post.id === state.selectedPostId ? udpatedPost : post,
            ),
          }),
          this.closeEditPostModal,
        );
      },
    );
  };

  updateCompleted = id => {
    const post = this.state.posts.find(t => t.id === id);

    PostAPI.updatePost(id, { completed: !post.completed }).then(updatedPost => {
      this.setState(state => ({
        posts: state.posts.map(t => (t.id === id ? updatedPost : t)),
      }));
    });
  };

  render() {
    const { posts, filter, isCreating, isEditing, selectedPostId } = this.state;
    const filteredPosts = filterPosts(posts, filter);
    const postInEdit = posts.find(t => t.id === selectedPostId);

    return (
      <div style={containerStyles}>
        <header style={headerStyles}>
          <button type="button" onClick={this.openCreatePostModal}>
            Add post
          </button>
          <Legend items={legendOptions} />
        </header>

        <hr />
        <PostFilter value={filter} onChangeFilter={this.changeFilter} />
        <PostsList
          items={filteredPosts}
          onDeletePost={this.deletePost}
          onUpateCompleted={this.updateCompleted}
          onEditPost={this.openEditPostModal}
        />

        {isCreating && (
          <Modal onClose={this.closeCreatePostModal}>
            <PostEditor
              onSave={this.addPost}
              onCancel={this.closeCreatePostModal}
            />
          </Modal>
        )}

        {isEditing && (
          <Modal onClose={this.closeEditPostModal}>
            <PostEditor
              onSave={this.updatePost}
              onCancel={this.closeEditPostModal}
              text={postInEdit.text}
              priority={postInEdit.priority}
            />
          </Modal>
        )}
      </div>
    );
  }
}

//   // componentDidMount() {
//   //   console.log('componentDidMount');
//   //   const persistedPosts = localStorage.getItem('posts');

//   //   if (persistedPosts) {
//   //     const posts = JSON.parse(persistedPosts);

//   //     this.setState({ posts });
//   //   }
//   // }

//   // componentDidUpdate(prevProps, prevState) {
//   //   console.log('componentDidUpdate');

//   //   const { posts } = this.state;

//   //   if (prevState.posts !== posts) {
//   //     localStorage.setItem('posts', JSON.stringify(posts));
//   //   }
//   // }

//   // changeFilter = e => {
//   //   this.setState({ filter: e.target.value });
//   // };

//   // addPost = post => {
//   //   const postToAdd = {
//   //     ...post,
//   //     id: shortid.generate(),
//   //     completed: false,
//   //   };
//   //   // добавление элементов в коллекцию
//   //   this.setState(state => ({
//   //     posts: [...state.posts, postToAdd],
//   //   }));
//   // };

//   // deletePost = id => {
//   //   this.setState(state => ({
//   //     posts: state.posts.filter(post => post.id !== id),
//   //   }));
//   // };

//   // updateCompleted = id => {
//   //   this.setState(state => ({
//   //     posts: state.posts.map(post =>
//   //       post.id === id ? { ...post, completed: !post.completed } : post,
//   //     ),
//   //   }));
//   // };

//   // updatePriority = (id, priority) => {
//   //   this.setState(state => ({
//   //     posts: state.posts.map(post =>
//   //       post.id === id ? { ...post, priority } : post,
//   //     ),
//   //   }));
//   // };
//   // handleSignUp = credentials => {
//   //   console.log(credentials);
//   // };

//   render() {
//     // console.log('render');
//     // const { posts, filter } = this.state;
//     // const filteredPosts = filterPosts(posts, filter); // отфильтрованный массив данных

//     return (
//       <div>
//         <button onClick={this.openModal}>Open</button>

//         {this.state.isModalOpen && (
//           <Modal onClose={this.closeModal}>
//             <h2>Modal Content</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
//               modi possimus neque maiores, obcaecati inventore laboriosam
//               nostrum rerum? Tempora blanditiis enim nam explicabo perspiciatis.
//               Dolore saepe nihil sint veniam illo!
//             </p>
//             <button onClick={this.closeModal}>Close Modal</button>
//           </Modal>
//         )}
//         {/* <div style={containerStyles}> */}
//         {/* <Counter step={1} initialValue={5} />
//         <Dropdown isOpen={false} />
//         <MessageUpdater />
//         <Input />
//         <SignUpForm onSignUp={this.handleSignUp} /> */}
//         {/* <PostEditor onAddPost={this.addPost} />
//         <hr />
//         <PostFilter value={filter} onChangeFilter={this.changeFilter} />
//         <PostsList
//           items={filteredPosts}
//           onDeletePost={this.deletePost}
//           onUpdateComleted={this.updateCompleted}
//           onUpdatePriority={this.updatePriority}
//         /> */}
//         {/* <Route exact path="/" component={Header} /> */}
//         {/* <Switch /> */}
//       </div>
//     );
//   }
// }

// // App.propTypes = {};
