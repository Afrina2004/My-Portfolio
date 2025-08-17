import { FaNodeJs } from "react-icons/fa";
import { SiMongoose } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import Navbar from "../Navbar/Navbar";
import { SiTypescript } from "react-icons/si";

const BackendDetails = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto py-10 px-4">
        <div className="card border-2 p-6 rounded-lg shadow-lg">
          {/* Tech Stack Icons */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-3xl" />
              <p className="mt-2 text-sm">Node.js</p>
            </div>
             <div className="flex flex-col items-center">
              <SiTypescript className="text-3xl" />
              <p className="mt-2 text-sm">TypeScript</p>
            </div>
            <div className="flex flex-col items-center">
              <SiMongoose className="text-3xl" />
              <p className="mt-2 text-sm">Mongoose</p>
            </div>
            <div className="flex flex-col items-center">
              <DiMongodb className="text-3xl" />
              <p className="mt-2 text-sm">MongoDB</p>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">
              Project Name: 🚴‍♂️ Bicycle Store Management System
            </h2>

            <section>
              <h3 className="text-lg font-semibold">Overview:</h3>
              <p>
               The Bicycle Store Management System is a modern, feature-rich web application designed to manage the create,get, delete,update,Calculate Revenue from Orders, and orders of a bicycle store. Built with TypeScript, Express.js,and MongoDB to provide a scalable and reliable backend with full CRUD functionality.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Features:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Full CRUD operations: create,get, delete,update,Calculate Revenue from Orders, and order . Validate product details (e.g., positive prices,positive quantity, validation error etc ). Support for different types of bikes (Mountain, Road, City, etc.).
                </li>
                <li>
                  Inventory logic :  When an order is placed, reduce the quantity in the product model. If the inventory quantity goes to zero, set inStock to false. Handle insufficient stock cases by returning an appropriate error message. 
                </li>
                <li>
                   Data Integrity :  Prevent invalid data (e.g., negative prices or quantities sold exceeding stock). Enforce consistency across product and order models.
                </li>
                <li>
                  Revenue calculation using MongoDB Aggregation.
                </li>
                <li>
                  Data validation (e.g., positive prices, sufficient stock).
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Tech Stack:</h3>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Backend:</strong> Node.js, Express.js, TypeScript
                </li>
                <li>
                  <strong>Database:</strong> MongoDB, Mongoose
                </li>
                <li>
                  <strong>Validation:</strong> Zod, TypeScript typings
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Setup Instructions:</h3>
              <ol className="list-decimal list-inside space-y-1">
                <li>Clone the repository</li>
                <li>Install dependencies: `npm install`</li>
                <li>
                  Create a `.env` file with:
                  <ul className="list-disc list-inside ml-4">
                    <li>PORT=5000</li>
                    <li>NODE_ENV=development</li>
                    <li>DATABASE_URL=</li>
                    <li>BCRYPT_SALT_ROUNDS=</li>
                  </ul>
                </li>
                <li>Run: `npm run start:dev`</li>
                <li>Visit: `http://localhost:5000`</li>
              </ol>
            </section>

            <section>
              <h3 className="text-lg font-semibold">API Endpoints:</h3>
              <ul className="list-disc list-inside">
                <li>POST /api/products</li>
                <li>GET /api/products</li>
                <li>GET /api/products/:id</li>
                <li>PUT /api/products/:id</li>
                <li>DELETE /api/products/:id</li>
                <li>POST /api/orders</li>
                <li>GET /api/orders/revenue</li>
              </ul>
            </section>

           

            {/* Action Buttons */}
           <div className="flex flex-col  gap-4">
              <button
                onClick={() =>
                  window.open("https://assignment-2-one-smoky.vercel.app/", "_blank")
                }
                className="btn btn-outline w-full"
              >
                🌐 Live Demo
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/Afrina2004/Assignment2-Bi-Cycle-Store",
                    "_blank"
                  )
                }
                className="btn btn-outline w-full"
              >
               🔗 GitHub Repository
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackendDetails;
