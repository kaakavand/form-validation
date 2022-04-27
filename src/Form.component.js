import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
    email: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string("Enter your password")
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
});

const WithMaterialUI = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="body">
            <form onSubmit={formik.handleSubmit} autoComplete={'off'}>
                <TextField
                    sx={{ width: "100%", marginBottom: "20px" }}
                    id="email"
                    name="email"
                    label="ایمیل"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    // helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    sx={{ width: "100%", marginBottom: "20px" }}
                    id="outlined-basic"
                    label="نام خانوادگی"
                    variant="outlined"
                    name="lastName"
                />
                <TextField
                    sx={{ width: "100%", marginBottom: "50px" }}
                    id="outlined-basic"
                    label="رمز عبور"
                    variant="outlined"
                    type={"password"}
                    name={"password"}
                />

                <Button
                    sx={{ width: "100%" }}
                    variant="contained"
                    type={"submit"}
                >
                    تایید
                </Button>
            </form>
        </div>
    );
};

export default WithMaterialUI;
