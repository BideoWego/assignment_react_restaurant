import React from 'react';


class Form extends React.Component {
  render() {
    const formGroupElements = [];
    this.props.formGroups.forEach((formGroup, index) => {
      let label = (
        <Label inputId={ formGroup.input.id }>
          { formGroup.label.title }
        </Label>
      );

      let input = (
        <Input
          type={ formGroup.input.type }
          id={ formGroup.input.id }
          name={ formGroup.input.name } />
      );

      let formGroupElement = (
        <FormGroup key={ `${ this.props.name }-form-group-${ index }` }>
          { label }
          { input }
        </FormGroup>
      );

      formGroupElements.push(formGroupElement);
    });

    return (
      <form action="/" method={ this.props.method || 'get' }>
        { formGroupElements }
        <SubmitButton />
      </form>
    );
  }
}


const FormGroup = (props) => {
  return (
    <div className="form-group">
      { props.children }
    </div>
  );
};


const Input = (props) => {
  return (
    <input
      type={ props.type || 'text' }
      id={ props.id }
      name={ props.name }
      className="form-control" />
  );
};


const Label = (props) => {
  const inputId = props.inputId;

  return (
    <label htmlFor={ inputId }>
      { props.children }
    </label>
  );
};


const SubmitButton = () => {
  return (
    <input
      type="submit"
      value="Submit"
      className="btn btn-primary" />
  );
};




export default Form;





