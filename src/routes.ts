import { Request, Response } from "express";

import CreateCourseService from "./CreateCourseService";

export function createCourse(req: Request, res: Response): void {
  CreateCourseService.execute({ name: "NodeJS", educator: "Dani" });
}
