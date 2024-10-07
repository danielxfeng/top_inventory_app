import { Router } from "express";
import {
  getDeparts,
  addDepartForm,
  addDepart,
  updateDepartForm,
  updateDepart,
  deleteDepart,
} from "../controllers/departController.mjs";
//import { getNationalities, addNationality, updateNationality, deleteNationality } from "../controllers/nationalityController.mjs";
//import { getStudents, addStudent, updateStudent, deleteStudent } from "../controllers/studentController.mjs";

const appRouter = Router();

appRouter.get("/", (req, res) => {
  res.render("index", { title: "Fancy Inventory App" });
});

appRouter.get("/depart", getDeparts);
appRouter.get("/depart/create", addDepartForm);
appRouter.post("/depart/create", addDepart);
appRouter.get("/depart/update/:id", updateDepartForm);
appRouter.put("/depart/update/:id", updateDepart);
appRouter.delete("/depart/delete/:id", deleteDepart);

/**
appRouter.get("/nationalities", getNationalities);
appRouter.post("/nationalities", addNationality);
appRouter.put("/nationalities/:id", updateNationality);
appRouter.delete("/nationalities/:id", deleteNationality);

appRouter.get("/students", getStudents);
appRouter.post("/students", addStudent);
appRouter.put("/students/:id", updateStudent);
appRouter.delete("/students/:id", deleteStudent);
*/

export default appRouter;
