import * as React from "react";
import NumberFormat from "react-number-format";

import { Select, SelectField, TextField } from "..";

export const NON_FIELD_ERROR = "nonFieldError";

export interface FormError {
  message: string;
  field?: string;
}

interface FormProps<Values> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  errors?: FormError[];
  data?: Values;
  formRef?: React.RefObject<HTMLFormElement>;
  onSubmit?: (event: React.FormEvent<any>, data: Values) => void;
}

interface FormState<Values> {
  data: Values;
  errors: FormError[];
}

function groupErrorsByFields(
  errors: FormError[]
): { [key: string]: FormError[] } {
  return errors.reduce((o: any, error) => {
    const key = error.field || NON_FIELD_ERROR;
    ((o[key] = o[key]) || []).push(error);
    return o;
  }, {});
}

function removeDuplicatedErrors(errors: FormError[]) {
  const keys: string[] = [];
  return errors.filter(error => {
    const key = error.message + error.field || "";
    const filter = !keys.includes(key);
    keys.push(key);
    return filter;
  });
}

class Form<Values> extends React.Component<
  FormProps<Values>,
  FormState<Values>
> {
  static getDerivedStateFromProps(
    props: FormProps<any>,
    state: FormState<any>
  ) {
    const propsKey = (props.errors || [])
      .map(error => error.field || NON_FIELD_ERROR)
      .sort()
      .join();
    const stateKey = (state.errors || [])
      .map(error => error.field || NON_FIELD_ERROR)
      .sort()
      .join();
    if (propsKey !== stateKey) {
      const errors = removeDuplicatedErrors([
        ...(state.errors || []),
        ...(props.errors || []),
      ]);
      return {
        errors,
      };
    }
    return null;
  }

  ref: React.RefObject<HTMLFormElement> = React.createRef();

  constructor(props: FormProps<Values>) {
    super(props);
    const errors = props.errors || [];
    const data = props.data;
    this.state = {
      data,
      errors,
    };
  }

  componentDidUpdate(prevProps: FormProps<Values>) {
    if (
      JSON.stringify(prevProps.errors) !== JSON.stringify(this.props.errors)
    ) {
      this.setState({
        errors: this.props.errors || [],
      });
    }
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { onSubmit } = this.props;
    if (onSubmit !== undefined) {
      onSubmit(event, this.state.data);
    }
  };

  handleInputError = (event: any) => {
    const { target: input } = event;

    this.setState(state => {
      const errors = state.errors.filter(error => error.field !== input.name);
      if (!input.validity.valid) {
        errors.push({ message: input.validationMessage, field: input.name });
      }
      return { errors };
    });
  };

  handleFieldChange = (event: any) => {
    const fieldName = event.target.name;
    const { value } = event.target;

    this.setState(state => {
      const data = { ...state.data, [fieldName]: value };
      return { data };
    });
  };

  renderWrappedChildren = (children: React.ReactNode) => {
    // Traverse through all children
    return React.Children.map(children, (child: React.ReactElement<any>) => {
      // This is support for non-node elements (eg. pure text), they have no props
      if (!child || !child.props) {
        return child;
      }

      // If current component has additional children, traverse through them as well
      if (child.props.children) {
        return React.cloneElement(child, {
          children: this.renderWrappedChildren(child.props.children),
        });
      }
      if (child.type === TextField || child.type === NumberFormat) {
        const defaultValue = (this.state.data as any)[child.props.name];
        const groupedErrors = groupErrorsByFields(this.state.errors);
        const errors = groupedErrors[child.props.name] || [];

        return React.cloneElement(child, {
          defaultValue,
          errors,
          onBlur: (event: any) => {
            this.handleInputError(event);

            if (child.props.onBlur) {
              child.props.onBlur(event);
            }
          },
          onChange: (event: any) => {
            this.handleFieldChange(event);

            this.handleInputError(event);

            if (child.props.onChange) {
              child.props.onChange(event);
            }
          },
          onInvalid: (event: any) => {
            if (child.props.onInvalid) {
              child.props.onInvalid(event);
            }
            this.handleInputError(event);
            event.preventDefault();
          },
        });
      } else if (child.type === SelectField || child.type === Select) {
        let defaultValue;
        if (
          child.props.name === "country" &&
          (this.state.data as any)[child.props.name]
        ) {
          defaultValue = {
            label: (this.state.data as any)[child.props.name].country,
            value: (this.state.data as any)[child.props.name].code,
          };
        } else {
          defaultValue = (this.state.data as any)[child.props.name];
        }

        return React.cloneElement(child, {
          defaultValue,

          onChange: (value: string) => {
            this.setState(state => {
              const data = { ...state.data, [child.props.name]: value };
              return { data };
            });
          },
        });
      } else if (child.props.type === "checkbox") {
        const defaultValue =
          (this.state.data as any)[child.props.name] || false;
        return React.cloneElement(child, {
          defaultValue,

          onChange: () => {
            this.setState(state => {
              const data = {
                ...state.data,
                [child.props.name]: !(state.data as any)[child.props.name],
              };
              return { data };
            });
          },
        });
      }
      return child;
    });
  };

  render = () => {
    const { children, formRef, className, ...otherProps } = this.props;
    const { errors } = this.state;
    const nonFieldErrors = groupErrorsByFields(errors)[NON_FIELD_ERROR];

    return (
      <form
        ref={formRef}
        {...otherProps}
        onSubmit={this.handleSubmit}
        className={className}
      >
        {nonFieldErrors ? (
          <span className="form-error">
            {nonFieldErrors.map(error => error.message).join(" ")}
          </span>
        ) : null}
        {this.renderWrappedChildren(children)}
      </form>
    );
  };
}

export default Form;
