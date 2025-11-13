import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../AddContact/addcontact.scss'
import {v4 as uuidv4} from 'uuid'

export default function AddContact({addNewContact}) {
  const initialValues = {
    id: uuidv4(),
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    avatar: '',
    gender: '',
    status: '',
    adress: {
      street: '',
      city: '',
      zipCode: '',
      country: ''
    },
    favorite: false
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('First Name is required')
      .min(2, 'First Name must be at least 2 characters')
      .max(12, 'First Name must be at most 12 characters'),
    lastName: Yup.string()
      .required('Last Name is required')
      .min(2, 'Last Name must be at least 2 characters')
      .max(24, 'Last Name must be at most 24 characters'),
    phone: Yup.string()
      .required('Phone is required')
      .min(5, 'Phone must be at least 5 characters')
      .max(10, 'Phone must be at most 10 characters'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    // avatar: Yup.string()
    //   .url('Invalid URL format')
    //   .required('Avatar URL is required'),
    gender: Yup.string()
      .oneOf(['male', 'female'], 'Invalid gender')
      .required('Gender is required'),
    status: Yup.string()
      .oneOf(['active', 'inactive', 'banned'], 'Invalid status')
      .required('Status is required'),
    favorite: Yup.boolean()
  });

  const handleSubmit = (values) => {
    addNewContact(values);
    console.log('New Contact Added:', values);
    Navigate('/')
  };

  return (
    <div className="container">
      <div className="modal-content addPage rounded shadow p-4">
        <div className="modal-header">
          <h2 className="text-center w-100">Add new contact</h2>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="d-flex flex-column gap-2">
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" className="form-control" />
              <ErrorMessage name="firstName" component="div" className="text-danger" />

              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" className="form-control" />
              <ErrorMessage name="lastName" component="div" className="text-danger" />

              <label htmlFor="phone">Phone</label>
              <Field name="phone" className="form-control" />
              <ErrorMessage name="phone" component="div" className="text-danger" />

              <label htmlFor="email">Email</label>
              <Field name="email" type="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />

              {/* <label htmlFor="avatar">Avatar (URL)</label>
              <Field name="avatar" type="url" className="form-control" />
              <ErrorMessage name="avatar" component="div" className="text-danger" /> */}

              <label htmlFor="gender">Gender</label>
              <Field as="select" name="gender" className="form-select">
                <option value="">—</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </Field>
              <ErrorMessage name="gender" component="div" className="text-danger" />

              <label htmlFor="status">Status</label>
              <Field as="select" name="status" className="form-select">
                <option value="">—</option>
                <option value="active">Work</option>
                <option value="inactive">Family</option>
                <option value="banned">Friends</option>
              </Field>
              <ErrorMessage name="status" component="div" className="text-danger" />

              <label htmlFor="adress.street">Street</label>
              <Field name="adress.street" className="form-control" />
              <ErrorMessage name="adress.street" component="div" className="text-danger" />

              <label htmlFor="adress.city">City</label>
              <Field name="adress.city" className="form-control" />
              <ErrorMessage name="adress.city" component="div" className="text-danger" />

              <label htmlFor="adress.zipCode">Zip Code</label>
              <Field name="adress.zipCode" className="form-control" />
              <ErrorMessage name="adress.zipCode" component="div" className="text-danger" />

              <label htmlFor="adress.country">Country</label>
              <Field name="adress.country" className="form-control" />
              <ErrorMessage name="adress.country" component="div" className="text-danger" />

              <div className="form-check">
                <Field type="checkbox" name="favorite" id="favorite" className="form-check-input" />
                <label htmlFor="favorite" className="form-check-label">Favorite</label>
              </div>

              <button type="submit" className="btn btn-warning btn-sm ms-1" disabled={isSubmitting}>
                Add
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
