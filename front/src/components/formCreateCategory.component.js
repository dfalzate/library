import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  onCategoryNameChange,
  onCreateCategory,
} from '../reducers/category.reducer';

function FormCreateCategory(props) {
  function onSubmit(event) {
    event.preventDefault();
    const category = {
      name: props.categoryName,
    };
    axios({
      method: 'post',
      url: 'http://localhost:3000/categories',
      headers: {
        'Content-Type': 'application/json',
        authorization: sessionStorage.token,
      },
      data: category,
    }).then((data) => {
      if (data.status === 200) {
        props.onCreateCategory(data.data);
      }
    });
  }
  return (
    <div className="createCategory" onSubmit={onSubmit}>
      <h2>Crear categoria</h2>
      <form>
        <label>Nombre de la categoria</label>
        <input onChange={props.onCategoryNameChange} />
        <button>Crear</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categoryName: state.createCategoryReducer.categoryName,
  };
};

const mapDispatchToProps = {
  onCategoryNameChange,
  onCreateCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormCreateCategory);
