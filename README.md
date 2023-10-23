MERN 6 Project

Hello 👋🏽 in this project you will find the information to create a server in Express, but this time with data models related to each other.

The project, has a vehicle theme, you will see information about Owners, Bikes and Cars. The MongoDB data model is an object, with the following keys:

For Bikes and Cars:

const document = {
    _id: "id_of_mongoDB",
    name: "vehicle_name",
    race: "vehicle_breed",
    colour: "vehicle_coat_color",
    age: "vehicle_age",
    responsiblePerson: "person_responsible_for_the_vehicle", responsiblePerson: "person_responsible_for_the_vehicle"
}

For Owners:

const document = {
    _id: "id_of_mongoDB",
    name: "Owner_name",
    surname: "Owner_surname",
    avatar: "Owner_image",
    age: "Owner_age",
    vehicles: {
        bikes: ["bikes_in_charge"],
        cars: ["cars_to_be_cared_for"]
    }
}

Endpoints:

https://localhost:4001/api/v1

MODEL CARS:

https://localhost:4001/api/v1/cars
HTTP Request Endpoint Description
POST /reload To register default data.
GET / All registered cars.
GET /:id Car by its id.
POST / Create a new Car.
PUT /:id Edit a car.
DELETE /:id Delete a car.

MODEL BIKES:

https://localhost:4001/api/v1/bikes
HTTP Request Endpoint Description
POST /reload To register default data.
GET / All registered bikes.
GET /:id Bike by its id.
POST / Create a new bike.
PUT /:id Edit a bike.
DELETE /:id Delete a bike.

MODEL OWNERS:

https://localhost:4001/api/v1/owners
HTTP Request Endpoint Description
POST /reload To register default data.
GET / All registered owners.
GET /:id Owner by id.
POST / Create a new owner.
PUT /:id Edit a owner.
PUT /pet/:id Add vehicles to owner*.
DELETE /:id Delete a owner.

Caption:

*By using this endpoint to add one or more vehicles, you ensure that they are not duplicated in the keeper model. This provides a more efficient way to register and edit the model.
RELATED DATA MODELS:

https://localhost:4001/api/v1/relatedmodels
HTTP Request Endpoint Description
GET /owner All owners with vehicles* GET /owner/:id:vehicle
GET /owner/:id owner by id and vehicles** GET /car/:id Owner by id and vehicles** GET /car/:id
GET /car/:id Car by id with owner*** GET /car/:id Car by id and owner*** GET /car/:id
GET /bike/:id Bike for id with owner*** GET /bike/:id Bike for id with owner
PUT /:id Delete a vehicle by its id*+

Caption:

*All owners will appear, with all the details of the vehicles in their own.

**Allows to search for the keeper by id and shows all the information related to the vehice under his own.

***This endpoint provides details of the pet along with partial information about its handler, including first name, surname, avatar and age. Details of other vehilces in the owner's care will not be available in this response.

*+When you assign vehicles to their owners, duplicates are not allowed. Therefore, at this endpoint, you have the possibility to remove a specific vehicle from the keeper by providing its id.
