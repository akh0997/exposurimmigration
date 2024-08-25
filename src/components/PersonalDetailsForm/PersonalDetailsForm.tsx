import { useFormContext } from "react-hook-form";
import { COUNTRY_CODE, YES_NO_OPTION } from "../../constants/technicalEvaluation.constant";
import DropDown from "../DropDown/DropDown";
import Input from "../Input/Input";
import style from "./PersonalDetailsForm.module.scss";
const PersonalDetailsForm = () => {
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
    <div className="container-fluid text-start mt-2">
      <div>
        <h4>Personal Details</h4>
      </div>
      <div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Input
              type="text"
              label="First Name"
              controlName="personalDetails.firstName"
              register={register}
              errorMessage={
                ((errors?.personalDetails as any)?.firstName
                  ?.message as string) || ""
              }
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Input
              type="text"
              label="Last Name"
              controlName="personalDetails.lastName"
              register={register}
              errorMessage={
                ((errors?.personalDetails as any)?.lastName
                  ?.message as string) || ""
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Input
              type="Date"
              label="Date Of Birth"
              controlName="personalDetails.dateOfBirth"
              register={register}
              errorMessage={
                ((errors?.personalDetails as any)?.dateOfBirth
                  ?.message as string) || ""
              }
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="row">
              <label className="form-label">Contact</label>
              <div className="col-lg-3 col-md-4 col-sm-2 pe-0 rounded-start">
                <DropDown
                  options={COUNTRY_CODE}
                  label=""
                  controlName="familyDetails.relativeInCountry"
                  control={control}
                  dropDownClass={`${style.no_border_radius_right}`}
                  errorMessage={
                    ((errors?.familyDetails as any)?.relativeInCountry
                      ?.message as string) || ""
                  }
                ></DropDown>
              </div>
              <div className="col-lg-9 col-md-8 col-sm-10 ps-0 rounded-end">
                <Input
                  type="text"
                  label=""
                  controlName="personalDetails.phoneNo"
                  customClass={`${style.no_border_radius_left}`}
                  register={register}
                  errorMessage={
                    ((errors?.personalDetails as any)?.phoneNo
                      ?.message as string) || ""
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Input
              type="text"
              label="Father Name"
              controlName="personalDetails.fatherName"
              register={register}
              errorMessage={
                ((errors?.personalDetails as any)?.fatherName
                  ?.message as string) || ""
              }
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Input
              type="text"
              label="Email"
              controlName="personalDetails.email"
              register={register}
              errorMessage={
                ((errors?.personalDetails as any)?.email?.message as string) ||
                ""
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Input
              type="text"
              label="Total Experience"
              controlName="personalDetails.totalExperience"
              register={register}
              errorMessage={
                ((errors?.personalDetails as any)?.totalExperience
                  ?.message as string) || ""
              }
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Input
              type="text"
              label="Current Ctc"
              controlName="personalDetails.currentCtc"
              register={register}
              errorMessage={
                ((errors?.personalDetails as any)?.currentCtc
                  ?.message as string) || ""
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Input
              type="text"
              label="Amount In Words"
              controlName="personalDetails.amountInWords"
              register={register}
              errorMessage={
                ((errors?.personalDetails as any)?.amountInWords
                  ?.message as string) || ""
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalDetailsForm;
