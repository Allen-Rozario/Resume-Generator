import { BASE_URL, POST } from "./indexService";

export const resumedetailsservice = async (forms) => {
  let sendData = {
    fullname: forms.fullname,

    email: forms.email,

    phonenumber: forms.mobile,
  };

  try {
    let { data } = await POST(BASE_URL + "post-resume", sendData);

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
