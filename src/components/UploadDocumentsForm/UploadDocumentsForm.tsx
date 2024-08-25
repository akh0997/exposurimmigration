import { ACCEPPTED_DOC_TYPE } from "../../constants/technicalEvaluation.constant";
import UploadFile from "../UploadFile/UploadFile";

const UploadDocumentsForm = () => {
  const handleUploadSuccess = (key: string) => {};
  return (
    <div className="container-fluid text-start mt-4">
      <h4>Upload Documents</h4>
      <div className="row mb-3">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <UploadFile
            allowedType={ACCEPPTED_DOC_TYPE}
            onUploadSuccess={handleUploadSuccess}
            label="Updated Resume"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <UploadFile
            allowedType={ACCEPPTED_DOC_TYPE}
            onUploadSuccess={handleUploadSuccess}
            label="Highest Qualification Document"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <UploadFile
            allowedType={ACCEPPTED_DOC_TYPE}
            onUploadSuccess={handleUploadSuccess}
            label="Identity Proof"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <UploadFile
            allowedType={ACCEPPTED_DOC_TYPE}
            onUploadSuccess={handleUploadSuccess}
            label="Passport"
          />
        </div>
      </div>
    </div>
  );
};
export default UploadDocumentsForm;
