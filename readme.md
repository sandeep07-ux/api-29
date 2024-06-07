## Architecture
## Ecommerce project

1. Review and Rating
2. Offers and coupouns
3. Logistic

## CRUD Operation
-> Methods
C = Create -> Post method
R = Read -> Read Method
U = Update -> Put/Patch Method
D = Delete -> Delete Method

## Auth and Authentication
-> Register
  -> Data Entry -> FORM (React View)
    -> Submit
      -> BE / api Call

-> Login
  -> Login View (FORM Login, React)
    -> Data Entry (Form action, react)
      -> API Call (BE Call)
        -> Post method
        

-> Create 
  -> post -> /user -> body data -> resgister body

-> Read
  -> get -> /user -> List all users 
    -> filter
  -> get -> /user/:id -> get details of a user
-> Update 
  -> put/patch -> /user/:id -> update
  request
-> Delete 
  -> delete -> /user/:id -> delete operation
  