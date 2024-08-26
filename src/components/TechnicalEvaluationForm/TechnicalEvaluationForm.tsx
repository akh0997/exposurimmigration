import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  CONSULTANT_OPTIONS,
  COUNTRY_CODES,
} from "../../constants/technicalEvaluation.constant";
import { FirebaseService } from "../../services/firebase.service";
import { technicalEvaluationFormSchema } from "../../validation/technicalEvaluationForm.schema";
import AddressDetailsForm from "../AddressDetailsForm/AddressDetailsForm";
import Button from "../Button/Button";
import DropDown from "../DropDown/DropDown";
import EducationalDetailsForm from "../EducationalDetailsForm/EducationalDetailsForm";
import ExperienceDetailsForm from "../ExperienceDetailsForm/ExperienceDetailsForm";
import FamilyDetailsForm from "../FamilyDetailsForm/FamilyDetailsForm";
import PersonalDetailsForm from "../PersonalDetailsForm/PersonalDetailsForm";
import UploadDocumentsForm from "../UploadDocumentsForm/UploadDocumentsForm";
const fireBaseService = new FirebaseService();
const TechnicalEvaluationForm = () => {
  const methods = useForm<{
    [x: string]: any;
  }>({
    resolver: yupResolver(technicalEvaluationFormSchema),
    mode: "onChange",
    defaultValues: {
      personalDetails: {
        countryCode: COUNTRY_CODES.find((el) => el.countryCode === "IN"),
      },
    },
  });

  const [loading, setLoading] = useState(false);
  const [continueClicked, setContinueClicked] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    try {
      if (!methods.watch("confirm")) {
        setContinueClicked(true);
        return;
      }
      setLoading(true);
      const res = await fireBaseService.addRecord("evaluationForm", data);
      toast.success(`Form Submitted Successfully!!`);
      methods.reset();
      setContinueClicked(false);
      navigate("/success");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid p-4 bg-light">
      <div className="mt-1">
        <h1>Technical Evaluation Form</h1>

        <div className="container-fluid text-start">
          <h2>Consider all of your Immigration options</h2>
          <p>
            Our Unique Visa Assessment system evaluates your eligibility across
            all of them. Fill out an Evaluation Form today... We'll get back to
            you in less than 3 working days!
          </p>
        </div>
      </div>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="container-fluid text-start mt-4">
          <h4>Choose Your Evaluation Form</h4>
          <div className="m-2">
            <input
              type="radio"
              value="a"
              id="radio1"
              {...methods.register("evaluationFormType")}
            />
            <label className="ms-2"  htmlFor="radio1">
              General Immigration (This form is for professionals and workers.)
            </label>
          </div>
          <div className="m-2">
            <input
              type="radio"
              id="radio2"
              value="b"
              {...methods.register("evaluationFormType")}
            />
            <label className="ms-2"  htmlFor="radio2">
              Business Immigration (This form is for individuals with management
              experience, or for business owners, having a high net worth.)
            </label>
          </div>
          <div className="m-2">
            <input
              type="radio"
              id="radio3"
              value="c"
              {...methods.register("evaluationFormType")}
            />
            <label className="ms-2" htmlFor="radio3">
              Family Sponsorship (This form is for sponsorship of a
              Spouse/Common-Law Partner and/or Dependent Children.)
            </label>
          </div>
          {methods.formState.errors?.evaluationFormType && (
            <span className={`text-danger`}>
              {(methods.formState.errors?.evaluationFormType
                ?.message as string) || ""}
            </span>
          )}
        </div>
        <div className="container-fluid text-start mt-3 mb-4">
          <h4>Consultant Details</h4>
          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6">
            <DropDown
              options={CONSULTANT_OPTIONS}
              label=""
              controlName="consultant"
              control={methods.control}
              errorMessage={
                (methods.formState.errors?.consultant?.message as string) || ""
              }
            ></DropDown>
          </div>
        </div>
        <FormProvider {...methods}>
          <PersonalDetailsForm></PersonalDetailsForm>
          <AddressDetailsForm></AddressDetailsForm>
          <FamilyDetailsForm></FamilyDetailsForm>
          <EducationalDetailsForm></EducationalDetailsForm>
          <ExperienceDetailsForm></ExperienceDetailsForm>
          <UploadDocumentsForm></UploadDocumentsForm>
        </FormProvider>
        <div className="mt-4">
          <h4>Consider all of your Immigration options.</h4>
          <p>
            The personal information you provide to the Exposure Immigration
            Firm is secure and is collected with the sole purpose of assessing
            your potential for immigration to the specified country under the
            current immigration selection criteria. We will respond to you only
            in regard to your Immigration evaluation.
          </p>
        </div>
        <div className="form-check text-start fs-5">
          <input
            className="form-check-input"
            type="checkbox"
            id="confirm_checkbox"
            {...methods.register("confirm")}
          />
          <label
            className="form-check-label fw-bold "
            htmlFor="confirm_checkbox"
          >
            I hereby confirm agree that all the information provided by me is
            correct and accepts all the terms and conditions.
          </label>
          {!methods.watch("confirm") && continueClicked && (
            <span className="text-danger">
              Please tick the box if you want to proceed.
            </span>
          )}
        </div>
        <div className="my-5">
          <Button
            type="submit"
            label="Continue"
            disabled={loading}
            buttonClass="btn btn-primary"
            loading={loading}
          />
        </div>
      </form>
    </div>
  );
};
export default TechnicalEvaluationForm;
