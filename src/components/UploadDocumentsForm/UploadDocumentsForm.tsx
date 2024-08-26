import { useFormContext } from "react-hook-form";
import { ACCEPPTED_DOC_TYPE } from "../../constants/technicalEvaluation.constant";
import UploadFile from "../UploadFile/UploadFile";

const UploadDocumentsForm = () => {
  const handleUploadSuccess = (key: string) => {};
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
      <h4>Upload Documents</h4>
      <div className="row mb-3">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <UploadFile
            allowedType={ACCEPPTED_DOC_TYPE}
            onUploadSuccess={handleUploadSuccess}
            label="Updated Resume"
            keyPrefix={"Resume"}
            setUrl={(url: string) => setValue("documents.resume", url)}
          />
          <span className="text-danger">
            (Files accepted: .pdf, .doc/docx, .jpg, .png)
          </span>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <UploadFile
            allowedType={ACCEPPTED_DOC_TYPE}
            onUploadSuccess={handleUploadSuccess}
            label="Highest Qualification Document"
            keyPrefix="Highest_Qualification"
            setUrl={(url: string) =>
              setValue("documents.highestQualificationDocument", url)
            }
          />
          <span className="text-danger">
            (Files accepted: .pdf, .doc/docx, .jpg, .png)
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <UploadFile
            allowedType={ACCEPPTED_DOC_TYPE}
            onUploadSuccess={handleUploadSuccess}
            label="Identity Proof"
            keyPrefix="Identity_Proof"
            setUrl={(url: string) => setValue("documents.identityProof", url)}
          />
          <span className="text-danger fw-bold">
            (Pan Card, Aadhar Card, Voter ID)
          </span>
          <br />
          <span className="text-danger">
            (Files accepted: .pdf, .doc/docx, .jpg, .png)
          </span>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <UploadFile
            allowedType={ACCEPPTED_DOC_TYPE}
            onUploadSuccess={handleUploadSuccess}
            label="Passport"
            keyPrefix="Passport"
            setUrl={(url: string) => setValue("documents.passport", url)}
          />
          <span className="text-danger">
            (Files accepted: .pdf, .doc/docx, .jpg, .png)
          </span>
        </div>
      </div>
    </div>
  );
};
export default UploadDocumentsForm;
