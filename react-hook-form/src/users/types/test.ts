type Laptop = {
  type: "laptop";
  screenSize: number;
  grapics: string;
};

type HeadPhone = {
  type: "HeadPhone";
  ANC: boolean;
};

type Product = {
  name: string;
  price: number;
} & (Laptop | HeadPhone);

const latopXYZ: Product = {
  type: "laptop",
  name: "XYZ",
  price: 200,
  screenSize: 100,
  grapics: "1050",
};

const airPodsPro: Product = {
  type: "HeadPhone",
  name: "airPodsPro2022",
  price: 100,
  ANC: true,
};
