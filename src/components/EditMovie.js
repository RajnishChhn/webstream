import React from 'react';
import { Formik } from 'formik';
import '../style.scss';

const EditMovie = ({selected}) => (
  <div className="EditMovie">
    <h1>My Form</h1>
    <Formik
      initialValues={{ title: selected.title }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={props => (
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.title}
            title="title"
          />
          {props.errors.title && <div id="feedback">{props.errors.title}</div>}
          <button type="submit">Submit</button>
        </form>
      )}
    />
  </div>
);

export default EditMovie;
