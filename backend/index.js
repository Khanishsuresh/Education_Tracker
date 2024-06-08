import express from "express";
import morgan from "morgan";
import cors from "cors";
import connect from "./connection.js";
import { Form, Admin, User } from "./schema.js";

const app = express();

app.use(morgan("tiny"));
app.use(cors());

app.use(express.json());

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    throw new Error("Error fetching user by email: " + error.message);
  }
};

export { getUserByEmail };


  app.post('/userreg', async (req, res) => {
  try {
    const { name, password, email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .send("Email already exists. Please use a different email.");
    }
    const user = new User({ name, password, email });
    await user.save();
    res.send("User registered successfully");
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).send("Duplicate key error. Email already exists.");
    } else {
      console.error(err);
      res.status(500).send("Error registering user: " + err.message);
    }
  }
});

app.post("/adminlogin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email, password });
    if (admin) {
      res.json({ message: "Admin logged in successfully", isAdmin: true });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/userlogin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({email,password });

    if (user) {
      const userForm = await Form.findOne({ email });
      if (userForm) {
        res
          .status(200)
          .json({
            message: "User logged in successfully",
            user,
            isRegistered: true,
          });
      } else {
        res
          .status(200)
          .json({
            message: "User logged in successfully",
            user,
            isRegistered: false,
          });
      }
    } else {
      res.status(400).send("Invalid credentials");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.get("/user/formdata", async (req, res) => {
  const { email } = req.query;
  if (!email) {
      return res.status(400).json({ message: "Email parameter is required" });
  }

  try {
      const user = await Form.findOne({ email }).lean();
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
  } catch (error) {
      console.error("Error fetching user data:", error);
      res.status(500).json({ message: "Server error" });
  }
});



app.post("/form", async (req, res) => {
  try {
    let leetcodeCount = 0;
    let codechefRating = 0;
    const {
      name,
      rollno,
      email,
      branch,
      year,
      cgpa,
      attendance,
      leetcode,
      codechef,
      codeforce,
      skills,
      expertise,
      certificates,
      projects,
      awards,
      papers,
    } = req.body;

    // Log the incoming request body
    console.log("Received form data:", req.body);

    if (
      !name ||
      !email ||
      !rollno ||
      !branch ||
      !year ||
      !cgpa ||
      !attendance
    ) {
      return res.status(400).send("Missing required fields");
    }

    const formData = new Form({
      name,
      rollno,
      email,
      branch,
      year,
      cgpa,
      attendance,
      leetcode,
      codechef,
      leetcodeCount,
      codechefRating,
      codeforce,
      skills,
      expertise,
      certificates,
      projects,
      awards,
      papers,
    });

    console.log(formData);
    await formData.save();

    res.send("Data saved successfully");
  } catch (err) {
    console.error("Error saving form data:", err);

    if (err.code === 11000) {
      res.status(400).send("Duplicate email");
    } else {
      res.status(500).send("Internal server error");
    }
  }
});

app.get("/custom", async (req, res) => {
  try {
    console.log(req.query);
    const query = req.query.query;
    console.log(query);
    const resquery = await JSON.parse(query);
    const formData = await Form.find(resquery);


    if (formData.length > 0) {
      res.json(formData);
    } else {
      res.status(404).json({ error: "No data found for the provided query" });
    }
  } catch (error) {
    console.error("Error retrieving form data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/form", async (req, res) => {
  try {
    const rollno = req.query.rollno;

    if (!rollno) {
      return res.status(400).json({ error: "Roll number is required" });
    }

    const formData = await form.findOne({ rollno });
    if (formData) {
      res.json(formData);
    } else {
      res.status(404).json({ error: "Data not found" });
    }
  } catch (error) {
    console.error("Error retrieving form data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.put("/formupdate", async (req, res) => {
  try {
    // const rollno = req.query.rollno;
    const { leetcodeCount, codechefRating, rollno } = req.body;
    console.log(req.body);
    if (!rollno) {
      return res.status(400).json({ error: "Roll number is required" });
    }

    if (!leetcodeCount && !codechefRating) {
      return res
        .status(400)
        .json({
          error:
            "At least one field (leetcodeCount or codechefRating) is required for update",
        });
    }
    console.log(rollno);

    const formData = await form.findOne({ rollno });

    if (!formData) {
      return res.status(404).json({ error: "Data not found" });
    }

    if (leetcodeCount) {
      formData.leetcodeCount = leetcodeCount;
    }

    if (codechefRating) {
      formData.codechefRating = codechefRating;
    }

    await formData.save();

    res.json({ message: "Data updated successfully", formData });
  } catch (error) {
    console.error("Error updating form data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.put("/form", async (req, res) => {
  try {
    const rollno = req.query.rollno;
    const updateData = req.body;

    if (!rollno) {
      return res.status(400).json({ error: "Roll number is required" });
    }

    const updatedForm = await form.findOneAndUpdate({ rollno }, updateData, {
      new: true,
    });

    if (updatedForm) {
      res.json(updatedForm);
    } else {
      res.status(404).json({ error: "Data not found" });
    }
  } catch (error) {
    console.error("Error updating form data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const port = 8001;
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http:localhost:${port}`);
      });
    } catch (error) {
      console.log("Cannot connected to the server");
    }
  })
  .catch((err) => {
    console.log(err);
  });