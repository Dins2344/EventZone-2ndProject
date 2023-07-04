import api from "../itercepters/intercepter";
import {
  BasicFormInterface,
  MediaFormDataToSend,
} from "../../types/organizerInterface";
import { AxiosRequestConfig } from "axios";
import { PublishFormDataInterface } from "../../types/organizerInterface";

export const getUsersOrganizations = async () => {
  const data = await api.get(
    "http://localhost:4000/organization/get-user-organizations"
  );
  return data;
};

export const getEventCategories = async () => {
  const data = await api.get(
    "http://localhost:4000/organization/get-all-event-categories"
  );
  return data;
};

export const addBasicEventInfo = async (data: BasicFormInterface) => {
  const res = await api.post(
    "http://localhost:4000/organization/add-event-basic-info",
    data
  );
  return res;
};

export const addMediaEventInfo = async (data: FormData) => {
  console.log(data);
  try {
    const res = await api.post(
      "http://localhost:4000/organization/add-event-media-info",
      data
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const addPublishEventInfo = async (data: PublishFormDataInterface) => {
  try {
    const res = await api.post(
      "http://localhost:4000/organization/add-event-publish-info",
      data
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getEventDetails = async(id:string)=>{
    try{
        const res = await api.get(`http://localhost:4000/organization/get-event-details/${id}`)
        return res
    }catch(error){
        console.log(error)
    }
}