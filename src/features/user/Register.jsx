"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { registerSchema } from "../../components/schema/index";

export default function Register() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="flex items-center w-full h-screen my-auto bg-gray-100">
      <Card className="max-w-sm mx-auto my-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center">
            Create an account
          </CardTitle>
          <CardDescription>
            Let&apos;s get started. Fill in the details below to create your
            account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, errors, touched }) => (
              <Form>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="name"
                      component="p"
                      className="text-sm text-red-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-sm text-red-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-sm text-red-500"
                    />
                    <p className="text-sm text-slate-400">
                      Minimum 8 characters
                    </p>
                  </div>
                  <Button type="submit" className="w-full">
                    Register
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </CardContent>

        <p className="m-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </Card>
    </div>
  );
}
