import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function Match(property: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'match', // 데코레이터의 이름입니다. 오류 메시지에서 이 이름이 사용됩니다.
      target: object.constructor, // 데코레이터가 적용될 클래스의 생성자입니다.
      propertyName: propertyName, // 데코레이터가 적용될 클래스의 속성 이름입니다.
      options: validationOptions, // 검증 옵션 객체입니다. (예: { message: 'Custom error message' })
      constraints: [property], // 검증 함수에 전달될 추가적인 제약 조건입니다.
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints; // 제약 조건에서 첫 번째 요소를 가져옵니다.
          const object = args.object as any; // 검증 대상 객체입니다.
          return value === object[relatedPropertyName]; // 현재 속성 값과 관련 속성 값을 비교합니다.
        },
        defaultMessage(args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints; // 제약 조건에서 첫 번째 요소를 가져옵니다.
          return `${args.property} must match ${relatedPropertyName}`; // 기본 오류 메시지를 반환합니다.
        },
      },
    });
  };
}
