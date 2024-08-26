import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { COUNTRY_CODES } from "../../constants/technicalEvaluation.constant";
import { InputType } from "../../enums/Input.enum";
import CountryDropDown from "../CountryDropDown/CountryDropDown";
import Input from "../Input/Input";
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
              type={InputType.Text}
              required={true}
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
              type={InputType.Text}
              required={true}
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
              type={InputType.Date}
              required={true}
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
              <label className="form-label">
                Contact <span className="text-danger">*</span>
              </label>

              <div className="col-lg-4 col-md-4 col-sm-4">
                <CountryDropDown
                  onOptionClick={setValue}
                  value={watch("personalDetails.countryCode")}
                />
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8">
                <Input
                  type={InputType.Numeric}
                  control={control}
                  label=""
                  controlName="personalDetails.phoneNo"
                  customClass={``}
                  register={register}
                />
              </div>
              {(errors?.personalDetails as any)?.countryCode &&
                !(errors?.personalDetails as any)?.phoneNo && (
                  <span className="text-danger">
                    {
                      (errors?.personalDetails as any)?.countryCode
                        ?.message as string
                    }
                  </span>
                )}
              {(errors?.personalDetails as any)?.phoneNo && (
                <span className="text-danger">
                  {(errors?.personalDetails as any)?.phoneNo?.message as string}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Input
              type={InputType.Text}
              required={true}
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
              type={InputType.Text}
              required={true}
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
              type={InputType.Numeric}
              required={true}
              control={control}
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
              type={InputType.Numeric}
              required={true}
              label="Current CTC"
              controlName="personalDetails.currentCtc"
              register={register}
              control={control}
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
              type={InputType.Text}
              required={true}
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
