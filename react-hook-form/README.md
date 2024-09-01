# 사용한 라이브러리

> ## 1. @hookform/resolvers
>
> ## 2. zod
>
> ## 3. react-hook-form

# 제네릭의 extends

> * extends는 상속을 위한 키워드
> * 상속의 다른 의미는 하위 타입으로 지정한다는 뜻임
> * 제네릭이 어떠한 타입의 하위 타입으로 지정된다는 것은 제네릭의 타입 자체를 제한하겠다는 뜻
> ``` ts
> type Example = {
>      [name: string]: any;
> };
> type RecordExample = Record<string, any>; //Record는 위의 Example과 완벽하게 같은 역할을 한다
> type GenericExample<T extends RecordExample> = {
>   //이 경우 GenericExample의 제네릭 변수 T는 반드시 key와 value 쌍을 가지는 타입으로 제한됨
>   title: T[];
>   price: number;
> };
> ```

# 고급 타입 
> ## 1. Pick
> * Pick이란 어떠한 타입에서 타입을 추출하여 새로운 하위의 타입을 만들어 낸다는 것
> ``` ts
> type Test = {
>   name: string;
>   price: number;
>   isTest: boolean
> };
> type TestPick = Pick<Test, "name" | "price">; //이 경우 TestPick 타입은 name과 price만을 가지는 타입으로 됨
> ```
> ## 2. Discriminated Union
> * 구조적 분기
> * 타입의 분기를 나눈다는 뜻
> ``` ts
> type Desktop = {
>   productType: "desktop";
>   graphics: string;
> };
> 
> type HeadPhone = {
>   productType: "headPhone";      
>   headSize: number;
> };
> 
> type Product = {
>   name: string;
>   price: number   
> } & (Desktop | HeadPhone);
> 
> const MyComputer: Product = {
>   productType: "desktop"; //type의 분기를 desktop으로 주었으니 Desktop type의 type과 Product type 외의 type에 접근 불가
>   grapics: "4060";
>   name: "내 컴퓨터";
>   price: 200;
> };
> 
> const MyHeadPhone: Product = {
>   productType: "headPhone"; //마찬가지로 type의 분기를 headPhone으로 주었으니 다른 분기의 type 요소에 접근 불가
>   name: "내 헤드폰";
>   price: 100;
> };
> ```
