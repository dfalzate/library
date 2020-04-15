import React from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../reducers/category.reducer';
import { getCategoryId } from '../reducers/book.reducer';

function Categories({ getCategories, getCategoryId, categories, history }) {
  React.useEffect(() => {
    getCategories();
  }, [getCategories]);

  function onPress(event) {
    getCategoryId(event.target.dataset.id);
    history.push(`/books`);
  }
  return (
    <div className="categories">
      {categories.map((category) => (
        <div key={category._id}>
          <h2>{category.name}</h2>
          <button data-id={category._id} onClick={onPress}>
            Crear libro
          </button>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  categories: state.createCategoryReducer.categories,
});

const mapDispatchToProps = {
  getCategories,
  getCategoryId,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
