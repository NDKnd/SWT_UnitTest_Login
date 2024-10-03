import { Button, Upload, message } from "antd";
import { useState } from "react";
import upFile from "./file";
import { PlusOutlined } from "@ant-design/icons";
import storage from "../config/firebase";

function TestUpFile() {
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleUpload = async (fileList) => {
    if (fileList.length === 0) {
      message.error("No file selected!");
      return;
    }
    const upLoadList = Promise.all(
      fileList.map(async (file) => {
        const res = await upFile(file);
        return res;
      })
    );
    console.log(upLoadList);
  };

  const uploadBtn = (
    <Button type="dashed" onClick={() => handleUpload(fileList)}>
      {uploading ? "Uploading....." : "Upload"}
      <PlusOutlined />
    </Button>
  );
  return (
    <div style={{ textAlign: "center", margin: "10px auto" }}>
      <Upload action="" onChange={handleChange} multiple fileList={fileList}>
        {uploadBtn}
      </Upload>
    </div>
  );
}

export default TestUpFile;
