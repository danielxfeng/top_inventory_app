import { Router } from "express";
//import { getDeparts, addDepart, updateDepart, deleteDepart } from "../controllers/departController.mjs";
//import { getNationalities, addNationality, updateNationality, deleteNationality } from "../controllers/nationalityController.mjs";
//import { getStudents, addStudent, updateStudent, deleteStudent } from "../controllers/studentController.mjs";


const appRouter = Router();

appRouter.get("/", (req, res) => {
  res.render("index", { title: "Fancy Inventory App" });
});

/** 
appRouter.get("/departs", getDeparts);
appRouter.post("/departs", addDepart);
appRouter.put("/departs/:id", updateDepart);
appRouter.delete("/departs/:id", deleteDepart);

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
