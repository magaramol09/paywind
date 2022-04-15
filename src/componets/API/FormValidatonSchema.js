import * as yup from "yup"
const validationSchema = yup.object().shape({

    fristName: yup.string().required() ,

    lastName: yup.string().required(),
    phoneNumber: yup.string().required(),
    emailId: yup.string().required(),
    message: yup.string().required(),
    address: yup.string().required(),


})

export default validationSchema;