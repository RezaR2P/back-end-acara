import { Request, Response } from "express";
import * as Yup from "yup";

type TRegister = {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const registerSchema = Yup.object().shape({
  fullname: Yup.string().required("Full name is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), undefined], "Passwords must match").required("Confirm password is required")
});

export default {
  register: async (req: Request, res: Response) => {
    try {
      await registerSchema.validate(req.body);
      const { fullname, username, email, password, confirmPassword }: TRegister = req.body;
      
      res.status(201).json({ 
        message: "User registered successfully", 
        user: { fullname, username, email } 
      });
    } catch (err: any) {
      res.status(400).json({ error: err.errors || err.message });
    }
  }
};
