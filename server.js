const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const PORT = 5000;
const app = express();

app.use("/uploads", express.static(path.join(__dirname, "public", "uploads")));

const projectsFilePath = path.join(__dirname, "src", "data", "projects.json");
const productsFilePath = path.join(__dirname, "src", "data", "products.json");

app.use(
  cors({
    origin: "http://localhost:3000", // Remplace par le domaine de ton client
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
  })
);

// Augmente la limite de taille pour le body-parser
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "5mb" }));
app.use(express.static("public"));

// Route pour ajouter un projet
app.post("/add-project", (req, res) => {
  const newProject = req.body;

  fs.readFile(projectsFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).send("Server error: Could not read file");
    }

    let projects;
    try {
      projects = JSON.parse(data);
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      return res.status(500).send("Server error: Could not parse JSON");
    }

    projects.push(newProject);

    fs.writeFile(
      projectsFilePath,
      JSON.stringify(projects, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return res.status(500).send("Server error: Could not write file");
        }

        res.status(200).send("Project added");
      }
    );
  });
});

// Route pour obtenir les projets
app.get("/projects", (req, res) => {
  fs.readFile(projectsFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).send("Server error: Could not read file");
    }

    res.setHeader("Content-Type", "application/json");
    res.send(data);
  });
});

// Route pour ajouter un produit
app.post("/add-product", (req, res) => {
  const newProduct = req.body;

  fs.readFile(productsFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).send("Server error: Could not read file");
    }

    let products;
    try {
      products = JSON.parse(data);
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      return res.status(500).send("Server error: Could not parse JSON");
    }

    products.push(newProduct);

    fs.writeFile(
      productsFilePath,
      JSON.stringify(products, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return res.status(500).send("Server error: Could not write file");
        }

        res.status(200).send("Product added");
      }
    );
  });
});

// Route pour obtenir les produits
app.get("/products", (req, res) => {
  fs.readFile(productsFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).send("Server error: Could not read file");
    }

    res.setHeader("Content-Type", "application/json");
    res.send(data);
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
