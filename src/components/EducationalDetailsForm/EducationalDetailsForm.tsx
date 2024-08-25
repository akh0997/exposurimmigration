import { useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import {
  HIGHEST_QUALIFICATION_OPTION,
  QUALIFICATION_TYPE_OPTION,
} from "../../constants/technicalEvaluation.constant";
import { InputType } from "../../enums/Input.enum";
import Button from "../Button/Button";
import DropDown from "../DropDown/DropDown";
import Input from "../Input/Input";

const EducationalDetailsForm = () => {
  const {
    formState: { errors, isValid },
    register,
    control,
    handleSubmit,
    getValues,
    watch,
    setValue,
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: `educationalDetails.otherCourses`,
    control,
  });
  useEffect(() => {
    append({
      course: "",
      courseName: "",
      qualificationType: "",
      passingYear: "",
    });
  }, []);
  return (
    <div className="container-fluid text-start mt-4">
      <div>
        <h4>Educational Details</h4>
        <p>Enter your educationals details</p>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <DropDown
            options={HIGHEST_QUALIFICATION_OPTION}
            label="Highest Qualification"
            controlName="educationalDetails.highestQualification"
            control={control}
            errorMessage={
              ((errors?.educationalDetails as any)?.highestQualification
                ?.message as string) || ""
            }
          ></DropDown>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Input
            type={InputType.Text}
            label="Course name"
            controlName="educationalDetails.courseName"
            register={register}
            errorMessage={
              ((errors?.educationalDetails as any)?.courseName
                ?.message as string) || ""
            }
          />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <DropDown
            options={QUALIFICATION_TYPE_OPTION}
            label="Qualification Type"
            controlName="educationalDetails.qualificationType"
            control={control}
            errorMessage={
              ((errors?.educationalDetails as any)?.qualificationType
                ?.message as string) || ""
            }
          ></DropDown>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Input
            type={InputType.Numeric}
            control={control}
            label="Passing Year"
            controlName="educationalDetails.passingYear"
            register={register}
            errorMessage={
              ((errors?.educationalDetails as any)?.passingYear
                ?.message as string) || ""
            }
          />
        </div>
        <div className="row mb-3 mt-3">
          <div className="d-flex justify-content-between">
            <h5>Other Courses</h5>
            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6">
              <Button
                buttonClass="btn btn-primary w-100"
                label="+ Add More"
                onClick={() =>
                  append({
                    course: "",
                    courseName: "",
                    qualificationType: "",
                    passingYear: "",
                  })
                }
              ></Button>
            </div>
          </div>
        </div>

        {fields.map((item, index) => (
          <div key={item.id} className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <Input
                type={InputType.Text}
                label="Other course"
                controlName={`educationalDetails.otherCourses.${index}.course`}
                register={register}
                errorMessage={
                  ((errors?.educationalDetails as any)?.otherCourses?.[index]
                    ?.course.message as string) || ""
                }
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <Input
                type={InputType.Text}
                label="Course Name"
                controlName={`educationalDetails.otherCourses.${index}.courseName`}
                register={register}
                errorMessage={
                  ((errors?.educationalDetails as any)?.otherCourses?.[index]
                    .courseName.message as string) || ""
                }
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <DropDown
                options={QUALIFICATION_TYPE_OPTION}
                label="Qualification Type"
                controlName={`educationalDetails.otherCourses.${index}.qualificationType`}
                control={control}
                errorMessage={
                  ((errors?.educationalDetails as any)?.otherCourses?.[index]
                    .qualificationType.message as string) || ""
                }
              ></DropDown>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <Input
                type={InputType.Numeric}
                control={control}
                label="Passing Year"
                controlName={`educationalDetails.otherCourses.${index}.passingYear`}
                register={register}
                errorMessage={
                  ((errors?.educationalDetails as any)?.otherCourses?.[index]
                    ?.passingYear?.message as string) || ""
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalDetailsForm;
