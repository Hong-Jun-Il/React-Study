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

const arr = [1, "hello"];

type El<T> = T extends (infer E)[] ? E : never;

const el: El<typeof arr> = "hi";

type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

function fn(num: number) {
  return num.toString();
}

const a: ReturnType<typeof fn> = "Hello"; // ReturnType<T> 이용
console.log(a); //Hello

declare function f1(): {
  a: string;
  b: number;
};

type T0 = ReturnType<() => string>; // string
type T1 = ReturnType<(s: string) => void>; // void
type T2 = ReturnType<typeof f1>; // {a : string , b : number}
