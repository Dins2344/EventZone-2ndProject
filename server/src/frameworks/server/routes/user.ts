import express from "express";
import organizationController from "../../../adapters/controllers/user_side/organization";
import userController from "../../../adapters/controllers/user_side/user";
import { organizationDbRepository } from "../../../application/repositories/organizationDBRepository";
import { organizationRepositoryMongoDB } from "../../database/mongoDB/repositories/organizationRepository";
import { userDbRepository } from "../../../application/repositories/userDBRepository";
import { userRepositoryMongoDB } from "../../database/mongoDB/repositories/userRepositoryMongoDB";
const userRouter = () => {
  const router = express.Router();
  const orgController = organizationController(
    organizationDbRepository,
    organizationRepositoryMongoDB,
    userDbRepository,
    userRepositoryMongoDB,
  );
  const controller = userController(
    userDbRepository,
    userRepositoryMongoDB,
  )

  router.post("/register-organization", orgController.registerOrganization);
  router.get('/get-user-details/:id',controller.getUserByEmail)

  return router;
};

export default userRouter;
