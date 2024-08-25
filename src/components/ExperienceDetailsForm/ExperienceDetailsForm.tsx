import { useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import Button from "../Button/Button";
import Input from "../Input/Input";

const ExperienceDetailsForm = () => {
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
    name: `experienceDetails.previousExperience`,
    control,
  });
  useEffect(() => {
    append({
      designation: "",
      year: "",
      months: "",
    });
  }, [append]);
  return (
    <div className="container-fluid text-start mt-4">
      <div>
        <h4>Experience Details</h4>
        <p>Enter Experience details</p>
      </div>
      <div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <Input
              type="text"
              label="Current Designation"
              controlName="experienceDetails.currentDesignation"
              register={register}
              errorMessage={
                ((errors?.experienceDetails as any)?.currentDesignation
                  ?.message as string) || ""
              }
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <Input
              type="text"
              label="Current Year"
              controlName="experienceDetails.currentYear"
              register={register}
              errorMessage={
                ((errors?.experienceDetails as any)?.currentYear
                  ?.message as string) || ""
              }
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <Input
              type="text"
              label="Current Months"
              controlName="experienceDetails.currentMonths"
              register={register}
              errorMessage={
                ((errors?.experienceDetails as any)?.currentMonths
                  ?.message as string) || ""
              }
            />
          </div>
        </div>

        <div>
          <div className="row">
            <div className="d-flex justify-content-between">
              <h5>Enter Previous Experience details(if any)</h5>
              <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6">
                <Button
                  buttonClass="btn btn-primary w-100"
                  label="+ Add More"
                  onClick={() =>
                    append({
                      designation: "",
                      year: "",
                      months: "",
                    })
                  }
                ></Button>
              </div>
            </div>
          </div>

          {fields.map((item, index) => (
            <div className="row" key={item.id}>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <Input
                  type="text"
                  label="Designation"
                  controlName={`experienceDetails.previousExperience.${index}.designation`}
                  register={register}
                  errorMessage={
                    ((errors?.experienceDetails as any)?.previousExperience?.[
                      index
                    ]?.designation?.message as string) || ""
                  }
                />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <Input
                  type="text"
                  label="Year"
                  controlName={`experienceDetails.previousExperience.${index}.year`}
                  register={register}
                  errorMessage={
                    ((errors?.experienceDetails as any)?.previousExperience?.[
                      index
                    ]?.year?.message as string) || ""
                  }
                />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <Input
                  type="text"
                  label="Months"
                  controlName={`experienceDetails.previousExperience.${index}.months`}
                  register={register}
                  errorMessage={
                    ((errors?.experienceDetails as any)?.previousExperience?.[
                      index
                    ]?.months?.message as string) || ""
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ExperienceDetailsForm;
