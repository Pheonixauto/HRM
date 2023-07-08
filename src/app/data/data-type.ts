export interface SignUp {
  name:string;
  password:string;
  email:string;
}

export interface Login {
  password:string;
  email:string;
}

export interface Product {
  id:number;
  name:string;
  price:number;
  category:string;
  image:string;
  color:string;
  description:string;
}
