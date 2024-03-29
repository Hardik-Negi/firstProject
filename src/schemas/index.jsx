import * as yup from "yup";
const passwordRules= "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$"
export const basicSchemas=yup.object({
password:yup.string().min(6).matches(passwordRules,{message: "please create a stronger password"}).required("password required"),
num: yup.string().matches(/^\d{10}$/, "Phone Number must be 10 digits").required(),
fname : yup.string().required("First Name is required"),
lname: yup.string().required("Last Name is required "),
email: yup.string().email("please enter a valid email").required("Email is required" ),
address : yup.string().required("User Address is required"),
town: yup.string().required("Town name is required"),
city : yup.string().required("city is required"),
nokadd: yup.string().required("required"),
nokPh: yup.string().required("required"),

}); 