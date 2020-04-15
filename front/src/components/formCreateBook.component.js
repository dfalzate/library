import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  onTitleChange,
  onDescriptionChange,
  onAuhorChange,
  getCategoryId,
} from '../reducers/book.reducer';

function FormCreateBook(props) {
  function onSubmit(event) {
    event.preventDefault();
    const book = {
      title: props.title,
      description: props.description,
      author: props.author,
      category: props.categoryId,
    };
    axios({
      method: 'post',
      url: `http://localhost:3000/categories/${book.category}/books`,
      headers: {
        'Content-Type': 'application/json',
        authorization: sessionStorage.token,
      },
      data: book,
    }).then((data) => console.log('Create book', data));
  }
  return (
    <form onSubmit={onSubmit}>
      <label>Título</label>
      <input onChange={props.onTitleChange} />
      <label>Descripción</label>
      <input onChange={props.onDescriptionChange} />
      <label>Autor</label>
      <input onChange={props.onAuhorChange} />
      <button>Crear</button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  title: state.bookReducer.title,
  description: state.bookReducer.description,
  author: state.bookReducer.author,
  categoryId: state.bookReducer.categoryId,
});

const mapDispatchToProps = {
  onTitleChange,
  onDescriptionChange,
  onAuhorChange,
  getCategoryId,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormCreateBook);
