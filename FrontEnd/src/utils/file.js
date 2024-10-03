import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import storage from "../config/firebase";
// Nhập đối tượng storage từ file cấu hình Firebase của bạn

const upFile = async (file) => {
  const storageRef = ref(storage, file.name); // Tạo 1 tham chiếu đến vị trí mà file sẽ được lưu trữ
  console.log(storageRef);
  const res = await uploadBytes(storageRef, file); // Tải file lên Firebase Storage và lưu kết quả vào biến res
  console.log(res);
  const downloadURL = await getDownloadURL(res.ref); // Lấy URL tải xuống của file vừa tải lên
  return downloadURL; // Trả về URL tải xuống
};

export default upFile;
