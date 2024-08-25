import { useFormContext } from "react-hook-form";
import {
  HIGHEST_QUALIFICATION_OPTION,
  MARRIAGE_STATUS_OPTION,
  QUALIFICATION_TYPE_OPTION,
  YES_NO_OPTION,
} from "../../constants/technicalEvaluation.constant";
import DropDown from "../DropDown/DropDown";
import Input from "../Input/Input";

const FamilyDetailsForm = () => {
  const {
    formState: { errors, isValid },
    register,
    control,
    handleSubmit,
    getValues,
    watch,
    setValue,
  } = useFormContext();

  return (
    <div className="container-fluid text-start mt-4">
      <div>
        <h4>Family Details</h4>
      </div>
      <div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6">
          <DropDown
            options={MARRIAGE_STATUS_OPTION}
            label="Marraige Status"
            controlName="familyDetails.marraigeStatus"
            control={control}
            errorMessage={
              ((errors?.familyDetails as any)?.marraigeStatus
                ?.message as string) || ""
            }
          ></DropDown>
        </div>
        <div className="mt-3">
          <div>
            <h5>Spouse Qualification</h5>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              {" "}
              <DropDown
                options={HIGHEST_QUALIFICATION_OPTION}
                label="Highest Qualification"
                controlName="familyDetails.spouseQualification.highestQualification"
                control={control}
                errorMessage={
                  ((errors?.familyDetails as any)?.spouseQualification
                    ?.highestQualification?.message as string) || ""
                }
              ></DropDown>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              {" "}
              <Input
                type="text"
                label="Course Name"
                controlName="familyDetails.spouseQualification.courseName"
                register={register}
                errorMessage={
                  ((errors?.familyDetails as any)?.spouseQualification
                    ?.courseName?.message as string) || ""
                }
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              {" "}
              <DropDown
                options={QUALIFICATION_TYPE_OPTION}
                label="Qualification Type"
                controlName="familyDetails.spouseQualification.qualificationType"
                control={control}
                errorMessage={
                  ((errors?.familyDetails as any)?.spouseQualification
                    ?.qualificationType?.message as string) || ""
                }
              ></DropDown>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <Input
                type="text"
                label="Passing Year"
                controlName="familyDetails.spouseQualification.passingYear"
                register={register}
                errorMessage={
                  ((errors?.familyDetails as any)?.spouseQualification
                    ?.passingYear?.message as string) || ""
                }
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            {" "}
            <Input
              type="text"
              label="Number Of Kids"
              controlName="familyDetails.numberOfKids"
              register={register}
              errorMessage={
                ((errors?.familyDetails as any)?.numberOfKids
                  ?.message as string) || ""
              }
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            {" "}
            <DropDown
              options={YES_NO_OPTION}
              label="Relative in country"
              controlName="familyDetails.relativeInCountry"
              control={control}
              errorMessage={
                ((errors?.familyDetails as any)?.relativeInCountry
                  ?.message as string) || ""
              }
            ></DropDown>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Input
              type="text"
              label="Relation"
              controlName="familyDetails.relation"
              register={register}
              errorMessage={
                ((errors?.familyDetails as any)?.relation?.message as string) ||
                ""
              }
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            {" "}
            <Input
              type="text"
              label="RelativeEvaluation"
              controlName="familyDetails.relativeEvaluation"
              register={register}
              errorMessage={
                ((errors?.familyDetails as any)?.relativeEvaluation
                  ?.message as string) || ""
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FamilyDetailsForm;
