import * as Yup from "yup";
import { Formik } from "formik";
import { Loader2 } from "lucide-react";

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const FormFormik = () => {
  return (
    <div className="h-screen grid place-content-center">
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={formSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 4000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                className="border border-gray-300 rounded shadow focus-visible:outline-none"
                type="text"
                name="name"
                placeholder="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && (
                <p className="text-red-400">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                className="border border-gray-300 rounded shadow focus-visible:outline-none"
                type="email"
                name="email"
                placeholder="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <p className="text-red-400">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                className="border border-gray-300 rounded shadow focus-visible:outline-none"
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && (
                <p className="text-red-400">{errors.password}</p>
              )}
            </div>
            <button
              className="border border-black px-3 py-1 flex items-center justify-center"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting && <Loader2 className="animate-spin" />} Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormFormik;
