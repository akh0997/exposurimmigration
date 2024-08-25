import { useCallback, useState } from "react";
import { FirebaseService } from "../../services/firebase.service";
import { MediaService } from "../../services/media.service";

const mediaService = new MediaService();
const firebaseService = new FirebaseService();
const UploadFile = ({
  allowedType,
  setUrl,
  onUploadSuccess,
  label,
}: {
  allowedType?: string[];
  setUrl?: Function;
  onUploadSuccess: Function;
  label?: string;
}) => {
  const [fileUploading, setFileUploading] = useState(false);
  const onFileSelction = useCallback(
    async (file?: File | null) => {
      if (file && !fileUploading) {
        try {
          const res = await firebaseService.uploadFile(file);
          debugger;
          console.log(res, "--askhdjgjk");
        } catch (error) {
          console.log(error);
          setFileUploading(false);
        }
      }
    },
    [fileUploading, setFileUploading, setFileUploading]
  );
  return (
    <>
      <div>
        <div className="form-label">{label}</div>
        <input
          className="form-control"
          type="file"
          accept={allowedType ? allowedType.join(",") : ""}
          id={"image_file_input"}
          onDrop={(e) => e.preventDefault()}
          onChange={(e) => onFileSelction(e?.target?.files?.[0])}
        />
      </div>
    </>
  );
};
export default UploadFile;
