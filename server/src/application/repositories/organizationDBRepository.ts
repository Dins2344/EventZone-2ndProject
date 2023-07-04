import { OrganizationRepositoryMongoDB} from "../../frameworks/database/mongoDB/repositories/organizationRepository";
import { CreateOrganization } from "../../types/userInterface";
import { BasicFormInterface,MediaFormInterface } from "../../types/organizerInterface";
export const organizationDbRepository = (repository:ReturnType<OrganizationRepositoryMongoDB>)=>{
  
    const addOrganization = async(orgData:CreateOrganization)=>{
        const data = await repository.addOrganization(orgData)
        return data
    }

    const getAllEventCategories =async ()=>{
        const data = await repository.getAllEventCategories()
        return data
    }

    const getUsersOrganizations = async(id:string)=>{
        const data = await repository.getUsersOrganizations(id)
        return data
    }

    const addBasicEventInfo = async (data:BasicFormInterface)=>{
        const res = await repository.addBasicEventInfo(data)
        return res
    }

    const addMediaEventInfo = async(data:MediaFormInterface,media:Express.Multer.File[])=>{
        const res = await repository.addMediaEventInfo(data,media)
        return res
    }

    return {
        addOrganization,
        getAllEventCategories,
        getUsersOrganizations,
        addBasicEventInfo,
        addMediaEventInfo
    }
}

export type OrganizationDBInterface = typeof organizationDbRepository