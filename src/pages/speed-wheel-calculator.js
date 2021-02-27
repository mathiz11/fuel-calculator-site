import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Formik, Form, Field, ErrorMessage } from "formik"

function speedWheelCalculator() {
  return (
    <Layout title="Calculateur de vitesse de roue">
      <SEO title="Calculateur de vitesse de roue" />
      <Formik
        initialValues={{ n: 0, z1: 0, z2: 0, z3: 0, z4: 0, d: 0 }}
        validate={values => {
          const errors = {}

          if (!values.email) {
            errors.email = "Required"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address"
          }

          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          const { n, z1, z2, z3, z4, d } = values
          const res =
            n * (z1 / z2) * (z3 / z4) * (d - 20) * Math.PI * (60 / 1000000)
          console.log(res)
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))

            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="number" name="n" />
            <Field type="number" name="z1" />
            <Field type="number" name="z2" />
            <Field type="number" name="z3" />
            <Field type="number" name="z4" />
            <Field type="number" name="d" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Layout>
  )
}

export default speedWheelCalculator
