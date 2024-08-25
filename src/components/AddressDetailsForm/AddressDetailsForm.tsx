import { useFormContext } from "react-hook-form";
import { InputType } from "../../enums/Input.enum";
import Input from "../Input/Input";

const AddressDetailsForm = () => {
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
    <>
      <div className="container-fluid text-start mt-2">
        <div>
          <h4>Address Details</h4>
        </div>
        <div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Input
                type={InputType.Text}
                label="Address Line 1"
                controlName="addressDetails.addressLine1"
                register={register}
                errorMessage={
                  ((errors?.addressDetails as any)?.addressLine1
                    ?.message as string) || ""
                }
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Input
                type={InputType.Text}
                label="Address Line 2"
                controlName="addressDetails.addressLine2"
                register={register}
                errorMessage={
                  ((errors?.addressDetails as any)?.addressLine2
                    ?.message as string) || ""
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Input
                type={InputType.Text}
                label="Nationality"
                controlName="addressDetails.nationality"
                register={register}
                errorMessage={
                  ((errors?.addressDetails as any)?.nationality
                    ?.message as string) || ""
                }
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Input
                type={InputType.Text}
                label="City"
                controlName="addressDetails.city"
                register={register}
                errorMessage={
                  ((errors?.addressDetails as any)?.city?.message as string) ||
                  ""
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Input
                type={InputType.Text}
                label="state"
                controlName="addressDetails.state"
                register={register}
                errorMessage={
                  ((errors?.addressDetails as any)?.state?.message as string) ||
                  ""
                }
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Input
                type={InputType.Text}
                label="Pincode"
                controlName="addressDetails.pincode"
                register={register}
                errorMessage={
                  ((errors?.addressDetails as any)?.pincode
                    ?.message as string) || ""
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Input
                type={InputType.Text}
                label="Country"
                controlName="addressDetails.country"
                register={register}
                errorMessage={
                  ((errors?.addressDetails as any)?.country
                    ?.message as string) || ""
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddressDetailsForm;
