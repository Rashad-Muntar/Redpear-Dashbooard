import axios from "axios"
import dotenv from 'dotenv';
dotenv.config();

const baseUrl: string = process.env.API_ENDPOINT || ""

export const getPoliciesService = async () => {
    try {
      const policies = await axios({
        method: 'get',
        url: `${baseUrl}/policies`
      });
      return policies;
    } catch (error: any) {
      return error.message;
    }
};

export const getPolicyService = async (id:string) => {
    try {
      const policy = await axios({
        method: 'get',
        url: `${baseUrl}/policy`,
        data:{
            id: id
        }
      });
      return policy;
    } catch (error: any) {
      return error.message;
    }
};