import * as yup from "yup";
import { ObjectSchema } from "yup";

export const technicalEvaluationFormSchema: ObjectSchema<{ [x: string]: any }> =
  yup.object({
    evaluationFormType: yup.string().required("Please select an option"),
    consultant: yup.string().required("Please select Consultant"),
    personalDetails: yup.object({
      firstName: yup.string().required("Please enter First name"),
      lastName: yup.string().required("Please enter Last name"),
      dateOfBirth: yup.string().required("Please enter Date of Birth"),
      phoneNo: yup.string().required("Please enter Contact Number"),
      countryCode: yup.object().required("Please select Country Code"),
      fatherName: yup.string().required("Please enter Father Name"),
      email: yup
        .string()
        .required("Please fill the email")
        .email("Enter a valid email address"),
      totalExperience: yup.string().required("Please enter Total Experience"),
      currentCtc: yup.string().required("Please enter Current CTC"),
      amountInWords: yup.string().required("Please enter Amount In Words"),
    }),
    addressDetails: yup.object({
      addressLine1: yup.string().required("Please enter Address Line1"),
      addressLine2: yup.string(),
      nationality: yup.string().required("Please enter Nationality"),
      city: yup.string().required("Please enter City"),
      state: yup.string().required("Please enter State"),
      pincode: yup.string().required("Please enter Pincode"),
      country: yup.string().required("Please enter Country Name"),
    }),
    familyDetails: yup.object({
      marraigeStatus: yup.string().required("Please enter Marraige Status"),
      spouseQualification: yup.object({
        highestQualification: yup.string(),
        courseName: yup.string(),
        qualificationType: yup.string(),
        passingYear: yup.string(),
      }),
      numberOfKids: yup.string(),
      relativeInCountry: yup
        .string()
        .required("Please enter Relative In Country"),
      relation: yup.string(),
      relativeEvaluation: yup.string(),
    }),
    educationalDetails: yup.object({
      highestQualification: yup
        .string()
        .required("Please enter Highest Qualification"),
      courseName: yup.string().required("Please enter Course Name"),
      qualificationType: yup
        .string()
        .required("Please enter Qualification Type"),
      passingYear: yup.string().required("Please enter Passing Year"),
      otherCourses: yup.array().of(
        yup.object({
          course: yup.string(),
          courseName: yup.string(),
          qualificationType: yup.string(),
          passingYear: yup.string(),
        })
      ),
    }),
    experienceDetails: yup.object({
      currentDesignation: yup
        .string()
        .required("Please enter Current Designation"),
      currentYear: yup.string().required("Please enter Year"),
      currentMonths: yup.string().required("Please enter Months"),
      previousExperience: yup.array().of(
        yup.object({
          designation: yup.string(),
          year: yup.string(),
          months: yup.string(),
        })
      ),
    }),

    documents: yup.object({
      resume: yup.string(),
      highestQualificationDocument: yup.string(),
      identityProof: yup.string(),
      passport: yup.string(),
    }),
    confirm: yup.boolean().required('lashfkasgdkhjf'),
  });
