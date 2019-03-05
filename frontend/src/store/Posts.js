// const GetPostsDataType = 'GET_POST_DATA';
const ReceivedPostsDataType = 'RECEIVED_POST_DATA';
const SelectPostType = 'SELECT_POST';
// const ReceivedPostType = 'RECEIVED_POST';
const APIErrorType = 'API_ERROR';

const initialState = {
  posts: [],
  selectedPost: null,
  errorText: null
};

export function getPostsData() {
  return async (dispatch) => {
    // dispatch({type: GetPostsDataType});

    let posts = [];

    const url = 'http://localhost:8000/api/posts/';
    const result = await fetch(url);

    if (result.ok) {
      const json = await result.json();

      json.forEach((item) => {
        posts = posts.concat({id: item.id, title: item.title, body: ''});
      });

      dispatch({type: ReceivedPostsDataType, posts});

      dispatch(getSpecificPost(json[0].id));

    } else {
      const error = '';
      dispatch({type: APIErrorType, error});
      throw result.statusText;

    }
  }
}


export function getSpecificPost(id) {
  return async (dispatch, getState) => {
    const posts = getState().posts;

    let selectedPost = posts.find((post) => {
      return post.id === id
    });

    if (!selectedPost) {
      let error = '';
      dispatch({type: APIErrorType, error})

    } else if (selectedPost.body !== '') {
      dispatch({type: SelectPostType, selectedPost})

    } else {
      const result = await fetch(`http://localhost:8000/api/posts/${id}/`);

      if (result.ok) {
        const post = await result.json();

        let posts = [...getState().posts];
        const index = posts.findIndex((post) => {
          return post.id === id
        });

        if (index === -1) {
          let error = 'Index not found';
          dispatch({type: APIErrorType, error})
        } else {
          posts[index] = post;
          dispatch({type: ReceivedPostsDataType, posts});

          selectedPost = post;
          dispatch({type: SelectPostType, selectedPost});
        }

      } else {
        const error = '';
        dispatch({type: APIErrorType, error});
        throw result.statusText;

      }
    }
  }
}


export function postsReducer(state, action) {
  state = state || initialState;

  if (action.type === ReceivedPostsDataType) {
    return {
      ...state,
      posts: action.posts,
      errorText: null
    }
  }

  if (action.type === SelectPostType) {
    return {
      ...state,
      selectedPost: action.selectedPost,
      errorText: null
    }
  }

  if (action.type === APIErrorType) {
    return {
      ...state,
      errorText: action.error
    }
  }

  return state;
}