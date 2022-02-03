import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from '../../redux/filter/filter-selectors';
import { changeFilter } from '../../redux/filter/filter-actions';
import s from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilterValue);
  return (
    <label className={s.label}>
      <span className={s.title}>Find contacts by name</span>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={({ target }) => dispatch(changeFilter(target.value))}
      />
    </label>
  );
}
